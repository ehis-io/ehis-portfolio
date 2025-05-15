import { useEffect, useState } from 'react'

export function useLoopingTypingEffect(
  text: string,
  typingSpeed = 30,
  pauseDuration = 2000
): string {
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    let timer: NodeJS.Timeout

    if (!isDeleting && index < text.length) {
      timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index])
        setIndex(index + 1)
      }, typingSpeed)
    } else if (isDeleting && index > 0) {
      timer = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1))
        setIndex(index - 1)
      }, typingSpeed)
    } else if (!isDeleting && index === text.length) {
      // Wait then start deleting
      timer = setTimeout(() => setIsDeleting(true), pauseDuration)
    } else if (isDeleting && index === 0) {
      // Done deleting, start typing again
      timer = setTimeout(() => setIsDeleting(false), pauseDuration)
    }

    return () => clearTimeout(timer)
  }, [index, isDeleting, text, typingSpeed, pauseDuration])

  return displayedText
}
