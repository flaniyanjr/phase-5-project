import {NavLink} from "react-router-dom"

function NavBar() {
    return(
        <nav className="navbar">
            <NavLink
                to="/"
                className="nav-link"
            >
                Home
            </NavLink>
            <NavLink
                to="/gamelibrary"
                className="nav-link"
            >
                Pickup Games
            </NavLink>

            {/* <NavLink
                to="/myplants"
                className="nav-link"
            >
                My Plants
            </NavLink> */}


        </nav>
    )
}

export default NavBar