import axios from "axios"
import {fetchingProducts,fetchedProducts,fetchedErrorProducts} from '../reducers/product.slice'
import {fetchingCategories,fetchedCategories,fetchedErrorCategories} from '../reducers/category.slice'

export async function getProducts(url,dispatch){
    dispatch(fetchingProducts())
    await axios.get(url)
    .then(res=>{
        dispatch(fetchedProducts(res.data))
    })
    .catch(err=>{
        console.log(err)
        dispatch(fetchedErrorProducts())
    })
}

export async function getCategories(url,dispatch){
    dispatch(fetchingCategories())
    await axios.get(url)
    .then(res=>{
        dispatch(fetchedCategories(res.data))
    })
    .catch(err=>{
        console.log(err)
        dispatch(fetchedErrorCategories())
    })
}