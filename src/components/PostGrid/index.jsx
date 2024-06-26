import './styles.css';
import { PostCard } from "../PostCard";

export const PostGrid = ({ posts = [] }) => (
    <div className="post-grid" data-testid='post-grid'>
        {!!posts && posts.map(p => <PostCard {...p} key={p.id} />)}
    </div>
)