import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class SampleResolver {
  @Query(() => String)
  hello(): string {
    return 'Hello World!';
  }
}
