import { useNavigate } from 'react-router-dom';
import styles from './CreateContent.module.css';

export default function CreateContent() {
  const navigate = useNavigate();
  return (
    <div className={styles.cont}>
      <h2>Create Content</h2>

      <select defaultValue="">
        <option value="" disabled>Choose content type</option>
        <option value="facts">Facts</option>
        <option value="story">Story</option>
      </select>

      <label className={styles.fileLabel}>
        Add a cover image
        <input type="file" />
      </label>

      <input type="text" placeholder="Enter title" />
      <input type="text" placeholder="Enter tags" />
      <textarea placeholder="Write your story here..." />

      <button>Submit</button>
      <button onClick={()=>navigate("/")} style={{background: "red"}}>Cancel</button>

    </div>
  );
}
