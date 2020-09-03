import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EarlyMathComponent } from "./pages/early-math/early-math.component";
import { Allroutes } from "../../core/enums/allroutes.enum";

const routes: Routes = [
  {
    path: Allroutes.BASIC,
    component: EarlyMathComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MathGameRoutingModule { }
