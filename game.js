title = "Q T E";

description = `Quick Time 
 Escapade`;

characters = [];

const G ={
   WIDTH: 150,
   HEIGHT: 150, 
   TICKS: 60,
   DIFFY: 0.7
};

//Define all story nodes (in reverse order)
//
resistanceOpp = {
    time: 5,
    Pnext: null,
    Tnext: null,
    text: "END OF DEMO,\nThe resistance won,\nCongradulations"
}
noHelpEnd = {
    time: 20,
    Pnext: null,//intentional end
    Tnext: null,//intentional end
    text: "Hours later soldiers \nburst in, the op failed, \nthe resistance is dead, \nand now you too, \nare dead"
}
noHelpQuestion = {
    time: 5,
    Pnext: resistanceOpp,
    Tnext: noHelpEnd,
    text: "\"No? ok wait here, \nI'll come back when \nwe're done\"\n\nPress to go with her"
}
aboutToStart = {
    time: 5,
    Pnext: resistanceOpp,
    Tnext: noHelpQuestion,
    text: "\"Come on, the opp is \nabout the start, \nyou in?\"\n\nPress to say \"yes\""
}
helpAnyway = {
    time: 5,
    Pnext: resistanceOpp,
    Tnext: noHelpQuestion,
    text: "\"Danm, we could use \nyour help anyway\"\n\nPress to say \"I'm in\""
}
wiped = {
    time: 5,
    Pnext: helpAnyway,
    Tnext: helpAnyway,
    text: "\"Zeth?, oh bloody arc! \nthey wiped you didn't \nthey\"\n\nPress to say \"yes\""
}
topOfFireEscape = {
    time: 5,
    Pnext: wiped,
    Tnext: aboutToStart,
    text: "\"Good to have you back \nzeth\" a woman says \nwhile pulling the \nladder up\n\nPress to say \"who?\""
}
upstarirs = { 
    time: 5,
    Pnext: wiped,
    Tnext: aboutToStart,
    text: "A woman greets you at \nthe top of the stairs \n\"Good to have you \nback zeth\"\n\nPress to say \"who?\""
}
soldierBurstIn = {
    time: 20,
    Pnext: null,//intentional end
    Tnext: null,//intentional end
    text: "A soldier burst in \nbehind you, and \nshoots you\n\nYou Die"
}
soldierOverCrate = {
    time: 20,
    Pnext: null, //intentional end
    Tnext: null, //intentional end
    text: "A soldier climbs \nover the crates \nand shoots you\n\nYou die"
}
backOutOfDoor = {
    time: 20,
    Pnext: null, //intentional End 
    Tnext: null, //intentional End
    text: "You come face to \nface with a soldier, \nwho shoots you.\n\nYou die"
}
happyBoss = {
    time: 5,
    Pnext: upstarirs,
    Tnext: soldierBurstIn,
    text: "\"Boss'l be happy to \nsee you zeth, get \nupstairs i'll handle \nthe guard\"\n\nPress to go up"
}
hideInDoor = {
    time: 5,
    Pnext: backOutOfDoor,
    Tnext: happyBoss,
    text: "You duck into a \nnearby door, ending \nface to face with \na tall stern woman\n\nPress to leave"
}
fireEscape = {
    time: 5,
    Pnext: topOfFireEscape,
    Tnext: soldierOverCrate,
    text: "As you run you \nsee a fire escape\n\nPress to climb"
}
crates = {
    time: 5,
    Pnext: hideInDoor,
    Tnext: fireEscape,
    text: "The crates fall into \nthe soldier's path\n\nPress to hide"
}
alleyway = {
    time: 5,
    Pnext: crates,
    Tnext: fireEscape,
    text: "you dash into the \nalleyway, soldiers \nhot on your heels\n\nPress to knock over \nsome crates"
}
guardRush = {
    time: 5,
    Pnext: null,//intentional end
    Tnext: null,//intentional end
    text: "soldiers rush out,\nsurround you,\nand kill you\n\nyou died"
}
landedOnStreet= {
    time: 5,
    Pnext: alleyway,
    Tnext: guardRush,
    text: "As you land a voice \nshouts \"Zethos this \nway!\"\n\nPress to go"
}
hanging = {
    time: 5,
    Pnext: landedOnStreet,
    Tnext: guardRush,
    text: "you hang from a ledge\n\nPress to let go"
}
falling = {
    time: 5,
    Pnext: hanging,
    Tnext: landedOnStreet,
    text: "You smash through \nthe second story \nwindow\n\nPress to grab \nthe ledge"
}
soldiersInCoridor = {
    time: 20,
    Pnext: null, //Intentional end
    Tnext: null, //Intentional end
    text: "A group of soldiers \nrush out of a nearby \nstairwell and shoot you \n\nyou die"
}
windowAhead = {
    time: 5,
    Pnext: falling,
    Tnext: soldiersInCoridor,
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
start = {
    time: 5,
    Pnext: wake,
    Tnext: wake,
    text: "Wait to see \nwhat happens\nor\nPress to act"
}

//Actual code of the game
options = {
    viewSize: {x: G.WIDTH, y:G.HEIGHT},
};

function update() {
    if (!ticks) {
        //initialize timer and first node
        timerDot = {pos: vec((G.WIDTH-2), (G.HEIGHT-2))};
        currentNode = start; //should be "wake" for final game
        timerMax = G.TICKS*currentNode.time*G.DIFFY //tick rate * seconds
        timerTime = timerMax

    }

    //move to next node when timer expires
    if(timerTime <= 0){
        //end game if necessasary
        if(currentNode.Tnext == null){end();}
        //move to next node
        currentNode = currentNode.Tnext;
        //reset timer
        timerMax = currentNode.time * G.TICKS*G.DIFFY;
        timerTime = timerMax;
        addScore(1)
    }

    //move to next node when pressed
    if(input.isJustPressed){
        //end game if necessasary
        if(currentNode.Pnext == null){end();}
        //move to next node
        currentNode = currentNode.Pnext;
        //reset timer
        timerMax = currentNode.time * G.TICKS*G.DIFFY;
        timerTime = timerMax;
        addScore(1)
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