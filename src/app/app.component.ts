import { Component, OnInit, Input } from '@angular/core';

import { FormDataService } from './data/formData.service';

@Component({
  selector: 'nps-form-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'NPM Survey Form';
  model = 1;
  @Input() formData;
  
  constructor(private formDataService: FormDataService) { }

  ngOnInit() {
    this.formData = this.formDataService.getFormData();
    console.log(this.title + ' loaded!');
  }
}
