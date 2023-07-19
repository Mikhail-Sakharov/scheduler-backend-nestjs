import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {ENV_FILE_PATH} from 'app.constant';
import databaseConfig, {getMongoDbConfig} from './config/database.config';
import {MongooseModule} from '@nestjs/mongoose';
import envSchema from './env.schema';
import {ListsModule} from './lists/lists.module';
import {ItemsModule} from './items/items.module';

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
    ListsModule,
    ItemsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
