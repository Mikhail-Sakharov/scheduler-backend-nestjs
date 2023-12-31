import {Module} from '@nestjs/common';
import {ListsController} from './lists.controller';
import {ListsService} from './lists.service';
import {MongooseModule} from '@nestjs/mongoose';
import {ListModel, ListSchema} from './list.model';
import {ListsRepository} from './lists.repository';
import {ItemsModule} from 'src/items/items.module';

@Module({
  imports: [
    ItemsModule,
    MongooseModule.forFeature([
      {name: ListModel.name, schema: ListSchema}
    ])
  ],
  controllers: [ListsController],
  providers: [ListsService, ListsRepository]
})
export class ListsModule {}
