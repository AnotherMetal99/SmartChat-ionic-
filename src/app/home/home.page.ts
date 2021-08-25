import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nu = 0;
  onChangeText(){
   this.nu += 1;
  }
  onChangeText1(){
    this.nu -= 1;
   }

  constructor() {}

}
