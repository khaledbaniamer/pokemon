// pokemon.dto.ts
import { IsInt, IsString, IsOptional } from 'class-validator';

export class UpdatePokemonDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsInt()
  pokedexNumber: number;

  @IsOptional()
  @IsString()
  imgName: string;

  @IsOptional()
  @IsInt()
  generation: number;

  @IsOptional()
  @IsString()
  evolutionStage?: string;

  @IsOptional()
  @IsInt()
  evolved?: number;

  @IsOptional()
  @IsInt()
  familyId?: number;

  @IsOptional()
  @IsInt()
  crossGen?: number;

  @IsOptional()
  @IsString()
  type1: string;

  @IsString()
  @IsOptional()
  type2?: string;

  @IsOptional()
  @IsString()
  weather1: string;


  @IsOptional()
  @IsString()
  weather2?: string;

  @IsOptional()
  @IsInt()
  statTotal: number;

  @IsOptional()
  @IsInt()
  atk: number;

  @IsOptional()
  @IsInt()
  def: number;

  @IsOptional()
  @IsInt()
  sta: number;

  @IsOptional()
  @IsInt()
  legendary?: number;

  @IsOptional()
  @IsInt()
  aquireable?: number;

  @IsOptional()
  @IsInt()
  spawns?: number;

  @IsOptional()
  @IsInt()
  regional?: number;

  @IsOptional()
  @IsInt()
  raidable?: number;

  @IsOptional()
  @IsInt()
  hatchable?: number;

  @IsOptional()
  @IsInt()
  shiny?: number;

  @IsOptional()
  @IsInt()
  nest?: number;

  @IsOptional()
  @IsInt()
  new?: number;

  @IsOptional()
  @IsInt()
  notGettable?: number;

  @IsOptional()
  @IsInt()
  futureEvolve?: number;

  @IsOptional()
  @IsInt()
  cp40: number;

  @IsOptional()
  @IsInt()
  cp39: number;
}
