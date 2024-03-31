import { createSlice } from "@reduxjs/toolkit"

const initialState={
    basket: [],
    countBasketItem:[],
    price: 0
}

const BasketSlice=createSlice({
    name: 'basket',
    initialState,
    reducers:{
        setBasketItem(state,action){
           if(state.basket.find(item=>item.id==action.payload.id)){
             state.countBasketItem=[...state.countBasketItem,{id:action.payload.id,price:action.payload.price}]
           } else{
             state.basket=[...state.basket,action.payload]
             state.countBasketItem=[...state.countBasketItem,{id:action.payload.id,price:action.payload.price}]
           }
           state.price+=action.payload.price
        },
        deleteBasketItem(state,action){
            const count=state.countBasketItem.filter(item=>item.id==action.payload.id).length
            state.price-=action.payload.price*count
            state.basket=state.basket.filter(item=>item.id!=action.payload.id)
            state.countBasketItem=state.countBasketItem.filter(item=>item.id!=action.payload.id)
        },
        decrementBasketItem(state,action){
            const index=state.countBasketItem.findIndex(item=>item.id==action.payload.id)
            state.countBasketItem.splice(index,1)
            state.price-=action.payload.price
        }
    }
})

export const {setBasketItem,deleteBasketItem,decrementBasketItem}=BasketSlice.actions
export default BasketSlice.reducer