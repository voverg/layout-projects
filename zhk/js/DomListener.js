class DomListener {
  constructor($root, listeners) {
    if (!$root) {
      throw new Error('No $root for DomListener')
    }
    this.$root = $root;
    this.listeners = listeners;
  }

  initDomListeners() {
    this.listeners.forEach(listener => {
      const callback = getCallbackName(listener);
      if (!this[callback]) {
        throw new Error(`Can not exist callback for ${callback} event in ${this.name} component`);
      }

      this[callback] = this[callback].bind(this);
      this.$root.addEventListener(listener, this[callback]);
    });
  }

  removeDomListeners() {
    this.listeners.forEach(listener => {
      const callback = getCallbackName(listener);
      this.$root.removeEventListener(listener, this[callback]);
    });
  }

}



function getCallbackName(eventName) {
  return 'on' + eventName[0].toUpperCase() + eventName.slice(1);
}
