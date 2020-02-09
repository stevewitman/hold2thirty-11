import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LoginComponent, ToolbarComponent, PageNotFoundComponent]
})
export class UiLibModule {}
