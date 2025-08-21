const array = [-2, -1, 0, 99]
console.log(array)
let arrayIncrease = []



addOne(array);

function addOne(array){
  for (let i = 0; i<= array.length-1; i+=1){
  let array2 = array[i]+1
  arrayIncrease.push(array2)
}
  console.log(arrayIncrease)

}