import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class Module3Service {
  @OnEvent('myEvent', { async: true })
  async myEvent() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('------module3 after 100ms  in async mode------');
        resolve(5);
      }, 100);
    });
  }
}
