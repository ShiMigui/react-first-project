function searchIn(value = '', search = '') {
    return value.toLowerCase().includes(search);
}

export const filterPosts = (posts = [], value = '') => {
    let search = value.toLowerCase().trim();

    return posts.filter(p => (searchIn(p.body, search) || searchIn(p.title, search)) ? p : null);
}