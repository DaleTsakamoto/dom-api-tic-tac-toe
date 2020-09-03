window.addEventListener("DOMContentLoaded", event => {

    //Player Clicks
    let count = 0;
    for (let i = 0; i < 9; i++){
    const playerClick = document.getElementById(`square-${i}`)
    playerClick.addEventListener("click", event => {
        console.log(event.detail);

    //Player Turns - insert X and O
    if (count % 2 === 0){
        playerClick.innerHTML = "<img src='https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg'>"
        playerClick.setAttribute("id", "clicked")
        count++;
    } else {
        playerClick.innerHTML = "<img src='https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg'>"
        playerClick.setAttribute("id", "clicked")
        count++;
    }
        console.log (playerClick.innerHTML);
        if (event.detail < 2) {
        }
    })
    }












    //Who wins?



});