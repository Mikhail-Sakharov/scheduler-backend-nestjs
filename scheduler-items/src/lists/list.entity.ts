import {Entity} from 'src/types/entity.interface';
import {List} from 'src/types/list.interface';

export class ListEntity implements List, Entity<List> {
  public title: string;

  constructor(list: List) {
    this.fillEntity(list);
  }

  toObject(): List {
    return {...this};
  }
  fillEntity(list: List) {
    this.title = list.title;
  }
}
