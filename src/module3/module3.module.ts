import { Module } from '@nestjs/common';
import { Module3Service } from './module3.service';

@Module({
  providers: [Module3Service],
})
export class Module3Module {}
