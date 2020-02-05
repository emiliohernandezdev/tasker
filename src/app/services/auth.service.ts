import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthService {

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

  public isLogged() : boolean{
    if(localStorage.getItem('tasker')) return true;
    return false;
  }

  public login(email: String, password: String) : Observable<any>{
    return this.http.post(environment.local + 'users/login', {
      email: email,
      password: password
    }, this.httpOptions).pipe(map(this.extractData));
  }

  public verify(id:any) : Observable<any>{
    return this.http.get(environment.local + 'teams/exists/' + id, this.httpOptions)
    .pipe(map(this.extractData));
  }

}
