import { Module, OnModuleInit } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { SampleResolver } from './sample/sample.resolver';
import { JsonApiService } from './json-api/json-api.service';
import { PostsResolver } from './posts/posts.resolver';

@Module({
  imports: [GraphQLModule.forRoot({
    driver: ApolloDriver, 
    autoSchemaFile: 'schema.gql',
    // installSubscriptionHandlers: true, 
    // autoSchemaFile: true,
  })],
  controllers: [AppController],
  providers: [AppService, SampleResolver, JsonApiService, PostsResolver],
    
})
export class AppModule implements OnModuleInit {

  constructor(private readonly jsonApiService: JsonApiService) {}

  async onModuleInit() {
    const data = await this.jsonApiService.fetchData();
    console.log(data);

}

}


