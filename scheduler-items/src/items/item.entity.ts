import {Entity} from 'src/types/entity.interface';
import {ItemType} from 'src/types/item-type.enum';
import {Item} from 'src/types/item.interface';

export class ItemEntity implements Item, Entity<Item> {
  public title: string;
  public description?: string;
  public listsIds?: string[];
  public consistsOfItemsIds?: string[];
  public deadline: string;
  public type: ItemType;

  constructor(item: Item) {
    this.fillEntity(item);
  }

  toObject(): Item {
    return {...this};
  }

  fillEntity(item: Item) {
    this.title = item.title;
    this.description = item.description;
    this.listsIds = item.listsIds;
    this.consistsOfItemsIds = item.consistsOfItemsIds;
    this.deadline = item.deadline;
    this.type = item.type;
  }
}