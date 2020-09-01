import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Allroutes } from "@core/enums/allroutes.enum";

const routes: Routes = [
  {
    path: Allroutes.MATH,
    loadChildren: () => import('./features/math-game/math-game.module').then(m => m.MathGameModule)
  },

  {
    path: '**',
    loadChildren: () => import('./features/not-found/not-found.module').then(m => m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
