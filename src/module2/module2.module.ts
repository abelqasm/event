import { Module } from '@nestjs/common';
import { Module2Service } from './module2.service';

@Module({
  providers: [Module2Service],
})
export class Module2Module {}
