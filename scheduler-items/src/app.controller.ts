import {Body, Controller, Get, HttpCode, HttpStatus, Param, Patch, Post} from '@nestjs/common';
import {AppService} from './app.service';
import {CreateItemDto} from './dto/create-item.dto';
import {fillObject} from 'common/helpers';
import {ItemRdo} from './rdo/item.rdo';
import {UpdateItemDto} from './dto/update-item.dto';

@Controller('items')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // СОЗДАНИЕ ЭЛЕМЕНТА
  @Post('')
  @HttpCode(HttpStatus.CREATED)
  public async createItem(
    @Body() dto: CreateItemDto
  ) {
    await this.appService.createItem(dto);
    const items = await this.appService.findMany();
    return fillObject(ItemRdo, items);
  }

  // ПОЛУЧЕНИЕ СПИСКА
  @Get('')
  @HttpCode(HttpStatus.OK)
  public async getItems() {
    const items = await this.appService.findMany();
    return fillObject(ItemRdo, items);
  }

  // ОБНОВЛЕНИЕ ЭЛЕМЕНТА
  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  public async updateItem(
    @Param('id') id: string,
    @Body() dto: UpdateItemDto
  ) {
    await this.appService.updateItem(id, dto);
    const items = await this.appService.findMany();
    return fillObject(ItemRdo, items);
  }
}
