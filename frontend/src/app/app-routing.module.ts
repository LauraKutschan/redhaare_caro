import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactComponent} from "./contact/contact.component";
import {HomeComponent} from "./home/home.component";
import {GalleryComponent} from "./gallery/gallery.component";
import {FaqComponent} from "./faq/faq.component";
import {ImpressumComponent} from "./impressum/impressum.component";

const routes: Routes = [
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'faq',
    component: FaqComponent
  },
  {
    path: 'impressum',
    component: ImpressumComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
