import {Injectable} from '@nestjs/common';
import {ItemRepository} from './item.repository';
import {ItemEntity} from './item.entity';
import {CreateItemDto} from './dto/create-item.dto';
import {UpdateItemDto} from './dto/update-item.dto';
import {GetItemsQuery} from './query/get-items.query';

@Injectable()
export class AppService {
  constructor(private readonly itemRepository: ItemRepository) {}

  public async createItem(dto: CreateItemDto) {
    const itemEntity = new ItemEntity(dto);
    return await this.itemRepository.create(itemEntity);
  }

  public async findMany(query?: GetItemsQuery) {
    return await this.itemRepository.find(query);
  }

  public async updateItem(id: string, dto: UpdateItemDto) {
    const existingItem = await this.itemRepository.findById(id);
    const itemEntity = new ItemEntity({
      ...existingItem,
      ...dto
    });
    return await this.itemRepository.update(id, itemEntity);
  }

  public async deleteItem(id: string) {
    return await this.itemRepository.destroy(id);
  }
}
