import { useOutletContext} from "react-router-dom";
import PersonalCard from "./PersonalCard";

function PersonalLibrary() {

    const {userSignups}= useOutletContext()
    let gameCards

    if (userSignups) {
        const userGames= userSignups.map( signup => {
            return signup.pickup_game
        })
        gameCards= userGames.map(gameObj => {
            return <PersonalCard key= {gameObj.id} gameObj= {gameObj}/>
        })
    }

    return(
        <div>
            {userSignups ? gameCards : null}
        </div>
    )
}

export default PersonalLibrary