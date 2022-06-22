import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { BlogPost } from '../global/types';
import useFetch from './useFetch';

type BlogDetailParam = {
    id: string
};

const BlogDetails = () => {
    const { id } = useParams<BlogDetailParam>();
    const { data: blog, isPending, error } = useFetch<BlogPost>('/blogs' + id);
    const history = useHistory();

    const handleClick = () => {
        fetch(new Request('/blogs' + id, { method: 'delete' })
        ).then(() => {
            history.push('/');
        });
    };

    return (
        <div className='blog-details'>
            {isPending && <div>Loading ...</div>}
            {error && <div>{error}</div>}
            {blog && <article>
                <h2>{blog.Title}</h2>
                <p>Written by {blog.Author}</p>
                <div>{blog.Body}</div>
                <button onClick={handleClick}>Delete</button>
            </article>}
        </div>
    );
};

export default BlogDetails;