import { Test, TestingModule } from '@nestjs/testing';
import { PokemonsController } from './pokemons.controller';
import { PrismaService } from '../database/prisma.service';
import { PokemonsService } from './pokemons.service';
import { CreatePokemonDto } from './dto/createPokemon.dto';
import { Pokemon } from '@prisma/client';
import { UpdatePokemonDto } from './dto/updatePokemon.dto';

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

  it('should create new pokemon', async () => {
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

  it('should update a Pokemon', async () => {
    const pokemonId = 2;
    const updatePokemonDto: UpdatePokemonDto = {
      type1: 'flying',
    };

    const updatedPokemon: Pokemon = {
      id: 2,
      name: 'Ivysaur',
      pokedexNumber: 2,
      imgName: '2',
      generation: 1,
      evolutionStage: '2',
      evolved: 0,
      familyID: 1,
      crossGen: 0,
      type1: 'flying',
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
      updatedAt: new Date(),
    };

    jest.spyOn(service, 'updatePokemon').mockResolvedValue(updatedPokemon);

    const result = await controller.updatePokemon(pokemonId, updatePokemonDto);
    expect(result).toBe(updatedPokemon);
  });
  it('should delete a Pokemon', async () => {
    const pokemonId = 3;

    const deletedPokemon: Pokemon = {
      id: 101,
      name: 'Electrode',
      pokedexNumber: 101,
      imgName: '101',
      generation: 1,
      evolutionStage: '2',
      evolved: 1,
      familyID: 45,
      crossGen: 0,
      type1: 'electric',
      type2: null,
      weather1: 'Rainy',
      weather2: null,
      statTotal: 472,
      atk: 173,
      def: 179,
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
      cp40: 1900,
      cp39: 1873,
      createdAt: new Date('2023-12-18T18:40:31.896Z'),
      updatedAt: new Date('2023-12-18T18:40:31.616Z'),
    };

    jest.spyOn(service, 'deletePokemon').mockResolvedValue(deletedPokemon);

    const result = await controller.deletePokemon(pokemonId);
    expect(result).toBe(deletedPokemon);
  });
  it('should get a Pokemon by id', async () => {
    const pokemonId = 101;

    const pokemon: Pokemon = {
      id: 100,
      name: 'Voltorb',
      pokedexNumber: 100,
      imgName: '100',
      generation: 1,
      evolutionStage: '1',
      evolved: 0,
      familyID: 45,
      crossGen: 0,
      type1: 'electric',
      type2: null,
      weather1: 'Rainy',
      weather2: null,
      statTotal: 303,
      atk: 109,
      def: 114,
      sta: 80,
      legendary: 0,
      aquireable: 1,
      spawns: 1,
      regional: 0,
      raidable: 0,
      hatchable: 0,
      shiny: 0,
      nest: 1,
      new: 0,
      notGettable: 0,
      futureEvolve: 0,
      cp40: 857,
      cp39: 845,
      createdAt: new Date('2023-12-18T18:40:31.896Z'),
      updatedAt: new Date('2023-12-18T18:40:31.608Z'),
    };

    jest.spyOn(service, 'findPokemonsById').mockResolvedValue(pokemon);

    const result = await controller.getPokemonsById(pokemonId);
    expect(result).toBe(pokemon);
  });
});
