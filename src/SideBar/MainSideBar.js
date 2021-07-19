import React from 'react'
import Modal from "./Modal"
import SideBar from "./SideBar"
import Home from "./Home"


import "./MainSideBar.css"

const MainSideBar = () => {
    return (
        <>
           <Home />
           <Modal/>  
           <SideBar/>
        </>
    )
}


export default MainSideBar