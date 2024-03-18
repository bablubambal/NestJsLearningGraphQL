// import { Field, ObjectType, ID } from '@nestjs/graphql';

// @ObjectType()
// export class Post {
//   @Field(type => ID)
//   id: number;

//   @Field()
//   title: string;

//   @Field({ nullable: true })
//   content?: string;
// }

// import { ObjectType, Field, ID } from '@nestjs/graphql';

// @ObjectType()
// export class Post {
//   @Field(() => ID)
//   id: number;

//   @Field()
//   title: string;

//   // If this is missing, you need to add it
//   @Field({ nullable: true }) // Use nullable true if the field can be null
//   body?: string;
// }


import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Post {
  @Field(() => Int)
  userId: number;

  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field()
  body: string;
}
