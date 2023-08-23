import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { CreatePostDTO } from './dto/createPost.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('post_created')
  handlePostCreated(data: CreatePostDTO) {
    return this.appService.handlePostCreated(data);
  }

  @MessagePattern({ cmd: 'get_analytics' })
  getAnalytcs() {
    return this.appService.getAnalytics();
  }
}
