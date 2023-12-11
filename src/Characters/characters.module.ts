import { Module } from '@nestjs/common';
import { CharactersController } from './characters.controller';
import { CharactersService } from './characters.service';

@Module({
  imports: [],
  providers: [CharactersService],
  controllers: [CharactersController],
})
export class CharactersModule {}
