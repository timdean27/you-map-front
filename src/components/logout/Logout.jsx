import React from 'react'
import {useAuth0} from '@auth0/auth0-react'

function Logout() {
    const {logout} =useAuth0();

  return (
    <div>
      {logout({logoutParams:{returnTo:window.location.origin}})}
    </div>
  )
}

export default Logout