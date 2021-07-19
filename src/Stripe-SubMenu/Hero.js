import React from 'react'
import phoneImg from "./images/phone.svg"
import { useGlobalContext } from "./context"

const Hero = () => {
    const { closeSubMenu } = useGlobalContext();
    // console.log(data);
    return <section className="hero" onMouseOver={closeSubMenu}>
        <div className="hero-center">
            <article className="hero-info">
                <h1>Payments infrastructure for the internet</h1>
                <p>Millions of businesses of all sizes – from startups to Fortune 500s – use Stripe's software and APIs to accept payments, send payouts, and manage their businesses online.</p>
            </article>
            <article className="hero-images">
                <img src={phoneImg} className="phone-img" alt="phone" />
            </article>
        </div>
    </section>
}

export default Hero