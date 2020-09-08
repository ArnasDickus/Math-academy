import {Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { MathValidators } from "@core/validators/math-validators";
import { Subscription } from 'rxjs';
import { delay, filter, scan } from "@node_modules/rxjs/internal/operators";

@Component({
  selector: 'app-early-math',
  templateUrl: './early-math.component.html',
  styleUrls: ['./early-math.component.scss']
})
export class EarlyMathComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  public secondsPerSolution: number = 0;
  private subscription: Subscription;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  get value1() {
    return this.form.get('value1').value;
  }

  get value2() {
    return this.form.get('value2').value;
  }

  public ngOnInit(): void {
    this.createForm();
    this.updateValues();

  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      value1: EarlyMathComponent.generateRandomNumber(),
      value2: EarlyMathComponent.generateRandomNumber(),
      answer: '',
    }, { validator: MathValidators.addition('answer', 'value1', 'value2') },
      )
  }

  private updateValues(): void {
    this.subscription = this.form.statusChanges
      .pipe(
        filter(value => value === 'VALID'),
        delay(100),
        scan((acc) => {
          return {
            numberSolved: acc.numberSolved + 1,
            startTime: acc.startTime
          };
        }, { numberSolved: 0, startTime: new Date() }))
      .subscribe(({ numberSolved, startTime}) => {
        this.displayStatistics(startTime, numberSolved);
        // Use patchValue for updating not entire form.
        this.form.setValue({
          value1: EarlyMathComponent.generateRandomNumber(),
          value2: EarlyMathComponent.generateRandomNumber(),
          answer: ''
        })
      })
  }

  private displayStatistics(startTime, equationsSolved): void {
    this.secondsPerSolution = (new Date().getTime() - startTime.getTime()) / equationsSolved / 1000;
  }

  private static generateRandomNumber(): number {
    return Math.floor(Math.random() * 10);
  }
}
