import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsString } from 'class-validator';

export class FilterPokemonDto {
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  page: number;

  @IsOptional()
  @IsInt()
  @Type(() => Number)
  pageCount: number;

  @IsOptional()
  @IsInt()
  @Type(() => Number)
  nest: number;

  @IsOptional()
  @IsString()
  name: string;
  
  @IsOptional()
  @IsString()
  type1: string;

  @IsOptional()
  @IsInt()
  @Type(() => Number)
  pokedexNumber: number;
}

export type FilterPokemonType = {
  name?: string;
  pokedexNumber?: number;
  nest?: number;
  type1?: string;
};
