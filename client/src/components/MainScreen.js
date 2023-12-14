import Signup from "./Signup"
import Homepage from "./Homepage"
import { useOutletContext } from "react-router-dom"

function MainScreen() {
    const {user}= useOutletContext()
    
    return(
        user ? <Homepage /> : <Signup />
    )
}

export default MainScreen