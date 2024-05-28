function searchIn(value = '', search = '') {
    return value.toLowerCase().includes(search);
}

export const filterPosts = (posts = [], value = '', ifFalse=posts) => {
    let search = value.toLowerCase().trim();

    return !!value ?
        posts.filter(p => (searchIn(p.body, search) || searchIn(p.title, search)) ? p : null) :
        ifFalse;
}