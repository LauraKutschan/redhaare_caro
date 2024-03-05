import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  localStorageLang = localStorage.getItem('lang');

  constructor(public translate: TranslateService){
    translate.addLangs(['en', 'de']);
    if(this.localStorageLang) {
      translate.use(this.localStorageLang);
    } else {
      if(navigator.language.includes('de')) {
        translate.setDefaultLang('de');
        translate.use('de');
        localStorage.setItem('lang', 'de');
      } else {
        translate.setDefaultLang('en');
        translate.use('en');
        localStorage.setItem('lang', 'en');
      }
    }
  }
}
