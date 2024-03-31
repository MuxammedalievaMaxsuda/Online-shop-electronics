import { createSlice } from "@reduxjs/toolkit"

const initialState={
    products: [],
    isLoading: false,
    oneProduct: {},
    filterProducts:[]
}

const ProductSlice=createSlice({
    name: 'product',
    initialState,
    reducers:{
        fetchingProducts(state){
            state.isLoading=true
        },
        fetchedProducts(state,action){
            state.products=action.payload
            state.isLoading=false
        },
        fetchedErrorProducts(state){
            state.isLoading=false
        },
        selectOneProduct(state,action){
            state.oneProduct=action.payload
        },
        filteredProducts(state,action){
            state.filterProducts=action.payload
        }
    }
})

export const {fetchingProducts,fetchedProducts,fetchedErrorProducts,selectOneProduct,filteredProducts}=ProductSlice.actions
export default ProductSlice.reducer
