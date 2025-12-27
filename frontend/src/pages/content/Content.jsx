import styles from './Content.module.css'
import { useNavigate } from 'react-router-dom';

export default function Content() {
  const navigate = useNavigate();

  return (
    <div className={styles.cont}>
      <button className={styles.backBtn} onClick={() => navigate('/')}>
        ← Go Back
      </button>

      <img
        className={styles.cover}
        src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
        alt="cover"
      />

      <h1 className={styles.title}>Title</h1>

      <div className={styles.tags}>
        <span>Adventure</span>
        <span>Thriller</span>
      </div>

      <div className={styles.content}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, vero?
        Eveniet exercitationem delectus ipsam optio quisquam dolor possimus eos.
      </div>

      <div className={styles.actions}>
        <button>👍 77</button>
        <button>👎 12</button>
      </div>
    </div>
  );
}
