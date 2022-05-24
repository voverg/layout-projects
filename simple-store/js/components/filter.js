class Filter {
  constructor(options) {
    this.$filter = document.querySelector('.filter');
    this.$minPrice = this.$filter.querySelector('#min-price');
    this.$maxPrice = this.$filter.querySelector('#max-price');
    this.$brandList = this.$filter.querySelector('.brand__list');

    this.store = options.store;
    this.brands = ['Sony', 'Xiaomi', 'Huawei', 'Honor', 'Logitech', 'Defender', 'Genius', 'Microsoft', 'Nintendo', 'Sega', 'Dendy', 'Trust', 'Orico', 'Abbyy', 'Steelseries', 'A4Tech'];
    this.minPrice = 0;
    this.maxPrice = 0;
    this.filterBrands = [];
  }

  init() {
    this.render();

    this.$minPrice.addEventListener('input', this.setMinPrice.bind(this));
    this.$maxPrice.addEventListener('input', this.setMaxPrice.bind(this));
    this.$brandList.addEventListener('change', this.setBrands.bind(this));
  }

  setMinPrice({target}) {
    this.minPrice = +target.value;
    this._setPrice();
  }

  setMaxPrice({target}) {
    this.maxPrice = +target.value;
    this._setPrice();
  }

  _setPrice() {
    if (this.maxPrice <= this.minPrice) {
      this.maxPrice = this.minPrice;
      this.$maxPrice.value = this.minPrice;
    }

    this.store.dispatch({type: 'minPrice', minPrice: this.minPrice});
    this.store.dispatch({type: 'maxPrice', maxPrice: this.maxPrice});
  }

  setBrands({target}) {
    const brandName = target.closest('label').textContent.trim();
    const checked = target.checked;

    if (checked) {
      this.filterBrands.push(brandName);
    } else {
      this.filterBrands = this.filterBrands.filter(item => item !== brandName);
    }

    this.store.dispatch({type: 'brands', brands: this.filterBrands});
  }

  render() {
    const list = this.brands.map(item => {
      return this.createElem(item);
    });

    this.$brandList.innerHTML = list.join(' ');
  }

  createElem(elem) {
    return `
      <li class="brand__item">
        <label class="brand__item-label">
          <input type="checkbox" class="brand__item-input">${elem}
        </label>
      </li>
    `;
  }
}