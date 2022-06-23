using System.ComponentModel.DataAnnotations;

namespace Blog.Models;

public class BlogPost
{
	[Key]
	public int Id { get; set; }

	[Required]
	[MaxLength(150)]
	public string Title { get; set; } = default!;

	[MaxLength(300)]
	public string Summary { get; set; } = default!;

	public string Body { get; set; } = default!;

    [Required]
	public Author Author { get; set; } = default!;

	public string[]? Tags { get; set; }
}