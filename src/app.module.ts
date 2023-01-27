import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FishController } from './fish/fish.controller';
import { CoolProvider } from './cool-provider/cool-provider';
import { CoolModuleModule } from './cool-module/cool-module.module';

@Module({
  imports: [CoolModuleModule],
  controllers: [AppController, FishController],
  providers: [AppService, CoolProvider],
})
export class AppModule {}
