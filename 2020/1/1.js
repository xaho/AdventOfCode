const { exit } = require("process");
const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf');

sorted = input.split('\n').filter(x => x).map(x => Number.parseInt(x));
for (x=0; x<200; x++) {
  for (y=0; y<200; y++) {
    for (z=0; z<200; z++) {
      if (sorted[x]+sorted[y]+sorted[z]==2020) {
        console.log(sorted[x], sorted[y], sorted[z], sorted[x] * sorted[y] * sorted[z]);
        exit();
      }
    }
  }
}


