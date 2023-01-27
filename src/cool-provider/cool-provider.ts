import { Injectable } from '@nestjs/common';

@Injectable()
export class CoolProvider {
  fromProvider() { 
    return 'Hi from provider 👋🏽';
  }
}
