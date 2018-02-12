import { Injectable } from '@angular/core';

/*
  Generated class for the ProductsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductsProvider {

 
  getProducts(){
      return [
        {
          "name": "imac 27 inch",
          "description": "3.4GHz quad-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.8GHz 8GB 2400MHz memory, configurable up to 32GB 1TB Fusion Drive1  Radeon Pro 570 with 4GB video memory Two Thunderbolt 3 ports Retina 5K 5120-by-2880 P3 display.",
          "price": 1500,
          "image": "https://s3.cashify.in/blog/wp-content/uploads/2017/06/cashify_imac_pro_1.jpg"
        },
        {
          "name": "Iphone X",
          "description": "Meet the iPhone X - the device that’s so smart that it responds to a tap, your voice, and even a glance. Elegantly designed with a large 14.73 cm (5.8) Super Retina screen and a durable front-and-back glass, this smartphone is designed to impress. What’s more, you can charge this iPhone wirelessly.",
          "price": 800,
          "image": "https://ss7.vzw.com/is/image/VerizonWireless/iphone-x-kf-device-tab-d-3-retina?$pngalpha$&scl=1&scl=2"
        },
        {
          "name": "Samsung galexy S8",
          "description": "Explore a world of endless possibilities with the Samsung Galaxy S8. Featuring the innovative Infinity Display, this smartphone offers a smooth, curved surface without sharp angles. With an array of security features, such as the Iris Scanner, Face Recognition and a fingerprint sensor, the Galaxy S8 keeps all your private data safe from unauthorized access. Its 10nm processor, along with 4 GB of RAM, delivers a power-packed performance. The 8 MP front camera and the 12 MP rear camera further add to the Galaxy S8’s appeal.",
          "price": 1000,
          "image": "http://www.samsung.com/global/galaxy/galaxy-s8/images/gallery/galaxy-s8_gallery_front_black_s4.png"
        },
        {
          "name": "Macbook air",
          "description": "The 13-inch MacBook Air features 8GB of memory, a fifth-generation Intel Core processor, Thunderbolt 2, great built-in apps and all-day battery life.* It’s thin, light and durable enough to take everywhere you go -- and powerful enough to do everything once you get there.",
          "price": 1200,
          "image": "https://cdn.wccftech.com/wp-content/uploads/2018/01/MacBook-Air.jpg"
        },

        {
          "name": "Ipad",
          "description": "Do everything you've always done on your iPad but on a thinner, lighter device that still feels right in your hand. The iPad boasts a faster A9 chip for snappy performance when launching apps or playing games, plus videos look gorgeous on the Retina display. The Touch ID home button lets you secure your tablet with just your fingerprint.",
          "price": 1400,
          "image": "https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/i/pa/ipad/cell/ipad-cell-select-spacegray-201703?wid=470&hei=556&fmt=png-alpha&qlt=95&.v=1507581905122"
        }
    ]
  }
}


