import React, { useEffect, useState } from "react";
import { Switch, Route, Outlet } from "react-router-dom";

import Header from "./Header";

function App() {
  const [user, setUser]= useState(null)
  const [allGames, setAllGames] = useState('')

  useEffect(() => {
    fetch('/authorized')
    .then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => setUser(user))
      } else {
        // handle what should happen if not logged in
        console.log('error')
      }
    })
  }, [])

  useEffect(() => {
    fetch('/pickup_games')
    .then(r => {
      if (r.ok) {
        r.json().then(games => setAllGames(games))
      } else {
        console.log('error')
      }
    })
  }, [])

  const context= {
    user,
    setUser,
    allGames,
    setAllGames
  }

  return(
    <div>
      <Header />
      <Outlet context= {context}/>
    </div>
  )


}

export default App;
