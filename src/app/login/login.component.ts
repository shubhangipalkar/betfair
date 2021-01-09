import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router} from '@angular/router';
import { BetfairapiService } from '../betfairapi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string = "";
  password:string="";
  date: any;
  token:String="";
  constructor(private Betfair : BetfairapiService,private Router:Router) { }

  ngOnInit(): void {


  }

  async UserLogin(Email: any,Password: any){
    const jsonobj = {
      "email":Email,
      "password":Password,
      "date": Date
    }
    const response = await this.Betfair.Login(jsonobj);
    console.log(response)

    if(response)
    {
      this.Router.navigate(['Home']);
    }
  }
  }


