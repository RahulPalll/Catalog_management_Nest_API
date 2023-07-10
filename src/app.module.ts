import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyModule } from './company/company.module';
import { UsersModule } from './user/users.module';
import { ConfigModule } from '@nestjs/config';
import { FabricTypesModule } from './fabric_type/fabric-type.module';
import { AgeGroupsModule } from './age_groups/age-group.module';
import { LocationsModule } from './location/location.module';
import { CatalogsModule } from './catalog/catalogs.module';
import { ProductImagesModule } from './product_image/product-images.module';
import { CommentsModule } from './comments/comments.module';
import { MulterConfigModule } from './multer.module';
import { FilesController } from './upload/upload.controller';
import { User2Module } from './user2/user2.module';

// Import other modules here

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 3000,
      username: 'postgres',
      password: 'thunder',
      database: 'catalog_management_database',
      autoLoadEntities: true,
      synchronize: true,
    }),
    CompanyModule,
    UsersModule,
    FabricTypesModule,
    AgeGroupsModule,
    LocationsModule,
    CatalogsModule,
    ProductImagesModule,
    CommentsModule,
    MulterConfigModule,
    User2Module,

    // Add other modules here
  ],
  controllers: [AppController, FilesController],
  providers: [AppService],
})
export class AppModule {}
