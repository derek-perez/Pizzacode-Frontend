import { createContext, useEffect, useState, useContext } from "react";

import pizzaApi from "../api/pizzaApi";
import { PagarCardsContext } from "./PagarCardsContext";

import { Producto } from "../interfaces/interfaces";



export const CartContext = createContext({} as any);

export const CartContextProvider = ({ children }: any) => {

    const { productos, setProductos } = useContext(PagarCardsContext);
    const [store, setStore] = useState('');

    useEffect(() => {
        if (store !== '' || undefined) {
            addToCart(store);
        }
    }, [store]);

    const addToCart = async (id: string) => {
        const { data: { producto } } = await pizzaApi.get(`/productos/${id}`);

        setProductos((prevState: Producto[]) =>
            [
                ...prevState,
                {
                    index: prevState.length + 1,
                    producto,
                    cantidad: 1
                }
            ]
        )
    }


    return (
        <CartContext.Provider
            value={{
                store,

                setStore
            }}
        >
            {children}
        </CartContext.Provider>
    )
};