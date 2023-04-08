import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  @Field()
  id: string;

  @Field()
  name:string

  @Field()
  quantity:number

  @Field()
  type:string

  @Field()
  price:number
}
