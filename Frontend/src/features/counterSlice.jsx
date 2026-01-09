import {createSlice} from "@reduxjs/toolkit"
const counter=createSlice(
    {
        name:"counter",
        initialState:{
            value:0,
        },
        reducers:{
        increament:(state)=>{
            state.value=state.value+1
        },
        decreament:(state)=>{
            state.value=state.value-1
        }
    }
    }
    
)
export const {increament,decreament}=counter.actions
export default counter.reducer