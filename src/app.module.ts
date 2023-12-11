import { Module } from '@nestjs/common';
import { CharactersModule } from './characters/characters.module';
import { CharactersService } from './characters/characters.service';

@Module({
  imports: [CharactersModule],
  controllers: [],
  providers: [CharactersService],
})
export class AppModule {}
