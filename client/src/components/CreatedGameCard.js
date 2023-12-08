import { useOutletContext} from "react-router-dom";

function CreatedGameCard({gameObj}) {
    const {location, city, state, date, time, sport, image, total_attendees, id}= gameObj

    const {deleteNewGame}= useOutletContext()

    function handleDelete() {
        fetch(`/pickup_games/${id}`, {
            method: 'DELETE',
        })
        deleteNewGame(id)
    }

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
                <p> Total Attendees: {total_attendees}</p>
            </div>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default CreatedGameCard