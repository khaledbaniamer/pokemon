import { Module } from '@nestjs/common';
import { PokemonsModule } from './pokemons/pokemons.module';
import { PrismaModule } from './database/prisma.module';

@Module({
  imports: [PokemonsModule , PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
