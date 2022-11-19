import { configureStore } from "@reduxjs/toolkit";
import products from "../components/cardList/cardList.slice"
import darcmode from "./darckMode.slice"


export const store = configureStore(
    {
        reducer: {
            products,
            darcmode
        }
    }
)

export type RootState = ReturnType<typeof store.getState>
