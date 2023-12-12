import { Module } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { CharactersController } from './controller/characters.controller';

@Module({
  imports: [],
  providers: [CharactersService],
  controllers: [CharactersController],
})
export class CharactersModule {}
