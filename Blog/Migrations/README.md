# Using EF Migrations

To have ef as part of the dotnet cli run `dotnet tool install --global dotnet-ef` in the root of the Blog project.

## To create a new migration
Make your changes in the files in Models and then run `dotnet ef migrations add NewMigrationName`

## To apply the migration locally
`dotnet ef database update`

To move to a specific migration:
`dotnet ef database update MigrationName`

## To list out pending migrations
`dotnet ef migrations list`