class Catalog {
  constructor(options) {
    this.$catalog = document.querySelector('.catalog');
    this.$catalogBtn = this.$catalog.querySelector('.catalog__btn');
    this.$catalogTitle = this.$catalog.querySelector('.catalog__title');
    this.$catalogList = this.$catalog.querySelector('.catalog__list');

    this.store = options.store;
  }

  init() {
    this.$catalogBtn.addEventListener('click', this.toggle.bind(this));
    this.$catalogList.addEventListener('click', this.setCategory.bind(this));
  }

  toggle() {
    this.$catalogList.classList.toggle('catalog__list--active');
  }

  hide() {
    this.$catalogList.classList.remove('catalog__list--active');
  }

  setCategory({target}) {
    if (target.classList.contains('catalog__item')) {
      const category = target.textContent;
      this.store.dispatch({type: 'category', category: category});
      this.hide();
      this.$catalogTitle.textContent = category;
    }
  }
}