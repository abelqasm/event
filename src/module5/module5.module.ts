import { Module } from '@nestjs/common';
import { Module5Service } from './module5.service';


@Module({
  providers: [Module5Service],
})
export class Module5Module {}
