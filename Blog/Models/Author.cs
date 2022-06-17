using System.ComponentModel.DataAnnotations;

namespace Blog.Models;

public class Author
{
    [Key]
    public int Id { get; set; }

    [Required]
    [MaxLength(150)]
    public string Name { get; set; } = default!;

    [MaxLength(500)]
    public string Description { get; set; } = default!;
}
