
// import { Resolver, Query } from '@nestjs/graphql';
// import axios from 'axios';

// @Resolver('Post')
// export class PostsResolver {
//   @Query('posts')
//   async getPosts() {
//     const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
//     return data; // Assuming the external API structure matches your GraphQL types
//   }
// }
import { AppService } from '../app.service';

import { Resolver, Query } from '@nestjs/graphql';
import { Post } from '../models/post.model' // Import the GraphQL type

@Resolver(of => Post)
export class PostsResolver {
//   constructor(private readonly postsService: PostsService) {}
constructor(private readonly appService: AppService) {}

  @Query(returns => [Post]) // Explicitly define the return type
  async getPosts() {
    return this.appService.findAll();
  }

  @Query(() => Post, { name: 'getPost' })
  async getPost() {
    // This is a placeholder for your data fetching logic
    // For demonstration, returning a fixed object based on your JSON data
    return {
      userId: 1,
      id: 2,
      title: 'qui est esse',
      body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
    };
  }
}
