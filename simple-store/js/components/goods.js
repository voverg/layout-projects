class Goods {
  constructor(options) {
    this.$goods = document.querySelector('.goods');
    this.$confirmIcon = document.querySelector('.confirm__icon');

    this.arr = goodsList;
    this.store = options.store;
    this.state = {};
  }

  init() {
    this.render(this.arr);
    this.$goods.addEventListener('click', this.addToCart.bind(this));

    this.store.subscribe(() => {
      this.state = this.store.getState();
      this.filter();
    });
  }

  addToCart({target}) {
    if (target.classList.contains('card__btn')) {
      const cardId = +target.closest('.card').dataset.id;
      const card = this.arr.find(item => item.id === cardId);
      // Dispatch data of a new cart to the store
      this.store.dispatch({type: 'addCard', card: card});

      // Show animation with add a new card to the cart
      this.$confirmIcon.classList.add('confirm__icon--show');
      setTimeout(() => {
        this.$confirmIcon.classList.remove('confirm__icon--show');
      }, 500);
    }
  }

  filter() {
    const categoryArr = getCategoryFilteredArr(this.state.category, this.arr);
    const brandArr = getBrandsFilteredArr(this.state.brands, categoryArr);
    const priceFilteredArr = getPriceFilteredArr(this.state.minPrice, this.state.maxPrice, brandArr);
    const sortPriceArr = getPriceSortedArr(this.state.sort, priceFilteredArr);
    const searchArr = getSearchedArr(this.state.search, sortPriceArr);

    // sortPriceArr.forEach(item => console.log(item.price));

    this.render(searchArr);
  }

  render(arr) {
    const noRusultsBlock = '<div class="goods__no-results">Не найдено ни одного товара...</div>';
    const paginationArr = pagination(arr);
    const list = arr.map(item => {
      return this.createElem(item);
    });

    this.$goods.innerHTML = list.join(' ') ? list.join(' ') : noRusultsBlock;

    // Animation with change any filter option
    // const $cards = this.$goods.querySelectorAll('.card');
    // $cards.forEach(card => {
    //   setTimeout(() => {
    //     card.classList.add('card--show');
    //   }, 0);
    // });
    
  }

  createElem(elem) {
    return `
      <div class="card" data-id="${elem.id}">
        <img class="card__img" src="${elem.link}" alt="good picture">
        <div class="card__colors">Доступно цветов: ${elem.colorAmount}</div>
        <div class="card__price">
          <span class="card__price-value">${elem.price}</span> ₽
        </div>
        <div class="card__category"><strong>Категория: </strong>${elem.category}</div>
        <div class="card__title">${elem.title}</div>
        
        <button class="card__btn">В корзину</button>
      </div>
    `;
  }

}