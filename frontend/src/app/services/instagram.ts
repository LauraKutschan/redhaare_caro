import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstagramService {

  private accessToken = 'EAAE2UgLDKIcBO5JZAHfTbldjtDESxSHNZBZB08Iy7BfG6BDtLmSAxOestObPSTrikFHNPdX6x4Ychd6NqmtyOkRnhhu0tm4GHh0Sgs8w8PXyRvZBRQpuu1hqSd07mC6qv6T4byZAtBiZAnUVEI4Cim9XUHBnz0ZBZAo3ZB2ZBYPCkrnsv6z37H1dtiPxeQR7XdE3YtrmjTcGIfHyG1gNs1nMQdJ7gMRkEZD';
  private profileId = '17841407654713323'; // ID des Business-Profils
  private fields = 'id,caption,media_type,media_url,timestamp'

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
