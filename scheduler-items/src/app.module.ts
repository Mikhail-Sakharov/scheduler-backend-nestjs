import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ConfigModule} from '@nestjs/config';
import {ENV_FILE_PATH} from 'app.constant';
import databaseConfig, {getMongoDbConfig} from './config/database.config';
import {MongooseModule} from '@nestjs/mongoose';
import envSchema from './env.schema';
import {ItemModel, ItemSchema} from './item.model';
import {ItemRepository} from './item.repository';
import {ListsModule} from './lists/lists.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      envFilePath: ENV_FILE_PATH,
      load: [databaseConfig],
      validationSchema: envSchema
    }),
    MongooseModule.forRootAsync(
      getMongoDbConfig()
    ),
    MongooseModule.forFeature([
      {name: ItemModel.name, schema: ItemSchema}
    ]),
    ListsModule
  ],
  controllers: [AppController],
  providers: [AppService, ItemRepository],
})
export class AppModule {}
