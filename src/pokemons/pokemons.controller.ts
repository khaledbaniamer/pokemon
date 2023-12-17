import { Controller, Get } from '@nestjs/common';

@Controller('pokemons')
export class PokemonsController {
    @Get()
    getPokemons(){
        return "test pokemon"
    }
}
