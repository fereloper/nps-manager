import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormDataService } from '../data/formData.service';
@Component({
  selector: 'app-npsresult',
  templateUrl: './npsresult.component.html',
  styleUrls: ['./npsresult.component.sass']
})
export class NpsresultComponent implements OnInit {

  constructor(private router: Router, private formDataService: FormDataService) { }

  ngOnInit() {
    this.formDataService.resetFormData();
  }

  goBack() {
    this.router.navigate(['/info']);
  }

}
