'use strict';
// const diplayValuue=function(){
//   console.log(document.querySelector('.guess').value);
//   console.log(document.querySelector('.message').textContent='Correct Number!!!');
//   console.log(document.querySelector('.number').textContent=34);
//   console.log(document.querySelector('body').style.backgroundColor='green');
// }
// document.querySelector('.check').addEventListener('click',diplayValuue);

let secretNumber=Math.floor(Math.random()*20)+1;
let score=20;
let highScore=0;


document.querySelector('.check').addEventListener('click',function(){
  const guess=Number(document.querySelector('.guess').value);
  if(!guess){
    document.querySelector('.message').textContent='⛔ No number';
  }
  else if(guess===secretNumber){
    document.querySelector('.number').textContent=secretNumber;
    document.querySelector('.message').textContent='🎉 Correct Number';
    document.querySelector('body').style.backgroundColor='green';
    document.querySelector('.number').style.width='20rem';
    document.querySelector('.number').textContent=secretNumber; 
    if(score>highScore){
      document.querySelector('.highscore').textContent=score;
    }
  }
  else if(guess>secretNumber){
    if(score>1){
      document.querySelector('.message').textContent='📈 Too high'; 
      score--;
      document.querySelector('.score').textContent=score;
    }
    else{
      document.querySelector('.message').textContent='💥You lost the game!!!';
      document.querySelector('.score').textContent=0;
    }
  }
  else if(guess<secretNumber){
    if(score>1){
      document.querySelector('.message').textContent='📉 Too low';
      score--;
      document.querySelector('.score').textContent=score;
    }
    else{
      document.querySelector('.message').textContent='💥 You lost the game!!!';
      document.querySelector('.score').textContent=0;
    }
  }
});
 

document.querySelector('.again').addEventListener('click',function(){
  secretNumber=Math.floor(Math.random()*20)+1;
  score=20;
  document.querySelector('.guess').value='';
  document.querySelector('.message').textContent='Starting Guessing...'; 
  document.querySelector('.number').textContent='?';
  document.querySelector('.number').textContent=secretNumber;
  document.querySelector('body').style.backgroundColor='black';
  document.querySelector('.score').textContent=score;
  document.querySelector('.number').style.width='15rem';
});


