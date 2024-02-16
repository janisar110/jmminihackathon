import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counterVal: 0,
}

const CounterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        addCounter: (state,payload)=>{
            state.counterVal = ++state.counterVal;
        }
    }
})



const {actions,reducer} = CounterSlice;

export const {addCounter} = actions;
export default reducer