class ShowBtn extends Modal{
  constructor($root, options) {
    super($root, {
      name: 'Show btn',
      listeners: ['click'],
      ...options,
    });
  }

  init() {
    super.init();

    this.store.subscribe(() => {
      this.state = this.store.getState();
    });
  }

  onClick({target}) {
    this.store.dispatch({type: 'open', open: true});
  }

  render() {}

}
