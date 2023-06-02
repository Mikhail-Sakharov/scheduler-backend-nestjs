import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ConfigModule} from '@nestjs/config';
import {ENV_FILE_PATH} from 'app.constant';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      envFilePath: ENV_FILE_PATH,
      load: []
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
