// Filter handlers
function getCategoryFilteredArr(category = 'Все категории', arr) {
  let categoryArr = [];

  if (category === 'Все категории') {
    categoryArr = arr;
  } else {
    categoryArr = arr.filter(item => item.category === category);
  }

  return categoryArr;
}

function getBrandsFilteredArr(brands, arr) {
  let brandFilterArr = arr;

  if (brands.length) {
    brandFilterArr = arr.filter(item => {
      return brands.includes(item.brand);
    });
  }
  
  return brandFilterArr;
}

function getPriceFilteredArr(min, max, arr) {
  let priceFilterArr = arr.filter(item => {
    const price = getPrice(item);
    return price >= min && price <= max;
  });

  if (max === 0) {
    priceFilterArr = arr;
  }
  
  return priceFilterArr;
}

function getPriceSortedArr(method, arr) {
  if (method === 'ascending') {
    method = (a, b) => getPrice(a) - getPrice(b);
  } else if (method === 'descending') {
    method = (a, b) => getPrice(b) - getPrice(a);
  }

  const sortedArr = method ? [...arr].sort((a, b) => method(a, b)) : arr;
  return sortedArr;
}

function getSearchedArr(text, arr) {
  const searchArr = arr.filter(item => {
    const title = item.title.toLowerCase();
    return title.includes(text.toLowerCase().trim())
  });

  return searchArr;
}

// Get price from card object
function getPrice(obj) {
  if (!obj.price) {
    throw new Error('No price obect');
  }
  return +obj.price.replace(' ', '');
}

