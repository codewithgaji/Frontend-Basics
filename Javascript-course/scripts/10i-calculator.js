let calculation = localStorage.getItem('calculator') || "";

previousResult();

function Result(value){
  document.querySelector('.js-calculationDisplay').innerHTML= value

  localStorage.setItem('calculator', value)
  
}



function previousResult(){
  document.querySelector('.js-calculationDisplay').innerHTML = calculation
}

function reset(){
  const reset = document.querySelector('.js-calculationDisplay')

  reset.innerHTML = 0
  calculation = ""

  localStorage.setItem('calculator', "")
}

function number(value){
    const operationPicker = document.querySelector('.js-calculationDisplay')
  
    calculation += value
    operationPicker.innerHTML = calculation
}

function symbol(value){
    const symbolPicker = document.querySelector('.js-calculationDisplay')

    calculation += value

    symbolPicker.innerHTML = calculation
}


