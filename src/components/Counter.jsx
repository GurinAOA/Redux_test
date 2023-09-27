import { useState } from "react"
import { useDispatch } from 'react-redux'
import { post} from '../redux/action'

import "./counter.css";
export default function Counter({ id, obj }) {
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
                <p>Title</p>
                <input type="text" value={userName} placeholder="title" onChange={(e) => { setUserName(e.target.value) }} />
            </div>
            <div>
                <p>Text</p>
                <input type="text" value={userAge} placeholder="text" onChange={(e) => { setUserAge(e.target.value) }} />
            </div>
            <div>
                <p>Status</p>
                <input type="text" value={userStatus} placeholder="status"onChange={(e) => { setUserStatus(e.target.value) }} />
            </div>
            <div>
                <button onClick={addPost} >ADD POST</button>
          
            </div>
        </div>)
}