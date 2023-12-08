import { useOutletContext} from "react-router-dom";
import {useState} from 'react'

function CreateGame() {

    const {addNewGame}= useOutletContext()

    const initialState= {
        location: '',
        city: '',
        state: '',
        date: '',
        time: '',
        sport: '',
        image: ''
    }

    const [gameData, setGameData]= useState(initialState)

    function handleChange(e) {
        setGameData(current => {
            return {...current, [e.target.name] : e.target.value}
        })
    }

    function handleSubmit() {
        fetch('/pickup_games', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({...gameData, total_attendees: 0})
        })
        .then(r => r.json())
        .then(newGame => {
            addNewGame(newGame)
        })
    }

    return(
        <div className= "signup-form">
            <h4>Create a Game</h4>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Location</label>
                    <input type= 'text' name= 'location' value= {gameData.location} onChange= {handleChange}/>
                </div>
                <div>
                    <label>City</label>
                    <input type= 'text' name='city' value={gameData.city} onChange={handleChange}/>
                </div>
                <div>
                    <label>State</label>
                    <input type= 'text' name='state' value={gameData.state} onChange={handleChange}/>
                </div>
                <div>
                    <label>Date</label>
                    <input type= 'text' name='date' value={gameData.date} onChange={handleChange}/>
                </div>
                <div>
                    <label>Time</label>
                    <input type= 'text' name='time' value={gameData.time} onChange={handleChange}/>
                </div>
                <div>
                    <label>Sport</label>
                    <input type= 'text' name='sport' value={gameData.sport} onChange={handleChange}/>
                </div>
                <div>
                    <label>Image</label>
                    <input type= 'text' name='image' value={gameData.image} onChange={handleChange}/>
                </div>
                <button type='submit'>Create</button>
            </form>
        </div>
    )
}

export default CreateGame