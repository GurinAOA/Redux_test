import { useState } from "react"
import { useDispatch } from 'react-redux'
import { put} from '../redux/action'

export default function Edit({ obj,id }) {
    const [userName, setUserName] = useState('')
    const [userAge, setUserAge] = useState('')
    const [userStatus, setUserStatus] = useState('')
    const dispatch = useDispatch()

    function editPost() {
        dispatch(put({name:userName,age:userAge,status:userStatus,id:id}))
    }

    return (
        <div>
            <div>
                <h1>Edit posts</h1>
            </div>
            <div>
                <p>Title</p>
                <input type="text" value={userName} placeholder="title" onChange={(e) => { setUserName(e.target.value) }} />
            </div>
            <div>
                <p>Text</p>
                <input type="number" value={userAge} placeholder="text" onChange={(e) => { setUserAge(e.target.value) }} />
            </div>
            <div>
                <p>Status</p>
                <input type="text" value={userStatus} placeholder="status" onChange={(e) => { setUserStatus(e.target.value) }} />
            </div>
      
        </div>)
}