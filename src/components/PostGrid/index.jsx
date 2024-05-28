import './styles.css';
import { PostCard } from "../PostCard";

export const PostGrid = ({ posts }) => (
    <div className="post-grid">
        {posts.map(p => <PostCard key={p.id} title={p.title} body={p.body} url={p.url} />)}
    </div>
)