import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts() {
    const resp = fetch('https://jsonplaceholder.typicode.com/posts');
    resp.then(r=>r.json()).then(posts => this.setState({ posts }));
  }

  render() {
    const { posts } = this.state;
    return (
      <div className='posts'>
        {posts.map(p =>
          <div key={p.id} className='post-card'>
            <h1>{p.title}</h1>
            <p>{p.body}</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;
