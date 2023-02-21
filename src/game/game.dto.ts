import {
  IsBoolean,
  IsDataURI,
  IsNumber,
  IsString,
  IsUrl,
} from 'class-validator';

export class Game {
  @IsNumber()
  rawGIg: number;
  @IsString()
  votingMonth: string;
  @IsDataURI()
  createdAt: Date;
  @IsDataURI()
  updatedAt: Date;
  @IsUrl()
  youtubeUrl: string;
  @IsNumber()
  ballotId?: number;
  @IsBoolean()
  winnner: boolean;
  @IsBoolean()
  archive: boolean;
}
