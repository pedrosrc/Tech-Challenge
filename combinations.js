var combine = function (n, k) {
  const result = [];
  const combination = [];

  function backtrack(start) {
    if (combination.length === k) {
      result.push([...combination]);
      return;
    }

    for (let num = start; num <= n; num++) {
      combination.push(num);
      backtrack(num + 1);
      combination.pop();
    }
  }

  backtrack(1);
  return result;
};
console.log(combine(4, 3))