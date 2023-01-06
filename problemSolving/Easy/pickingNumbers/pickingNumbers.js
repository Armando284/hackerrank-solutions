function pickingNumbers(a) {
  // Write your code here
  let biggest = 0;
  const orderedArray = [...a].sort((a, b) => a - b);
  orderedArray.forEach((x, i) => {
    if (biggest > orderedArray.length / 2) return;
    const breakPos = orderedArray.findIndex(y => y > x + 1);
    let cont = breakPos !== -1 ? orderedArray.slice(i, breakPos).length : orderedArray.length - i;
    if (cont > biggest) biggest = cont;
  });
  return biggest;
}
// Test cases
// let a = [1, 1, 2, 2, 4, 4, 5, 5, 5];
// // console.log(pickingNumbers(a));
// a = [4, 6, 6, 3, 3, 1];
// console.log(pickingNumbers(a));
// a = "66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66".split(' ')
// console.log(pickingNumbers(a));
