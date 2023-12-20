import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePokemonDto } from './dto/createPokemon.dto';
import { UpdatePokemonDto } from './dto/updatePokemon.dto';
import { Pokemon, Prisma } from '@prisma/client';
import { FilterPokemonType } from './dto/filterPokemon.dto';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class PokemonsService {
  constructor(private prisma: PrismaService) {}

  async findAllPokemons(
    page: number,
    pageCount: number,
    filter: FilterPokemonType,
  ): Promise<Pokemon[]> {
    const skip = (page - 1) * pageCount;
    const take = pageCount;
    return this.prisma.pokemon.findMany({ where: filter, skip:skip, take:take });
  }
  async findPokemonsById(pokemonId: number): Promise<Pokemon> {
    return this.isPokemonExist(pokemonId);
  }
  async createPokemon(pokemonData: CreatePokemonDto): Promise<Pokemon> {
    return await this.prisma.pokemon.create({ data: pokemonData });
  }
  async updatePokemon(
    pokemonId: number,
    pokemonData: UpdatePokemonDto,
  ): Promise<Pokemon> {
    await this.isPokemonExist(pokemonId);
    return this.prisma.pokemon.update({
      where: { id: pokemonId },
      data: pokemonData,
    });
  }
  async deletePokemon(pokemonId: number): Promise<Pokemon> {
    await this.isPokemonExist(pokemonId);
    return this.prisma.pokemon.delete({
      where: {
        id: pokemonId,
      },
    });
  }

  async bulkCreate(file: { name: string; data: any[][] }[]) {
    const headers = [];
    const data = [];
    file[0].data[0].forEach((header) => {
      headers.push(header);
    });
    const test = [];
    for (let row = 1; row < file[0].data.length; row++) {
      let obj = {};
      for (let col = 0; col < headers.length; col++) {
        const key = headers[col];
        let value = file[0].data[row][col];
        if (key == 'imgName') {
          value = value.toString();
        }
        if (key == 'evolutionStage') {
          value = value?.toString();
        }
        if (key == 'updatedAt') {
          value = new Date();
        }
        obj = { ...obj, [key]: value };
      }
      test.push(obj);
    }
    await this.prisma.pokemon.createMany({ data: test });
  }

  private async isPokemonExist(id: number) {
    const pokemon = await this.prisma.pokemon.findUnique({
      where: {
        id: id,
      },
    });

    if (pokemon) {
      return pokemon;
    } else {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `Pokemon Id : ${id} Does Not found`,
        },
        HttpStatus.NOT_FOUND,
        {
          cause: 'error',
        },
      );
    }
  }


}
