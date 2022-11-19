import { createSlice,PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "./store"


export interface IDarckMode {
    darckmode:boolean,
    lenguage: string,
}

const initialState:IDarckMode = {
    darckmode: false,
    lenguage: "en",
}

const darcModeSlice = createSlice({
    name:"darckmode",
    initialState,
    reducers:{
       changeDarckMode: (state,) =>{
        return {...state, darckmode: !state.darckmode}
       }
    }
})

export const { changeDarckMode } = darcModeSlice.actions;

export const getDarcModeState = (state:RootState) => state.darcmode;

export default darcModeSlice.reducer;

