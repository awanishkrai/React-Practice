import './App.css';
import { createBrowserRouter,useNavigate,RouterProvider} from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import { useSelector,useDispatch } from 'react-redux';
import { increament,decreament } from './features/counterSlice';
import { useContext } from 'react';
import CartContext from './pages/cartcontext';

function App() {
  const {cart,addCart}=useContext(CartContext)
  const count=useSelector((state)=>state.counter.value)
  const dispatch=useDispatch()
  const router=createBrowserRouter(
    [
      {
        path:"/",
        element:<Home/>
      },
      {path:"/About",
        element:<About/>
      },
      
    ]
  )
  const handleCart=()=>{
    
  }
  return (
    <>
    <h1>Hello World</h1>
    <div>
      {cart?.map((cart1)=>(
        <div key={cart1.id}>
          <h1>{cart1.name}</h1>
          <h1>{cart1.price}</h1>
        </div>
      ))}
    </div>
    <h1>{count}</h1>
    <button onClick={()=>dispatch(increament())}>Increament</button>
    <button onClick={()=>dispatch(decreament())}>Decreament</button>
    <RouterProvider router={router}/>



    </>
  );
}

export default App;
