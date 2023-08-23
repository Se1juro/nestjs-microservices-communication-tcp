import { Injectable } from '@nestjs/common';
import { CreatePostDTO } from './dto/createPost.dto';

@Injectable()
export class AppService {
  private readonly analytics: any[] = [];

  getHello(): string {
    return 'Hello World!';
  }

  handlePostCreated(data: CreatePostDTO) {
    console.log('handlePostCreated -- ANALYTICS', data);
    this.analytics.push({
      post: data,
      timeStamp: new Date(),
    });
  }

  getAnalytics() {
    return this.analytics;
  }
}
