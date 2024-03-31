import React from 'react'
import Container from './Container'
import { footerInfo } from '../info/footer'

const Footer = () => {
  return (
    <div className='bg-gray-100 w-full min-h-[350px] flex justify-center items-center mt-5'>
      <Container>
        <div className='flex flex-col gap-5'>
          <div className='flex xs:flex-col md:flex-row xs:gap-8 md:gap-10 justify-between w-full'>
            <div className='flex flex-col gap-5'>
              <h1 className='font-bold text-[24px] text-gray-800'>SHOP.CO</h1>
              <p className='xs:max-w-[350px] md:max-w-[250px] text-[14px] text-gray-500'>
                And it's even better if the technology is available at technomart at a low price and with a big discount!
              </p>
              <div className='flex justify-start gap-3 items-center'>
                <img src="../public/twitter.svg" alt="" />
                <img src="../public/facebook.svg" alt="" />
                <img src="../public/instagram.svg" alt="" />
                <img src="../public/github.svg" alt="" />
              </div>
            </div>
            <div className='flex gap-5 md:w-[70%] justify-between md:flex-nowrap xs:flex-wrap tracking-tight'>
              <div>
                <ul className='flex flex-col gap-3'>
                  <li className='text-[14px] text-gray-900 font-[500]'>COMPANY</li>
                  {
                    footerInfo.company.map(item => (
                      <li key={item} className='text-[14px] text-gray-500'>{item}</li>
                    ))
                  }
                </ul>
              </div>
              <div>
                <ul className='flex flex-col gap-3'>
                  <li className='text-[14px] text-gray-900 font-[500]'>HELP</li>
                  {
                    footerInfo.help.map(item => (
                      <li key={item} className='text-[14px] text-gray-500'>{item}</li>
                    ))
                  }
                </ul>
              </div>
              <div>
                <ul className='flex flex-col gap-3'>
                  <li className='text-[14px] text-gray-900 font-[500]'>FAQ</li>
                  {
                    footerInfo.faq.map(item => (
                      <li key={item} className='text-[14px] text-gray-500'>{item}</li>
                    ))
                  }
                </ul>
              </div>
              <div>
                <ul className='flex flex-col gap-3'>
                  <li className='text-[14px] text-gray-900 font-[500]'>RECOURCES</li>
                  {
                    footerInfo.resources.map(item => (
                      <li key={item} className='text-[14px] text-gray-500'>{item}</li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>
          <div className='w-full h-[0.3px] bg-gray-300'></div>
          <div className='flex md:justify-between gap-2 md:flex-row xs:flex-col xs:justify-center'>
            <div>
              <p className='text-[14px] text-gray-500'>Shop.co © 2000-2021, All rights reserved</p>
            </div>
            <div className='flex items-center gap-1 justify-center xs:flex-wrap sm:flex-nowrap'>
              <img src="../public/visa.svg" alt="" />
              <img src="../public/masterCard.svg" alt="" />
              <img src="../public/payPal.svg" alt="" />
              <img src="../public/pay1.svg" alt="" />
              <img src="../public/pay2.svg" alt="" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer