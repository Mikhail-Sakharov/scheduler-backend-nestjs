import {Module} from '@nestjs/common';
import {ItemsService} from './items.service';
import {ItemsController} from './items.controller';
import {ItemRepository} from './item.repository';
import {MongooseModule} from '@nestjs/mongoose';
import {ItemModel, ItemSchema} from './item.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: ItemModel.name, schema: ItemSchema}
    ]),
  ],
  providers: [ItemsService, ItemRepository],
  controllers: [ItemsController],
  exports: [ItemsService]
})
export class ItemsModule {}
