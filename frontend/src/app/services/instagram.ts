import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstagramService {

  private accessToken = 'EAAE2UgLDKIcBO2ZAp2yC2rGfKTGhZARr8zgda86fwhR061kDZAYxhvuwoq6ZAUO6Jgvo6pAiam3nZAXOwS3EBpBaq8MoXZCa8NPzylk5oQBDnopFiYoOjgoUGAXHBenZBuiJaSZCNmdr6Oajyn4ifXkmNZAatayK6L5ZBH5ZAaVeZCjmMAoJKz11J2fov3cCcDSimUObAdSYU4qAnq8oZBMkUoKU5YozhmAZDZD';
  private profileId = '17841407654713323'; // ID des Business-Profils
  private fields = 'id,caption,media_type,media_url,username,timestamp'

  constructor(private http: HttpClient) {
  }

  getBusinessProfileImages() {
    const url = `https://graph.facebook.com/${this.profileId}/media?access_token=${this.accessToken}`;
    return this.http.get(url);
  }

  getImageData(media: any) {
    const url = `https://graph.facebook.com/${media}?fields=${this.fields}&access_token=${this.accessToken}`;
    return this.http.get(url);
  }

  extractImageUrls(response: any): string[] {
    const imageUrls: string[] = [];
    if (response && response.data && response.data.length > 0) {
      response.data.forEach((media: any) => {
        this.getImageData(media.id).subscribe((res: any) => {
          console.log(res);
          if (res.media_type === 'IMAGE') { // Überprüfen, ob das Medium ein Bild ist
            console.log('HIER BIN ICH JETZT :  ' + res.media_url);
            imageUrls.push(res.media_url); // Extrahieren der Bild-URL und Hinzufügen zum Array
          }
        },  error => {console.log(error)});
      });
    }
    return imageUrls;
  }
}
