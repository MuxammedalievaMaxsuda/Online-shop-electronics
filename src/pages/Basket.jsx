import { AiOutlineArrowRight } from "react-icons/ai"; 
import React from 'react'
import Container from '../components/Container'
import { useDispatch, useSelector } from 'react-redux'
import BasketItem from '../components/BasketItem'

const Basket = () => {

  const dispatch = useDispatch()
  const { basket, countBasket, price } = useSelector(state => state.basket)

  return (
    <>
      {
        basket.length == 0 ?
          <div className='flex justify-center items-center min-h-[70vh]'>
            <div className="flex flex-col gap-[20px] justify-center items-center">
              <img src="https://asaxiy.uz/custom-assets/images/cabinet/basket_no_page.png" className="w-[200px] h-[200px] object-cover" alt="" />
              <h4 className="text-[20px] text-gray-800 font-semibold text-center">There are no items in your cart yet</h4>
            </div>
          </div>
          :
          <Container>
           <div className="flex justify-center items-center">
           <div className='flex xs:flex-col lg:flex-row lg:items-start gap-5 my-[30px]'>
              <div className='xl:p-5 xs:p-3 border max-w-max rounded-lg flex flex-col gap-3 bg-white shadow-sm'>
                {
                  basket.map(item => (
                    <BasketItem item={item} key={item.id} />
                  ))
                }
              </div>
              <div className='flex flex-col gap-5 md:min-w-[400px] max-w-max max-h-max min-h-[400px] rounded-lg border shadow-sm p-5'>
                <h4 className='text-gray-900 text-[28px] font-[600]'>Ordery Summary</h4>
                <div className='flex justify-between items-center'>
                <p className='text-gray-500 text-[18px]'>Subtotal </p> 
                <p className='text-gray-900 text-[18px] font-[600]'>${price}</p>
                </div>
                <div className='flex justify-between items-center'>
                  <p className='text-gray-500 text-[18px]'>Delivery Fee</p>
                  <p className='text-gray-900 text-[18px] font-[600]'>$15</p>
                </div>
                <hr className='my-3'/>
                <div className='flex justify-between items-center'>
                  <p className='text-gray-500 text-[18px]'>Total</p>
                  <p className='text-gray-900 text-[18px] font-[600]'>${price+15}</p>
                </div>
                <div className='flex xs:flex-col xs:gap-5 sm:flex-row sm:justify-between sm:items-center'>
                  <div className='relative'>
                    <input type="text" placeholder='Add promo code' className='pl-[45px] border-none outline-none py-3  rounded-full bg-gray-100 text-[15px] text-gray-600 '/>
                    <img src="../public/promo.svg" className='absolute top-[14px] left-[14px]' alt="" />
                  </div>
                  <button className='bg-black text-white xs:text-[12px] md:text-[15px] py-3 px-10 hover:opacity-90 active:scale-95 transition duration-75 rounded-full'>Apply</button>
                </div>
                <button className='bg-black text-white text-[15px] w-full py-3 px-10 hover:opacity-90 active:scale-95 transition duration-75 rounded-full'>Go to Checkout <AiOutlineArrowRight className="text-[16px] text-white inline"/></button>
              </div>
            </div>
           </div>
          </Container>
      }
    </>
  )
}

export default Basket