const [first, ...array] = [10, 5, 2, 3, 1, 4, 2, 3, 5, 1, 7];

const result = Array.from({ length: 10001 }, () => 0);

for (let elem of array) {
  result[elem]++;
}

for (let i = 0; i < result.length; i++) {
  if (result[i] !== 0) {
    for (let j = 0; j < result[i]; j++) {
      console.log(i);
    }
  }
}
