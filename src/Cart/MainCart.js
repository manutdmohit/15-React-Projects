import React from 'react'
import { useGlobalContext } from "./context"
import "./Cart.css"

import NavBar from "./NavBar"
import CartContainer from "./CartContainer"


const MainCart = () => {
    const { loading } = useGlobalContext()
    if (loading) {
        return (
            <div className="loading">
                <h1>loading...</h1>
            </div>
        )
    }



    return (
        <main>
            <NavBar />
            <CartContainer />
        </main>
    )
}


export default MainCart