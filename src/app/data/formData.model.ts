export class FormData {
  name: string = '';
  email: string = '';
  gender: string = '';
  rate: string = '';
  recommend: string = '';
  improve: string = '';

  clear() {
      this.name = '';
      this.email = '';
      this.gender = '';
      this.rate = '';
      this.recommend = '';
      this.improve = '';
  }
}

export class Information {
  rate: string = '';
  recommend : string = '';
  improve: string = '';
}

export class Personal {
  name: string = '';
  email: string = '';
  gender: string = '';
}