let userscore = 0;
let compscore = 0;

for (i=0; i<5; i++){
    let user = prompt("choose rock,paper, or scissor").toLowerCase();

    let random = Math.floor(Math.random() * 3);

    let comp;

    if(random === 0) {
        comp = "rock";
    }
    else if (random === 1) {
        comp = "paper";
    }
    else {
        comp = "scissor";
    }
    console.log("you:", user);
    console.log("comp:",comp);

    if(user === comp){
        console.log("tie!");
    }
    else if (
        (user === "rock" && comp === "scissor") ||
        (user === "paper" && comp === "rock") ||
        (user === "scissor" && comp === "paper")
    ) {
        console.log("You win!");
        userscore++;
    }
    else {
        console.log("Comp wins!");
        compscore++;
    }
    console.log("final score");
    console.log("You: ", userscore);
    console.log("Computer: ", compscore);

}