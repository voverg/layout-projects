// Fill goods secton with goods__items
createGoodsItems(document.querySelector('.goods__wrapper'), cardsData);
// Get base DOM-elements
const cartWrapper = document.querySelector('.cart__wrapper'),
empty = cartWrapper.querySelector('.empty'),
cart = document.querySelector('.cart'),
close = document.querySelector('.cart__close'),
open = document.querySelector('#cart'),
goodsBtns = document.querySelectorAll('.goods__btn'),
products = document.querySelectorAll('.goods__item'),
confirm = document.querySelector('.confirm'),
badge = document.querySelector('.nav__badge'),
totalPrice = document.querySelector('.cart__total > span'),
titles = document.querySelectorAll('.goods__title');


// Open a cart modal window
open.addEventListener('click', () => {
  cart.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

// Close a cart modal window
close.addEventListener('click', () => {
  cart.style.display = 'none';
  document.body.style.overflow = '';
});

// Add goods to the cart
goodsBtns.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    let item = products[i].cloneNode(true),
    trigger = item.querySelector('button'),
    removeBtn = document.createElement('div');
        // Delete Add-to-cart button from cart
        trigger.remove();
        // Add ainmation for appirence cart icon
        showConfirm();
        // Add remove goods symbol to cart block
        removeBtn.classList.add('goods__item-remove');
        removeBtn.innerHTML = '&times';
        item.appendChild(removeBtn);

        // -----------Work with goods-card item in the cart ---------
        // Add goods item to the cart
        cartWrapper.appendChild(item);
        if (empty) {
          empty.style.display = 'none';
        }

        // Change number of goods in the cart
        calcGoods();
        // Calculate total price of goods in the cart
        calcTotalPrice();
        // Delete goods item from the cart
        removeFromCart();
      });
});

// Cut a title of the goods
function sliceTitle() {
  titles.forEach((item) => {
    if (item.textContent.length > 70) {
      const titleItem = `${item.textContent.slice(0, 51)}...`;
      item.textContent = titleItem;
    }
  });
}
sliceTitle();

// Animation cart function when goods add to the cart
function showConfirm() {
  confirm.style.display = 'block';
  let counter = 50;
  const id = setInterval(frame, 10);
  function frame() {
    if (counter <= 10) {
      clearInterval(id);
      confirm.style.display = 'none';
    }
    else {
      counter--;
      confirm.style.transform = `translateY(-${counter}px)`;
      confirm.style.opacity = `.${counter}`;
    }
  }
}

// Calculate number of goods in the cart
function calcGoods() {
  const goodsItems = cartWrapper.querySelectorAll('.goods__item');
  badge.textContent = goodsItems.length;
}
// Calculate total price of goods in the cart
function calcTotalPrice() {
  const prices = cartWrapper.querySelectorAll('.goods__price > span');
  total = 0;
  prices.forEach((item) => {
    const currentPrice = +item.textContent.split(' ').join('');
    total += currentPrice;
  });
  totalPrice.textContent = total;
}

// Delete goods from the cart
function removeFromCart() {
  const removeBtns = cartWrapper.querySelectorAll('.goods__item-remove');
  removeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.parentElement.remove();
            // Change number of goods in the cart
            calcGoods();
            // Calculate total price of goods in the cart
            calcTotalPrice();
            // Add note that the cart is empty
            const numberOfGoods = cartWrapper.querySelectorAll('.goods__item');
            if (numberOfGoods.length == 0) {
              empty.style.display = 'block';
            }
          });
  });
}
