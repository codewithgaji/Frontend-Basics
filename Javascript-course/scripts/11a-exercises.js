let nums = [10, 20, 30, 'amazing dev', true, 'lovely', 75, 'hello world'];
nums[2] = 99;
console.log(nums);

getLastValue(nums)
arraySwap(nums)

function getLastValue(){
  for(let i = 0; i <= nums.length - 1; i += 1){
    if (i === nums.length -1){
      console.log(nums[i])
    }
  }
};

function arraySwap(array){
  let firstValue = array[0]
  let lastindex= array.length - 1;
  let lastValue = array[lastindex]

  array[0]= lastValue;
  array[lastValue]  = firstValue;

  console.log(array)
  return;

};

for (let i = 0; i <= 10; i+= 2){
    console.log(i)
}

for (let i = 5;  i-=1;){
  console.log(i)
}


let i = 0;
while (i <= 10){
  console.log(i)
  i += 2
}


