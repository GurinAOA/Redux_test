import { useState } from "react"
import { useDispatch } from 'react-redux'
import { post} from '../redux/action'

import "./counter.css";
export default function Counter({ id, obj }) {
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [status, setStatus] = useState('')
    const dispatch = useDispatch()

    function addPost() {
        dispatch(post({title:title,text:text,status:status,id:id+1}))
    }

    return (
        <div>
            <div>
                <h1>Create Notes</h1>
                <div className="title">Enter your data</div>
            </div>
            <div>
                <p>Title</p>
                <input type="text" value={title} placeholder="title" onChange={(e) => { setTitle(e.target.value) }} />
            </div>
            <div>
                <p>Text</p>
                <input type="text" value={text} placeholder="text" onChange={(e) => { setText(e.target.value) }} />
            </div>
            <div>
                <p>Status</p>
                <input type="text" value={status} placeholder="status"onChange={(e) => { setStatus(e.target.value) }} />
            </div>
            <div>
                <button onClick={addPost} >ADD NOTES</button>
          
            </div>
        </div>)
}