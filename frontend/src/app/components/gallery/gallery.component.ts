/**
 * Component for displaying a gallery of images.
 * Manages loading images from the backend service, error handling, and image filtering.
 */
import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { TranslateService } from "@ngx-translate/core";
import { EnlargedImageComponent } from "./enlarged-image/enlarged-image.component";
import { Media } from "../../interfaces/media.interface";
import { BackendService } from "../../services/backend.service";
import { FilterComponent } from "./filter/filter.component";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  savedMedia: Media[] = [];
  isLoading: boolean = false;
  error: boolean = false;

  constructor(
    private backendService: BackendService,
    private filter: MatDialog,
    private enlargedImage: MatDialog,
    private translate: TranslateService
  ) {}

  /**
   * Lifecycle hook called after Angular initializes the component.
   * Initiates the backend call to get all images.
   */
  ngOnInit(): void {
    this.backendCallGet();
  }

  /**
   * Initiates the backend call to get all images.
   * Handles loading state and error handling.
   */
  backendCallGet() {
    this.isLoading = true;
    this.backendService.getAllImages().subscribe({
      next: (res: Media[]) => {
        this.stopLoading(res);
      },
      error: (error: any) => {
        console.error(error);
        this.isLoading = false;
        this.error = true;
      }
    });
  }

  /**
   * Stops the loading state and sets the retrieved images.
   * @param {Media[]} media The array of retrieved media objects.
   */
  stopLoading(media: Media[]) {
    this.isLoading = false;
    this.savedMedia = media.reverse();
  }

  /**
   * Opens the filter dialog to apply filtering on images.
   */
  openFilter(): void {
    const filterRef = this.filter.open(FilterComponent, {
      width: '100%',
      position: { bottom: '0' }
    });
    filterRef.afterClosed().subscribe(res => {
      this.filterImages(res.filter);
    });
  }

  /**
   * Filters images based on the provided filter criteria.
   * @param {string} filter The filter criteria.
   */
  filterImages(filter: string): void {
    console.log(filter);
    // Add filtering logic here
  }

  /**
   * Enlarges the clicked image to display in a modal.
   * @param {Media} media The clicked media object.
   */
  enlargeImage(media: Media) {
    const enlargedImageRef = this.enlargedImage.open(EnlargedImageComponent, {
      width: '100vw',
      maxWidth: '1244px',
      data: {media_url: media.media_url, permalink: media.permalink}
    });
  }
}
