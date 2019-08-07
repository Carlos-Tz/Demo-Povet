import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/auth.guard';
import { SecureInnerPagesGuard } from './services/secure-inner-pages.guard';
import { PanelComponent } from './components/panel/panel.component';
import { OrdenComponent } from './components/orden/orden.component';
//import { ViewOrdenComponent } from './components/view-orden/view-orden.component';
import { EditComponent } from './components/edit/edit.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: OrdenComponent},
  {path: 'panel', component: PanelComponent, canActivate: [AuthGuard]},
  //{path: 'view/:key', component: ViewOrdenComponent, canActivate: [AuthGuard]},
  {path: 'edit/:key', component: EditComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent, canActivate: [SecureInnerPagesGuard]}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
