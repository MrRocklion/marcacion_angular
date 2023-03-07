import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AlmuerzosComponent } from './almuerzos/almuerzos.component';
import { PermisosComponent } from './permisos/permisos.component';
import { ExternosComponent } from './externos/externos.component';
import { ReportesComponent } from './reportes/reportes.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'almuerzos', component: AlmuerzosComponent},
  {path: 'externos', component: ExternosComponent},
  {path: 'ajustes', component: SettingsComponent},
  {path: 'permisos', component: PermisosComponent},
  {path: 'reportes', component: ReportesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule,
  ],

})
export class AppRoutingModule { }
