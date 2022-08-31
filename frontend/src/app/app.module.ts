import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {RouterModule} from "@angular/router";
import { ContactComponent } from './contact/contact.component';
import {MatStepperModule} from "@angular/material/stepper";
import {ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { GaleryComponent } from './galery/galery.component';
import {NgxTranslateModule} from "./translate/ngx-translate.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactComponent,
    FooterComponent,
    HomeComponent,
    GaleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatSelectModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatCardModule,
    NgxTranslateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
