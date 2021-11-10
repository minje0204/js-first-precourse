class App {
  constructor($target) {
    this.$target = $target;
    this.$resultTag = document.querySelector('#result');
    this.render();
  }

  render() {
    const result = document.createElement('div');
    result.innerHTML = '레이아웃 테스트';
    this.$resultTag.appendChild(result);
  }
}

export default App;
