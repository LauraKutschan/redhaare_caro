import { Component, OnInit } from '@angular/core';
import {InstagramService} from "../services/instagram";
import {MatBottomSheet} from "@angular/material/bottom-sheet";
import {FilterComponent} from "./filter/filter.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  imageURLs: string[] = [];

  constructor(private instagramServive: InstagramService,
              public filter: MatDialog) { }

  ngOnInit(): void {}

  serviceCall(): void {
    this.instagramServive.getBusinessProfileImages().subscribe((res) => {
        console.log(res);
        this.imageURLs = this.instagramServive.extractImageUrls(res);
      },
      error => {console.log(error)}
    );
  }

  openFilter(): void {
    const filterRef = this.filter.open(FilterComponent, {
      width: '100%',
      position: {
        bottom: '0'
      },
    });
    filterRef.afterClosed().subscribe(res => {
      this.filterImages(res.filter);
    });
  }

  filterImages(filter: string): void {
    console.log(filter);
  }
}
