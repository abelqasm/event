import { Controller } from '@nestjs/common';
import { Module4Service } from './module4.service';

@Controller('module4')
export class Module4Controller {
  constructor(private readonly module4Service: Module4Service) {}
}
