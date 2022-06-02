class Cart {
  constructor(options) {
    this.$body = document.querySelector('body');
    this.$order = this.$body.querySelector('.order');
    this.$orderBadge = this.$order.querySelector('.order__badge');
    this.$cart = this.$body.querySelector('.cart');
    // this.$cartContent = this.$body.querySelector('.cart__content');
    this.$close = this.$cart.querySelector('.cart__close');
    this.$totalPrice = this.$cart.querySelector('.cart__total-value');
    this.$cartGoods = this.$cart.querySelector('.cart__goods');

    this.arr = [];
    this.totalPrice = 0;
    this.store = options.store;

    this.init();
  }

  init() {
    this.arr = this.getData() ? this.getData() : [];
    this.setCountAndPrice();

    this.$order.addEventListener('click', this.show.bind(this));
    this.$close.addEventListener('click', this.hide.bind(this));
    this.$cart.addEventListener('click', this.hide.bind(this));
    this.$cartGoods.addEventListener('click', this.cardHandler.bind(this));
  }

  show() {
    this.$cart.classList.add('cart--active');
    this.$body.classList.add('body__block');
    this.render();

  }

  hide({target}) {
    if (target.classList.contains('cart') || target.classList.contains('cart__close')) {
      this.$cart.classList.remove('cart--active');
      this.$body.classList.remove('body__block');
    }
  }

  setCountAndPrice() {
    this.totalPrice = 0;
    this.$orderBadge.innerHTML = this.arr.length;
    this.arr.forEach(item => {
      this.totalPrice += getPrice(item);
    });
    this.$totalPrice.textContent = this.totalPrice;
  }

  add(card) {
    const newCard = {...card};
    newCard.id = Math.random();
    this.arr.push(newCard);
    
    this.setData();
    this.setCountAndPrice();
  }

  cardHandler({target}) {
    if (target.classList.contains('card__remove')) {
      const cardId = +target.closest('.card').dataset.id;
      const card = this.arr.find(item => +item.id === +cardId);

      this.arr = this.arr.filter(item => +item.id !== +cardId);
      this.setCountAndPrice();
      this.setData();
      this.render();
    }
  }

  setData() {
    localStorage.setItem('goodsList', JSON.stringify(this.arr));
  }

  getData() {
    const data = JSON.parse(localStorage.getItem('goodsList'));
    return data;
  }

  render() {
    const emptyText = `<div class="cart__empty">Ваша корзина пока пуста</div>`;

    const list = this.arr.map(item => {
      return this.createElem(item);
    });

    this.$cartGoods.innerHTML = list.length ? list.join(' ') : emptyText;
  }

  createElem(elem) {
    return `
      <div class="card" data-id="${elem.id}">
        <div class="card__remove">&#10006;</div>
        <img class="card__img" src="${elem.link}" alt="good picture">
        <div class="card__colors">Доступно цветов: ${elem.colorAmount}</div>
        <div class="card__price">
          <span class="card__price-value">${elem.price}</span> ₽
        </div>
        <div class="card__category"><strong>Категория: </strong>${elem.category}</div>
        <div class="card__title">${elem.title}</div>
      </div>
    `;
  }
}