window.addEventListener("DOMContentLoaded", event => {

    //Variables
    let count = 0;
    const x = "<img src=\"https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg\">";
    const o = "<img src=\"https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg\">";;
    const head = document.getElementById('game-status');
    const s0 = document.getElementById('square-0');
    const s1 = document.getElementById('square-1');
    const s2 = document.getElementById('square-2');
    const s3 = document.getElementById('square-3');
    const s4 = document.getElementById('square-4');
    const s5 = document.getElementById('square-5');
    const s6 = document.getElementById('square-6');
    const s7 = document.getElementById('square-7');
    const s8 = document.getElementById('square-8');
    const newGame = document.getElementById()
    
   
    
    
    //Player clicks
    for (let i = 0; i < 9; i++){
        const playerClick = document.getElementById(`square-${i}`)
        playerClick.addEventListener("click", clickSome)
        
        function clickSome (event){
    
        

    //Player Turns - insert X and O
    if (head.innerHTML !== ''){
        return
    }
    if (count === 8 && head.innerHTML ==='') {
        head.innerHTML = "Tie Game!"
    }
    if (count % 2 === 0){
        playerClick.innerHTML = x;
        playerClick.removeEventListener("click", clickSome)
        // console.log(s0.innerHTML === x);
        // console.log(x);
        // playerClick.id = "x";
        count++;
    } else {
        playerClick.innerHTML = o;
        playerClick.removeEventListener("click", clickSome)
        // playerClick.id = "o";
        count++;
        }
            if (((s0.innerHTML === x) && (s1.innerHTML === x) && (s2.innerHTML === x)) ||
                ((s3.innerHTML === x) && (s4.innerHTML === x) && (s5.innerHTML === x)) ||
                ((s6.innerHTML === x) && (s7.innerHTML === x) && (s8.innerHTML === x)) ||
                ((s0.innerHTML === x) && (s3.innerHTML === x) && (s6.innerHTML === x)) ||
                ((s1.innerHTML === x) && (s4.innerHTML === x) && (s7.innerHTML === x)) ||
                ((s2.innerHTML === x) && (s5.innerHTML === x) && (s8.innerHTML === x)) ||
                ((s0.innerHTML === x) && (s4.innerHTML === x) && (s8.innerHTML === x)) ||
                ((s2.innerHTML === x) && (s4.innerHTML === x) && (s6.innerHTML === x))
            ) {
                head.innerHTML = "Xs WIN! Os Lose!"
                playerClick.removeEventListener("click", clickSome)
                
            }
            if (((s0.innerHTML === o) && (s1.innerHTML === o) && (s2.innerHTML === o)) ||
                ((s3.innerHTML === o) && (s4.innerHTML === o) && (s5.innerHTML === o)) ||
                ((s6.innerHTML === o) && (s7.innerHTML === o) && (s8.innerHTML === o)) ||
                ((s0.innerHTML === o) && (s3.innerHTML === o) && (s6.innerHTML === o)) ||
                ((s1.innerHTML === o) && (s4.innerHTML === o) && (s7.innerHTML === o)) ||
                ((s2.innerHTML === o) && (s5.innerHTML === o) && (s8.innerHTML === o)) ||
                ((s0.innerHTML === o) && (s4.innerHTML === o) && (s8.innerHTML === o)) ||
                ((s2.innerHTML === o) && (s4.innerHTML === o) && (s6.innerHTML === o))
            ) {
                head.innerHTML = "Os WIN! Xs Lose"
                playerClick.removeEventListener("click", clickSome)
            } 
    }
}
});