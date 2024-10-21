import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContattiModule } from './contatti.module';
import { ContattiComponent } from './contatti.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  {
    path: '',
    component: ContattiComponent,
  },

  {
    path: 'team',
    component: TeamComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class contattiRoutingModule {}
