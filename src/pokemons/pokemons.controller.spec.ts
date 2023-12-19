import { Test, TestingModule } from '@nestjs/testing';
import { PokemonsController } from './pokemons.controller';
import { PrismaService } from '../database/prisma.service';
import { PokemonsService } from './pokemons.service';
import { CreatePokemonDto } from './dto/createPokemon.dto';
import { Pokemon } from '@prisma/client';

describe('PokemonsController', () => {
  let controller: PokemonsController;
  let service: PokemonsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PokemonsController],
      providers: [PrismaService, PokemonsService],
    }).compile();

    controller = module.get<PokemonsController>(PokemonsController);
    service = module.get<PokemonsService>(PokemonsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('create new pokemon', async () => {
    const createPokemon: CreatePokemonDto = {
      name: 'Ivysaur',
      pokedexNumber: 2000,
      imgName: '2',
      generation: 1,
      type1: 'grass',
      weather1: 'Sunny/clear',
      statTotal: 422,
      atk: 151,
      def: 151,
      sta: 120,
      cp40: 1552,
      cp39: 1529,
    };

    const pokemonAdded: Pokemon = {
      id: 1,
      name: 'Ivysaur',
      pokedexNumber: 2000,
      imgName: '2',
      generation: 1,
      evolutionStage: '2',
      evolved: 0,
      familyID: 1,
      crossGen: 0,
      type1: 'grass',
      type2: 'poison',
      weather1: 'Sunny/clear',
      weather2: 'Cloudy',
      statTotal: 422,
      atk: 151,
      def: 151,
      sta: 120,
      legendary: 0,
      aquireable: 1,
      spawns: 1,
      regional: 0,
      raidable: 0,
      hatchable: 0,
      shiny: 0,
      nest: 0,
      new: 0,
      notGettable: 0,
      futureEvolve: 0,
      cp40: 1552,
      cp39: 1529,
      createdAt: new Date('2023-12-18T18:40:31.896Z'),
      updatedAt: new Date('2023-12-18T18:40:31.608Z'),
    };

    jest.spyOn(service, 'createPokemon').mockResolvedValue(pokemonAdded);

    const result = await controller.addPokemon(createPokemon);
    expect(result).toBe(pokemonAdded);
  });
});
