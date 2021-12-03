const fs = require('fs');
const lines = fs.readFileSync('./input.txt', 'utf-8').split('\n').filter(x => x);
policyRe = /([\d]+)-([\d]+) ([a-z]): ([a-z]+)/;
valid = 0;
for (var line of lines) {
  let [_, min, max, char, password] = policyRe.exec(line);
  var matches = password.split('').filter(x => x == char).length;
  if (min <= matches && matches <= max) {
    valid++;
    console.log('match')
  }
}
console.log(valid);