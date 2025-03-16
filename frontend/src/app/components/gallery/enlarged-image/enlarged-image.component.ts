/**
 * Component for displaying the enlarged image as modal.
 * Provides a button to open new tab with instagram post.
 * Provides a button for closing the dialog.
 */
import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Media} from "../../../interfaces/media.interface";

@Component({
  selector: 'app-enlarged-image',
  templateUrl: './enlarged-image.component.html',
  styleUrls: ['./enlarged-image.component.css']
})
export class EnlargedImageComponent implements OnInit {

  constructor( public enlargedImageRef: MatDialogRef<EnlargedImageComponent>,
               @Inject(MAT_DIALOG_DATA) public data: Media) { }

  ngOnInit(): void {}

  /**
   * Opens the Instagram page associated with the image in a new tab.
   */
  openInstagram(): void {
    window.open(this.data.permalink, "_blank");
  }

  /**
   * Closes the enlarged image dialog.
   */
  closeEnlargedImage(): void {
    this.enlargedImageRef.close();
  }
}
