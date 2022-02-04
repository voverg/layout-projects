function createGoodsItems(block, data) {
  const dataElems = data.map((cardData) => {
    const card = createCard(cardData);

    return card;
  });

  block.innerHTML = dataElems.join('');
}

function createCard({link, colorAmount, title, price}) {
  const card = `
    <div class="goods__item">
      <div class="card">
        <img class="card__img goods__img" src="${link}" alt="phone">
        <div class="card__colors goods__colors">Доступно цветов: ${colorAmount}</div>
        <div class="card__title goods__title">${title}</div>
        <div class="card__price goods__price">
          <span>${price}</span> руб/шт
        </div>
        <button class="card__btn goods__btn">Добавить в корзину</button>
      </div>
    </div>
  `;

  return card;
}

