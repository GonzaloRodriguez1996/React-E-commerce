import React from 'react'
import { Route, BrowserRouter, Routes } from "react-router-dom"
import  {Inicio}  from "./inicio/index"
import  {Booklist}  from "./Products/index" 

export const Pages = () => {

    return(
        <section>
                <BrowserRouter>
                <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Products" element ={<Booklist/>} />
                </Routes>
                </BrowserRouter>
            
        </section>
    )
}