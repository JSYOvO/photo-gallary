import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FilePreviewService } from 'src/app/Services/file-preview-service.service';
import { IPictureModel } from 'src/app/type';

@Component({
  selector: 'atp-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.scss'],
})
export class FileuploadComponent implements OnInit {
  protected imageSource: IPictureModel | null;
  protected message: any;
  protected description: string;
  protected tags: string;

  constructor(
    private dialog: MatDialogRef<FileuploadComponent>,
    private preview: FilePreviewService
  ) {}

  ngOnInit() {}

  public OnImageSelected(files: any): void {
    this.preview
      .Preview(files)
      .then((r) => {
        this.imageSource = r;
      })
      .catch((r) => {
        this.message = r;
      });
  }

  public Save(): void {
    if (this.imageSource) {
      this.imageSource.Description = this.description;
      this.imageSource.Tags = this.tags;
    }

    this.dialog.close(this.imageSource);
  }
}
