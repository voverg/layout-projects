// Burger menu elements
const body = document.body;
const burger = body.querySelector('.burger');
const burgerBtn = burger.querySelector('.burger__btn');
// Service blocks
const service = body.querySelector('.service');
// Modal block
const openModal = body.querySelector('#login');
const modal = body.querySelector('.modal');
const closeModal = modal.querySelector('.modal__close');

// Burger menu
function toggleMenu() {
  burger.classList.toggle('burger_active');
  body.classList.toggle('hidden');
}

function handleService(event) {
  if (window.innerWidth >= 800) return;
  
  const target = event.target;
  const header = target.closest('.service__item-header');

  if (!header) return;
  const parent = header.closest('.service__item');
  // Toggle title arrow
  const arrow = header.querySelector('.service__arrow');
  arrow.classList.toggle('service__arrow--opened');
  // Toggle service item body
  const body = parent.querySelector('.service__item-body');
  body.classList.toggle('service__item-body--active');
}

// Listeners
burgerBtn.addEventListener('click', (event) => {
  toggleMenu();
});

service.addEventListener('click', handleService);

openModal.addEventListener('click', () => {
  modal.classList.add('modal__show');
  toggleMenu();
});
closeModal.addEventListener('click', () => {
  modal.classList.remove('modal__show');
});

