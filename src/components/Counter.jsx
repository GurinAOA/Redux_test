import { useState } from "react"
import { useDispatch } from 'react-redux'
import { post} from '../redux/action'

import "./counter.css";
export default function Counter({ id }) {
    const [userName, setUserName] = useState('')
    const [userAge, setUserAge] = useState('')
    const [userStatus, setUserStatus] = useState('')
    const dispatch = useDispatch()

    function addPost() {
        dispatch(post({name:userName,age:userAge,status:userStatus,id:id+1}))
    }

    return (
        <div>
            <div>
                <h1>CreatePost</h1>
            </div>
            <div>
                <p>User name</p>
                <input type="text" value={userName} placeholder="name" onChange={(e) => { setUserName(e.target.value) }} />
            </div>
            <div>
                <p>User age</p>
                <input type="number" value={userAge} placeholder="age" onChange={(e) => { setUserAge(e.target.value) }} />
            </div>
            <div>
                <p>User status</p>
                <input type="text" value={userStatus} placeholder="status"onChange={(e) => { setUserStatus(e.target.value) }} />
            </div>
            <div>
                <button onClick={addPost} >ADD POST</button>
          
            </div>
        </div>)
}