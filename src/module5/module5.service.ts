import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class Module5Service {
  @OnEvent('myEvent', { async: true })
  async myEvent() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('------module5 after 200ms in async mode-----');
        resolve(5);
      }, 200);
    });
  }
}
