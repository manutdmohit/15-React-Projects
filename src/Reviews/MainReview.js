import React from 'react'
import Review from './Review'
import "./Review.css"

const MainReview = () => {
    return <main>
        <section className="container">
            <div className="title">
                <h2>our reviews</h2>
                <div className="underline"></div>
            </div>
            <Review/>
        </section>
    </main>
}

export default MainReview
