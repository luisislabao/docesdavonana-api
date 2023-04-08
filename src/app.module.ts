import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ProductsModule } from './modules/products/products.module';

@Module({
  imports: [TypeOrmModule.forRoot(({ 
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 's6055s480',
  database: 'postgres',
  entities:["**/modules/**/entities/*.js"]
})),
  GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    sortSchema: true,

  }),
  ProductsModule,


],
  controllers: [AppController],
  providers: [AppService],


})
export class AppModule {}
