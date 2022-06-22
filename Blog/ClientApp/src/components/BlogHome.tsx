import React from 'react';
import BlogList from './BlogList';
import { BlogPost } from '../global/types';
import useFetch from './useFetch';

const BlogHome = () => {
    const { data: blogs, isPending, error } = useFetch<BlogPost[]>('blog');

    return (
        <div className="blog-home">
            <BlogList blogs={blogs} title="All Posts"/>
            {error && <div>{error} </div>}
            {isPending && <div>Loading...</div>}
        </div>
    );
};

export default BlogHome;