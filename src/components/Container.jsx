import React from 'react'

const Container = ({ children }) => {
  return (
    <div className='xs:w-[95%] md:w-[90%] lg:w-[85%] mx-auto'>
      {children}
    </div>
  )
}

export default Container