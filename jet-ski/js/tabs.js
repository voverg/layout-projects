class Tabs {
  constructor(tag, props = {default: 1}) {
    this.$block = document.querySelector(tag);
    this.defaultTab = props.default;
    this.$tabBtnsBlock = null;
    this.$tabs = null;
    this.activeBtnClass = 'tab__btn--active';
    this.activeTabClass = 'tabs__item--active';

    this.init();
  }

  init() {
    this.$tabBtnsBlock = this.$block.querySelector('.tab__btns');
    this.tabBtnList = Array.from(this.$tabBtnsBlock.children);
    this.tabList = this.$block.querySelectorAll('.tabs__item');

    this.setTabs(this.checkDefaultTab());
    this.$tabBtnsBlock.addEventListener('click', this.handleTabBtns);
  }

  handleTabBtns = (event) => {
    if (!event.target.classList.contains('tab__btn')) return;

    const tabIndex = parseInt(event.target.dataset.tab) - 1;
    this.setTabs(tabIndex);
  }

  setTabs(index) {
    this.tabBtnList.forEach((btn) => btn.classList.remove(this.activeBtnClass));
    this.tabBtnList[index].classList.add(this.activeBtnClass);

    this.tabList.forEach((tab) => tab.classList.remove(this.activeTabClass));
    this.tabList[index].classList.add(this.activeTabClass);
  }

  checkDefaultTab() {
    if (this.defaultTab < 1 || this.defaultTab >= this.tabBtnList.length) {
      return 0;
    }

    return this.defaultTab - 1;
  }

}


// Tabs html main structure
// <div class="tab__btns">
//   <button class="tab__btn tab__btn--active" data-tab="1"></button>
//   <button class="tab__btn" data-tab="2"></button>
//   <button class="tab__btn" data-tab="3"></button>
// </div>
// <div class="tabs">
//   <div class="tabs__item tabs__item--active"></div>
//   <div class="tabs__item"></div>
//   <div class="tabs__item"></div>
// </div>