
import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  private posts = [];

  createPost(title: string, content: string) {
    const post = { id: Date.now(), title, content };
    this.posts.push(post);
    return post;
  }

  getPosts() {
    return this.posts;
  }
}
