import { getAnswer, getHint } from '../utils/game.js';
import { getIsValid } from '../utils/validator.js';
import { ANSWER_MATCH_TEXT } from '../utils/constant.js';

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
  }

  initialize() {
    this.$target.addEventListener('click', (e) => this.handleClick(e));
  }

  handleClick(e) {
    if (e.target.id === 'submit') {
      const userInput = this.$input.value;
      if (!getIsValid(userInput)) {
        alert('입력을 확인해주세요');
        this.$input.value = '';
        return;
      } else {
        this.play(userInput);
      }
    }
  }

  play(userInput) {
    let strike = 0;
    let ball = 0;
    userInput.split('').forEach((number, idx) => {
      if (this.state.answer.indexOf(number) === idx) {
        strike += 1;
        return;
      }

      if (this.state.answer.indexOf(number) !== -1) {
        ball += 1;
      }
    });
    this.setState({ strike: strike, ball: ball });

    this.render(getHint(this.state));
  }

  setState(newState) {
    this.state = {
      ...this.state,
      ...newState,
    };
    console.log(this.state);
  }

  render(text) {
    this.$resultTag.innerHTML =
      this.state.strike === 3
        ? `<p>${ANSWER_MATCH_TEXT}</p>`
        : `<p>${text}</p>`;
  }
}

export default App;
