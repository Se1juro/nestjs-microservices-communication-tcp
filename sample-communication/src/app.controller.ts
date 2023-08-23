import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern } from '@nestjs/microservices';
import { CreatePostEvent } from './events/createPost.event';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('post_created')
  handlePostCreated(data: CreatePostEvent) {
    this.appService.handlePostCreated(data);
  }
}
