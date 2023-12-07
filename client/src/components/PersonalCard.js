import { useOutletContext } from "react-router-dom";

function PersonalCard({gameObj}) {

    const {userSignups, removeSignup}= useOutletContext()

    const {location, city, state, date, time, sport, image, total_attendees, id}= gameObj

    const targetSignupArray= userSignups.filter(signup => {
        if (signup.pickup_game.id === id) {
            return true
        } else {
            return false
        }
    })

    const targetSignup= targetSignupArray[0]

    function handleDelete() {
        fetch(`/player_signups/${targetSignup.id}`, {
            method: 'DELETE'
        })
        removeSignup(targetSignup.id)
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
                <p> Total Attendees: {total_attendees}</p>
            </div>
            <button onClick={handleDelete}>Unregister</button>
        </div>
    )
}

export default PersonalCard