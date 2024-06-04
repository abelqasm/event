import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class Module4Service {
  @OnEvent('myEvent', { async: true })
  async myEvent() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('-----throw error in module 4 after 150ms in async mode-----'));
      }, 150);
    });
  }
}
