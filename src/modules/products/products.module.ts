import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { ProductDTO } from './dto/product.dto.';
import { Product } from './entities/product.entity';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';


@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      // import the NestjsQueryTypeOrmModule to register the entity with typeorm
      // and provide a QueryService
      services:[ProductsService],
      imports: [NestjsQueryTypeOrmModule.forFeature([Product])],
      // describe the resolvers you want to expose
      resolvers: [{ DTOClass: ProductDTO, EntityClass: Product,CreateDTOClass:CreateProductInput,UpdateDTOClass:UpdateProductInput }],
    }),
  ],


  providers: [ ProductsService]
})
export class ProductsModule {}
