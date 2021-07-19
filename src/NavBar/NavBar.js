import React, { useState, useRef, useEffect } from 'react'
import { FaBars} from 'react-icons/fa'
import { links, social } from "./data"

const NavBar = () => {
    const [showLinks, setShowLinks] = useState(false)
    const linksContainerRef = useRef(null)
    const linksRef = useRef(null)


    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height;
        showLinks ? linksContainerRef.current.style.height = `${linksHeight}px` : linksContainerRef.current.style.height = "0px"
    }, [showLinks])




    return (
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <h4 className="text-center">One Foundation</h4>
                    <button className="nav-toggle" onClick={() => setShowLinks(!showLinks)}>
                        <FaBars />
                    </button>
                </div>
                <div className="links-container" ref={linksContainerRef}>
                    <ul className="links" ref={linksRef}>
                        {
                            links.map((link) => {
                                const { id, url, text } = link
                                return <li key={id}><a href={url}>{text}</a></li>


                            })
                        }
                    </ul>
                </div>
                <ul className="social-icons">
                    {
                        social.map((link) => {
                            const { id, url, icon } = link;
                            return <li key={id}><a href={url}>{icon}</a></li>
                        })
                    }

                </ul>
            </div>
        </nav>
    )
}

export default NavBar
