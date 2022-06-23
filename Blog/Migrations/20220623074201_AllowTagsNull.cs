using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Blog.Migrations
{
    public partial class AllowTagsNull : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string[]>(name: "Tags", table: "BlogPosts", nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string[]>(name: "Tags", table: "BlogPosts", nullable: false);
        }
    }
}
