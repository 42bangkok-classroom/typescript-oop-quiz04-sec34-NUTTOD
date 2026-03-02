import { Controller, Get } from '@nestjs/common';
import { MissionService } from './mission.service';

@Controller('missions/summary')
export class MissionController {
  constructor(private readonly appService: MissionService) {}

  @Get()
  getSummary(): string[] {
    return this.appService.getSummary();
  }
}
