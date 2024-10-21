import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team/team.component';
import { contattiRoutingModule } from './contatti-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ContattiComponent } from './contatti.component';

@NgModule({
  declarations: [TeamComponent, ContattiComponent],
  imports: [CommonModule, contattiRoutingModule, SharedModule],
})
export class ContattiModule {}
