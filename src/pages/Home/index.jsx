import './styles.css';
import { Component } from "react";

import { PrimaryButton } from '../../components/PrimaryButton';
import { TextInput } from '../../components/TextInput';
import { filterPosts } from '../../funcs/filterPosts';
import { PostGrid } from '../../components/PostGrid';
import { loadPosts } from '../../funcs/loadPosts';

export class Home extends Component {
    state = {
        postsPerPage: 2,
        pageIndex: 0,
        pagePosts: [],
        allPosts: [],
        search: ''
    }

    componentDidMount() {
        this.loadPosts();
    }

    async loadPosts() {
        const { pageIndex, postsPerPage } = this.state;
        const posts = await loadPosts();

        this.setState({
            pagePosts: posts.slice(pageIndex, postsPerPage),
            allPosts: posts
        })
    }

    loadMorePosts() {
        let {
            postsPerPage,
            pageIndex,
            pagePosts,
            allPosts,
        } = this.state;

        pageIndex++;

        const start = (pageIndex * postsPerPage);
        const end = (pageIndex + 1) * postsPerPage;
        pagePosts.push(...allPosts.slice(start, end));

        this.setState({
            pageIndex,
            pagePosts
        });
    }

    handleInputSearchChange = (e) => this.setState({ search: e.target.value });

    render() {
        let { pagePosts, postsPerPage, allPosts, search } = this.state;
        
        const textInputProps = {
            onChange: this.handleInputSearchChange,
            placeholder: 'Type your search...',
            type: 'search',
            value: search,
        }
        
        const isSearchMode = !!search;

        if (isSearchMode) {
            pagePosts = filterPosts(allPosts, search);
        }

        const disableButton = !(pagePosts.length + postsPerPage <= allPosts.length);

        return (
            <section className="container">
                <div className='search-container'>
                    {isSearchMode && <h1>Searching... {search}</h1>}
                    <TextInput {...textInputProps} />
                </div>

                {
                    pagePosts.length ?
                        <PostGrid posts={pagePosts} />
                        :
                        <p>Não há posts com: "{search}"</p>
                }

                {
                    !isSearchMode &&
                    <div className='flex justcenter'>
                        <PrimaryButton disabled={disableButton} text='More posts' onClick={this.loadMorePosts} />
                    </div>
                }
            </section>
        )
    }
}