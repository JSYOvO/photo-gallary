import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { FileuploadComponent } from './components/fileupload/fileupload.component';
import { PageBodyComponent } from './components/page-body/page-body.component';

@NgModule({
  declarations: [AppComponent, FileuploadComponent, PageBodyComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDialogModule, // Dialog support
    FlexLayoutModule,
    HttpClientModule,
    MatInputModule,
    MatCardModule,
    FormsModule, // Needed for two way databinding support. Before we [(ngModel)], we need this import
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
