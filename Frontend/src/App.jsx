import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector,useDispatch } from 'react-redux'
import { increment, decrement} from './features/counter/counterSlice'
function App() {
  const count=useSelector((state)=>state.counter.value)
  const dispatch=useDispatch();
function handleincreamentClick(){
  dispatch(increment())
}
function handledecreamentclick(){
dispatch(decrement())
}


  return (
    <>
      <button onClick={handleincreamentClick}>+</button>
      <p>Count:{count}</p>
      <button onClick={handledecreamentclick}>-</button>
     </>
  )
}

export default App
