var pc = parseInt(Math.random()*10) + (parseInt(Math.random()*10)+1)
var chance = 4
var luck = -1

var delay=2000;
setTimeout(function(){
while (luck != pc && chance > 0){
  var luck = parseInt(prompt('Adivinha  o numero que pensei\nVocê tem '+chance+' tentativas.'))
  chance = chance-1
  if (luck == pc){
    let titulo = document.querySelector('h2')
    titulo.textContent = 'Parabens, você acertou era o numero ' + pc
  }
  else if (chance == 0){
    let titulo = document.querySelector('h2')
    titulo.textContent = 'Infelizmente não foi dessa vez, era o numero ' + pc
  }
  else if (luck < pc){
    alert('O numero é maior')
  }
  else if (luck > pc){
    alert('O numero é menor')
  }
};
},delay);