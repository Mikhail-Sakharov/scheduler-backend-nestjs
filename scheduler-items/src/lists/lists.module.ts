import {Module} from '@nestjs/common';
import {ListsController} from './lists.controller';
import {ListsService} from './lists.service';
import {MongooseModule} from '@nestjs/mongoose';
import {ListModel, ListSchema} from './list.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: ListModel.name, schema: ListSchema}
    ])
  ],
  controllers: [ListsController],
  providers: [ListsService]
})
export class ListsModule {}
