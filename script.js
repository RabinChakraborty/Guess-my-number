'use strict';


function num(min, max) {
  const val = Math.floor(Math.random() * (max - min) + min);
  console.log(val);
  return val
}

let com = num(1, 21);
let score = 20;
let highscore=0;

document.querySelector('.check').addEventListener('click', function() {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'No number found!';}
    if (guess) {
      if (score >=1) {
        score--;
        document.querySelector('.score').textContent = score;
        if (guess < com) {
          document.querySelector('.message').textContent = 'too low.';
        } else {
          document.querySelector('.message').textContent = 'too high.';
        }
      } else {
        alert('Game Over, try again!')
        document.querySelector('.guess').value = '';
            document.querySelector('.message').textContent = 'Start guessing...';
            com = num(1, 21);
                document.querySelector('.number').textContent ='?';
                 score = 20;
                     document.querySelector('.score').textContent = score;
}
    }





  if (guess === com) {
    document.querySelector('.message').textContent = 'Congrats, correct answer.';
    document.querySelector('.number').textContent = com;
     document.querySelector('.score').textContent = score+1;
    document.querySelector('body').style.backgroundColor='#60b347';
    document.querySelector('.number').style.width='30rem';
if(score>highscore){
  highscore=score;
    document.querySelector('.highscore').textContent = score+1;
}


  }

})
document.querySelector('.again').addEventListener('click', function() {
  document.querySelector('.guess').value = '';
      document.querySelector('.message').textContent = 'Start guessing...';
      com = num(1, 21);
          document.querySelector('.number').textContent ='?';
           score = 20;
               document.querySelector('.score').textContent = score;
               document.querySelector('body').style.backgroundColor='#222';
                 document.querySelector('.number').style.width='15rem';
});
