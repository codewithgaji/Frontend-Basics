let result = document.querySelector('.js-button').classList.contains('js-button')
console.log(result)

// This is WAY better
function GameOn(){
  document.querySelector('.js-gamingbutton').classList.toggle('gamingOn')


}

function MusicOn(){
  document.querySelector('.js-musicbutton').classList.toggle('gamingOn')
}

function TechOn(){
  document.querySelector('.js-techbutton').classList.toggle('gamingOn')
}



//Compared to this, when you have to compare
// function GameOn(){
//   let Gaming = document.querySelector('.js-gamingbutton').innerHTML

//   if (Gaming === 'Gaming') {
//   document.querySelector('.js-gamingbutton').classList.add('gamingOn')

//   }

//   else {
//     document.querySelector('.js-gamingbutton').classList.remove('gamingOn')    
//   }
//   }
