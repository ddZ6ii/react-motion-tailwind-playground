import { frame, MotionValue, useSpring } from 'motion/react'
import { useEffect, useRef } from 'react'

type UseFollowPointerOptions = {
  clampToParent?: boolean
}

type Bounds = { minX: number; maxX: number; minY: number; maxY: number }

const UNBOUNDED: Bounds = {
  minX: -Infinity,
  maxX: Infinity,
  minY: -Infinity,
  maxY: Infinity,
}

// Spring physics:
// `damping`: How quickly the spring settles (lower values create more bounce)
// stiffness: The strength of the spring (higher values make it more responsive)
// `restDelta`: When to consider the animation complete (smaller values prevent
// "snapping" at the end of the animation, but make the animation continue for longer)
const SPRING_SETTINGS = { damping: 5, stiffness: 100, restDelta: 0.001 }

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(value, max))
}

type PositionResult = {
  x: number
  y: number
  bounds: Bounds | null
}

function computePosition(
  element: HTMLElement,
  { x, y }: { x: MotionValue<number>; y: MotionValue<number> },
  { clientX, clientY }: { clientX: number; clientY: number },
  clampToParent = false,
): PositionResult {
  const rect = element.getBoundingClientRect()
  // getBoundingClientRect includes the current transform, subtract spring
  // values to recover the element's natural (pre-transform) position
  const naturalLeft = rect.left - x.get()
  const naturalTop = rect.top - y.get()

  if (!clampToParent || !element.parentElement) {
    return {
      x: clientX - naturalLeft - rect.width / 2,
      y: clientY - naturalTop - rect.height / 2,
      bounds: null,
    }
  }

  const containerRect = element.parentElement.getBoundingClientRect()
  // Clamp cursor so the shape stays fully inside the container
  const localX = clamp(
    clientX - containerRect.left,
    rect.width / 2,
    containerRect.width - rect.width / 2,
  )
  const localY = clamp(
    clientY - containerRect.top,
    rect.height / 2,
    containerRect.height - rect.height / 2,
  )

  return {
    // Center the shape on cursor (still clamped), accounting for natural offset
    x: localX - (naturalLeft - containerRect.left) - rect.width / 2,
    y: localY - (naturalTop - containerRect.top) - rect.height / 2,
    // Transform-space bounds — used to hard-clamp the rendered value so the
    // spring cannot physically pass through the container walls
    bounds: {
      minX: containerRect.left - naturalLeft,
      maxX: containerRect.right - naturalLeft - rect.width,
      minY: containerRect.top - naturalTop,
      maxY: containerRect.bottom - naturalTop - rect.height,
    },
  }
}

function useFollowPointer(
  ref: React.RefObject<HTMLElement | null>,
  { clampToParent = false }: UseFollowPointerOptions = {},
) {
  const boundsRef = useRef<Bounds>(UNBOUNDED)
  const x = useSpring(0, SPRING_SETTINGS)
  const y = useSpring(0, SPRING_SETTINGS)

  // Track the pointer position and update the spring values
  useEffect(() => {
    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const nodeEl = ref.current
      if (!nodeEl) return
      if (clampToParent && !nodeEl.parentElement) return

      const {
        x: nextX,
        y: nextY,
        bounds,
      } = computePosition(nodeEl, { x, y }, { clientX, clientY }, clampToParent)

      boundsRef.current = bounds ?? UNBOUNDED

      frame.update(() => {
        x.set(nextX)
        y.set(nextY)
      })
    }

    window.addEventListener('pointermove', handlePointerMove)

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
    }
  }, [ref, x, y, clampToParent]) // ref, x and y are stable references (linter false positive exhaustive-deps)

  // Hard-stop the spring at the container walls. Clamping the target alone isn't
  // enough — the spring can still overshoot due to momentum. Intercepting the
  // value change and calling jump() keeps the spring value in bounds so
  // naturalLeft = rect.left - x.get() stays consistent on the next pointermove.
  useEffect(() => {
    const unsubX = x.on('change', (v) => {
      const { minX, maxX } = boundsRef.current
      if (v < minX) x.jump(minX)
      else if (v > maxX) x.jump(maxX)
    })
    const unsubY = y.on('change', (v) => {
      const { minY, maxY } = boundsRef.current
      if (v < minY) y.jump(minY)
      else if (v > maxY) y.jump(maxY)
    })
    return () => {
      unsubX()
      unsubY()
    }
  }, [x, y]) // stable references (linter false positive exhaustive-deps)

  return { x, y }
}

export default useFollowPointer
