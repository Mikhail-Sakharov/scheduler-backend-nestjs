import {ItemType} from './item-type.enum';

export interface Item {
  _id?: string;
  createdAt?: string;
  updatedAt?: string;
  title: string;
  description?: string;
  listsIds?: string[];
  consistsOfItemsIds?: string[];
  deadline: string | null;
  type: ItemType;
}
