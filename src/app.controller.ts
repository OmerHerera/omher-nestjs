import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CoolProvider } from './cool-provider/cool-provider';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly coolProvider: CoolProvider) {}
  // http://localhost:3000/provider
  @Get('provider')
  getProvider(): string {
    return this.coolProvider.fromProvider();
  }
  // Method decorators supported 
  // @Get()
  // @Post
  // @Patch
  // @Delete
  // And More . . . 
  // More supported decorator
  // @HttpCode(200)
  // @Headers('Cache-Control', 'none')
  
  // http://localhost:3000/
  @Get()
  getDog(): string {
    return '🐶'
  }
  // http://localhost:3000/dog
  @Get('dog')
  getDogy(): string {
    return '🐕'
  }
  // http://localhost:3000/dog/<id>
  @Get('dog/:id')
  getDogById(@Body() Body, @Param('id') id): string {
    const dogs = ['🐶', '🐕', '🐩'];
    return dogs[id];
  }
}