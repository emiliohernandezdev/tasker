import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ClrWizard} from "@clr/angular";
import { ClrLoadingState } from '@clr/angular';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { TeamService } from 'src/app/services/team.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService, TeamService]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  joinForm: FormGroup;
  mdOpen:boolean = false;
  loginbtnState: ClrLoadingState = ClrLoadingState.DEFAULT;
  joinBtn: ClrLoadingState = ClrLoadingState.DEFAULT;
  constructor(private fb: FormBuilder, private auth: AuthService, private toast: ToastrService,
    private router: Router) { 
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    })
    this.joinForm = this.fb.group({
      id: ['', Validators.required]
    })
  }

  ngOnInit() {
  }



  doLogin(){
    this.loginbtnState = ClrLoadingState.LOADING;
    this.auth.login(this.loginForm.controls['email'].value, this.loginForm.controls['password'].value)
    .subscribe((r) => {
      if(r.message){
        setTimeout(() =>{
          this.loginbtnState = ClrLoadingState.ERROR;
          this.toast.error(r.message, "Autenticación fallida", {
            timeOut: 3500
          })
        }, 1500)
      }else if(r.access_token){
        setTimeout(() =>{
          localStorage.setItem('tasker', r.access_token.toString());
          this.loginbtnState = ClrLoadingState.SUCCESS;
          this.toast.success("Sesión iniciada con éxito", "Autenticación exitosa", {
            timeOut: 3500
          });
          this.router.navigate(['/home']);
        }, 1500)
      }
    })
  }

}
