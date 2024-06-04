import { Controller } from '@nestjs/common';
import { Module2Service } from './module2.service';

@Controller('module2')
export class Module2Controller {
  constructor(private readonly module2Service: Module2Service) {}
}
