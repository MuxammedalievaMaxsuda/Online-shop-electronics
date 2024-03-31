import { createSlice } from "@reduxjs/toolkit"

const initialState={
    categories: [],
    isLoading: false
}

const CategorySlice=createSlice({
    name: 'category',
    initialState,
    reducers:{
        fetchingCategories(state){
            state.isLoading=true
        },
        fetchedCategories(state,action){
            state.categories=action.payload
            state.isLoading=false
        },
        fetchedErrorCategories(state){
            state.isLoading=false
        }
    }
})

export const {fetchingCategories,fetchedCategories,fetchedErrorCategories}=CategorySlice.actions
export default CategorySlice.reducer
