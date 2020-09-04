window.addEventListener("DOMContentLoaded", event => {

    //Variables
    let count = 0;
    const x = "<img src=\"https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg\">";
    const o = "<img src= \"https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg\">";;
    const head = document.getElementById('game-status');
    const s0 = document.getElementById('square-0');
    const s1 = document.getElementById('square-1');
    const s2 = document.getElementById('square-2');
    
    //Player clicks
    for (let i = 0; i < 9; i++){
    const playerClick = document.getElementById(`square-${i}`)
    playerClick.addEventListener("click", clickSome)


    //Player Turns - insert X and O
    function clickSome (event){
    
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
    }

    // if ((s0.innerHTML === x)){
    //     head.innerHTML = "YOU WIN!"
    // }

}

for (let i = 0; i < 3; i++){
    let box = document.getElementById(`square-${i}`)
    box.addEventListener("click", event => {
        if ((s0.innerHTML === x) && (s1.innerHTML === x) && (s2.innerHTML === x)){
            head.innerHTML = "YOU WIN!"
        }
        console.log (box);
    })

//     })
}













    //Who wins?



});