class App {
  constructor(options) {
    this.floorData = options.floorData;
    this.flatData = options.flatData;
    this.components = options.components || [];
  }

  init() {
    const initialState = {
      floor: this.floorData.getActive().id,
      flat: 0,
      open: false,
    };

    const componentOptions = {
      store: createStore(rootReducer, initialState),
      floorData: this.floorData,
      flatData: this.flatData,
    }

    this.components.forEach(item => {
      const component = new item.class(item.elem, componentOptions);
      component.render();
      component.init();
    });
  }

}
