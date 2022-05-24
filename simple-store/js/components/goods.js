class Goods {
  constructor(options) {
    this.$goods = document.querySelector('.goods');

    this.arr = goodsList;
    this.store = options.store;
    this.state = {};
  }

  init() {
    this.render(this.arr);
    this.$goods.addEventListener('click', this.goodsHandler.bind(this));

    this.store.subscribe(() => {
      this.state = this.store.getState();
      // this.setCategory(this.state.category);
      this.search(this.state.search);
    });
  }

  goodsHandler({target}) {
    if (target.classList.contains('card__btn')) {
      const cardId = +target.closest('.card').dataset.id;
      const card = this.arr.find(item => item.id === cardId);

      this.store.dispatch({type: 'addCard', card: card});
    }
  }

  setCategory(category = 'Все категории') {
    if (category === 'Все категории') {
      const categoryArr = this.arr;
    } else {
      const categoryArr = this.arr.filter(item => item.category === category);
    }
    this.render(categoryArr);
  }

  setPriceFilter(min, max) {
    console.log('min is: ', min);
    console.log('max is: ', max);
  }

  search(text) {
    const searchArr = this.arr.filter(item => {
      const title = item.title.toLowerCase();
      return title.includes(text.toLowerCase().trim())
    });
    this.render(searchArr);
  }

  render(arr) {
    const list = arr.map(item => {
      return this.createElem(item);
    });

    this.$goods.innerHTML = list.join(' ');
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