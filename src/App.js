import './App.css';
import { Component } from 'react';

import { PostGrid } from './components/PostGrid';
import { loadPosts } from './funcs/loadPosts';

class App extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    loadPosts().then(posts => this.setState({ posts }));
  }
  
  render() {
    const { posts } = this.state;

    return (
      <section className='container'>
        <PostGrid posts={posts} />
      </section>
    );
  }
}

export default App;
