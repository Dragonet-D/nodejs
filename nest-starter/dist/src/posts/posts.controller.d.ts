import { PostsService, PostsRo } from './posts.service';
import { CreatePostDto } from './dto/create-post.dot';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    create(post: CreatePostDto): Promise<import("./posts.entity").PostsEntity>;
    findAll(query: any): Promise<PostsRo>;
    findById(id: any): Promise<import("./posts.entity").PostsEntity>;
    update(id: any, post: any): Promise<import("./posts.entity").PostsEntity>;
    remove(id: any): Promise<import("./posts.entity").PostsEntity>;
}
