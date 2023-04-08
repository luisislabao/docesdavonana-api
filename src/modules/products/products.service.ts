import { Injectable } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { QueryService } from '@nestjs-query/core';
import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';


@QueryService(Product)
export class ProductsService extends TypeOrmQueryService<Product> {
  constructor(
    @InjectRepository(Product)
    private repository: Repository<Product>
  ){
    super(repository)
  }
}
