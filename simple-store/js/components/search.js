class Search {
  constructor(options) {
    this.$searchInput = document.querySelector('.search__input');
    this.$searchBtn = document.querySelector('.search__btn');
    this.$searchIcon = this.$searchBtn.querySelector('.search__icon');

    this.store = options.store;
    this.value = '';
  }

  init() {
    this.$searchInput.addEventListener('input', this.inputHandler.bind(this));
    this.$searchBtn.addEventListener('click', this.searchBtnHandler.bind(this));
  }

  inputHandler({target}) {
    if (target.value !== '') {
      this.$searchIcon.setAttribute('src', 'icons/cross.svg');
      this.$searchBtn.dataset.btn = 'cross';
    } else {
      this.$searchIcon.setAttribute('src', 'icons/glass.svg');
      this.$searchBtn.dataset.btn = 'search';
    }

    this.store.dispatch({type: 'search', payload: {search: target.value, currentPage: 1} });
  }

  searchBtnHandler({currentTarget}) {
    if (currentTarget.dataset.btn === 'cross') {
      this.$searchInput.value = '';
      this.inputHandler({target: this.$searchInput});
    }
  }

}

