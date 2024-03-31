import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Container from '../components/Container'
import ProductItem from '../components/ProductItem'
import Skeleton from '../components/SkeletonProductItem'
import { getProducts } from '../getData/getDataAxios'
import { useLocation } from 'react-router-dom'

const NewArrivals = () => {
  const { products,isLoading } = useSelector(state => state.product)
  const dispatch=useDispatch()
  const arr=[1,2,3,4]
  const newProducts=products.map((item, idx) => products[products.length - 1 - idx])

  const location=useLocation()

  function Title(){
    if(location.pathname=='/new-arrivals'){
      return 'New Arrivals'
    } else if(location.pathname=='/top-selling'){
      return 'Top selling'
    }
  }

useEffect(()=>{
  getProducts('https://dbonlineshop2.onrender.com/products', dispatch)
},[])

  return (
    <div className='flex justify-center'>
      <Container>
        <div className='flex flex-col gap-2 items-center'>
          <h1 className='text-[34px] font-[800] text-gray-900 text-center mt-[20px]'>{Title()}</h1>
          <div className='grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-3 my-3'>
            { isLoading?
              arr.map(item=>(
                <Skeleton key={item}/>
              ))
            :
              newProducts.map(item => (
                <ProductItem item={item} key={item.id} />
              ))
            }
          </div>
        </div>
      </Container>
    </div>
  )
}

export default NewArrivals