import React, { FormEvent } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { CreateBlogPostRequest } from '../global/types';
import './CreateBlogEntry.css';

const CreateBlogEntry = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [summary, setSummary] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const blog: CreateBlogPostRequest = {
            Title:title,
            Body:body,
            Summary:summary
        };

        setIsPending(true);

        fetch(new Request('/blog', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(blog)
        })).then(() => {
            setIsPending(false);
            history.push('/');
        });
    };

    return (
        <div className='create-blog-entry'>
            <h2>Add New Blog Entry</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input 
                    type='text' 
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog Post</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <label>Summary</label>
                <textarea
                    required
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                />
                <button disabled={isPending}>
                    {isPending ? 'Adding blog entry' : 'Add entry'}
                </button>
            </form>
        </div>
    );
};

export default CreateBlogEntry;