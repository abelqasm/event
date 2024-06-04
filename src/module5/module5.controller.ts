import { Controller } from '@nestjs/common';
import { Module5Service } from './module5.service';

@Controller('module5')
export class Module5Controller {
  constructor(private readonly module5Service: Module5Service) {}
}
