import React from 'react'

const contentblock = ({children} : {children: React.ReactNode}) => {
  return (
    <div className='bg-[#F7F8FA] shadow-sm rounded-md overflow-hidden h-full w-full'>{children}</div>
  )
}

export default contentblock