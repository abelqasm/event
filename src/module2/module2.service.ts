import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class Module2Service {
  @OnEvent('myEvent')
  myEvent() {
    console.log('-------module 2 in sync mode-------');
  }
}
