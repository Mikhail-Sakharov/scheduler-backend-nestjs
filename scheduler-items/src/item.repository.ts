import {ItemEntity} from './item.entity';
import {CRUDRepository} from './types/crud-repository.interface';
import {Item} from './types/item.interface';
import {ItemModel} from './item.model';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';

export class ItemRepository implements CRUDRepository<ItemEntity, string, Item> {
  constructor(
    @InjectModel(ItemModel.name) private readonly itemModel: Model<ItemModel>
  ) {}

  public async create(item: ItemEntity): Promise<Item> {
    return await this.itemModel.create(item.toObject());
  }

  public async findById(id: string): Promise<Item> {
    return await this.itemModel.findById(id);
  }

  public async update(id: string, item: ItemEntity): Promise<Item> {
    return await this.itemModel.findByIdAndUpdate(id, item.toObject(), {new: true});
  }

  public async destroy(id: string): Promise<void> {
    return await this.itemModel.findByIdAndDelete(id);
  }
}
