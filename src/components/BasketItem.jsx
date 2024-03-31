import { HiTrash } from "react-icons/hi";
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementBasketItem, deleteBasketItem, setBasketItem } from "../reducers/basket.slice";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const BasketItem = ({ item }) => {
    const dispatch = useDispatch()
    const { countBasketItem } = useSelector(state => state.basket)
    const count = countBasketItem.filter(basketItem => basketItem.id == item.id).length

    return (
        <>
            <div className='flex justify-start gap-4 items-center min-h-[180px] p-3 md:w-[480px]'>
                <div className="border p-3 rounded-lg flex items-center">
                    <img src={item.image[0]} className='w-[100px] h-[100px] rounded-lg object-contain' alt="" />
                </div>
                <div className='flex flex-col gap-5'>
                    <div className="flex justify-between">
                        <h4 className='xs:text-[18px] lg:text-[20px] text-gray-900 font-[600] max-w-[250px]'>{item.title}</h4>
                        <HiTrash onClick={() => dispatch(deleteBasketItem(item))} className="hover:opacity-90 active:scale-95 transition duration-75 text-red-500 xs:text-[32px] sm:text-[24px]" />
                    </div>
                    <div className="flex justify-between">
                        <p className='lg:text-[24px] xs:text-[20px] text-gray-900 font-[600]'>${item.price}</p>
                        <div className="md:py-[7px] md:px-[20px] xs:py-[3px] xs:px-[10px] bg-gray-300 rounded-full flex gap-3 items-center">
                            <AiOutlineMinus onClick={() => count > 1 ? dispatch(decrementBasketItem(item)) : ''} className="active:scale-95 transition duration-75 xs:text-[16px] md:text-[20px] text-gray-800" />
                            <span>{count}</span>
                            <AiOutlinePlus onClick={() => dispatch(setBasketItem(item))} className="active:scale-95 transition duration-75 xs:text-[16px] md:text-[20px] text-gray-800" />
                        </div>
                    </div>
                </div>
            </div>
            <hr className="w-full" />
        </>
    )
}

export default BasketItem