export interface Author {
    id: number,
    name: string,
    description: string
}

export interface BlogPost {
    id: number,
    title: string,
    summary: string,
    author: Author,
    body: string,
    tags?: string[]
}

export interface CreateBlogPostRequest {
    Title: string,
    Summary: string,
    Body: string,
}