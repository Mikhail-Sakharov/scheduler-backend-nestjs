import {Injectable} from '@nestjs/common';
import {ListsRepository} from './lists.repository';
import {CreateListDto} from 'src/dto/create-list.dto';
import {ListEntity} from './list.entity';
import {UpdateListDto} from 'src/dto/update-list.dto';
import {ItemsService} from 'src/items/items.service';
import {UpdateItemDto} from 'src/dto/update-item.dto';

@Injectable()
export class ListsService {
  constructor(
    private readonly listsRepository: ListsRepository,
    private readonly itemsService: ItemsService
  ) {}

  public async createList(dto: CreateListDto) {
    const listEntity = new ListEntity(dto);
    const list = await this.listsRepository.create(listEntity);
    return list;
  }

  public async getLists() {
    const lists = await this.listsRepository.find();
    return lists;
  }

  public async updateList(id: string, dto: UpdateListDto) {
    const list = await this.listsRepository.findById(id);
    const listEntity = new ListEntity({
      ...list,
      ...dto
    });
    await this.listsRepository.update(id, listEntity);
  }

  public async deleteList(id: string) {
    const items = await this.itemsService.findMany({
      listsIds: id
    });

    items.forEach((item) => {
      this.itemsService.updateItem(item.id, {
        listsIds: item.listsIds.filter((listId) => listId !== id)
      } as UpdateItemDto);
    });

    await this.listsRepository.destroy(id);
  }
}
