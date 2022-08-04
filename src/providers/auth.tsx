import {createContext,useState} from 'react'
import {CartContextType,Produto} from '../types/Item'



export const CartContext = createContext<CartContextType | null>(null)

const CartProvider= ({children})=>{
    const [cart,setCart] = useState<Produto[]>([])

    const addProduct =(item:Produto)=>{
        setCart([...cart,item])
    }

    const removeProduct = (id:number)=>{
        let newCart = cart.filter((produto:Produto)=> produto.id !== id)
        setCart(newCart)
    }

    return(
        <CartContext.Provider value={{cart,addProduct,removeProduct}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider

