import {Document} from 'mongoose';
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {ItemType} from './types/item-type.enum';
import {Item} from './types/item.interface';

@Schema({
  collection: 'items',
  timestamps: true
})
export class ItemModel extends Document implements Item {
  @Prop({
    required: true
  })
  public title: string;

  @Prop({
    default: ''
  })
  public description?: string;

  @Prop({
    default: []
  })
  public listsIds?: string[];

  @Prop({
    default: []
  })
  public consistsOfItemsIds?: string[];

  @Prop({
    default: null
  })
  public deadline: string;

  @Prop({
    required: true
  })
  public type: ItemType;
}

export const ItemSchema = SchemaFactory.createForClass(ItemModel);
