import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class TeamService {

  constructor(private http: HttpClient) { }
  httpOptions = ({
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('tasker')}`
    })
  })

  private extractData(res){
    let body = res;
    return body || [] || {};
  }

  public verify(id:any) : Observable<any>{
    return this.http.get(environment.local + 'teams/exists/' + id, this.httpOptions)
    .pipe(map(this.extractData));
  }

  public getTeams() : Observable<any>{
    return this.http.get(environment.local + 'teams', this.httpOptions)
    .pipe(map(this.extractData));
  }

  public getTeam(id:any) : Observable<any>{
    return this.http.get(environment.local + 'teams/id/'+id, this.httpOptions)
    .pipe(map(this.extractData));
  }
}
