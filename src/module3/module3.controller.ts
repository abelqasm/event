import { Controller } from '@nestjs/common';
import { Module3Service } from './module3.service';

@Controller('module3')
export class Module3Controller {
  constructor(private readonly module3Service: Module3Service) {}
}
