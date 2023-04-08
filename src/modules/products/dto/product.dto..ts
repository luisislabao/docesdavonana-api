import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
export class ProductDTO {
  @Field()
  id: string;

  @FilterableField()
  name:string

  @Field()
  quantity:number

  @Field()
  type:string

  @Field()
  price:number

}
