const fs = require('fs');
const lines = fs.readFileSync('./input.txt', 'utf-8').split('\n').filter(x => x);
policyRe = /([\d]+)-([\d]+) ([a-z]): ([a-z]+)/;
valid = 0;
for (var line of lines) {
  let [_, first, second, char, password] = policyRe.exec(line);
  first -= 1;
  second -= 1;
  if ((password[first] == char && password[second] != char) || (password[first] != char && password[second] == char)) {
    valid++;
  }
}
console.log(valid);