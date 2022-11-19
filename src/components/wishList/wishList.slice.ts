import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";






interface Rating {
    rate: number;
    count: string;
}

interface Product {
    category:string,
    description:string,
    id:number,
    image:string,
    price:number,
    rating:Rating
    title:string
    quanitity:number
    like:boolean
}

const initialState:Product[] = []

const wishListSlice = createSlice({
    name:"wishList",
    initialState,
    reducers:{
        allLikeProduct: (state, action:PayloadAction<Product[]>) => {
            return action.payload.filter(product => product.like)
        }
    }
})

export const {allLikeProduct} = wishListSlice.actions;

export const getAllLikeProducts = (state:RootState) => state.likeProducts;

export default wishListSlice.reducer