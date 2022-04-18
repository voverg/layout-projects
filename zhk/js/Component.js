class Component extends DomListener {
  constructor($root, options) {
    super($root, options.listeners);
    this.name = options.name;
  }

  render() {}

  init() {
    this.initDomListeners();
  }

  destroy() {
    this.removeDomListeners();
  }
}
