import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import React, { useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { FaStarHalf } from 'react-icons/fa'
import { useDispatch, useSelector } from "react-redux";
import { decrementBasketItem, setBasketItem } from "../reducers/basket.slice";

const ProductDetail = ({ item }) => {

  const dispatch = useDispatch()
  const [mainImage, setMainIMage] = useState(item?.image[0])
  const { countBasketItem } = useSelector(state => state.basket)
  const count = countBasketItem.filter(basketItem => basketItem.id == item.id).length

  const halfStar = item.rating?.toString().split('.')[1] == 5 ? true : false
  let starCount = Math.trunc(item.rating)
  let arr = []
  while (starCount != 0) {
    arr = [...arr, starCount]
    starCount--
  }

console.log(item.image)
  return (

    <div className='flex md:flex-row xs:flex-col gap-2 p-[20px] mt-4 justify-center'>
      <div className=" flex-[1] flex xs:justify-center md:justify-start">
        <div className='flex xs:flex-col-reverse  md:flex-row gap-2'>
          <div className='flex xs:flex-row xs:justify-center md:justify-start md:flex-col gap-2 xs:overflow-x-auto product-detail-scroll2  max-h-[400px]'>
            {
              item.image.map(imageItem=>(
                <>
                  <img onClick={() => setMainIMage(imageItem)} key={Date.now} className='cursor-pointer p-[10px] active:scale-95 transition duration-75 rounded-xl xs:w-[80px] xs:h-[80px] sm:w-[120px] sm:h-[128px] border object-contain' src={imageItem} alt="" />
                  {/* <p>{imageItem.slice(0,8)}</p> */}
                </>
              ))
            }
          </div>
          <div className=''>
            <img className='rounded-xl xs:w-[400px] md:w-[80%] xs:max-h-[300px]  p-[20px] md:h-[80%] min-w-[200px] min-h-[400px] border object-contain' src={mainImage} alt="" />
          </div>
        </div>
      </div>
      <div className='flex-[1] flex flex-col gap-2 justify-between'>
        <div className='flex flex-col gap-3'>
          <h4 className=" xs:text-[24px] lg:text-[28px] tracking-tight text-gray-800 font-[700]">{item?.title}</h4>
          <div className="flex gap-1 items-center">
            {arr.map(item => (
              <AiFillStar key={item} className="text-[16px] text-[#FFC633]" />
            ))}
            {halfStar ?
              <FaStarHalf className="text-[16px] text-[#FFC633]" />
              :
              ''}
            <span className='text-gray-500 text-[14px]'>{item?.rating}/5</span>
          </div>
          <p className="text-[24px] text-gray-800 font-[500]">${item?.price}</p>
          <div className='p-5 border rounded-md'>
            <p className='text-gray-500 text-[14px] h-[100px] overflow-y-auto product-detail-scroll'>{item?.description}</p>
          </div>
        </div>
        <div className='flex gap-5 items-center justify-between'>
          <div className="py-[7px] px-[20px] bg-gray-300 rounded-full flex gap-3 items-center">
            <AiOutlineMinus onClick={() => count > 1 ? dispatch(decrementBasketItem(item)) : ''} className="active:scale-95 transition duration-75 text-[20px] text-gray-800" />
            <span>{count}</span>
            <AiOutlinePlus onClick={() => dispatch(setBasketItem(item))} className="active:scale-95 transition duration-75 text-[20px] text-gray-800" />
          </div>
          <button onClick={() => dispatch(setBasketItem(item))} className='bg-black rounded-full hover:bg-opacity-90 transition duration-75 active:scale-95  text-white py-3 px-5 xs:w-full sm:w-[50%] text-[16px]'>Add to cart</button>
        </div>
      </div>
    </div>

  )
}

export default ProductDetail