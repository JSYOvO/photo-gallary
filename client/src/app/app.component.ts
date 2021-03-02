import { Component } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';

import { FileuploadComponent } from './components/fileupload/fileupload.component';
import { AddImageService } from './Services/add-image.service';

@Component({
  selector: 'atp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private dialogRef: MatDialogRef<FileuploadComponent> | null = null;
  constructor(private dialog: MatDialog, private addImage: AddImageService) {}

  public ImportImage(): void {
    const config = new MatDialogConfig();
    config.disableClose = true;
    config.autoFocus = true;
    config.width = '500px';
    this.dialogRef = this.dialog.open(FileuploadComponent, config);
    this.dialogRef.afterClosed().subscribe((r: any) => {
      if (r) {
        this.addImage.add(r);
      }
    });
  }
}
