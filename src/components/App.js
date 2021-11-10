import { ANSWER_MATCH_TEXT } from '../utils/constant.js';
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
    this.render('');
    this.setState({ strike: 1, ball: 1 });
  }

  initialize() {
    this.$target.addEventListener('click', (e) => this.handleClick(e));
  }

  handleClick(e) {
    if (e.target.id === 'submit') {
      const userInput = this.$input.value;
      this.play(userInput);
    }
    if (e.target.id === 'game-restart-button') {
      this.render(false);
      this.$input.value = '';
      this.$input.focus();
    }
  }

  play(userInput) {
    if (this.state.answer === userInput) {
      this.render(true);
    }
  }

  setState(newState) {
    this.state = {
      ...this.state,
      ...newState,
    };
    console.log(this.state);
  }

  render(isMatch) {
    this.$resultTag.innerHTML = '';
    const result = document.createElement('div');
    result.innerHTML = isMatch ? ANSWER_MATCH_TEXT : '';
    this.$resultTag.appendChild(result);
  }
}

export default App;
