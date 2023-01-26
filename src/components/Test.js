import React, {useState} from 'react'
import Friend from './Friend'

function Test() {
    const [friends, setFriends] = useState(["bob", 'lisa', 'jim'])
    function unfriend(){
        const newFriends = friends.slice(1);
        setFriends(newFriends)
    }
  return (
    <div>Test
        {friends.map((friend) =>(
            <Friend key={friend} friend ={friend} unfriend={unfriend} />
        )
        )}
        <button onClick={unfriend}>Unfriend Someone</button>
    </div>
  )
}

export default Test