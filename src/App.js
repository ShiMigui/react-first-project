import './App.css';
import { Component } from 'react';
import { PostCard } from './components/PostCard';

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
    let { posts } = this.state;

    posts = posts.map(p => <PostCard key={p.id} title={p.title} body={p.body} url={p.url} />)

    return (
      <section className='container'>
        <div className='posts'>
          { posts }
        </div>
      </section>
    );
  }
}

export default App;
