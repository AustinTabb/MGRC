import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';

export class CreateGamePatchDto {
  @IsNotEmpty()
  rawGId: number;
  @IsOptional()
  @IsNumber()
  ballotId: number;
  @IsOptional()
  @IsString()
  @IsUrl()
  youtubeUrl: string;
  @IsOptional()
  @IsBoolean()
  winner: boolean;
  @IsOptional()
  @IsBoolean()
  Archive: boolean;
}
