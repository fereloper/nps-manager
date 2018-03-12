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
    // Return the Personal data
    var personal: Personal = {
      name: this.formData.name,
      email: this.formData.email,
      gender: this.formData.gender
    };
    return personal;
  }

  setPersonal(data: Personal) {
    // Update the Personal data only when the Personal Form had been validated successfully
    this.isPersonalFormValid = true;
    this.formData.name = data.name;
    this.formData.gender = data.gender;
    this.formData.email = data.email;

     // Validate Personal Step in Workflow
     this.wizardService.validateStep('personal');
  }

  getInformation(): Information {
    // Return the Address data
    var address: Information = {
      rate: this.formData.rate,
      recommend: this.formData.recommend,
      improve: this.formData.improve
    };
    return address;
  }

  setInformation(data: Information) {
    // Update the Address data only when the Address Form had been validated successfully
    this.isInformationFormValid = true;
    this.formData.rate = data.rate;
    this.formData.recommend = data.recommend;
    this.formData.improve = data.improve;
    this.wizardService.validateStep('info');
  }

  getFormData(): FormData {
    // Return the entire Form Data
    return this.formData;
  }

  resetFormData(): FormData {
    // Return the form data after all this.* members had been reset
    this.formData.clear();
    this.isPersonalFormValid = this.isInformationFormValid = false;
    return this.formData;
  }

  isFormValid() {
    // Return true if all forms had been validated successfully; otherwise, return false
    return this.isPersonalFormValid &&
      this.isInformationFormValid
  }
}