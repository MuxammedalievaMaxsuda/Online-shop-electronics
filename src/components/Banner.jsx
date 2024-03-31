import React from 'react'
import Container from './Container'

const Banner = () => {
  return (
    <div className='bg-gray-100 w-full min-h-[600px] flex justify-center items-center'>
      <Container>
      <div className='flex gap-3 md:justify-center items-center xs:mt-[30px] lg:flex-row xs:flex-col'>
          <div className='flex-[7] flex flex-col gap-10'>
            <div className='flex flex-col gap-5  max-w-[450px]'>
              <h1 className='md:text-[38px] sm:text-[32px] xs:text-[28px] font-[800]'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
              <p className='md:text-[16px] xs:text-[12px] font-[400] text-gray-600'>
                Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
              </p>
              <button className='text-white hover:bg-opacity-90 transition duration-75 active:scale-95 mt-2 xs:w-[150px] xs:h-[35px] md:w-[210px] md:h-[52px] flex justify-center items-center text-[16px] bg-black rounded-[62px]'>Shop Now</button>
            </div>
            <div className='flex xs:gap-4 xs:flex-wrap  md:flex-nowrap md:gap-8 items-center justify-center'>
              <div>  
                <h4 className='md:text-[32px] xs:text-[24px] font-[700]'>200+</h4>
                <p className='text-[12px] text-gray-600'>International Brands</p>
              </div>
              <div className='bg-gray-300 h-[65px] w-[0.4px]'></div>
              <div>
                <h4 className='md:text-[32px]  xs:text-[24px]  font-[700]'>2,000+</h4>
                <p className='text-[12px] text-gray-600'>High-Quality Products</p>
              </div>
              <div className='bg-gray-300 xs:hidden sm:block h-[65px] w-[0.4px]'></div>
              <div>
                <h4 className='md:text-[32px]  xs:text-[24px]  font-[700]'>30,000+</h4>
                <p className='text-[12px] text-gray-600'>Happy Customers</p>
              </div>
            </div>
          </div>
          <div className='flex-[9] flex justify-center items-center'>
            <img src="https://www.pngmart.com/files/6/Home-Appliance-PNG-Image.png" alt="" className='xs:w-[200px] xs:h-[200px] sm:w-[350px] sm:h-[350px] object-cover' />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Banner