import { Module } from '@nestjs/common';
import { Module5Service } from './module5.service';
import { Module5Controller } from './module5.controller';

@Module({
  controllers: [Module5Controller],
  providers: [Module5Service],
})
export class Module5Module {}
