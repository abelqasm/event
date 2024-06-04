import { Module } from '@nestjs/common';
import { Module4Service } from './module4.service';
import { Module4Controller } from './module4.controller';

@Module({
  controllers: [Module4Controller],
  providers: [Module4Service],
})
export class Module4Module {}
