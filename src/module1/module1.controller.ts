import { Controller } from '@nestjs/common';
import { Module1Service } from './module1.service';

@Controller('module1')
export class Module1Controller {
  constructor(private readonly module1Service: Module1Service) {}
}
