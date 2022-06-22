import React from 'react';
import { Link } from 'react-router-dom';
import {BlogPost} from '../global/types';

type BlogListProps = {
    blogs: BlogPost[] | undefined,
    title: string
};

const BlogList = ({blogs, title}: BlogListProps) => {
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs && blogs.map(blog => (
                <div className="blog-preview" key={blog.Id}>
                    <Link to={`/blogs/${blog.Id}`}>
                        <h2>{blog.Title}</h2>
                        <p>{blog.Summary}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default BlogList;