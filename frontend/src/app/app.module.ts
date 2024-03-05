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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import {NgxTranslateModule} from "./translate/ngx-translate.module";
import { FaqComponent } from './faq/faq.component';
import {MatExpansionModule} from "@angular/material/expansion";
import { FilterComponent } from './gallery/filter/filter.component';
import {JsonPipe} from "@angular/common";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatBottomSheet, MatBottomSheetModule, MatBottomSheetRef} from "@angular/material/bottom-sheet";
import {MatListModule} from "@angular/material/list";
import {MatDialogModule} from "@angular/material/dialog";
import { ImpressumComponent } from './impressum/impressum.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactComponent,
    FooterComponent,
    HomeComponent,
    GalleryComponent,
    FaqComponent,
    FilterComponent,
    ImpressumComponent
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
    MatExpansionModule,
    ReactiveFormsModule,
    MatCardModule,
    NgxTranslateModule,
    FormsModule,
    MatCheckboxModule,
    MatListModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
