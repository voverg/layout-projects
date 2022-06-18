class Cards {
  constructor($root, options) {
    this.$root = $root;
    this.data = options.data;
  }

  init() {
    this.render();
    this.$root.addEventListener('click', this.onClick.bind(this));
  }

  onClick({target}) {
    if (!this.isCard(target)) return;
    const {card, cardId, cardStatus} = this.getTargetData(target);
    if (cardStatus === 'disabled') return;

    this.data.forEach(card => {
      if (card.id === cardId) {
        card.status = card.status === 'default' ? 'selected' : 'default';
      }
    });

    this.render();
  }

  getTargetData(target) {
    const card = target.closest('.js-card');

    return {
      card,
      cardId: card.dataset.id,
      cardStatus: card.dataset.status,
    }
  }

  isCard(target) {
    return target.closest('.js-card') ? true : false;
  }

  render() {
    const cards = [];

    this.data.forEach(cardData => {
      const card = createCard(cardData);
      cards.push(card);
    });

    this.$root.innerHTML = cards.join('');
  }

}


function createCard(cardData) {
  const {id, slogan, title, subTitle, description, weight, link, status, statusList} = cardData;
  const desc = description.map(item => `<p class="card__description">${item}</p>`).join('');
  const className = statusList[status].className;
  const footer = statusList[status].footer;

  const card = `
    <div class="card ${className} js-card" data-id="${id}" data-status="${status}">
      <div class="card__body">
        <div class="card__content">
          <div class="card__slogan">${slogan}</div>
          <h2 class="card__title">${title}</h2>
          <h3 class="card__sub-title">${subTitle}</h3>
          ${desc}
        </div>
        <img class="card__img" src="img/cat.png" alt="cat image">
        <div class="card__weight">
          <p class="card__weight-number">${weight}</p>
          <p class="card__weight-kg">кг</p>
        </div>
      </div>
      <div class="card__footer">
        <p class="card__footer-text">${footer}
          <a class="card__footer-link" href="${link}">купи</a>
        </p>
      </div>
    </div>
  `;

  return card;
}