using Microsoft.EntityFrameworkCore;

namespace Blog.Models;

public class BlogContext : DbContext
{
    public BlogContext(DbContextOptions<BlogContext> options)
		: base(options) {}

	public DbSet<BlogPost> BlogPosts => Set<BlogPost>();

	public DbSet<Author> Authors => Set<Author>();
}
