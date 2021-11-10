export function getAnswer() {
  let answer = '';

  while (answer.length < 3) {
    const randomNumber = String(Math.floor(Math.random() * 10));
    const isUnique = answer.indexOf(randomNumber) === -1;

    if (isUnique) answer += randomNumber;
  }

  return answer;
}
