class Goods {
  constructor(arr) {
    this.arr = arr;
    this.$goods = document.querySelector('.goods');

    this.init();
  }

  init() {
    this.render();
    this.$goods.addEventListener('click', this.goodsHandler.bind(this));
  }

  goodsHandler({target}) {
    if (target.classList.contains('card__btn')) {
      const cardId = +target.closest('.card').dataset.id;
      const card = this.arr.find(item => item.id === cardId);
      cart.add(card);
    }
  }

  render() {
    const list = this.arr.map(item => {
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