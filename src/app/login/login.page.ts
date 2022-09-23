import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() { }

  user = {
    username: '',
    password: ''
  }

  ngOnInit() {
  }

  onSubmit(){
    console.log("USER: "+this.user.username);
    console.log("PASS: "+this.user.password);
  }

}
