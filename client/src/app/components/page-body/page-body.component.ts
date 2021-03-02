import { Component, OnInit, Input } from '@angular/core';
import { AddImageService } from 'src/app/Services/add-image.service';
import { LoadImageService } from 'src/app/Services/load-image.service';
import { TransferDataService } from 'src/app/Services/transfer-data.service';
import { IPictureModel } from '../../type';
@Component({
  selector: 'atp-page-body',
  templateUrl: './page-body.component.html',
  styleUrls: ['./page-body.component.scss'],
})
export class PageBodyComponent implements OnInit {
  Pictures: Array<IPictureModel>;
  constructor(
    private addImage: AddImageService,
    private loadImage: LoadImageService,
    private transfer: TransferDataService
  ) {
    this.Pictures = new Array<IPictureModel>();
  }

  ngOnInit() {
    this.transfer.Initialize();
    this.addImage.context.subscribe((message) => {
      if (!message) {
        return;
      }
      this.Pictures.push(message);
    });
    this.loadImage.context.subscribe((message) => {
      if (!message) {
        return;
      }
      this.Pictures.push(message);
    });
  }
}
