import React from 'react'
import NavBar from "./NavBar"
import Hero from "./Hero"
import SideBar from "./SideBar"
import SubMenu from "./SubMenu"
import "./Stripe.css"

const MainStripe = () => {
    return (
        <>
            <NavBar/>
            <SideBar/>
            <Hero/>
            <SubMenu/>
        </>
    )
}

export default MainStripe
