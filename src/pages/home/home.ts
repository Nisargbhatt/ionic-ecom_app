import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductListingComponent } from '../../components/product-listing/product-listing'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  
  }
  login(){
    this.navCtrl.setRoot(ProductListingComponent,{},{animate : true, direction : 'forward'})
  }
}
  