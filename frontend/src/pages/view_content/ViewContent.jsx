import ContentCard from '../../components/content_card/ContentCard';
import styles from './ViewContent.module.css';

export default function ViewContent() {
  let tempData = [
    {
      id: 1,
      type: "story",
      title: "The Day the Server Finally Worked",
      body: "After hours of debugging, the final missing semicolon revealed itself. The server booted up, logs were clean, and peace was restored—until the next deployment.",
      tags: "developer-life,debugging,backend",
      cover_image: "https://example.com/images/server-story.jpg",
      created_at: "2025-01-10 14:30:00",
      user_id: "550e8400-e29b-41d4-a716-446655440000"
    },
    {
      id: 2,
      type: "fact",
      title: "PostgreSQL Handles Concurrency Better Than MySQL",
      body: "PostgreSQL uses MVCC (Multi-Version Concurrency Control), allowing readers and writers to work without blocking each other in most cases.",
      tags: "postgresql,database,facts",
      cover_image: null,
      created_at: "2025-01-11 09:15:00",
      user_id: "550e8400-e29b-41d4-a716-446655440000"
    },
    {
      id: 3,
      type: "story",
      title: "A Bug That Only Appeared in Production",
      body: "Everything worked perfectly in staging. But production had different data, different load, and a different story to tell—literally.",
      tags: "production,bugs,lessons",
      cover_image: "https://example.com/images/bug-story.jpg",
      created_at: "2025-01-12 18:45:00",
      user_id: "7b9e8400-e29b-41d4-a716-446655441234"
    },
    {
      id: 4,
      type: "fact",
      title: "ENUM Columns Can Be Hard to Change",
      body: "In MySQL, ENUM values are stored internally as numbers. Adding or reordering ENUM values can lead to unexpected behavior if not handled carefully.",
      tags: "mysql,enum,gotchas",
      cover_image: null,
      created_at: "2025-01-13 11:00:00",
      user_id: "7b9e8400-e29b-41d4-a716-446655441234"
    }
  ];

  return (
    <div className={styles.viewCont}>
        {tempData.map((content) => (
          <ContentCard key={content.id} content={content} />
        ))}
    </div>
  );
}