const hasValue = (post, search) => (
    post.title.toLowerCase().includes(search) ||
    post.body.toLowerCase().includes(search) 
);

export const filterPosts = (posts = [], value = '') => {
    const search = value.toLowerCase().trim();
    return posts.filter(p => hasValue(p, search))
};