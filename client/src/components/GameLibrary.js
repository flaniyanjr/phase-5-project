import { useOutletContext} from "react-router-dom";
import { useState } from "react";

import GameCard from "./GameCard"

function GameLibrary() {

    const {allGames}= useOutletContext()
    const [searchInput, setSearchInput]= useState('')

    function handleSearchInput(e) {
        setSearchInput(e.target.value)
    }

    const filteredGames= allGames.filter(gameObj => {
        return gameObj.sport.toLowerCase().includes(searchInput.toLowerCase())
    })


    const gameCards= filteredGames.map((gameObj) => {
        return <GameCard key= {gameObj.id} gameObj= {gameObj}/>
    })

    return(
        <div>
            <div className="container">
            <label>Search by Sport:</label>
            <input
                type="text"
                id="search"
                placeholder="Type a sport name..."
                value={searchInput}
                onChange={handleSearchInput}
            />
            </div>
            {gameCards}
        </div>
    )
}

export default GameLibrary