import './styles.css';
import { Component } from "react";

import { loadPosts } from '../../funcs/loadPosts';
import { PostGrid } from '../../components/PostGrid';
import { PrimaryButton } from '../../components/PrimaryButton';

export class Home extends Component {
    state = {
        posts: [],
        allPosts: [],
        page: 0,
        postsPerPage: 2
    }

    componentDidMount() {
        this.loadPosts();
    }

    loadPosts = async () => {
        const { page, postsPerPage } = this.state;
        const posts = await loadPosts();

        this.setState({
            posts: posts.slice(page, postsPerPage),
            allPosts: posts.slice(0, 10)
        })
    }

    loadMorePosts = () => {
        console.log("[loadMorePosts()] start()");
        let {
            page,
            postsPerPage,
            allPosts,
            posts
        } = this.state;

        page++;
        posts.push(...allPosts.slice((page * postsPerPage), ((page + 1) * postsPerPage)));

        this.setState({
            page,
            posts
        });
        console.log("[loadMorePosts()] end()");
    }
    
    render() {
        const { posts, postsPerPage, allPosts } = this.state;

        let hasMorePosts = allPosts.length <= posts.length + postsPerPage

        return (
            <section className="container">
                <PostGrid posts={posts} />
                <div className='flex justcenter'>
                    <PrimaryButton disabled={hasMorePosts} text='More posts' onClick={this.loadMorePosts} />
                </div>
            </section>
        )
    }
}