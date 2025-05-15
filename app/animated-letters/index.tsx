'use client'

import React from 'react'

interface AnimatedLettersProps {
  letterClass: string
  strArray: string[]
  idx: number
}

const AnimatedLetters: React.FC<AnimatedLettersProps> = ({
  letterClass,
  strArray,
  idx,
}) => {
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={`${char}-${i}`} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  )
}

export default AnimatedLetters
