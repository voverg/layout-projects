class Catalog {
  constructor() {
    this.$catalog = document.querySelector('.catalog');
    this.$catalogBtn = this.$catalog.querySelector('.catalog__btn');
    this.$catalogList = this.$catalog.querySelector('.catalog__list');

    this.init();
  }

  init() {
    this.$catalogBtn.addEventListener('click', this.toggle.bind(this));
    // this.$catalogBtn.addEventListener('blur', this.hide.bind(this));
    this.$catalogList.addEventListener('click', this.getCategory.bind(this));
  }

  toggle() {
    this.$catalogList.classList.toggle('catalog__list--active');
  }

  hide() {
    this.$catalogList.classList.remove('catalog__list--active');
  }

  getCategory({target}) {
    if (target.classList.contains('catalog__item')) {
      const category = target.textContent;
      goods.setCategory(category);
      this.hide();
    }
  }
}