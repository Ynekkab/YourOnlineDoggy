var x = 0;
var y = 0;
function setup(){
    noCanvas();
    webpageTitle = createP("Your Online Doggy!");
    webpageTitle.addClass("title");
    myDoggy = createImg('images/doggysad.png');
    myDoggy.addClass("doggy");
    userInstruction = createP("Your doggy is feeling sad! Click it's head to give it a little pat.");
    myDoggy.mouseClicked(doggyClicked);
}
function doggyClicked(){
    myDoggy.remove();
    myDoggy = createImg('images/doggyhappy.png');
    myDoggy.addClass("doggy");
    userInstruction.html("Much better! Now click the treat so your doggy knows it's feeding time.");
    doggyTreat = createImg('images/treat.png');
    doggyTreat.addClass("treat");
    doggyTreat.mouseClicked(treatClicked);
    }
function treatClicked(){
    myDoggy.remove();
    myDoggy = createImg('images/doggymouthopen.png');
    myDoggy.addClass("doggy");
    image(doggyTreat, 0, 0)
    userInstruction.html("Use the UP, RIGHT, LEFT, and DOWN arrows to move the treat into it's mouth!");
    keyPressed();
    }
function keyPressed(){
    doggyTreat.position(x, y);
    if (keyCode === UP_ARROW) {
        y = y - 20;
    } else if (keyCode === DOWN_ARROW) {
        y = y + 20;
    } else if (keyCode === LEFT_ARROW) {
        x = x - 20;
    } else if (keyCode === RIGHT_ARROW) {
          x = x + 20;
    }
    if (x <= -500 && y <= -500){
        endProgram();
    }
}
function endProgram(){
    doggyTreat.remove();
    myDoggy.remove();
    myDoggy = createImg('images/doggyhappy.png');
    myDoggy.addClass("doggy");
    userInstruction.html("All nice and fed! Your doggy is happy now thanks to you! Reload the page to play again.");
}