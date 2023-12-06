import { useOutletContext } from "react-router-dom";

import GameCard from "./GameCard"

function GameLibrary() {

    const {allGames}= useOutletContext()

    console.log(allGames)
    console.log(Array.isArray(allGames))


    const gameCards= allGames.map((gameObj) => {
        return <GameCard key= {gameObj.id} gameObj= {gameObj}/>
    })

    console.log(gameCards)

    return(
        <div>
            {gameCards}
        </div>
    )
}

export default GameLibrary