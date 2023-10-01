import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { del } from "./redux/action";
import { put } from "./redux/action";
import "./App.css";
import Counter from "./components/Counter";
import Edit from "./components/Edit";
import { useState } from "react";

function App() {
  const [ activeId, setActiveId ] = useState(false);
  const posts = useSelector((state) => state);
  const dispatch = useDispatch();


  function delPost(id) {
    dispatch(del(id));
  }

  function editPostPage(id) {
    setActiveId(id);
  }

  return (
    <div className="App">
      <div>
        <Counter id={posts.length ? posts[posts.length - 1].id : null} />
      </div>
      <ul>
        {posts?.map((item, index) => (
          <li className="wrapper" key={index}>
            <p className="item">{item.title}</p>
            <p className="item">{item.text}</p>
            <p className="item">{item.status}</p>
            <button
              className="btn"
              onClick={() => {
                delPost(item.id);
              }}
            >
              DELPOST
            </button>

            <button
              className="btn"
              onClick={() => {
                editPostPage(item.id);
              }}
            >
              EDITPOST
            </button>
           {activeId==item.id && <Edit title= {item.title} text={item.text} status={item.status} id ={item.id} setActiveId={setActiveId}/> }
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
