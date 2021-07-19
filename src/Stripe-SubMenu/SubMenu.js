import React, { useRef,useState, useEffect } from 'react'
import { useGlobalContext } from "./context"

const SubMenu = () => {
    const { isSubMenuOpen, location, page: { page, links } } = useGlobalContext()

    const container = useRef(null);

    const [columns, setColumns] = useState('col-2')


    useEffect(() => {
        setColumns('col-2')
        const subMenu = container.current;
        const { center, bottom } = location;
        subMenu.style.left = `${center}px`
        subMenu.style.top = `${bottom}px`

        if(links.length ===3){
            setColumns('col-3')
        }
        links.length >3 && (setColumns('col-4'))

    }, [location,links])

    return (
        <aside className={`${isSubMenuOpen ? 'submenu show' : 'submenu'}`} ref={container}>

            <h4>{page}</h4>
            <div className={`submenu-center ${columns}`}></div>
            {links.map((link, index) => {
                const { label, icon, url } = link;
                return <a key={index} href={url}>{icon} {label}</a>
            })}
        </aside>
    )
}

export default SubMenu
