import './styles.css';
import { PostCard } from "../PostCard";

export const PostGrid = ({ posts = [] }) => (
    <div className="post-grid">
        {!!posts && posts.map((p, i) => <PostCard key={i} title={p.title} body={p.body} url={p.url} />)}
    </div>
)