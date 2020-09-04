window.addEventListener("DOMContentLoaded", event => {

    //Player Clicks
    let count = 0;
    for (let i = 0; i < 9; i++){
    const playerClick = document.getElementById(`square-${i}`)
    playerClick.addEventListener("click", event => {

    //Player Turns - insert X and O
    // let clicked = document.getElementsByClassName("clicked")
    if (count % 2 === 0){
        playerClick.innerHTML = "<img src='https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg'>"
        // playerClick.setAttribute("disabled", "disabled")
        console.log(playerClick.innerHTML.length)
       console.log( playerClick.removeEventListener("click", ()=> {
            if (playerClick.innerHTML.length !== 0){}

       }))
        count++;
    } else {
        playerClick.innerHTML = "<img src= 'https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg'>"
        // playerClick.setAttribute("disabled", "disabled")
        playerClick.removeEventListener("click", () => console.log('it worked 2'))
        count++;
    }

        console.log (playerClick.innerHTML);
        if (event.detail < 2) {
        }
    })
    }












    //Who wins?



});