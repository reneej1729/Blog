export interface BlogPost {
    id: number,
    title: string,
    summary: string,
    author: string,
    body: string,
    tags?: string[]
}

export interface CreateBlogPostRequest {
    Title: string,
    Summary: string,
    Body: string,
}