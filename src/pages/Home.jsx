import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories, getProducts } from '../getData/getDataAxios'
import Banner from '../components/Banner'
import ProductItem from '../components/ProductItem'
import Container from '../components/Container'
import Skeleton from '../components/SkeletonProductItem'
import SwiperComponent from "../components/Swiper";
import { Link } from "react-router-dom";


const Home = () => {

  const { products, isLoading } = useSelector(state => state.product)
  const dispatch = useDispatch()
  const arr = [1, 2, 3, 4]
  const newProducts = products.map((item, idx) => products[products.length - 1 - idx]).splice(0, 4)

  useEffect(() => {
    getProducts('https://dbonlineshop2.onrender.com/products', dispatch)
  }, [])



  return (
    <>
      <div>
        <Banner />
        <Container>
          <div className='mt-[50px] mb-[40px]'>
            <h4 className='xs:text-[28px] md:text-[34px] font-[800] text-gray-900 text-center mb-[30px]'>NEW ARRIVALS</h4>
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
            <Link to={'/new-arrivals'}>
              <div className='flex justify-center mt-[20px]'>
                <button className='hover:bg-gray-50 active:scale-95 text-center  xs:w-full sm:w-[200px] font-[400] h-[50px] bg-transparent border rounded-full  text-gray-800 text-[14px]'>View All</button>
              </div>
            </Link>
          </div>
          <hr />
          <div className=' mt-[50px] mb-[40px]'>
            <h4 className='xs:text-[28px] md:text-[34px] font-[800] text-gray-900 text-center mb-[30px]'>TOP SELLING</h4>
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
            <Link to={'/top-selling'}>
              <div className='flex justify-center mt-[20px]'>
                <button className='hover:bg-gray-50 active:scale-95 text-center xs:w-full sm:w-[200px] font-[400] h-[50px] bg-transparent border rounded-full  text-gray-800 text-[14px]'>View All</button>
              </div>
            </Link>
          </div>
          <SwiperComponent />
        </Container>
      </div>
    </>
  )
}

export default Home