import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ListModule } from 'patternfly-ng/list';
import { ConfirmationDialogModule } from '../../confirmation-dialog/confirmation-dialog.module';
import { ArchivedRecordingListComponent } from './archived-recording-list.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared-module';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    ListModule,
    ModalModule,
    ConfirmationDialogModule,
  ],
  exports: [
    ArchivedRecordingListComponent,
  ],
  declarations: [
    ArchivedRecordingListComponent,
  ]
})
export class ArchivedRecordingListModule { }
