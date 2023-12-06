

function GameCard({gameObj}) {
    const {location, city, state, date, time, sport, image, total_attendees}= gameObj

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
            <button>Register</button>
        </div>
    )
}

export default GameCard