import { useOutletContext} from "react-router-dom";
import { useState } from "react";

function CreatedGameCard({gameObj}) {
    const {location, city, state, date, time, sport, image, total_attendees, id}= gameObj

    const {deleteNewGame, allGames, updateNewGame}= useOutletContext()
    const [newDate, setNewDate]= useState(date)
    const [newTime, setNewTime]= useState(time)
    const [showUpdate, setShowUpdate]= useState(false)

    function handleDelete() {
        fetch(`/pickup_games/${id}`, {
            method: 'DELETE',
        })
        deleteNewGame(id)
    }

    function handleDateChange(e) {
        setNewDate(e.target.value)
    }

    function handleTimeChange(e) {
        setNewTime(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`/pickup_games/${id}`, {
            method: 'PATCH',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
                date: newDate,
                time: newTime
            })
        })
        .then(r => r.json())
        .then(newGame => updateNewGame(newGame))
    }

    function handleShowUpdate() {
        setShowUpdate(current => !current)
    }

    const targetAttendeeArray= allGames.filter(game => {
        return game.id === id
    })
    const targetAttendeeGame= targetAttendeeArray[0]
    const targetAttendeeTotal= targetAttendeeGame.total_attendees

    return(
        <div className= "card">
            <h2>{location}</h2>
            <img className= "location-image" src= {image} alt= {location} onClick= {handleShowUpdate}/>
            <div>
                <p> City: {city}</p>
                <p> State: {state}</p>
                <p> Date: {date}</p>
                <p> Time: {time}</p>
                <p> Sport: {sport}</p>
                <p> Total Attendees: {targetAttendeeTotal}</p>
            </div>
            <button onClick={handleDelete}>Delete</button>
            {showUpdate ? 
                <form onSubmit={handleSubmit}>
                <div>
                    <label>Update Date</label>
                    <input type= 'date' name='date' value= {newDate} onChange={handleDateChange}/>
                </div>
                <div>
                    <label>Update Time</label>
                    <input type= 'time' name='time' value={newTime} onChange={handleTimeChange}/>
                </div>
                <button type='submit'>Submit</button>
            </form>
            : null}
            
        </div>
    )
}

export default CreatedGameCard