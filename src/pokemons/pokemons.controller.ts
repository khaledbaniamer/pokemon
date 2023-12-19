import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UploadedFile,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PokemonsService } from './pokemons.service';
import { CreatePokemonDto } from './dto/createPokemon.dto';
import { UpdatePokemonDto } from './dto/updatePokemon.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import xlsx from 'node-xlsx';
import { FilterPokemonDto } from './dto/filterPokemon.dto';

@Controller('pokemons')
export class PokemonsController {
  constructor(private readonly pokemonService: PokemonsService) {}
  @Get()
  // @UsePipes(ValidationPipe)
  async getPokemons(@Query()
    filter: FilterPokemonDto,
  ) {
    let { page, pageCount, ...query } = filter;
    page = page ?? 1;
    pageCount = pageCount ? Number(pageCount): 10;
    // console.log(this.pokemonService.findAllPokemons());
    
    return this.pokemonService.findAllPokemons(page , pageCount , query);
  }
  @Get(':id')
  async getPokemonsById(@Param('id', ParseIntPipe) id: number) {
    return this.pokemonService.findPokemonsById(id);
  }
  @Post()
  @UsePipes(new ValidationPipe())
  async addPokemon(@Body() pokemonData: CreatePokemonDto) {
    try {
      return this.pokemonService.createPokemon(pokemonData);
    } catch (error) {
      return `createPokemon method error : ${error}`;
    }
  }
  @Put(':id')
  @UsePipes(new ValidationPipe())
  async updatePokemon(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePokemonData: UpdatePokemonDto,
  ) {
    try {
      return this.pokemonService.updatePokemon(id, updatePokemonData);
    } catch (error) {
      return;
    }
  }
  @Delete(':id')
  async deletePokemon(@Param('id', ParseIntPipe) id: number) {
    try {
      return this.pokemonService.deletePokemon(id);
    } catch (error) {}
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    // console.log(Readable.from(file.buffer));
    const x = xlsx.parse(file.buffer);
    this.pokemonService.bulkCreate(x);
  }
}
