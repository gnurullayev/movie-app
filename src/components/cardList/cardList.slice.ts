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
}

const initialState:Product[] = []

const prodactsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        allProducts: (state, action:PayloadAction<Product[]>) => {
            return action.payload
        }
    }
})

export const { allProducts } = prodactsSlice.actions;

export const getAllProducts = (state: RootState) => state.products;

export default prodactsSlice.reducer