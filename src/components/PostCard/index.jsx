import './styles.css'
export const PostCard = ({ title, body, url }) => (
    <div className="post-card" data-testid='post-card'>
        <img src={url} alt={title} />
        <div className="post-content">
            <h4>{title}</h4>
            <p>{body}</p>
        </div>
    </div>
);