/**
 * Component for displaying and selecting image filters.
 * Provides a list of predefined filters for users to select.
 * Closes the dialog and emits the selected filter when a filter is clicked.
 */
import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {

  // Predefined list of image filters
  filter: string[] = ['animals', 'nature', 'fantasy', 'art'];

  constructor(private filterRef: MatDialogRef<FilterComponent>) {
  }

  /**
   * Closes the dialog and emits the selected filter.
   * @param {string} filter The selected filter.
   */
  selectFilter(filter: string): void {
    this.filterRef.close({filter: filter});
  }

  ngOnInit(): void {}
}
