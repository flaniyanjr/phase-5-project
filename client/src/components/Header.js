import NavBar from "./NavBar"
import header from '../styling/header.css'
import newlogo from '../img/newlogo.jpg'
import {Button} from '@mui/material';

import Signup from "./Signup";

function Header({user, setUser}) {

    function handleLogout() {
        fetch('/logout', {
          method: 'DELETE'
        }).then((resp) => {
          if (resp.ok) {
            // handle logout on frontend
            setUser(null)
            // navigate to route, we already have it set to go back to create account page in ours
          }
        })
      }

    
    return(
        <div>
            <NavBar />
            <div>
                {user ? <Button varient='contained' onClick={handleLogout} id= 'logout-button'>Logout</Button> : <Signup setUser={setUser} />}
                {user ? <p className="user-info"><b>Welcome: {user.username}</b></p>: null}
            </div>
            <div className= 'logo-container'>
                <img id="header-img" src={newlogo} alt="pickup pal logo"/>
            </div>
        </div>
    )
}

export default Header