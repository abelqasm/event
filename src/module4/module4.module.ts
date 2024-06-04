import { Module } from '@nestjs/common';
import { Module4Service } from './module4.service';


@Module({
  providers: [Module4Service],
})
export class Module4Module {}
