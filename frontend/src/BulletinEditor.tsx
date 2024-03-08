import React, {useEffect, useState} from "react";
import "./create.css";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import axios from "axios";

const BulletinEditor = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {id} = useParams()
  const [title, setTitle] = useState(location.state.title || "")
  const [content, setContent] = useState(location.state.title || "")


  useEffect(() => {
    if (location.state) {
      setTitle(location.state.title || "");
      setContent(location.state.content || "");
    }
  }, [location]);
  const handleSubmit = () => {
    const topicData = {
      id: 0,
      title: title,
      content: content
    }
    let promise = null
    if (id) {
      topicData.id = +id
      promise = axios.put(`/bulletinBoard/${id}`, topicData)
    } else {
      promise = axios.post('/bulletinBoard', topicData)
    }
    promise.then(() => navigate('/'));
  }

  return (
      <div className="create">
        <div>
          <div>
            <label>Title:</label>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <button onClick={handleSubmit}>
            {id ? "Update" : "Create"}
          </button>
        </div>
      </div>
  )
}
export default BulletinEditor
