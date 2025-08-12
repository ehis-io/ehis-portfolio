'use client'
import { useEffect, useState } from 'react'

export function useCountUp(to: number, duration = 2000) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const fps = 60
    const totalFrames = Math.round((duration / 1000) * fps)
    const increment = to / totalFrames

    let frame = 0
    const counter = setInterval(() => {
      frame++
      start += increment
      if (frame >= totalFrames) {
        clearInterval(counter)
        setCount(to)
      } else {
        setCount(Math.floor(start))
      }
    }, 1000 / fps)

    return () => clearInterval(counter)
  }, [to, duration])

  return count
}
