var scores,roundScore,activePlayer,gamePlaying;

var previousNumber;

init();

//When are active player number changes to 0 or 1 it will concatinate that 0 or 1 to 
//the end of the #current- selector thus changing the selector in which we are using
// document.querySelector('#current-'+activePlayer).innerHTML = '<em>'+dice+'</em>';
//How to edit the css. Here we set the dice display to none

document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gamePlaying){
        //1.Random number
        dice1 = Math.floor(Math.random()*6)+1;
        dice2 = Math.floor(Math.random()*6)+1;


        //2.Display the result
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = 'dice-'+dice1+'.png';
        document.getElementById('dice-2').src = 'dice-'+dice2+'.png';



        if(dice1 != 1 && dice2 != 1){
            roundScore += dice1 + dice2;
            document.querySelector('#current-'+activePlayer).textContent = roundScore;
        } else{
            nextPlayer();
        }

        //3.Update the round score as long as its not 1
        // if(dice === 6 && previousNumber === 6){
        //     //player loses score
        //     roundScore = 0;
        //     scores[activePlayer] = roundScore;

        //     document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        //     nextPlayer();

        // } else if(dice !== 1){

        //     //add score
        //     roundScore += dice;
        //     document.querySelector('#current-'+activePlayer).textContent = roundScore;
        // } else{
        //     nextPlayer();
        // }

        // previousNumber = dice;

    }

})   
document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlaying){
        
        console.log(endGameValue);
        //add current score to global score 
        scores[activePlayer] += roundScore;
        //update the UI 
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        //check if player won the game

        var endGameValue = document.querySelector('.end-game').value;
        console.log(endGameValue);

        if(endGameValue){
            var winningScore = endGameValue;
        } else{
            winningScore = 100;
        }
        if(scores[activePlayer]>=winningScore){

            document.querySelector('#name-'+activePlayer).textContent = 'Winner';
            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';

            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;

        }else{
            nextPlayer();
        }
    }

});

function nextPlayer(){
    //next Player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active'); 
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click',init);

function init(){
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    
    

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');

}