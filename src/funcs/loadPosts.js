const posts = require("../data/posts.json");

export async function loadPosts() {
    const result = posts.map((p) => {
        return {
            url: require(`../data/photos/${p.id}.jpg`),
            title: p.title,
            body: p.body,
            id: p.id
        };
    });

    return result;
}