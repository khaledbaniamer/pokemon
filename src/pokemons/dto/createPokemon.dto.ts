// pokemon.dto.ts
import { IsInt, IsString, IsOptional, IsNotEmpty } from 'class-validator';

export class CreatePokemonDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsInt()
  pokedexNumber: number;

  @IsNotEmpty()
  @IsString()
  imgName: string;

  @IsNotEmpty()
  @IsInt()
  generation: number;

  @IsString()
  @IsOptional()
  evolutionStage?: string;

  @IsInt()
  @IsOptional()
  evolved?: number;

  @IsInt()
  @IsOptional()
  familyId?: number;

  @IsInt()
  @IsOptional()
  crossGen?: number;

  @IsNotEmpty()
  @IsString()
  type1: string;

  @IsString()
  @IsOptional()
  type2?: string;

  @IsNotEmpty()
  @IsString()
  weather1: string;

  @IsString()
  @IsOptional()
  weather2?: string;

  @IsNotEmpty()
  @IsInt()
  statTotal: number;

  @IsNotEmpty()
  @IsInt()
  atk: number;

  @IsNotEmpty()
  @IsInt()
  def: number;

  @IsNotEmpty()
  @IsInt()
  sta: number;

  @IsInt()
  @IsOptional()
  legendary?: number;

  @IsInt()
  @IsOptional()
  aquireable?: number;

  @IsInt()
  @IsOptional()
  spawns?: number;

  @IsInt()
  @IsOptional()
  regional?: number;

  @IsInt()
  @IsOptional()
  raidable?: number;

  @IsInt()
  @IsOptional()
  hatchable?: number;

  @IsInt()
  @IsOptional()
  shiny?: number;

  @IsInt()
  @IsOptional()
  nest?: number;

  @IsInt()
  @IsOptional()
  new?: number;

  @IsInt()
  @IsOptional()
  notGettable?: number;

  @IsInt()
  @IsOptional()
  futureEvolve?: number;

  @IsInt()
  cp40: number;

  @IsInt()
  cp39: number;
}
