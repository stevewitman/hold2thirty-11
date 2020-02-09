import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
// import { ProjectItemComponent } from './project/project-item/project-item.component';
import { LoginComponent } from '@nx11/ui-lib';
import { PageNotFoundComponent } from '@nx11/ui-lib';
// import { AuthGaurd } from '@nx11/core-data';

const routes: Routes = [
  { path: 'projects', component: ProjectsComponent },
  { path: 'login', component: LoginComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: '**', redirectTo: '404' }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class RoutingModule { }

// const routes: Routes = [
//   { path: 'projects', canActivate: [AuthGaurd], children: [
//     { path: '', component: ProjectComponent },
//     { path: ':id', component: ProjectItemComponent }
//   ] },
//   { path: 'login', component: LoginComponent },
//   { path: '404', component: PageNotFoundComponent },
//   { path: '', pathMatch: 'full', redirectTo: 'login' },
//   { path: '**', redirectTo: '404' }
// ]
