import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  messaggio = "Sono il componente welcome";

  constructor() { }

  ngOnInit(): void {
    console.log(this.messaggio);
  }

}
