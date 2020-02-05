import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
  providers: [TeamService]
})
export class TeamsComponent implements OnInit {
  teams = [];
  constructor(private ts: TeamService) {
    this.ts.getTeams().subscribe((tms) => {
      console.log(tms)
      this.teams = tms;
    })
   }

  ngOnInit() {
  }

}
