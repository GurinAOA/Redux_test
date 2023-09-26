import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import {del} from './redux/action'
import {put} from './redux/action'
import './App.css';
import Counter from './components/Counter';
import Edit from './components/Edit';



function App() {

  const posts = useSelector((state) => state)
  const dispatch = useDispatch()
  console.log(posts);


 function delPost(id){
  dispatch(del(id))
 }


 function editPost(obj,id){
  dispatch(put(obj,id))}



  return (
    <div className="App">
      <div className="title">Enter your data</div>
      <div>
        <Counter id={posts.length ? posts[posts.length-1].id : null} />
      </div>
      <ul>
        {posts?.map((item, index) => (
          <li className="wrapper" key={index}>
            <p className="item">{item.title}</p>
            <p className="item">{item.text}</p>
            <p className="item">{item.status}</p>
            <button className="btn" onClick={()=>{delPost(item.id)}} >DELPOST</button>

<div>
<Edit id={posts.length ? posts[posts.length-1].id : null} />
</div>


            <button className="btn" onClick={()=>{editPost(item.id)}}>EDITPOST</button>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;
