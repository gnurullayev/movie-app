import {createSlice,PayloadAction} from "@reduxjs/toolkit"
import { RootState } from "../../redux/store"

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

const prodactsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        allProducts: (state, action:PayloadAction<Product[]>) => {
            const newArr = action.payload.map(product => ({...product, quanitity:0, like:false}))
            localStorage.setItem("products",JSON.stringify(newArr))
            return newArr
        },
        filterProducts:(state, action:PayloadAction<Product[]>) => {
            return action.payload
        }
    }
})

export const { allProducts,filterProducts } = prodactsSlice.actions;

export const getAllProducts = (state: RootState) => state.products;

export default prodactsSlice.reducer