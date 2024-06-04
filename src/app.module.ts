import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module1Module } from './module1/module1.module';
import { Module2Module } from './module2/module2.module';
import { Module3Module } from './module3/module3.module';
import { Module4Module } from './module4/module4.module';
import { Module5Module } from './module5/module5.module';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [
    Module1Module,
    Module2Module,
    Module3Module,
    Module4Module,
    Module5Module,
    EventEmitterModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
