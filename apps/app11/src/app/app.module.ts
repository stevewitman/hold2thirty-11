import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialModule } from '@nx11/material';
import { ProjectsComponent } from './projects/projects.component';
import { UiLibModule } from '@nx11/ui-lib';


@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    UiLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
