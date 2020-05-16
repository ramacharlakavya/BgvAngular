import { Component, OnInit } from '@angular/core';
import { LoginDto, BackgroundService } from '../background.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId:number;
  password:string;

  login_details:any;
  message:string;
  msg:any;
  check:boolean = false;
  check1:boolean = false;
  empId:number;
  
  constructor(private service:BackgroundService, private router:Router, private app1:AppComponent) { 
  }

  ngOnInit(): void {
  }
  fetchEmployee()
  {
    this.service.getlogindetails(this.empId,this.password).subscribe((data)=>{
      this.router.navigate(['app-login-sucess'])
      
    },
    error=>{
      this.msg="check your login details"
    }
    )
  }
  }
