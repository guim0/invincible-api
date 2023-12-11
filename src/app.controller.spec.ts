import { Test, TestingModule } from '@nestjs/testing';
import { CharactersController } from './Characters/characters.controller';
import { CharactersService } from './Characters/characters.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return a Welcome with a short message and a "Click Here!" link ', () => {
      expect(appController.getHello()).toBe(
        'Hey! you just found the Invincible api, to know more access: <a href="https://github.com/guim0/invincible-api" target="_blank">Click here!<a/>',
      );
    });
  });

  describe('CharacterController', () => {
    let charactersController: CharactersController;

    beforeEach(async () => {
      const app: TestingModule = await Test.createTestingModule({
        controllers: [CharactersController],
        providers: [CharactersService],
      }).compile();

      charactersController =
        app.get<CharactersController>(CharactersController);
    });
    it('should return a array with a object showing: Name, Age, Status and image url', () => {
      expect(charactersController.getCharacters()).not.toBe([]);
    });
  });
});
