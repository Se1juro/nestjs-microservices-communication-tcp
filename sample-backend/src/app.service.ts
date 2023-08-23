import { Inject, Injectable } from '@nestjs/common';
import { CreatePostDTO } from './dto/createPost.dto';
import {
  CLIENT_ANALYTICS,
  CLIENT_COMMUNICATION,
} from './constant/clients.constant';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  private posts: any[] = [];

  constructor(
    @Inject(CLIENT_COMMUNICATION)
    private readonly communicationClient: ClientProxy,
    @Inject(CLIENT_ANALYTICS)
    private readonly analyticsClient: ClientProxy,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  createPost(post: CreatePostDTO) {
    this.posts.push(post);
    this.communicationClient.emit('post_created', post);
    this.analyticsClient.emit('post_created', post);
  }

  getAnalytics() {
    return this.analyticsClient.send({ cmd: 'get_analytics' }, {});
  }
}
