import { createSlice } from "@reduxjs/toolkit"

const initialState={
    favourite: []
}

const FavouriteSlice=createSlice({
    name: 'favourite',
    initialState,
    reducers:{
        selectFavouriteProduct(state,action){
            if(state.favourite.find(item=>item.id==action.payload.id)){
                state.favourite=state.favourite.filter(item=>item.id!=action.payload.id)
            } else{
                state.favourite=[...state.favourite,action.payload]
            }
        }
    }
})

export const {selectFavouriteProduct}=FavouriteSlice.actions
export default FavouriteSlice.reducer