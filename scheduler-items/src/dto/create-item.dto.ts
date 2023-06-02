import {IsEnum, IsOptional, IsString} from 'class-validator';
import {ItemType} from 'src/types/item-type.enum';

export class CreateItemDto {
  @IsString()
  public title: string;

  @IsString()
  @IsOptional()
  public description?: string;

  @IsString()
  @IsOptional()
  public listsIds?: string[];

  @IsString()
  @IsOptional()
  public consistsOfItemsIds?: string[];

  @IsString()
  public deadline: string | null;

  @IsString()
  @IsEnum(ItemType)
  public type: ItemType;
}
