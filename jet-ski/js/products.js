class Products {
  constructor(data) {
    this.data = data;
  }

  addCards(root, category = 'all', rank = 0) {
    const categoryList = this.getCategory(category, rank);
    const cards = this.createCards(categoryList);
    root.innerHTML = cards.join('');
  }

  getCategory(category, rank) {
    if (category === 'all') {
      return [...this.data];
    }

    return this.data.filter((item) => item.category === category && item.rank >= rank);
  }

  createCards(arr) {
    return arr.map((card) => this.createCard(card));
  }

  createCard(card) {
    const saleClass = card.isSale ? 'card__sale' : '';
    const availableClass = card.isAvailable ? '' : 'card--not-available';

    const elem = `
      <div class="products__slider-item">
        <a href="#" class="card ${saleClass, availableClass}" id="${card.id}">
          <button class="card__favorite" data-type="card-favorite"></button>
          <img src="img/products/${card.img}" class="card__img" alt="Product">
          <h4 class="card__title">${card.title}</h4>
          <p class="price card__price">${card.price.toLocaleString('ru-RU')}</p>
          <p class="card__notify">нет в наличии</p>
          <button class="card__notify-link">сообщить о поступлении</button>
          <button class="card__basket" data-type="card-basket"></button>
          <div class="card--hover-text">посмотреть товар</div>
        </a>
      </div>
    `;

    return elem;
  }

}