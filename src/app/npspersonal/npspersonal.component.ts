import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Information, Personal } from '../data/formData.model';
import { FormDataService } from '../data/formData.service';

@Component({
  selector: 'app-npspersonal',
  templateUrl: './npspersonal.component.html',
  styleUrls: ['./npspersonal.component.sass']
})
export class NpspersonalComponent implements OnInit {
  personalInfo: Personal;
  form: any;

  constructor(private router: Router, private formDataService: FormDataService) { }

  ngOnInit() {
    this.personalInfo = this.formDataService.getPersonal();
    console.log('Personal feature loaded!');
  }

  save(form: any): boolean {
    if (!form.valid) {
      return false;
    }
    this.formDataService.setPersonal(this.personalInfo);
    return true;
  }

  submit(form: any) {
    if (this.save(form)) {
      this.router.navigate(['/result']);
    }
  }

  goToPrev() {
    this.router.navigate(['/info']);
  }

}
