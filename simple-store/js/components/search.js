class Search {
  constructor(options) {
    this.$searchInput = document.querySelector('.search__input');

    this.store = options.store;
    this.value = '';
  }

  init() {
    this.$searchInput.addEventListener('input', this.searchHandler.bind(this));
  }

  searchHandler({target}) {
    this.store.dispatch({type: 'search', payload: {search: target.value, currentPage: 1} });
  }
}