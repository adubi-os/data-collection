import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CsoComponent } from './cso/cso.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SupervisorComponent } from './supervisor/supervisor.component';

const routes: Routes = [
  { path: 'cso', component: CsoComponent },
  { path: 'supervisor', component: SupervisorComponent },
  { path: 'admin', component: AdminComponent },
  { path: '', redirectTo: '/cso', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
