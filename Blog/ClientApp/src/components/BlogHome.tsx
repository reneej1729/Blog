import React from 'react';
import BlogList from './BlogList';
import { BlogPost } from '../global/types';
import useFetch from './useFetch';

const BlogHome = () => {
    const { data: blogs, isPending, error } = useFetch<BlogPost[]>('blog');

    return (
        <div className="blog-home">
            {error && <div>{error} </div>}
            {isPending || (blogs === undefined)
                ? <div>Loading...</div>
                : <BlogList blogs={blogs} title="All Posts"/>
            }
        </div>
    );
};

export default BlogHome;