
import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { Roles } from '../common/roles.decorator';
import { RolesGuard } from '../common/roles.guard';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Post()
  createPost(@Body() body) {
    const { title, content } = body;
    return this.postsService.createPost(title, content);
  }

  @Get()
  getPosts() {
    return this.postsService.getPosts();
  }
}
