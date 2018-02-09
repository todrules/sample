import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { Dashboard } from './views/dashboard/dashboard';
import { Themes } from './views/themes/themes';
import { HomePage } from './views/home/home';
import { ResumeView } from './views/resume/resume';

const routes: Routes = [
  {path: 'dashboard', component: Dashboard},
  {path: 'resume', component: ResumeView},
  {path: 'home', component: HomePage},
  {path: 'themes', component: Themes},
  {path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
