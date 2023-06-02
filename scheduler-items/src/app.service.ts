import {Injectable} from '@nestjs/common';
import {ItemRepository} from './item.repository';
import {ItemEntity} from './item.entity';
import {CreateItemDto} from './dto/create-item.dto';

@Injectable()
export class AppService {
  constructor(private readonly itemRepository: ItemRepository) {}

  public async createItem(dto: CreateItemDto) {
    const itemEntity = new ItemEntity(dto);
    return await this.itemRepository.create(itemEntity);
  }
}
