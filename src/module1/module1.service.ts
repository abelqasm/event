import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class Module1Service {
  @OnEvent('myEvent')
  myEvent() {
    console.log('-------module 1 in sync mode-------');
  }
}
