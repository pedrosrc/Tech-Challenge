var search = function (nums, target) {
  let result = false
  for (i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      result = true
    };
  };
  return result
};
console.log(search([2, 5, 6, 0, 0, 1, 2], 6))
