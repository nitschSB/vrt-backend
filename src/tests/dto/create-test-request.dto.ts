import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsBase64, IsUUID } from 'class-validator';

export class CreateTestRequestDto {
  @ApiProperty()
  @IsString()
  readonly name: string;

  @ApiProperty()
  @IsBase64()
  readonly imageBase64: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly os: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly browser: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly viewport: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly device: string;

  @ApiProperty()
  @IsUUID()
  readonly buildId: string;
}
