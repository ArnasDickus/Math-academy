import { Component, OnInit } from '@angular/core';
import { Allroutes } from "@core/enums/allroutes.enum";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public homeLink = Allroutes.HOME;
  public basicMath = `${Allroutes.MATH}/${Allroutes.BASIC}`;

  constructor() { }

  ngOnInit(): void {
  }

}
