import { Injectable } from '@nestjs/common';
//
@Injectable()
export class MissionService {
  private readonly missions = [
    { id: 1, codename: 'OPERATION_STORM', status: 'ACTIVE' },
    { id: 2, codename: 'SILENT_SNAKE', status: 'COMPLETED' },
    { id: 3, codename: 'RED_DAWN', status: 'FAILED' },
    { id: 4, codename: 'BLACKOUT', status: 'ACTIVE' },
    { id: 5, codename: 'ECHO_FALLS', status: 'COMPLETED' },
    { id: 6, codename: 'GHOST_RIDER', status: 'COMPLETED' },
  ];

  getSummary(): string[] {
    const sumofactivestatus = this.missions.filter(
      (mission) => mission.status === 'ACTIVE',
    ).length;
    const sumofcompletedstatus = this.missions.filter(
      (mission) => mission.status === 'COMPLETED',
    ).length;
    const sumoffailedstatus = this.missions.filter(
      (mission) => mission.status === 'FAILED',
    ).length;
    return [
      `ACTIVE: ${sumofactivestatus}`,
      `COMPLETED: ${sumofcompletedstatus}`,
      `FAILED: ${sumoffailedstatus}`,
    ];
  }
}
