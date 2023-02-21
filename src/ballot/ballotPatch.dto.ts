import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateBallotPatchDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsOptional()
  name: string;

  @IsOptional()
  active: boolean;
}
