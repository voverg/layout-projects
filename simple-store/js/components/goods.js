class Goods {
  constructor(options) {
    this.$goods = document.querySelector('.goods');

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

      this.store.dispatch({type: 'addCard', card: card});
    }
  }

  filter() {
    const categoryArr = this.getCategory(this.state.category, this.arr);
    const brandArr = this.getBrands(this.state.brands, categoryArr);
    const priceFilterArr = this.getPriceFilter(this.state.minPrice, this.state.maxPrice, brandArr);
    const sortPriceArr = this.getSortPrice(this.state.sort, priceFilterArr);
    const searchArr = this.search(this.state.search, sortPriceArr);

    // sortPriceArr.forEach(item => console.log(item.price));

    this.render(searchArr);
  }

  getCategory(category = 'Все категории', arr) {
    let categoryArr = [];

    if (category === 'Все категории') {
      categoryArr = arr;
    } else {
      categoryArr = arr.filter(item => item.category === category);
    }

    return categoryArr;
  }

  getBrands(brands, arr) {
    let brandFilterArr = arr;

    if (brands.length) {
      brandFilterArr = arr.filter(item => {
        return brands.includes(item.brand);
      });
    }
    
    return brandFilterArr;
  }

  getPriceFilter(min, max, arr) {
    let priceFilterArr = arr.filter(item => {
      const price = getPrice(item);
      return price >= min && price <= max;
    });

    if (max === 0) {
      priceFilterArr = arr;
    }
    
    return priceFilterArr;
  }

  getSortPrice(method, arr) {
    const sortedArr = sort(method, arr);
    return sortedArr;
  }

  search(text, arr) {
    const searchArr = arr.filter(item => {
      const title = item.title.toLowerCase();
      return title.includes(text.toLowerCase().trim())
    });

    return searchArr;
  }

  render(arr) {
    const noRusultsBlock = '<div class="goods__no-results">Не найдено ни одного товара...</div>';
    const list = arr.map(item => {
      return this.createElem(item);
    });

    this.$goods.innerHTML = list.join(' ') ? list.join(' ') : noRusultsBlock;
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