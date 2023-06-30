import {IsOptional, IsString} from 'class-validator';

export class UpdateItemDto {
  @IsString()
  @IsOptional()
  public title: string;

  @IsString()
  @IsOptional()
  public description?: string;

  @IsString()
  @IsOptional()
  public deadline: string | null;
}
