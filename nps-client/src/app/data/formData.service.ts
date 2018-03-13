import { Injectable } from '@angular/core';

import { FormData, Personal, Information } from './formData.model';
import { NpswizardService } from '../nps-wizard/npswizard.service';

@Injectable()
export class FormDataService {

  private formData: FormData = new FormData();
  private isPersonalFormValid: boolean = false;
  private isInformationFormValid: boolean = false;

  constructor(private wizardService: NpswizardService) {
  }

  getPersonal(): Personal {
    var personal: Personal = {
      name: this.formData.name,
      email: this.formData.email,
      gender: this.formData.gender
    };
    return personal;
  }

  setPersonal(data: Personal) {
    this.isPersonalFormValid = true;
    this.formData.name = data.name;
    this.formData.gender = data.gender;
    this.formData.email = data.email;

    this.wizardService.validateStep('personal');
  }

  getInformation(): Information {
    var address: Information = {
      rating: this.formData.rating,
      recommend: this.formData.recommend,
      improve: this.formData.improve
    };
    return address;
  }

  setInformation(data: Information) {
    this.isInformationFormValid = true;
    this.formData.rating = data.rating;
    this.formData.recommend = data.recommend;
    this.formData.improve = data.improve;
    this.wizardService.validateStep('info');
  }

  getFormData(): FormData {
    return this.formData;
  }

  resetFormData(): FormData {
    this.formData.clear();
    this.isPersonalFormValid = this.isInformationFormValid = false;
    return this.formData;
  }
}