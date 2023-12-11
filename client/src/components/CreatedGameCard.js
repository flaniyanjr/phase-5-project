import { useOutletContext} from "react-router-dom";

function CreatedGameCard({gameObj}) {
    const {location, city, state, date, time, sport, image, total_attendees, id}= gameObj

    const {deleteNewGame, allGames}= useOutletContext()

    function handleDelete() {
        fetch(`/pickup_games/${id}`, {
            method: 'DELETE',
        })
        deleteNewGame(id)
    }

    const targetAttendeeArray= allGames.filter(game => {
        return game.id === id
    })
    const targetAttendeeGame= targetAttendeeArray[0]
    const targetAttendeeTotal= targetAttendeeGame.total_attendees

    return(
        <div className= "card">
            <h2>{location}</h2>
            <img className= "location-image" src= {image} alt= {location}/>
            <div>
                <p>City: {city}</p>
                <p> State: {state}</p>
                <p> Date: {date}</p>
                <p> Time: {time}</p>
                <p> Sport: {sport}</p>
                <p> Total Attendees: {targetAttendeeTotal}</p>
            </div>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default CreatedGameCard