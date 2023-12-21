import { Module } from '@nestjs/common';
import { PokemonsModule } from './pokemons/pokemons.module';
import { PrismaModule } from './database/prisma.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ ConfigModule.forRoot(),PokemonsModule , PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
