import { Module } from '@nestjs/common';
import { Module1Service } from './module1.service';

@Module({
  providers: [Module1Service],
})
export class Module1Module {}
