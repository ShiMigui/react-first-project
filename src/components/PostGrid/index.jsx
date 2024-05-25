import { PostCard } from "../PostCard";

export const PostGrid = ({ posts }) => (
    <div className="posts">
        {posts.map(p => <PostCard key={p.id} title={p.title} body={p.body} url={p.url} />)}
    </div>
)