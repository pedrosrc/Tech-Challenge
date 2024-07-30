var singleNumber = function (nums) {
  let counter = {};
  let result = 0;

  nums.forEach(number => {
    if (counter[number]) {
      counter[number] += 1;
    } else {
      counter[number] = 1;
    }
  });
  
  Object.keys(counter).map((key) => {
    if(counter[key] <=1){
      result = Number(key)
    }else{
      false
    }
  });

  return result
};
console.log(singleNumber([0,1,0,1,0,1,99]))