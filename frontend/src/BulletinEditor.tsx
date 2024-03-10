import React, { useEffect, useState } from "react";
import "./create.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

type BulletinItem = {
  id: number
  title: string
  content: string
  createdTime: string
}

const BulletinEditor = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [bulletinItem, setBulletinItem] = useState<BulletinItem>({
    content: "",
    createdTime: "",
    id: 0,
    title: ""
  });

  useEffect(() => {
    axios.get(`/bulletinBoard/${id}`)
        .then(({ data }) => setBulletinItem(data))
  }, [id]);

  const handleSubmit = () => {
    const topicData = {
      id: bulletinItem.id,
      title: bulletinItem.title,
      content: bulletinItem.content
    };

    let promise = null;
    if (id) {
      promise = axios.put(`/bulletinBoard/${id}`, topicData);
    } else {
      promise = axios.post('/bulletinBoard', topicData);
    }

    promise.then(() => navigate('/'));
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBulletinItem({ ...bulletinItem, title: e.target.value });
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBulletinItem({ ...bulletinItem, content: e.target.value });
  };

  return (
      <div className="create">
        <div>
          <div>
            <label>Title:</label>
            <input
                type="text"
                value={bulletinItem.title}
                onChange={handleTitleChange}
            />
          </div>
          <div>
          <textarea
              value={bulletinItem.content}
              onChange={handleContentChange}
          />
          </div>
          <button onClick={handleSubmit}>
            {id ? "Update" : "Create"}
          </button>
        </div>
      </div>
  );
};

export default BulletinEditor;
