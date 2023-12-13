import React, { useEffect, useState } from "react";
import {Button} from '@mui/material';
import { useOutletContext } from "react-router-dom";

import Signup from "./Signup";


function LoginPage() {

    const {setUser, user} = useOutletContext()

    function handleLogout() {
        fetch('/logout', {
          method: 'DELETE'
        }).then((resp) => {
          if (resp.ok) {
            // handle logout on frontend
            setUser(null)
            // navigate to route, we already have it set to go back to create account page in ours
          }
        })
      }

      if (!user) {
        return <Signup setUser={setUser} />
      }

      return <div>
      <Button varient='contained' onClick={handleLogout} className= 'logout-button'>Logout</Button>
      </div>
}

export default LoginPage