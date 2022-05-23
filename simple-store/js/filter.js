class Filter {
  constructor() {
    this.$filter = document.querySelector('.filter');
    this.$minPrice = this.$filter.querySelector('#min-price');
    this.$maxPrice = this.$filter.querySelector('#max-price');
    this.$brandList = this.$filter.querySelector('.brand__list');

    this.brands = ['sony', 'Xiaomi', 'Huawei', 'Honor', 'Logitech', 'Defender', 'Genius', 'Microsoft'];
    this.minPrice = 0;
    this.maxPrice = 0;
    this.init();
  }

  init() {
    this.render();

    this.$minPrice.addEventListener('input', this.getMinPrice.bind(this));
    this.$maxPrice.addEventListener('input', this.getMaxPrice.bind(this));
  }

  getMinPrice({target}) {
    this.minPrice = +target.value;
    this.isMaxPriceLessMinPrice();
    goods.setPriceFilter(this.minPrice, this.maxPrice);
  }

  getMaxPrice({target}) {
    this.maxPrice = +target.value;
    this.isMaxPriceLessMinPrice();
    goods.setPriceFilter(this.minPrice, this.maxPrice);
  }

  isMaxPriceLessMinPrice() {
    if (this.maxPrice <= this.minPrice) {
      this.maxPrice = this.minPrice;
      this.$maxPrice.value = this.minPrice;
    }
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