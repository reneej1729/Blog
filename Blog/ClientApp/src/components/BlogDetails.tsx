import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { BlogPost } from '../global/types';
import useFetch from './useFetch';

type BlogDetailParam = {
    id: string
};

const BlogDetails = () => {
    const { id } = useParams<BlogDetailParam>();
    const { data: blog, isPending, error } = useFetch<BlogPost>('/blog/' + id);
    const history = useHistory();

    const handleClick = () => {
        // TODO: update to use useFetch for these calls
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
                <h2>{blog.title}</h2>
                <p>Written by {blog.author.name}</p>
                <div>{blog.body}</div>
                <button onClick={handleClick}>Delete</button>
            </article>}
        </div>
    );
};

export default BlogDetails;