import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nps-form-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'NPM Survey Form';
  model = 1;
  
  constructor() { }

  ngOnInit() {
  }
}
