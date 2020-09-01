import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EarlyMathComponent} from "./pages/early-math/early-math.component";

const routes: Routes = [
  {
    path: '',
    component: EarlyMathComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MathGameRoutingModule { }
