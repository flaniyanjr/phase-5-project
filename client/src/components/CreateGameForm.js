import { useOutletContext} from "react-router-dom";
import {useState} from 'react'
import CreatedGameCard from "./CreatedGameCard";
import sportlogo4 from "../img/sportlogo4.jpg"
import sportlogo5 from "../img/sportlogo5.jpeg"

function CreateGame() {

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
    const {addNewGame, createdGames, user}= useOutletContext()

    const currentDate= new Date() 
    const day= currentDate.getDate()
    const month= currentDate.getMonth() + 1
    const year= currentDate.getFullYear()

    if (day < 10) {
        day = '0' + day;
     }

     if (month < 10) {
        month = '0' + month;
     } 

    const today = year + '-' + month + '-' + day;

    let createdGameCards

    if (createdGames) {
        createdGameCards= createdGames.map(gameObj => {
            return <CreatedGameCard key= {gameObj.id} gameObj= {gameObj}/>
        })
    } 

    function handleChange(e) {
        setGameData(current => {
            return {...current, [e.target.name] : e.target.value}
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch('/pickup_games', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({...gameData, total_attendees: 0})
        })
        .then(r => r.json())
        .then(newGame => {
            addNewGame(newGame)
        })
        setGameData(initialState)
    }

    return(
        user ?
        <div>
            <div className= "create-game-form">
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
                        <input type= 'date' name='date' value={gameData.date} min={today} onChange={handleChange}/>
                    </div>
                    <div>
                        <label>Time</label>
                        <input type= 'time' name='time' value={gameData.time} onChange={handleChange}/>
                    </div>
                    <div>
                        <label>Sport</label>
                        <input type= 'text' name='sport' value={gameData.sport} onChange={handleChange}/>
                    </div>
                    <div>
                        <label>Image</label>
                        <input type= 'text' name='image' value={gameData.image} onChange={handleChange}/>
                    </div>
                    <button className= 'submit-button' type='submit'>Create</button>
                </form>
                <div className= 'logo-four-image-containter'>
                    <img id= 'logo-four' src= {sportlogo4} alt= 'tennis sports logo' />
                </div>
                <div className= 'logo-five-image-containter'>
                <img id= 'logo-five' src= {sportlogo5} alt= 'tennis sports logo' /> 
                </div>
            </div>
            {createdGameCards}
        </div>
        :
        <h1 className="required-login-message">Login required to access this page </h1>
    )
}

export default CreateGame