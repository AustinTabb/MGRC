import { IsNotEmpty, IsDateString, IsOptional } from 'class-validator';

export class CreateMonthDto {
  @IsOptional()
  @IsDateString()
  startDate: string;

  @IsOptional()
  @IsDateString()
  endDate: string;

  @IsOptional()
  @IsDateString()
  votingMonth: string;

  @IsNotEmpty()
  name: string;
}
