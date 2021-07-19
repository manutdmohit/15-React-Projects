import React, { useState,useEffect } from 'react'
import rgbtoHex from "./utils"

const SingleColor = ({ rgb, weight, index, hexColor }) => {
    const [alert, setAlert] = useState(false);
    const bcg = rgb.join(',');
    // console.log(rgb);
    // console.log(typeof rgb);
    // console.log(bcg);
    // console.log(typeof bcg);
    // const hex = rgbtoHex(...rgb);

    const hexValue = `#${hexColor}`
    useEffect(() => {
        const timeOut = setTimeout(() => {
            setAlert(false);
        }, 3000)
        return ()=>clearTimeout(timeOut)
    }, [alert])


    return <article className={`color ${index > 10 && 'color-light'}`} style={{
        backgroundColor: `
    rgb(${bcg})`
    }} onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
    }}>
        <p className="percent-value">{weight}%</p>
        <p className="color-value">{hexValue}</p>
        {alert && <p className="alert">copied to clipboard</p>}
    </article >
}

export default SingleColor
