import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class JsonApiService {
  async fetchData() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
  }
}
