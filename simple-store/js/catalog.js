class Catalog {
  constructor() {
    this.$catalog = document.querySelector('.catalog');
    this.$catalogBtn = this.$catalog.querySelector('.catalog__btn');
    this.$catalogList = this.$catalog.querySelector('.catalog__list');

    this.init();
  }

  init() {
    this.$catalogBtn.addEventListener('click', this.toggle.bind(this));
  }

  toggle() {
    this.$catalogList.classList.toggle('catalog__list--active');
  }
}