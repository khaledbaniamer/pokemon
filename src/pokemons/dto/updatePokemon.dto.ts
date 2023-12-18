// pokemon.dto.ts
import { IsInt, IsString, IsOptional } from 'class-validator';

export class UpdatePokemonDto {
  @IsString()
  name: string;

  @IsInt()
  pokedexNumber: number;

  @IsString()
  imgName: string;

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

  @IsString()
  type1: string;

  @IsString()
  @IsOptional()
  type2?: string;

  @IsString()
  weather1: string;

  @IsString()
  @IsOptional()
  weather2?: string;

  @IsInt()
  statTotal: number;

  @IsInt()
  atk: number;

  @IsInt()
  def: number;

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
