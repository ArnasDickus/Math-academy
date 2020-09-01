import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MathGameRoutingModule } from './math-game-routing.module';
import { EarlyMathComponent } from './pages/early-math/early-math.component';


@NgModule({
  declarations: [EarlyMathComponent],
  imports: [
    CommonModule,
    MathGameRoutingModule
  ]
})
export class MathGameModule { }
