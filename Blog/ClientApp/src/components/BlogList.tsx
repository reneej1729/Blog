import React from 'react';
import { Link } from 'react-router-dom';
import {BlogPost} from '../global/types';

type BlogListProps = {
    blogs: BlogPost[],
    title: string
};

const BlogList = ({blogs, title}: BlogListProps) => {
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs && blogs.length > 0 && blogs.map(blog => (
                <div className="blog-preview" key={blog.id}>
                    {/* TODO: This should load a new page*/}
                    <Link to={`/posts/${blog.id}`}>
                        <h2>{blog.title}</h2>
                    </Link>
                    <p>{blog.summary}</p>
                </div>
            ))}
        </div>
    );
};

export default BlogList;