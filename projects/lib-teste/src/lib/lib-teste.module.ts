import { NgModule } from '@angular/core';
import { TesteComponentComponent } from './components/teste-component/teste-component.component';
import { LibTesteRoutingModule } from './lib-teste-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TesteComponentComponent],
  imports: [
  ],
  exports: [TesteComponentComponent]
})
export class LibTesteModule { }
