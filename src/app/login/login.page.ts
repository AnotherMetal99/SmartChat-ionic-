import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignUpPage } from '../sign-up/sign-up.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  signupPage(){
    this.route.navigate(['sign-up']);
  }

}
