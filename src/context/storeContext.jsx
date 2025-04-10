import { products } from "@/utils/ProductData";
import React,{ createContext } from "react";

export const storeContext=createContext()
export const storeProvider=({children})=>{
    return <storeContext.Provider value={{products}}>{children}</storeContext.Provider>
}