import { AiFillStar } from "react-icons/ai";
import React from 'react'


const ReviewCard = ({ item }) => {
    const arr = [1, 2, 3, 4, 5]
    return (
        <div className='min-w-[300px] max-w-[400px] h-[240px] border rounded-xl flex flex-col gap-[5px] justify-between p-[20px]'>
            <div className="flex flex-col gap-[10px]">
                <div className='flex gap-2 items-center'>
                    {
                        arr.map(item => (
                            <AiFillStar key={item} className="text-[16px] text-[#FFC633]" />
                        ))
                    }
                </div>
                <div className="flex items-center gap-2">
                    <h4 className="text-[18px] text-gray-800 font-[500]">{item.name}</h4>
                    <img src="../public/reviewIcon.svg" alt="" />
                </div>
                <p className="text-[14px] text-gray-500">
                    {item.review}
                </p>
            </div>
            <p className="text-[14px] text-gray-500">{item.date}</p>
        </div>
    )
}

export default ReviewCard