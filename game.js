title = "Q T E";

description = `Quick Time 
 Escapade`;

characters = [];

const G ={
   WIDTH: 150,
   HEIGHT: 150, 
   TICKS: 60
};

//Define all story nodes (in reverse order)
//UNFINISHED BRANCH
windowAhead = {
    time: 5,
    Pnext: null,
    Tnext: null,
    text: "As you pass identical \nrooms with pods, you \napproach a window.\n\nPress to \njump through the window"
}
turret = {
    time: 20,
    Pnext: null,//ACTUAL END
    Tnext: null,//ACTUAL END
    text: "You hear a turret whirr \nas a dart is fired \ninto you, you slump \nto the ground \nunconscious"
}
hallway = {
    time: 5,
    Pnext: windowAhead,
    Tnext: turret,
    text: "You smash through \nthe door into a \nlong white hallway\n\nPress to \nrun down the hall"
}
run = {
    time: 5,
    Pnext: hallway,
    Tnext: turret,
    text: "You crash into the \ndoor of the small \nroom, it's locked\n\nPress to \nsmash the door"
}
//BRANCH UNFINISHED
doIt = {
    time: 5,
    Pnext: run,
    Tnext: null, //MISSION BRANCH...
    text: "\"We're going to \nput you back to \nsleep for transit \nto the operation\"\n\nPress to say \n\"HELL NO\" and run"
}
assumption = {
    time: 5,
    Pnext: doIt,
    Tnext: doIt,
    text: "\"I'll take that\nas a yes\"\n\nPress to nod"
}
askExp = {
    time: 5,
    Pnext: doIt,
    Tnext: assumption,
    text: "\"So, will you help \nus in our time of need?\"\n\nPress to say \n\"Point me at them\""
}
getOnWith = {
    time: 5,
    Pnext: doIt,
    Tnext: askExp,
    text: "\"A group of rebels \nhas been terrorizing \nthe city, we need you \nto stop them\"\n\nPress to say \n\"Point me at them\""
}
moreSpeal = {
    time: 5,
    Pnext: getOnWith,
    Tnext: getOnWith,
    text: "\"It is truly an honor \nto meet someone as \ndistinguished as \nyourself\"\n\nPress to say \n\"Get on with it\""
}
speal = {
    time: 5,
    Pnext: getOnWith,
    Tnext: moreSpeal,
    text: "The tech says \n\"Welcome back hero, \nwe have awakened you \nin our time of need\"\n\nPress to say \n\"Get on with it\""
}
kickPod = {
    time: 5,
    Pnext: run,
    Tnext: speal,
    text: "you kick the pod open, \nand see a startled man \nin a lab coat \n\nPress to run"
}
waitPod ={   
    time: 5,
    Pnext: run,
    Tnext: speal,
    text: "The lid slides off \nrevealing a man in \na lab coat \n\nPress to run"
}
wake = {
    time: 5,
    Pnext: kickPod,
    Tnext: waitPod,
    text: "You wake up with no \nmemory inside a pod\n\nPress to kick open"
},

//Actual code of the game
options = {
    viewSize: {x: G.WIDTH, y:G.HEIGHT},
};

function update() {
    if (!ticks) {
        //initialize timer and first node
        timerDot = {pos: vec((G.WIDTH-2), (G.HEIGHT-2))};
        currentNode = wake; //should be "wake" for final game
        timerMax = G.TICKS*currentNode.time //tick rate * seconds
        timerTime = timerMax

    }

    //move to next node when timer expires
    if(timerTime <= 0){
        //end game if necessasary
        if(currentNode.Tnext == null){end();}
        //move to next node
        currentNode = currentNode.Tnext;
        //reset timer
        timerMax = currentNode.time * G.TICKS;
        timerTime = timerMax;
    }

    //move to next node when pressed
    if(input.isJustPressed){
        //end game if necessasary
        if(currentNode.Pnext == null){end();}
        //move to next node
        currentNode = currentNode.Pnext;
        //reset timer
        timerMax = currentNode.time * G.TICKS;
        timerTime = timerMax;
    }

    //update timerDotPos & render
    timerTime --;
    timerDot.pos.x = 2+(G.WIDTH-4)*(timerTime/timerMax)
    color("black");
    box(timerDot.pos,3);

    //render text
    text(currentNode.text,10,20)

}

addEventListener("load", onLoad);