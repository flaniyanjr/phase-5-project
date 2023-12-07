import { useOutletContext} from "react-router-dom";

import GameCard from "./GameCard"

function GameLibrary() {

    const {allGames}= useOutletContext()

    if (!allGames) {
        return <div>Loading...</div>
    }


    const gameCards= allGames.map((gameObj) => {
        return <GameCard key= {gameObj.id} gameObj= {gameObj}/>
    })

    return(
        <div>
            {gameCards}
        </div>
    )
}

export default GameLibrary