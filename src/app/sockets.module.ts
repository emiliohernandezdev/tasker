import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocketIoModule, Socket } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';

Injectable();
export class TaskSocket extends Socket{
    constructor(){
        super({
			url: `${environment.local}tasks`,
			options: { query: `token=Bearer ${localStorage.getItem('cts')}` }
        });
    }
}

Injectable();
export class TeamSocket extends Socket{
    constructor(){
        super({
			url: `${environment.local}teams`,
			options: { query: `token=Bearer ${localStorage.getItem('cts')}` }
        });
    }
}

Injectable();
export class ProjectSocket extends Socket{
    constructor(){
        super({
			url: `${environment.local}projects`,
			options: { query: `token=Bearer ${localStorage.getItem('cts')}` }
        });
    }
}

@NgModule({
    declarations: [],
    imports: [CommonModule, SocketIoModule],
    providers: [TaskSocket, TeamSocket, ProjectSocket]
})
export class SocketsModule {}