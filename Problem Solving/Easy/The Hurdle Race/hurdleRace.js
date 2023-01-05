function hurdleRace(k, height) {
  // Write your code here
  // This is the fastest way to find the maximum value 
  // second only to for loop on large data nut the difference is small
  const tallest = Math.max.apply(null, height);
  return k >= tallest ? 0 : tallest - k;
}

// Tests
let k = 4,
  height = [1, 6, 3, 5, 2];

console.log(hurdleRace(k, height))