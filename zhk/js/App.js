class App {
  constructor(options) {
    this.components = options.components || [];
  }

  init() {
    this.components.forEach(component => {
      component.render();
      component.init();
    });
  }

}
