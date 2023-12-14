import { useOutletContext} from "react-router-dom";
import { useState } from "react";
import PersonalCard from "./PersonalCard";

function PersonalLibrary() {

    const {userSignups}= useOutletContext()
    const [searchInput, setSearchInput]= useState('')

    function handleSearchInput(e) {
        setSearchInput(e.target.value)
    }

    let gameCards

    if (userSignups) {
        const userGames= userSignups.map( signup => {
            return signup.pickup_game
        })
        const filteredGames= userGames.filter(gameObj => {
            return gameObj.sport.toLowerCase().includes(searchInput.toLowerCase())
        })
        gameCards= filteredGames.map(gameObj => {
            return <PersonalCard key= {gameObj.id} gameObj= {gameObj}/>
        })
    }

    const totalSignups= userSignups.length

    return(
        <div>
            <div className= 'personal-search-container'>
                <div className="container">
                    <input 
                    type='text'
                    value= {searchInput}
                    placeholder="Search by sport..."
                    onChange={handleSearchInput}
                    className="search"
                    />
                </div>
            </div>
            <div className="container">
                <h4 id= 'signup-total'>Total Games: {totalSignups}</h4>
            </div>
            {userSignups ? gameCards : null}
        </div>
    )
}

export default PersonalLibrary