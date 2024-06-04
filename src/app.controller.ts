import { Controller, Get } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Controller()
export class AppController {
  constructor(private eventEmitter: EventEmitter2) {}


  @Get()
  async getHello() {
    return {
      urls:[
        {name:"emit", path: "/emit", description:"Emit event in sync mode"},
        {name:"emit-async", path: "/emit-async", description:"Emit event in async mode"}
      ]
    }
  }

  @Get("/emit")
  async emit() {
    console.log('----before SYNC event emitter----');
    await this.eventEmitter.emit('myEvent');
    console.log('----after SYNC event emitter----');
  }

  @Get("/emit-async")
  async emitAsync() {
    console.log('----before ASYNC event emitter----');
    await this.eventEmitter.emitAsync('myEvent');
    console.log('----after ASYNC event emitter----');
  }
}
