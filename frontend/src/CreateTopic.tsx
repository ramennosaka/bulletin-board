import React, {useState} from "react";
import "./create.css";
import {useNavigate} from "react-router-dom";

export interface CreateTopicProps {
  onTopicCreate: (newTopic: { title: string, content: string }) => void;
  navigateToBulletinBoard: () => void;
}

const CreateTopic: React.FC<CreateTopicProps> = ({onTopicCreate, navigateToBulletinBoard}) => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const navigate = useNavigate(); // useNavigateを関数コンポーネント内で呼び出す

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newTopic = {
      title: title,
      content: content
    }
    onTopicCreate(newTopic)
    navigateToBulletinBoard()
    setTitle("")
    setContent("")
  }

  return (
      <div className="create">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title:</label>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <input
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <button type="submit">Create</button>
        </form>
      </div>
  )
}
export default CreateTopic