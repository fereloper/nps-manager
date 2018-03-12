import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Information } from '../data/formData.model';
import { FormDataService } from '../data/formData.service';

@Component({
  selector: 'app-npsinfo',
  templateUrl: './npsinfo.component.html',
  styleUrls: ['./npsinfo.component.sass']
})
export class NpsinfoComponent implements OnInit {
  title = "Rate our product";
  information: Information;
  form: any;

  constructor(private router: Router, private formDataService: FormDataService) { }

  ngOnInit() {
    this.information = this.formDataService.getInformation();
    console.log('Info feature loaded!');
  }

  save(form: any): boolean {
    if (!form.valid) {
      return false;
    }
    this.formDataService.setInformation(this.information);
    return true;
  }

  goToNext(form: any) {
    if (this.save(form)) {
      // Navigate to the work page
      this.router.navigate(['/personal']);
    }
  }

}
