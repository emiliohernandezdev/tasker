import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
  providers: [TeamService]
})
export class TeamComponent implements OnInit {
  id:any = "";
  team:any = {};
  constructor(private activated: ActivatedRoute, private ts: TeamService) { 
    this.id = this.activated.snapshot.params.id;
    this.ts.getTeam(this.id).subscribe((t) => {
      this.team = t.team
    })
  }

  ngOnInit() {
  }

}
