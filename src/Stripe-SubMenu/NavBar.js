import logo from "./images/logo.svg"
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from "./context"
const NavBar = () => {
    const { openSideBar, openSubMenu, closeSubMenu } = useGlobalContext();

    const displaySubMenu = (e) => {
        // alert("hello world");
        const page = e.target.textContent;
        const tempBtn = e.target.getBoundingClientRect();
        const center = (tempBtn.left + tempBtn.right) / 2;
        const bottom = tempBtn.bottom - 3;
        openSubMenu(page, { center, bottom });
    }

    const handleSubMenu = (e) => {
        !e.target.classList.contains('link-btn') && closeSubMenu()
    }


    return (
        <nav className="nav" onMouseOver={handleSubMenu}>
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} alt="One" className="nav-logo" />
                    <button className="btn toggle-btn" onClick={openSideBar}><FaBars /></button>
                </div>
                <ul className="nav-links">
                    <li>
                        <button className="link-btn" onMouseOver={displaySubMenu}>products</button>
                    </li>
                    <li>
                        <button className="link-btn" onMouseOver={displaySubMenu}>developers</button>
                    </li>
                    <li>
                        <button className="link-btn" onMouseOver={displaySubMenu}>company</button>
                    </li>
                </ul>
                <button className="btn signin-btn">Sign in</button>
            </div>
        </nav>
    )
}

export default NavBar
