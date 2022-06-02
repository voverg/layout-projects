class Goods {
  constructor(options) {
    this.$goods = document.querySelector('.goods');
    this.$confirmIcon = document.querySelector('.confirm__icon');

    this.arr = goodsList;
    this.currentPage = 0;
    this.pageAmount = 0;
    this.pagination = new Pagination(options);
    this.cart = new Cart(options);

    this.store = options.store;
    this.state = {};
  }

  init() {
    this.render(this.arr);
    this.$goods.addEventListener('click', this.addToCart.bind(this));

    this.store.subscribe(() => {
      this.state = this.store.getState();
      this.filter();
      // this.currentPage = this.state.currentPage;
    });
  }

  addToCart({target}) {
    if (target.classList.contains('card__btn')) {
      const cardId = +target.closest('.card').dataset.id;
      const cardData = this.arr.find(item => item.id === cardId);
      this.cart.add(cardData);

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

    this.render(searchArr);
  }

  setPageAmount(arr, limit = 6) {
    this.pageAmount = Math.ceil(arr.length / limit);
  }

  render(arr) {
    // Работа с пагинацией
    const limit = 6; // Кол-во карточек на странице
    this.setPageAmount(arr, limit); // Устанавливаем кол-во страниц
    this.currentPage = this.state.currentPage ? this.state.currentPage : 1;
    // Запрос на рендер блока с пагинацией с передачей параметров
    const paginationRequest = {
      pageAmount: this.pageAmount,
      arrLength: arr.length,
      currentPage: this.currentPage,
      limit: limit,
    };

    this.pagination.render(paginationRequest);

    // Получаем массив карточек в зависимости от того, какой номер страницы
    const startCard = (this.currentPage - 1) * limit;
    const pageArr = arr.slice(startCard, startCard + limit);

    // Рендер карточек с товарами в блоке goods
    const noRusultsBlock = '<div class="goods__no-results">Не найдено ни одного товара...</div>';
    const list = pageArr.map( item =>  this.createElem(item) );
    this.$goods.innerHTML = list.join(' ') ? list.join(' ') : noRusultsBlock;
    // Перемещение наверх при клике в блоке пагинации на другую страницу
    document.documentElement.scrollIntoView(true);

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