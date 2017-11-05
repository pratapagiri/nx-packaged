import { Component, OnInit } from '@angular/core';
import { OneLib } from '@nx-packaged/one-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  business: OneLib = new OneLib();

  constructor() {}

  ngOnInit() {}
}
