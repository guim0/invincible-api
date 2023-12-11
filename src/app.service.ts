import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hey! you just found the Invincible api, to know more access: <a href="https://github.com/guim0/invincible-api" target="_blank">Click here!<a/>';
  }
}
