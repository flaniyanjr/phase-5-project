import NavBar from "./NavBar"
import header from '../styling/header.css'
import newlogo from '../img/newlogo.jpg'

function Header({user}) {
    
    return(
        <div>
            <NavBar />
            <div>
            {user ? <p className="user-info"><b>Welcome: {user.username}</b></p>: null}
            </div>
            <div className= 'logo-container'>
                <img id="header-img" src={newlogo} alt="pickup pal logo"/>
            </div>
        </div>
    )
}

export default Header