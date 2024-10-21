import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessoGuard } from './guardes/accesso.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },

  {
    path: 'contatti',
    loadChildren: () =>
      import('./pages/contatti/contatti.module').then((m) => m.ContattiModule),
    canActivate: [AccessoGuard],
    canActivateChild: [AccessoGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
