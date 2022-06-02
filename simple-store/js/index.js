const components = [Burger, Catalog, Goods, Filter, Search];
const initialState = {
  category: 'Все категории',
  minPrice: 0,
  maxPrice: 0,
  brands: [],
  sort: '',
  search: '',
  card: null,
  currentPage: 1,
};
const componentOptions = {
  store: createStore(rootReducer, initialState),
};

components.forEach(Component => {
  const component = new Component(componentOptions);
  component.init();
});