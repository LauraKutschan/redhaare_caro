import { Component, OnInit } from '@angular/core';
import {MatBottomSheetRef} from "@angular/material/bottom-sheet";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {

  filter: string[] = ['animals', 'nature', 'fantasy', 'art'];

  constructor(private filterRef: MatDialogRef<FilterComponent>) {}

  openDialog(filter: string): void {
    this.filterRef.close({filter: filter});
  }

  ngOnInit(): void {}

  closeDialog() {
    this.filterRef.close();
  }
}
