import { useEffect, useState } from 'react'

type Phase = 'typing' | 'pausing' | 'deleting'

export function useSequentialTyping(
  lines: string[],
  typingSpeed = 60,
  pauseBetweenLines = 1000,
  pauseAfterAll = 1500,
  loop = true
) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([])
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [phase, setPhase] = useState<Phase>('typing')

  useEffect(() => {
    const currentLine = lines[currentLineIndex] ?? ''

    if (phase === 'typing') {
      if (charIndex < currentLine.length) {
        const timeout = setTimeout(() => {
          setDisplayedLines((prev) => {
            const updated = [...prev]
            updated[currentLineIndex] =
              (updated[currentLineIndex] || '') + currentLine[charIndex]
            return updated
          })
          setCharIndex((i) => i + 1)
        }, typingSpeed)
        return () => clearTimeout(timeout)
      } else {
        const pause = setTimeout(() => setPhase('pausing'), pauseBetweenLines)
        return () => clearTimeout(pause)
      }
    }

    if (phase === 'pausing') {
      if (currentLineIndex < lines.length - 1) {
        setCurrentLineIndex((i) => i + 1)
        setCharIndex(0)
        setPhase('typing')
      } else {
        const pause = setTimeout(() => setPhase('deleting'), pauseAfterAll)
        return () => clearTimeout(pause)
      }
    }

    if (phase === 'deleting') {
      if (displayedLines.length === 0) {
        if (loop) {
          setCurrentLineIndex(0)
          setCharIndex(0)
          setPhase('typing')
        }
        return
      }

      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => {
          const updated = [...prev]
          const lastIndex = updated.length - 1
          if (updated[lastIndex].length > 0) {
            updated[lastIndex] = updated[lastIndex].slice(0, -1)
          } else {
            updated.pop()
          }
          return updated
        })
      }, typingSpeed)

      return () => clearTimeout(timeout)
    }
  }, [
    charIndex,
    phase,
    currentLineIndex,
    displayedLines.length,
    lines,
    typingSpeed,
    pauseBetweenLines,
    pauseAfterAll,
    loop,
  ])

  return displayedLines
}
