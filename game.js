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
    Tnext: null,
    text: "waitPod"
}

wake = {
    time: 5,
    Pnext: kickPod,
    Tnext: waitPod,
    text: "You wake up with no \nmemory inside a pod\n Press to kick open"
},

options = {
    viewSize: {x: G.WIDTH, y:G.HEIGHT},
};

function update() {
    if (!ticks) {
        //initialize timer and first node
        timerDot = {pos: vec((G.WIDTH-2), (G.HEIGHT-2))};
        currentNode = wake;
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