// /demo 컴포넌트
import { Component } from '@angular/core';
import { MissionService } from '../shared/mission.service';

@Component({
    selector: 'demo',
    templateUrl: './demo.component.html'
})
export class DemoComponent
{
    // 필드
    missions: any[];

    // 생성자에 서비스 주입 
    constructor(private missionService: MissionService) {
        this.missions = this.missionService.getMissions(); 
    }
}
