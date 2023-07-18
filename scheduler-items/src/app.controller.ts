import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query} from '@nestjs/common';
import {AppService} from './app.service';
import {CreateItemDto} from './dto/create-item.dto';
import {fillObject} from 'common/helpers';
import {ItemRdo} from './rdo/item.rdo';
import {UpdateItemDto} from './dto/update-item.dto';
import {GetItemsQuery} from './query/get-items.query';

@Controller('items')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // СОЗДАНИЕ ЭЛЕМЕНТА
  @Post('')
  @HttpCode(HttpStatus.CREATED)
  public async createItem(
    @Body() dto: CreateItemDto
  ) {
    const item = await this.appService.createItem(dto);
    return fillObject(ItemRdo, item);
  }

  // ПОЛУЧЕНИЕ ЭЛЕМЕНТОВ
  @Get('')
  @HttpCode(HttpStatus.OK)
  public async getItems(
    @Query() query?: GetItemsQuery
  ) {
    const items = await this.appService.findMany(query);
    return fillObject(ItemRdo, items);
  }

  // ОБНОВЛЕНИЕ ЭЛЕМЕНТА
  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  public async updateItem(
    @Param('id') id: string,
    @Body() dto: UpdateItemDto
  ) {
    return await this.appService.updateItem(id, dto);
  }

  // УДАЛЕНИЕ ЭЛЕМЕНТА
  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  public async deleteItem(
    @Param('id') id: string
  ) {
    return await this.appService.deleteItem(id);
  }
}
