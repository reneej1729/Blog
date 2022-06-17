﻿using Blog.Models;
using Microsoft.AspNetCore.Mvc;

namespace Blog.Controllers;

public class PostController : ControllerBase
{
    private readonly BlogContext _blogContext;

    public PostController(BlogContext blogContext)
	{
        _blogContext = blogContext;
        // TODO: add in logging
    }

	[HttpGet]
	public ActionResult<IEnumerable<BlogPost>> Get()
	{
		// TODO: Add paging
		return _blogContext.BlogPosts;
	}

	[HttpPost]
	public void Post([FromBody] BlogPost blogPost)
	{
		// TODO: Make blog post repository
		_blogContext.BlogPosts.Add(blogPost);
		_blogContext.SaveChanges();
	}

	[HttpPut("{id}")]
	public void Put(int id, [FromBody] BlogPost updatedPost)
	{
		var post = _blogContext.BlogPosts
			.FirstOrDefault(post => post.Id == id);
		if (post is null) return;

		// TODO: Add mapping
		post.Title = updatedPost.Title;
		post.Author = updatedPost.Author;
		post.Body = updatedPost.Body;
		post.Summary = updatedPost.Summary;
		post.Tags = updatedPost.Tags;

		_blogContext.Update(post);
		_blogContext.SaveChanges();
	}

	[HttpDelete("{id}")]
	public void Delete(int id)
	{
		var post = _blogContext.BlogPosts
			.FirstOrDefault(post => post.Id == id);
		if (post is null) return;

		_blogContext.BlogPosts.Remove(post);
		_blogContext.SaveChanges();
	}
}

