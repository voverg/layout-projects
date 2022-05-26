function sort(method, arr) {
  if (method === 'ascending') {
    method = (a, b) => getPrice(a) - getPrice(b);
  } else if (method === 'descending') {
    method = (a, b) => getPrice(b) - getPrice(a);
  }

  const sortedArr = method ? [...arr].sort((a, b) => method(a, b)) : arr;
  return sortedArr;
}


function getPrice(obj) {
  return +obj.price.replace(' ', '');
}