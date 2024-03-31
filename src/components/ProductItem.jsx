import { AiFillHeart } from "react-icons/ai";
import { BiHeart } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { FaStarHalf } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { selectFavouriteProduct } from "../reducers/favourite.slice";
import { Link } from "react-router-dom";
import { selectOneProduct } from "../reducers/product.slice";


const ProductItem = ({ item }) => {
  const { favourite } = useSelector(state => state.favourite)
  const dispatch = useDispatch()
  const [like, setLike] = useState(favourite.find(favItem => favItem.id == item.id) ? true : false)

  const halfStar = item.rating.toString().split('.')[1] == 5 ? true : false
  let starCount = Math.trunc(item.rating)
  let arr = []
  while (starCount != 0) {
    arr = [...arr, starCount]
    starCount--
  }

  function setLikeProduct(item) {
    setLike(!like)
    dispatch(selectFavouriteProduct(item))
  }

  return (
   
      <div className="p-[20px] group-active:scale-95 transition duration-75 border-[1px] border-gray-200 min-h-[420px] relative min-w-[260px] max-w-[350px] rounded-sm shadow-sm">
        <div className="overflow-hidden rounded-sm border p-3 ">
          <img src={item.image[0]} className="w-full h-full min-h-[200px] max-h-[200px] object-contain rounded-sm" alt="" />
          <div onClick={() => setLikeProduct(item)} className="cursor-pointer bg-slate-300 rounded-full hover:bg-slate-200 active:scale-95 absolute top-[5px] right-[5px]">
            {
              like ?
                <AiFillHeart className="text-red-500 m-[5px] text-[20px]" />
                :
                <BiHeart className="text-white m-[5px] text-[20px]" />
            }
          </div>
        </div>
        <Link to={'/product-detail'}>
          <div onClick={() => dispatch(selectOneProduct(item))} className="group px-5 pt-3 flex  flex-col justify-between items-between gap-[10px]  cursor-pointer">
            <div>
              <h4 className="text-[18px] tracking-tight text-gray-800 font-[500]">{item.title.slice(0, 30)}...</h4>
              <div className="flex gap-1">
                {arr.map(item => (
                  <AiFillStar key={item} className="text-[16px] text-[#FFC633]" />
                ))}
                {halfStar ?
                  <FaStarHalf className="text-[16px] text-[#FFC633]" />
                  :
                  ''}
              </div>
            </div>
            <p className="text-[24px] text-gray-800 font-[500]">${item.price}</p>
          </div>
        </Link>
      </div>
    
  )
}

export default ProductItem