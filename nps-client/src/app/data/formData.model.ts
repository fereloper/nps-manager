export class FormData {
  name: string = '';
  email: string = '';
  gender: string = '';
  rating: string = '';
  recommend: string = '';
  improve: string = '';

  clear() {
      this.name = '';
      this.email = '';
      this.gender = '';
      this.rating = '';
      this.recommend = '';
      this.improve = '';
  }
}

export class Information {
  rating: string = '';
  recommend : string = '';
  improve: string = '';
}

export class Personal {
  name: string = '';
  email: string = '';
  gender: string = '';
}