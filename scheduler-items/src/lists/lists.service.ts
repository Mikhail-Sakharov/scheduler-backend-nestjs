import {Injectable} from '@nestjs/common';
import {ListsRepository} from './lists.repository';
import {CreateListDto} from 'src/dto/create-list.dto';
import {ListEntity} from './list.entity';

@Injectable()
export class ListsService {
  constructor(
    private readonly listsRepository: ListsRepository
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
}
