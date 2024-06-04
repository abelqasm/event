import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class Module1Service {
  @OnEvent('myEvent')
  myEvent() {
    console.log('-------module 1 in sync mode-------');
  }

  @OnEvent('myEvent')
  myEvent3() {
    setTimeout(()=>{
      console.log('-------module 1 in sync mode with timeout-------');
    }, 0)
  }
  
  @OnEvent('myEvent', {async:true})
  myEvent2() {
    console.log('-------module 1 in async mode-------');
  }

}

  

