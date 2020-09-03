import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { MathValidators } from "@core/validators/math-validators";

@Component({
  selector: 'app-early-math',
  templateUrl: './early-math.component.html',
  styleUrls: ['./early-math.component.scss']
})
export class EarlyMathComponent implements OnInit {
  public form: FormGroup;

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
    // this.form.statusChanges.subscribe .pipe()(())
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      value1: EarlyMathComponent.generateRandomNumber(),
      value2: EarlyMathComponent.generateRandomNumber(),
      answer: '',
    }, { validator: MathValidators.addition('answer', 'value1', 'value2') },
      )
  }

  private static generateRandomNumber(): number {
    return Math.floor(Math.random() * 10);
  }

}
