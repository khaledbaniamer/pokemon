import {
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreatePokemonDto } from './dto/createPokemon.dto';
import { UpdatePokemonDto } from './dto/updatePokemon.dto';

@Injectable()
export class PokemonsService {
  constructor(private prisma: PrismaService) {}

  async findAllPokemons(): Promise<any> {
    return this.prisma.pokemon.findMany();
  }
  async findPokemonsById(pokemonId: number): Promise<any> {
    return this.isPokemonExist(pokemonId);
  }
  async createPokemon(pokemonData: CreatePokemonDto): Promise<any> {
    try {
      return this.prisma.pokemon.create({ data: pokemonData });
    } catch (error) {
      return `createPokemon method error : ${error}`;
    }
  }
  async updatePokemon(
    pokemonId: number,
    pokemonData: UpdatePokemonDto,
  ): Promise<any> {
    await this.isPokemonExist(pokemonId);
    return this.prisma.pokemon.update({
      where: { id: pokemonId },
      data: pokemonData,
    });
  }
  async deletePokemon(pokemonId: number): Promise<any> {
    await this.isPokemonExist(pokemonId);
    return this.prisma.pokemon.delete({
      where: {
        id: pokemonId,
      },
    });
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
