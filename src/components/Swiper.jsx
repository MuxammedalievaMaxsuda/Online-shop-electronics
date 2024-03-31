import React from 'react'
import ReviewCard from '../components/ReviewCard'
import { reviews } from '../info/review'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

const SwiperComponent = () => {
    const sideScroll = (
        element,
        speed,
        distance,
        step
    ) => {
        let scrollAmount = 0;
        const slideTimer = setInterval(() => {
            element.scrollLeft += step;
            scrollAmount += Math.abs(step);
            if (scrollAmount >= distance) {
                clearInterval(slideTimer);
            }
        }, speed);
    };
    const contentWrapper = React.useRef(null);

    return (
        <div>
            <div className='flex justify-between gap-5 items-center'>
                <h4 className='xs:text-[28px] md:text-[34px] font-[800] text-gray-900 mb-[30px]'>OUR HAPPY CUSTOMERS</h4>
                <div className='flex items-center gap-3'>
                    <AiOutlineArrowLeft onClick={() => {
                        sideScroll(contentWrapper.current, 12, 150, -10);
                    }} className="text-[22px] transition duration-75 text-gray-900 cursor-pointer active:scale-95 hover:text-gray-600" />
                    <AiOutlineArrowRight onClick={() => {
                        sideScroll(contentWrapper.current, 12, 150, 10);
                    }} className="text-[22px] transition duration-75 text-gray-900 cursor-pointer active:scale-95  hover:text-gray-600" />
                </div>
            </div>
            <div ref={contentWrapper} className='flex items-center gap-2 justify-between overflow-x-auto home-scroll'>
                {
                    reviews.map(item => (
                        <ReviewCard item={item} key={item.id} />
                    ))
                }
            </div>
        </div>
    )
}

export default SwiperComponent