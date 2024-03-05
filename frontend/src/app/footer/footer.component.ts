import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  currentLang: string = this.translate.currentLang;

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'de']);
  }

  changeLanguageToGerman(): void {
    this.translate.use('de');
    this.currentLang = 'de';
    localStorage.setItem('lang', 'de');
  }

  changeLanguageToEnglish(): void {
    this.translate.use('en');
    this.currentLang = 'en';
    localStorage.setItem('lang', 'en');
  }
}
