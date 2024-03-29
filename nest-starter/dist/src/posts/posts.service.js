"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const posts_entity_1 = require("./posts.entity");
let PostsService = class PostsService {
    constructor(postsRepository) {
        this.postsRepository = postsRepository;
    }
    async create(post) {
        const { title } = post;
        if (!title) {
            throw new common_1.HttpException('缺少文章标题', 401);
        }
        const doc = await this.postsRepository.findOne({ where: { title } });
        if (doc) {
            throw new common_1.HttpException('文章已存在', 401);
        }
        return await this.postsRepository.save(post);
    }
    async findAll(query) {
        const qb = await (0, typeorm_2.getRepository)(posts_entity_1.PostsEntity).createQueryBuilder('post');
        qb.where('1 = 1');
        qb.orderBy('post.create_time', 'DESC');
        const count = await qb.getCount();
        const _a = query || {}, { pageNum = 1, pageSize = 10 } = _a, params = __rest(_a, ["pageNum", "pageSize"]);
        qb.limit(pageSize);
        qb.offset(pageSize * (pageNum - 1));
        const posts = await qb.getMany();
        return { list: posts, count: count };
    }
    async findById(id) {
        return await this.postsRepository.findOne(id);
    }
    async updateById(id, post) {
        const existPost = await this.postsRepository.findOne(id);
        if (!existPost) {
            throw new common_1.HttpException(`id为${id}的文章不存在`, 401);
        }
        const updatePost = this.postsRepository.merge(existPost, post);
        return this.postsRepository.save(updatePost);
    }
    async remove(id) {
        const existPost = await this.postsRepository.findOne(id);
        if (!existPost) {
            throw new common_1.HttpException(`id为${id}的文章不存在`, 401);
        }
        return await this.postsRepository.remove(existPost);
    }
};
PostsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(posts_entity_1.PostsEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PostsService);
exports.PostsService = PostsService;
//# sourceMappingURL=posts.service.js.map