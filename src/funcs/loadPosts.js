export const loadPosts = async () => {
    const postsResp = fetch('https://jsonplaceholder.typicode.com/posts');
    const photosResp = fetch('https://jsonplaceholder.typicode.com/photos');

    const [postsResult, photosResult] = await Promise.all([postsResp, photosResp]);

    const posts = await postsResult.json();
    const photos = await photosResult.json();

    return posts.map((p, i) => ({ ...p, url: photos[i].url }))
}
