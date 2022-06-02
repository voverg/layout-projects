class Pagination {
  constructor(options) {
    this.$pagination = document.querySelector('.pagination');

    this.currentPage = 1;
    this.store = options.store;
    this.state = {};

    this.init();
  }

  init() {
    this.$pagination.addEventListener('click', this.setCurrentPage.bind(this));

    this.store.subscribe(() => {
      this.state = this.store.getState();
    });
  }

  setCurrentPage({target}) {
    if (!target.classList.contains('pagination__btn')) return;

    this.currentPage = +target.dataset.pageNumber;
    this.store.dispatch({type: 'currentPage', payload: {currentPage: this.currentPage} });
  }

  render({pageAmount, arrLength, currentPage, limit}) {
    const btnList = [];
    this.currentPage = currentPage;

    for (let i = 1; i <= pageAmount; i++) {
      const item = {};
      item.number = i;
      item.current = currentPage === i ? true : false;

      btnList.push(this.createElem(item));
    }

    this.$pagination.innerHTML = arrLength <= limit ? '' : btnList.join('');
  }

  createElem(item, current = false) {
    const className = item.current ? 'pagination__btn pagination__btn--current' : 'pagination__btn';
    const elem = `<button class="${className}" data-page-number="${item.number}">${item.number}</button>`;

    return elem;
  }

}