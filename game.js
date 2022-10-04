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
kickPod = {
    time: 5,
    Pnext: null,
    Tnext: null,
    text: "kickPod"
}

waitPod ={   
    time: 1,
    Pnext: null,
    Tnext: null, //tempREPLACE LATER
    text: "waitPod"
}

wake = {
    time: 5,
    Pnext: kickPod,
    Tnext: waitPod,
    text: "You wake up with no \nmemory inside a pod\n Press to kick open"
},

waitPod.Tnext = wake;

options = {
    viewSize: {x: G.WIDTH, y:G.HEIGHT},
    isReplayEnabled:true
};

function update() {
    if (!ticks) {
        //initialize objects
        timerDot = {pos: vec((G.WIDTH-2), (G.HEIGHT-2))};
        timerMax = G.TICKS*5 //tick rate * seconds
        timerTime = timerMax
        currentNode = wake;
    }
    if(timerTime <= 0){
        //reset timer
        currentNode = currentNode.Tnext;
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