import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    const postsResp = fetch('https://jsonplaceholder.typicode.com/posts');
    const photosResp = fetch('https://jsonplaceholder.typicode.com/photos');

    const [postsResult, photosResult] = await Promise.all([postsResp, photosResp]);

    let posts = await postsResult.json();
    const photos = await photosResult.json();

    posts = posts.map((p, i) => ({ ...p, url: photos[i].url }))

    this.setState({ posts })
  }

  render() {
    const { posts } = this.state;
    return (
      <section className='container'>
        <div className='posts'>
          {posts.map(p =>
            <div key={p.id} className='post-card'>
              <img src={p.url} alt={p.title} />
              <div className='post-content'>
                <h4>{p.title}</h4>
                <p>{p.body}</p>
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default App;
