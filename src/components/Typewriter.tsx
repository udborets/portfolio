import React, { RefObject } from 'react'

interface TypewriterProps {
  typedRef: RefObject<HTMLSpanElement>;
}
const Typewriter = ({ typedRef }: TypewriterProps) => {
  return (
    <div className="typewriter w-full justify-center">
      <span className="typewriter__text flex text-[2rem] w-max font-bold h-fit" ref={typedRef} />
    </div>
  )
}

export default Typewriter