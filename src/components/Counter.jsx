import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addCounter} from "../store/slices/counterSlice"

const Counter = () => {

    const {counterVal} =  useSelector((state)=>state.counterReducer);

    const dispatch = useDispatch();

    
    

  return (
    <>
   
    </>
  )
}

export default Counter
