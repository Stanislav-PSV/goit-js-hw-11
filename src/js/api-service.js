import axios from 'axios';

class ImgsApiService {
  constructor() {
    this.BASE_URL = 'https://pixabay.com/api/';
    this.API_KEY = '28307997-70e86ee96202b0eb7f7f5509c';
    this.page = 1;
    this.totalImgs = 0;
    this.params = new URLSearchParams({
      key: this.API_KEY,
      q: '',
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page: 1,
      per_page: 40,
    });
  }

  async fetchImgs() {
    const response = await axios.get(`${this.BASE_URL}?${this.params}`);
    this.totalImgs = this.page * this.params.get('per_page');
    this.incrementPage();
    return response;
  }

  incrementPage() {
    this.page += 1;
    this.params.set('page', this.page);
  }

  resetPage() {
    this.page = 1;
    this.params.set('page', this.page);
  }

  seachImg(newParams) {
    this.params.set('q', newParams);
  }
}

export { ImgsApiService };
