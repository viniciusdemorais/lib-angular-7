import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TesteComponentComponent } from './components/teste-component/teste-component.component';

const routes: Routes = [
  {
    path: '', component: TesteComponentComponent, data: { depth: 1 }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibTesteRoutingModule { }
