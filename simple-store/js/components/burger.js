class Burger {
  constructor(options) {
    this.$body = document.querySelector('body');
    this.$burgerBtn = this.$body.querySelector('.burger__btn');
    this.$filter = this.$body.querySelector('.filter');
    this.$filterWrapper = this.$filter.closest('.filter__wrapper');
    this.$filterCloseBtn = this.$filter.querySelector('.filter__close');
  }

  init() {
    this.$burgerBtn.addEventListener('click', this.open.bind(this));
    this.$filterCloseBtn.addEventListener('click', this.close.bind(this));
    this.$filterWrapper.addEventListener('click', this.close.bind(this));
    this.$filter.addEventListener('click', (event) => {
      event.stopPropagation();
    });
  }
  
  open() {
    this.$filterWrapper.classList.add('filter__wrapper--active');
    this.$filter.classList.add('filter--active');
    this.$body.classList.add('body__block');
  }

  close() {
      this.$filterWrapper.classList.remove('filter__wrapper--active');
      this.$filter.classList.remove('filter--active');
      this.$body.classList.remove('body__block')
  }
}
