import { configureStore } from "@reduxjs/toolkit";
import products from "../components/cardList/cardList.slice"
import darcmode from "./darckMode.slice"
import likeProducts from "../components/wishList/wishList.slice"


export const store = configureStore(
    {
        reducer: {
            products,
            darcmode,
            likeProducts
        }
    }
)

export type RootState = ReturnType<typeof store.getState>
