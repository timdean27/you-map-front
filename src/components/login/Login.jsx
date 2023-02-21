import React from 'react'
import {useAuth0} from '@auth0/auth0-react'

//  OAuth 2.0 using Auth0 | React.js and Node.js
// https://www.youtube.com/watch?v=dyZmsz6usWk

function Login() {
    const {loginWithRedirect} = useAuth0();

  return (
    <div>
      {loginWithRedirect()}
    </div>
  )
}

export default Login