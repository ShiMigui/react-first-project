import './styles.css';
import { Component } from "react";

import { loadPosts } from '../../funcs/loadPosts';
import { filterPosts } from '../../funcs/filterPosts';
import { PostGrid } from '../../components/PostGrid';
import { PrimaryButton } from '../../components/PrimaryButton';
import { TextInput } from '../../components/TextInput';

export class Home extends Component {
    state = {
        page: 0,
        posts: [],
        allPosts: [],
        postsPerPage: 2,
        searchValue: ''
    }

    componentDidMount() {
        this.loadPosts();
    }

    loadPosts = async () => {
        const { page, postsPerPage } = this.state;
        const posts = await loadPosts();

        this.setState({
            posts: posts.slice(page, postsPerPage),
            allPosts: posts
        })
    }

    loadMorePosts = () => {
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
    }

    handleInputSearchChange = (e) => {
        const { value } = e.target;
        this.setState({ searchValue: value })
    }

    render() {
        const { posts, postsPerPage, allPosts, searchValue } = this.state;

        const hasMorePosts = allPosts.length <= posts.length + postsPerPage;

        const filteredPosts = filterPosts(allPosts, searchValue, posts)

        return (
            <section className="container">
                <div className='search-container'>
                    {!!searchValue && <h1>Searching... {searchValue}</h1>}
                    <TextInput type='search' value={searchValue} onChange={this.handleInputSearchChange} />
                </div>

                {
                    filteredPosts.length > 0 ?
                        <PostGrid posts={filteredPosts} /> :
                        <p>Não há posts com: "{searchValue}"</p>
                }

                {!searchValue && (
                    <div className='flex justcenter'>
                        <PrimaryButton disabled={hasMorePosts} text='More posts' onClick={this.loadMorePosts} />
                    </div>
                )}
            </section>
        )
    }
}