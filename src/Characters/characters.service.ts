import { Injectable } from '@nestjs/common';

@Injectable()
export class CharactersService {
  getCharacters(): {
    id: number;
    name: string;
    age: number;
    status: 'Alive' | 'Dead' | 'Unknown';
    image: string;
  }[] {
    return [
      {
        id: 1,
        name: 'Mark Grayson',
        age: 500,
        status: 'Alive',
        image: 'src/Characters/imgs/mark.jpg',
      },
    ];
  }
}
