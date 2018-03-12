import { Injectable } from '@angular/core';

@Injectable()
export class NpswizardService {
  private workflow = [
    { step: 'info', valid: false },
    { step: 'personal', valid: false },
    { step: 'result', valid: false }
  ];

  validateStep(step: string) {
    var found = false;
    for (var i = 0; i < this.workflow.length && !found; i++) {
      if (this.workflow[i].step === step) {
        found = this.workflow[i].valid = true;
      }
    }
  }

  resetSteps() {
    this.workflow.forEach(element => {
      element.valid = false;
    });
  }

  getFirstInvalidStep(step: string): string {
    var found = false;
    var valid = true;
    var redirectToStep = '';
    for (var i = 0; i < this.workflow.length && !found && valid; i++) {
      let item = this.workflow[i];
      if (item.step === step) {
        found = true;
        redirectToStep = '';
      }
      else {
        valid = item.valid;
        redirectToStep = item.step
      }
    }
    return redirectToStep;
  }
}