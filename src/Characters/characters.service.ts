import { Injectable } from '@nestjs/common';

@Injectable()
export class CharactersService {
  getCharacters(): {
    id: number;
    name: string;
    age: number;
    alterEgo?: string;
    status: 'Alive' | 'Dead' | 'Unknown';
    image: string;
  }[] {
    return [
      {
        id: 1,
        alterEgo: 'Invincible',
        name: 'Mark Grayson',
        age: 500,
        status: 'Alive',
        image: 'src/Characters/imgs/mark.jpg',
      },
      {
        id: 2,
        alterEgo: 'Omniman',
        name: 'Nolan Grayson',
        age: 2000,
        status: 'Alive',
        image: 'src/Characters/imgs/omaniman.jpg',
      },
    ];
  }
}
