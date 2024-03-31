import { AiFillHeart } from "react-icons/ai";
import Container from '../components/Container'
import React from 'react'
import { useSelector } from 'react-redux'
import ProductItem from '../components/ProductItem'

const Favourite = () => {
  const { favourite } = useSelector(state => state.favourite)

  return (
    <>
      {
        favourite.length > 0 ?
          <div className='flex justify-center'>
            <Container>
              <div className="flex justify-center">
                <div className='grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-3 my-3'>
                  {
                    favourite.map(item => (
                      <ProductItem item={item} key={item.id} />
                    ))
                  }
                </div>
              </div>
            </Container>
          </div>
          :
          <div className='flex justify-center items-center min-h-[70vh]'>
            <div className="flex flex-col gap-[20px] justify-center items-center">
              <img src="https://asaxiy.uz/custom-assets/images/heart-bubble.svg" className="w-[150px] h-[150px] object-cover" alt="" />
              <h4 className="text-[20px] text-gray-800 font-semibold">No favorite products</h4>
              <p className="text-[16px] text-gray-800">Add with <AiFillHeart className="text-red-500 inline text-[16px]" /> symbol on product</p>
            </div>
          </div>
      }
    </>
  )
}

export default Favourite