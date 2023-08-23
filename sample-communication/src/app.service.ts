import { Injectable } from '@nestjs/common';
import { CreatePostEvent } from './events/createPost.event';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  handlePostCreated(data: CreatePostEvent) {
    console.log('handlePostCreated - COMMUNICATIONS', data);
  }
}
