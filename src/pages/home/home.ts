import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig} from "@ionic-native/admob-free";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  imagen1 = 'https://www.arqhys.com/arquitectura/fotos/arquitectura/Ciudad-de-S%C3%A3o-Paulo.jpg';
  imagen2 = 'https://ep01.epimg.net/cultura/imagenes/2018/02/14/actualidad/1518608768_102797_1518609184_noticia_normal.jpg';
  imagen3 = 'https://previews.123rf.com/images/martinm303/martinm3031209/martinm303120900045/15518605-el-golden-gate-bridge-paisaje-v%C3%ADvido-d%C3%ADas-san-francisco.jpg';
  imagen4 = 'http://image.graphic-idea.com/big/194/some-landscape-in-in-madison-wisconsin-193432.jpg';
  imagen5 = 'http://unviajecreativo.com/wp-content/uploads/2017/09/Lo-mejor-de-Nueva-Zelanda-Isla-Sur-Paisajes-16.jpg';
  imagen6 = 'https://sobreturismo.es/wp-content/uploads/noarootsi.gif';
  imagen7 = 'http://deilusionarecuerdo.files.wordpress.com/2013/01/chichen-itza.jpg';
  imagen8 = 'http://sergioariasfotografia.es/blog/wp-content/uploads/2016/12/paisaje-islandia-haifoss-sergio-arias.jpg';
  imagen9 = 'https://i.ytimg.com/vi/qUymCGqV6XA/maxresdefault.jpg';
  imagen10 = 'https://clubdeturismodigital.com/wp-content/uploads/2017/10/cataratas-iguazu.jpg';

  constructor(public navCtrl: NavController, public admob: AdMobFree) {

    this.showBanner();
  }
  showBanner() {

    let bannerConfig: AdMobFreeBannerConfig = {
      // id: 'ca-app-pub-6445334843782625~2289223123',
      isTesting: true, // Remove in production
      autoShow: true
      //id: Your Ad Unit ID goes here
    };

    this.admob.banner.config(bannerConfig);

    this.admob.banner.prepare().then(() => {
      // this.admob.banner.show();
      // success
    }).catch(e => console.log(e));

  }


  launchInterstitial() {

    let interstitialConfig: AdMobFreeInterstitialConfig = {
      isTesting: true, // Remove in production
      autoShow: true
      //id: Your Ad Unit ID goes here
    };

    this.admob.interstitial.config(interstitialConfig);

    this.admob.interstitial.prepare().then(() => {
      // success
    });

  }

}
