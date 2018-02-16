import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductDiscriptionPage } from './product-discription';

@NgModule({
  declarations: [
    ProductDiscriptionPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductDiscriptionPage),
  ],
})
export class ProductDiscriptionPageModule {}
