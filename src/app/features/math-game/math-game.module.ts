import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MathGameRoutingModule } from './math-game-routing.module';
import { EarlyMathComponent } from './pages/early-math/early-math.component';
import { ReactiveFormsModule } from "@angular/forms";
import { AnswerHighlightDirective } from "../../core/directives/answer-highlight/answer-highlight.directive";


@NgModule({
  declarations: [EarlyMathComponent, AnswerHighlightDirective],
    imports: [
        CommonModule,
        MathGameRoutingModule,
        ReactiveFormsModule,
    ]
})
export class MathGameModule { }
