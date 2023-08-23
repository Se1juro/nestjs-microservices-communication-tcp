import { CreatePostDTO } from 'src/dto/createPost.dto';

export class CreatePostEvent {
  constructor(public readonly post: CreatePostDTO) {}
}
