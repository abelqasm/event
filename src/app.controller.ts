import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Controller()
export class AppController {
  constructor(private eventEmitter: EventEmitter2) {}

  @Get()
  async getHello() {
    console.log('----before event emitter----');
    await this.eventEmitter.emitAsync('myEvent');
    console.log('----after event emitter----');
  }
}
