import {IsOptional, IsString} from 'class-validator';

export class GetItemsQuery {
  @IsOptional()
  @IsString()
  public listsIds?: string;

  @IsOptional()
  @IsString()
  public deadline?: string;
}
