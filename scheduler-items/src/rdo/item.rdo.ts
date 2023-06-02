import {Expose, Transform} from 'class-transformer';
import {ItemType} from 'src/types/item-type.enum';

export class ItemRdo {
  @Transform(({obj}) => obj._id.toString())
  @Expose({name: '_id'})
  public id: string;

  @Expose()
  public createdAt: string;

  @Expose()
  public updatedAt: string;

  @Expose()
  public title: string;

  @Expose()
  public description: string;

  @Expose()
  public listsIds: string[];

  @Expose()
  public consistsOfItemsIds: string[];

  @Expose()
  public deadline: string | null;

  @Expose()
  public type: ItemType;
}
