import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { InfoPage } from '../info/info';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  navigateToInfo() {
    this.navCtrl.push(InfoPage)
  }
}
