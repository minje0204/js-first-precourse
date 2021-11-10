class App {
  constructor($target) {
    this.$target = $target;
    this.$input = document.querySelector('#user-input');
    this.$submitButton = document.querySelector('#submit');
    this.$resultTag = document.querySelector('#result');

    this.initialize();
    this.render();
  }

  initialize() {
    this.$target.addEventListener('click', (e) => this.handleClick(e));
  }

  handleClick(e) {
    if (e.target.id === 'submit') {
      const userInput = this.$input.value;
    }
  }

  render() {
    this.$resultTag.innerHTML = '';
    const result = document.createElement('div');
    result.innerHTML = '레이아웃 테스트';
    this.$resultTag.appendChild(result);
  }
}

export default App;
