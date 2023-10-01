import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { put } from "../redux/action";

export default function Edit({ title, text, status, id }) {
  const [titleSt, setTitleSt] = useState("");
  const [textSt, setTextSt] = useState("");
  const [statusSt, setStatusSt] = useState("");

  useEffect(() => {
    setTitleSt(title);
    setTextSt(text);
    setStatusSt(status);
  }, [title, text, status]);

  function savePost() {
    const obj = {
      title: titleSt,
      text: textSt,
      status: statusSt,
      id,
    };
    dispatch(put(obj));
  }

  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <h1>Edit posts</h1>
      </div>
      <div>
        <p>Title</p>
        <input
          type="text"
          value={titleSt}
          placeholder="title"
          onChange={(e) => {
            setTitleSt(e.target.value);
          }}
        />
      </div>
      <div>
        <p>Text</p>
        <input
          type="text"
          value={textSt}
          placeholder="text"
          onChange={(e) => {
            setTextSt(e.target.value);
          }}
        />
      </div>
      <div>
        <p>Status</p>
        <input
          type="text"
          value={statusSt}
          placeholder="status"
          onChange={(e) => {
            setStatusSt(e.target.value);
          }}
        />
      </div>
      <button
        className="btn"
        onClick={() => {
          savePost();
        }}
      >
        SAVEPOST
      </button>
    </div>
  );
}
