import {Document} from 'mongoose';
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {List} from 'src/types/list.interface';

@Schema({
  collection: 'lists',
  timestamps: true
})
export class ListModel extends Document implements List {
  @Prop({
    required: true
  })
  public title: string;
}

export const ListSchema = SchemaFactory.createForClass(ListModel);
