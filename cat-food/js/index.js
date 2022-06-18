class App {
  constructor(options) {
    this.data = options.data || [];
    this.components = options.components || [];
  }

  init() {
    const componentOptions = {
      data: this.data,
    };

    this.components.forEach(item => {
      const component = new item.class(item.elem, componentOptions);
      component.init();
    });
  }
}

const app = new App({
  data: cardList,
  components: [
    {class: Cards, elem: document.querySelector('.js-cards')},
  ],
});

app.init();