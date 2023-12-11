import { Controller, Get } from '@nestjs/common';
import { CharactersService } from '../characters.service';

@Controller('characters')
export class CharactersController {
  constructor(private charactersService: CharactersService) {}

  @Get('list')
  getCharacters() {
    return this.charactersService.getCharacters();
  }
}
