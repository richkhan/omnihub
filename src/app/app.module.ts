import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { PinnedModalModule } from './common/pinned-modal/pinned-modal.module';

import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SoftwareCenterComponent } from './screens/software-center/software-center.component';
import { DownloadPinModule } from './common/download-pin/download.module';

const routes: Routes = [
  // Existing routes...
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'sdc', component: SoftwareCenterComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    SoftwareCenterComponent,
  ],
  imports: [
    BrowserModule,
    PinnedModalModule,
    DownloadPinModule,
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
