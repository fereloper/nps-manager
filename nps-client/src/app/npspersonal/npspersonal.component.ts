import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Information, Personal } from '../data/formData.model';
import { FormDataService } from '../data/formData.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-npspersonal',
  templateUrl: './npspersonal.component.html',
  styleUrls: ['./npspersonal.component.sass']
})
export class NpspersonalComponent implements OnInit {
  personalInfo: Personal;
  form: any;

  constructor(private router: Router, private formDataService: FormDataService, private http: HttpClient) { }

  ngOnInit() {
    this.personalInfo = this.formDataService.getPersonal();
  }

  save(form: any): boolean {
    if (!form.valid) {
      return false;
    }
    this.formDataService.setPersonal(this.personalInfo);
    this.http.post(environment.apiUrl + '/rating', this.formDataService.getFormData())
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );
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
