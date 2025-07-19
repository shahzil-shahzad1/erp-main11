import React from 'react'

const AnimatedBorder = ({color} : {color: string}) => {
  return (
    <div className={`absolute bottom-0 left-1 w-0 h-[3px] ${color} transition-all duration-300 group-hover:w-[99%]`}></div>
  )
}

export default AnimatedBorder
