
import {useState,useContext, createContext} from "react"
export const cart=createContext();
export const cartProvider=(childern)=>{
const [cartitems,setCart]=useState([]);
const AddCart=(item)=>{
setCart((prevItems)=>[...prevItems,item]);
}
return(
    
    <>
    <cart.Provider valur={{cartitems,AddCart}}>
    
    </cart.Provider>
    </>
)
}