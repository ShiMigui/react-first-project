import { posts } from "../data/posts.js";

export const loadPosts = async () => {
    return posts.map((p) => {
        const image = require(`../data/photos/${p.id}.jpg`);
        return {
            url: image.default || image,
            title: p.title,
            body: p.body,
            id: p.id
        };
    });
}