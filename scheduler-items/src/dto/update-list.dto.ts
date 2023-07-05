import {IsOptional, IsString} from 'class-validator';

export class UpdateListDto {
  @IsString()
  @IsOptional()
  public title: string;
}
