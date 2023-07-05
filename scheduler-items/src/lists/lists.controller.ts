import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post} from '@nestjs/common';
import {ListsService} from './lists.service';
import {CreateListDto} from 'src/dto/create-list.dto';
import {fillObject} from 'common/helpers';
import {ListRdo} from 'src/rdo/list.rdo';

@Controller('lists')
export class ListsController {
  constructor(
    private readonly listsService: ListsService
  ) {}

  // СОЗДАНИЕ СПИСКА
  @Post('')
  @HttpCode(HttpStatus.CREATED)
  public async createList(
    @Body() dto: CreateListDto
  ) {
    await this.listsService.createList(dto);
    const lists = await this.listsService.getLists();
    return fillObject(ListRdo, lists);
  }

  // ПОЛУЧЕНИЕ СПИСКА СПИСКОВ
  @Get('')
  @HttpCode(HttpStatus.OK)
  public async getLists() {
    const lists = await this.listsService.getLists();
    return fillObject(ListRdo, lists);
  }

  // УДАЛЕНИЕ СПИСКА
  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  public async deleteList(
    @Param('id') id: string
  ) {
    await this.listsService.deleteList(id);
  }
}
