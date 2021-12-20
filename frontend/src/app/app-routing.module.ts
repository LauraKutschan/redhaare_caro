import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "./layout/layout.component";
import {CrudComponent} from "./crud/crud.component";
import {ContactComponent} from "./contact/contact.component";
import {LikeComponent} from "./like/like.component";
import {ShareComponent} from "./share/share.component";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    pathMatch: 'full'
  },
  {
    path: "pictures",
    component: CrudComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "like",
    component: LikeComponent
  },
  {
    path: "share",
    component: ShareComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
