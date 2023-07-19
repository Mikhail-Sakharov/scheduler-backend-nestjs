import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query} from '@nestjs/common';
import {ItemsService} from './items.service';
import {CreateItemDto} from 'src/dto/create-item.dto';
import {fillObject} from 'common/helpers';
import {ItemRdo} from 'src/rdo/item.rdo';
import {GetItemsQuery} from 'src/query/get-items.query';
import {UpdateItemDto} from 'src/dto/update-item.dto';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  // СОЗДАНИЕ ЭЛЕМЕНТА
  @Post('')
  @HttpCode(HttpStatus.CREATED)
  public async createItem(
    @Body() dto: CreateItemDto
  ) {
    const item = await this.itemsService.createItem(dto);
    return fillObject(ItemRdo, item);
  }

  // ПОЛУЧЕНИЕ ЭЛЕМЕНТОВ
  @Get('')
  @HttpCode(HttpStatus.OK)
  public async getItems(
    @Query() query?: GetItemsQuery
  ) {
    const items = await this.itemsService.findMany(query);
    return fillObject(ItemRdo, items);
  }

  // ОБНОВЛЕНИЕ ЭЛЕМЕНТА
  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  public async updateItem(
    @Param('id') id: string,
    @Body() dto: UpdateItemDto
  ) {
    return await this.itemsService.updateItem(id, dto);
  }

  // УДАЛЕНИЕ ЭЛЕМЕНТА
  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  public async deleteItem(
    @Param('id') id: string
  ) {
    return await this.itemsService.deleteItem(id);
  }}
