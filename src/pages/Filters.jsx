import { BsMenuButtonWide } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { MdOutlineNavigateNext } from "react-icons/md";
import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import { getCategories, getProducts } from '../getData/getDataAxios'
import { useDispatch, useSelector } from 'react-redux'
import Skeleton from '../components/SkeletonProductItem'
import ProductItem from '../components/ProductItem'
import SkeletonCategoryItem from "../components/SkeletonCategoryItem";
import { filteredProducts } from "../reducers/product.slice";
import { Slider } from '@mui/material';

const Filters = () => {

  const dispatch = useDispatch()
  const { products, isLoading: isProLoading, filterProducts } = useSelector(state => state.product)
  const { categories, isLoading: isCatLoading } = useSelector(state => state.category)
  const [categoryId, setCategoryId] = useState('all product')
  const arr = [1, 2, 3, 4, 5]
  const [value1, setValue1] = useState([50, 200]);
  const [filterMenu, setFilterMenu] = useState(false)

  useEffect(() => {
    getProducts('https://dbonlineshop2.onrender.com/products', dispatch)
    getCategories('https://dbonlineshop2.onrender.com/categories', dispatch)
  }, [])

  function valuetext(value) {
    return `${value}$°C`;
  }

  const minDistance = 10;

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  function filterProductsByCategory() {
    if (categoryId == 'all product') {
      dispatch(filteredProducts(products.filter(item => item.price >= value1[0] && item.price <= value1[1])))
    } else {
      const array = products.filter(item => item.categoryId == categoryId)
      dispatch(filteredProducts(array.filter(item => item.price >= value1[0] && item.price <= value1[1])))
    }
    setFilterMenu(!filterMenu)
  }
  const filterMenuClass = filterMenu ? 'block transition duration-1000 ease-in' : 'xs:hidden md:block transition duration-1000 ease-in'
  const filterMenuClass2=`${filterMenu ? 'w-full h-full' : 'w-[0px] h-[0px]'} transition duration-100 ease bg-black opacity-50 absolute left-0 bottom-0 right-0 top-0 z-0 `
  return (
    <div className="my-5">
      <Container>
        <div className='flex justify-center items-start gap-2 '>
          <div className={filterMenuClass}>
            <div className='md:w-[250px] max-h-max min-h-min border xs:w-full xs:absolute xs:left-0 xs:bottom-0 xs:right-0 md:static bg-white z-20 rounded-lg p-[20px]'>
              {
                isCatLoading ?
                  <div className="flex flex-col gap-3 my-[20px]">
                    <SkeletonCategoryItem />
                  </div>
                  :
                  <div className="my-[20px]">
                    <div className='flex justify-between items-center gap-2'>
                      <h4 className='text-[20px] text-gray-800 font-[500]'>Filters</h4>
                      <img src="../public/filter.svg" className='xs:hidden md:block w-[24px] h-[24px]' alt="" />
                      <CgClose onClick={() => setFilterMenu(false)} className="xs:block md:hidden text-[20px] text-gray-800 hover:text-gray-500 active:scale-95 transition duration-75" />
                    </div>
                    <hr className="bg-text-gray-500 my-3" />
                    <div className="flex-flex-col gap-5">
                      <div onClick={() => setCategoryId('all product')} className="hover:bg-gray-100 rounded-md px-3 py-1 flex cursor-pointer active:scale-95 transition duration-75 justify-between items-center gap-2">
                        <h4 className='text-[16px] text-gray-500' >All product</h4>
                        <MdOutlineNavigateNext className="text-[18px] text-gray-500" />
                      </div>
                      {
                        categories.map(item => (
                          <div onClick={() => setCategoryId(item.id)} key={item.id} className="hover:bg-gray-100 cursor-pointer active:scale-95 transition duration-75  rounded-md px-3 py-1 flex justify-between items-center gap-2">
                            <h4 className='text-[16px] text-gray-500' >{item.title}</h4>
                            <MdOutlineNavigateNext className="text-[18px] text-gray-500" />
                          </div>
                        ))
                      }
                    </div>
                  </div>
              }
              <hr className="bg-gray-500 my-3" />
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center gap-2">
                  <h3 className="text-[20px] font-[500] text-gray-900">Price ($)</h3>
                  <BiChevronDown className="text-[20px] text-gray-900" />
                </div>
                <div className="mb-3 mt-6 py-3">
                  <Slider
                    getAriaLabel={() => 'Minimum distance'}
                    value={value1}
                    max={1000}
                    min={0}
                    onChange={handleChange1}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    disableSwap
                    color="const [second] = first"
                  />
                </div>
              </div>
              <div className="flex justify-center my-3">
                <button onClick={() => filterProductsByCategory()} className="bg-black hover:opacity-90 active:scale-95 transition duration-75 text-white text-[16px] px-[15px] py-[10px] rounded-full w-[80%]">Apply Filter</button>
              </div>
            </div>
          </div>
          <BsMenuButtonWide onClick={() => setFilterMenu(true)} className=" xs:block md:hidden hover:text-gray-600 active:scale-95 transition duration-75 absolute top-[100px] right-[20px] text-[20px] text-gray-800" />
          <div className='max-h-max overflow-y-auto md:w-[calc(100%_-_250px)] xs:w-full  flex flex-col gap-2 items-center'>
            <h4 className='text-[26px] text-gray-800 font-[600] pl-3'>Filtered Product</h4>
            <div className='grid xs:grid-cols-1 lg:grid-cols-2  xl:grid-cols-3 gap-2 my-3'>
              {isProLoading ?
                arr.map(item => (
                  <Skeleton key={item} />
                ))
                :
                filterProducts.length == 0 ?
                  products.map(item => (
                    <ProductItem item={item} key={item.id} />
                  ))
                  :
                  filterProducts.map(item => (
                    <ProductItem item={item} key={item.id} />
                  ))

              }
            </div>
            <hr className="bg-gray-500 my-3" />
            <div className="flex items-center justify-between gap-3">
              <button className="text-[16px] items-center text-gray-900 flex gap-2 border bg-transparent rounded-md px-5 py-2"><AiOutlineArrowLeft className="text-[16px] text-gray-900" /><span className="sm:block xs:hidden">Previous</span></button>
              <div className="flex items-center justify-center gap-5">
                <p className="bg-gray-300 rounded-md text-gray-700 text-[16px] w-[40px] h-[40px] flex justify-center items-center">1</p>
                <p className="text-gray-500 text-[16px] md:block xs:hidden">2</p>
                <p className="text-gray-500 text-[16px] md:block xs:hidden">3</p>
                <p className="text-gray-500 text-[16px]">...</p>
                <p className="text-gray-500 text-[16px] md:block xs:hidden">8</p>
                <p className="text-gray-500 text-[16px] md:block xs:hidden">9</p>
                <p className="text-gray-500 text-[16px]">10</p>
              </div>
              <button className="text-[16px] items-center text-gray-900 flex gap-2 border bg-transparent rounded-md px-5 py-2"><span className="sm:block xs:hidden">Next</span><AiOutlineArrowRight className="text-[16px] text-gray-900" /></button>
            </div>
          </div>
          <div className={filterMenuClass2}></div>
        </div>
      </Container>
    </div>
  )
}

export default Filters