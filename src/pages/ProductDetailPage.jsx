import React, { useEffect } from 'react'
import ProductDetail from '../components/ProductDetailItem'
import { useDispatch, useSelector } from 'react-redux'
import Container from '../components/Container'
import { reviews } from '../info/review'
import ReviewCard from '../components/ReviewCard'
import { getProducts } from '../getData/getDataAxios'
import { Link } from 'react-router-dom'
import ProductItem from '../components/ProductItem'
import Skeleton from '../components/SkeletonProductItem'

const ProductDetailPage = () => {
  const dispatch = useDispatch()
  const { oneProduct, isLoading, products } = useSelector(state => state.product)
  const arr = [1, 2, 3, 4]
  const newProducts = products.map((item, idx) => products[products.length - 1 - idx]).splice(0, 4)

  useEffect(() => {
    getProducts('https://dbonlineshop2.onrender.com/products', dispatch)
  }, [])
  return (
    <Container>
      <div>
      {
        oneProduct!=''?
        <ProductDetail item={oneProduct} />
        :
        <div>Not found</div>
      }
        <div className='flex flex-col gap-2'>
          <div className='flex items-center justify-center text-center'>
            <div className=' w-full'>
              <p className=' xs:text-[14px] md:text-[18px] text-gray-500 mb-2'>Product Details</p>
              <hr />
            </div>
            <div className=' w-full'>
              <p className='xs:text-[14px] md:text-[18px] text-gray-900 font-[500] mb-2 whitespace-nowrap'>Rating & Reviews</p>
              <hr className='review-hr' />
            </div>
            <div className=' w-full'>
              <p className='xs:text-[14px] md:text-[18px] text-gray-500 mb-2'>FAQs</p>
              <hr />
            </div>
          </div>
          <div className='flex flex-col gap-4 mt-2'>
            <div className=' flex justify-between items-center'>
              <h4 className='text-gray-900 text-[18px] font-[600]'>All Reviews <span className='text-[12px] text-gray-500'>(451)</span></h4>
              <div className='flex gap-2 items-center'>
                <img src="../public/reviewIcon2.svg" className='w-[40px] h-[40px] sm:block xs:hidden' alt="" />
                <img src="../public/reviewIcon3.svg" className='md:block xs:hidden w-[100px] h-[40px]' alt="" />
                <button className='text-[15px] text-white px-[20px] py-[7px] whitespace-nowrap rounded-full bg-black hover:opacity-90 active:scale-95 transition duration-75'>Write a Review</button>
              </div>
            </div>
            <div className='flex justify-center'>
              <div className='grid md:grid-cols-2 gap-2 xs:grid-cols-1'>
                {
                  reviews.map(item => (
                    <ReviewCard item={item} key={item.id} />
                  ))
                }
              </div>
            </div>
            <button className='mt-2 text-[15px] text-gray-800 bg-transparent border rounded-full py-[10px] px-[15px] hover:bg-gray-50 active:scale-95 transition duration-75 w-[200px] whitespace-nowrap text-center mx-auto'>Load More Reviews</button>
          </div>
        </div>
        <div className=' mt-[50px] mb-[40px]'>
          <h4 className='xs:text-[28px] md:text-[34px] font-[800] text-gray-900 text-center mb-[30px]'>You might also like</h4>
          <div className='flex items-center gap-2 justify-between overflow-x-auto home-scroll'>
            {
              isLoading ?
                arr.map(item => (
                  <Skeleton key={item} />
                ))
                :
                newProducts.map(item => (
                  <ProductItem item={item} key={item.id} />
                ))
            }
          </div>
        </div>
      </div>
    </Container>
  )
}

export default ProductDetailPage