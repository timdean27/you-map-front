import React from 'react'
import {useAuth0} from '@auth0/auth0-react'
import './profile.css'

function Profile() {
    const {user, isAuthenticated, isLoading} = useAuth0();

    if (isLoading){
        return <div>Loading....</div>;
    }
  return (
    isAuthenticated && (
        <div className='profile-container'> Profile
        <div><img className='profile-pic' src={user.picture} alt={user.name} /></div>
        <div><h2 className='profile-name'>{user.name}</h2> </div>
        
        <p className='profile-email'>{user.email}</p>  {/*?? my email didn't show up */}
       
    </div>
    )
  )
}

export default Profile