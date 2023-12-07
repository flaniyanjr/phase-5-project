import { useOutletContext } from "react-router-dom";

function PersonalCard({gameObj}) {

    const {userSignups, removeSignup, allGames, updateGameAttendees}= useOutletContext()

    const {location, city, state, date, time, sport, image, total_attendees, id}= gameObj

    const targetSignupArray= userSignups.filter(signup => {
        if (signup.pickup_game.id === id) {
            return true
        } else {
            return false
        }
    })
    const targetSignup= targetSignupArray[0]


    const targetAttendeeArray= allGames.filter(game => {
        return game.id === id
    })
    const targetAttendeeGame= targetAttendeeArray[0]
    const targetAttendeeTotal= targetAttendeeGame.total_attendees

    function handleDelete() {
        fetch(`/player_signups/${targetSignup.id}`, {
            method: 'DELETE'
        })
        removeSignup(targetSignup.id)
        fetch(`/pickup_games/${id}`, {
            method: 'PATCH',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
                total_attendees: targetAttendeeTotal - 1
            })
        })
        .then(r => r.json())
        .then(newGame => updateGameAttendees(newGame))
    }

    return(
        <div className= 'card'>
            <h2>{location}</h2>
            <img className= "location-image" src= {image} alt= {location}/>
            <div>
                <p> City: {city}</p>
                <p> State: {state}</p>
                <p> Date: {date}</p>
                <p> Time: {time}</p>
                <p> Sport: {sport}</p>
                <p> Total Attendees: {targetAttendeeTotal}</p>
            </div>
            <button onClick={handleDelete}>Unregister</button>
        </div>
    )
}

export default PersonalCard