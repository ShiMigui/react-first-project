export const loadPosts = async () => {
    const postSrc = fetch('https://jsonplaceholder.typicode.com/posts');
    const photoSrc = fetch('https://jsonplaceholder.typicode.com/photos');

    const [postJson, photoJson] = await Promise.all([postSrc, photoSrc]);

    const posts = await postJson.json();
    const photos = await photoJson.json();

    return posts.map((p, i) => (
        {
            url: photos[i].url,
            title: p.title,
            body: p.body,
            id: p.id
        }
    ));
}
