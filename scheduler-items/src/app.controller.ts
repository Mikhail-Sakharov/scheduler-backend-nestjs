import {Body, Controller, HttpCode, HttpStatus, Post} from '@nestjs/common';
import {AppService} from './app.service';
import {CreateItemDto} from './dto/create-item.dto';
import {fillObject} from 'common/helpers';
import {ItemRdo} from './rdo/item.rdo';

@Controller('items')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // СОЗДАНИЕ ЭЛЕМЕНТА
  @Post()
  @HttpCode(HttpStatus.CREATED)
  public async createItem(
    @Body() dto: CreateItemDto
  ) {
    const item = await this.appService.createItem(dto);
    return fillObject(ItemRdo, item);
  }
}
