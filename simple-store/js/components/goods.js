class Goods {
  constructor(options) {
    this.$goods = document.querySelector('.goods');

    this.arr = goodsList;
    this.filteredArr = this.arr;
    this.store = options.store;
    this.state = {};
  }

  init() {
    this.render();
    this.$goods.addEventListener('click', this.goodsHandler.bind(this));

    this.store.subscribe(() => {
      this.state = this.store.getState();
      this.setCategory(this.state.category);
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
      this.filteredArr = this.arr;
    } else {
      this.filteredArr = this.arr.filter(item => item.category === category);
    }
    this.render();
  }

  setPriceFilter(min, max) {
    console.log('min is: ', min);
    console.log('max is: ', max);
  }

  render() {
    const list = this.filteredArr.map(item => {
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