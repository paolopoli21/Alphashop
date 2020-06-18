import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userid = ""
  password = "";
  autenticato = true;
  errorMsg = "Spiacente la userid o la password sono errati!";

  constructor() { }

  ngOnInit(): void {
  }

  gestAut(){
    if(this.userid === "Nicola" && this.password ==="123"){
      this.autenticato = true;
    }
    else{
      this.autenticato = false;
    }
  }
}
