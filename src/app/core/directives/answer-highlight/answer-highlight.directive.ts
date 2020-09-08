import { Directive, ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';
import { map } from 'rxjs/operators';

@Directive({
  selector: '[appAnswerHighlight]'
})
export class AnswerHighlightDirective {

  constructor(
    private elementRef: ElementRef,
    private controlName: NgControl
  ) {
  }

  public ngOnInit(): void {
    this.controlName.control.parent.valueChanges
    .pipe(
      map(({ value1, value2, answer }) => Math.abs((value1 + value2 - answer) / (value1 + value2)))
    ).subscribe((value) => {
        if (value < 0.2) {
          this.elementRef.nativeElement.classList.add('early-math__close')
        } else {
          this.elementRef.nativeElement.classList.remove('early-math__close')
        }
      })
  }

}
