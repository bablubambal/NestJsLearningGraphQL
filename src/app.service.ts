import { Injectable } from '@nestjs/common';
import { Post } from './models/post.model';
import axios from 'axios';
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  check(){
    return {
      'Welcome to the World!' : 'MY MESSAGe'
    }
  }
  async findAll(): Promise<Post[]> {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data; // Transform this as needed to match your Post model
  }
  
}
