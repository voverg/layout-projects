const $projects = document.querySelector('#projects');

function createCard({id, title, url, img}) {
  const div = document.createElement('div');
  div.classList.add('card');
  div.innerHTML = `
    <a href="${url}" class="card__link" target="_blank" rel="noopener noreferrer">
      <img src="${img}" class="card__img" alt="${title}" title="${title}">
      <h2 class="card__title">${title}</h2>
    </a>
  `;

  return div;
}

model.forEach(data => {
  const card = createCard(data);
  $projects.append(card);
})
