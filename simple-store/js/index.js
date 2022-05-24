const components = [Burger, Catalog, Cart, Goods, Filter, Search];
const initialState = {
  category: 'Все категории',
  minPrice: 0,
  maxPrice: 0,
  brands: [],
  search: '',
  card: null,
};
const componentOptions = {
  store: createStore(rootReducer, initialState),
};

components.forEach(Component => {
  const component = new Component(componentOptions);
  component.init();
});