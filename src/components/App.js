import { getAnswer } from '../utils/game.js';

class App {
  constructor($target) {
    this.$target = $target;
    this.$input = document.querySelector('#user-input');
    this.$submitButton = document.querySelector('#submit');
    this.$resultTag = document.querySelector('#result');
    this.state = {
      answer: getAnswer(),
      strike: 0,
      ball: 0,
    };
    this.initialize();
    this.render();
  }

  initialize() {
    this.$target.addEventListener('click', (e) => this.handleClick(e));
  }

  handleClick(e) {
    if (e.target.id === 'submit') {
      const userInput = this.$input.value;
      this.play(userInput);
    }
  }

  play(userInput) {
    userInput.split('').forEach((number, idx) => {
      if (this.state.answer.indexOf(number) === idx) {
        this.setState({ strike: this.state.strike + 1 });
        return;
      }

      if (this.state.answer.indexOf(number) !== -1) {
        this.setState({ ball: this.state.ball + 1 });
      }
    });
  }

  setState(newState) {
    this.state = {
      ...this.state,
      ...newState,
    };
    console.log(this.state);
  }

  render() {
    this.$resultTag.innerHTML = '';
    const result = document.createElement('div');
    result.innerHTML = '레이아웃 테스트';
    this.$resultTag.appendChild(result);
  }
}

export default App;
