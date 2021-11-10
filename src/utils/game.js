export function getAnswer() {
  let answer = '';

  while (answer.length < 3) {
    const randomNumber = String(Math.floor(Math.random() * 10));
    const isUnique = answer.indexOf(randomNumber) === -1;

    if (isUnique) answer += randomNumber;
  }

  return answer;
}

export function getHint(state) {
  const { strike, ball } = state;

  if (!strike && !ball) {
    return '낫싱';
  }
  if (strike && ball) {
    return `${strike}스트라이크 ${ball}볼`;
  }
  if (strike) {
    return `${strike}스트라이크`;
  }
  return `${ball}볼`;
}
