const fs = require('fs');
map = fs.readFileSync('input.txt', 'utf-8').split('\n').filter(x=>x).map(x => x.split(''));
width = map[0].length;
height = map.length;
x = 0;
y=0;
tree = '#';
trees=0;
while(y < height) {
  if (map[y][x] == tree)
    trees++;
  x+=3;
  y++;
  if (x >= width) x-=width;
}
console.log(trees);