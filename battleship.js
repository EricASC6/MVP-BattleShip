// https://stackoverflow.com/questions/5187013/making-a-random-number-thats-a-multiple-of-10

let shipColor1 = [68, 135, 242];
let shipColor2 = [68, 135, 242];
let shipColor3 = [68, 135, 242];
let shipColor4 = [68, 135, 242];
let shipColor5 = [68, 135, 242];

let shipColors = [shipColor1, shipColor2, shipColor3, shipColor4, shipColor5]

let rowx1 = 0;
let rowy1 = 60;
let rowx2 = 600;
let rowy2 = 60;
let colx1 = 60;
let coly1 = 0;
let colx2 = 60;
let coly2 = 600;

let randomx1 = Math.floor(Math.random()*10)*60
let randomy1 = Math.floor(Math.random()*10)*60
let randomx2 = Math.floor(Math.random()*10)*60
let randomy2 = Math.floor(Math.random()*10)*60
let randomx3 = Math.floor(Math.random()*10)*60
let randomy3 = Math.floor(Math.random()*10)*60
let randomx4 = Math.floor(Math.random()*10)*60
let randomy4 = Math.floor(Math.random()*10)*60
let randomx5 = Math.floor(Math.random()*10)*60
let randomy5 = Math.floor(Math.random()*10)*60



function setup(){
    createCanvas(600, 600);
    background(68, 135, 242);
}

function draw(){
    // Rows
    for (let i = 0; i < 11; i++){
        line(rowx1, rowy1*i, rowx2, rowy2*i)
    }

    // Columns
    for (let i = 0; i < 11; i++){
        line(colx1 * i, coly1, colx2 * i, coly2)
    }

    fill(shipColor1[0], shipColor1[1], shipColor1[2])
    square(randomx1,randomy1,60)
    fill(shipColor2[0], shipColor2[1], shipColor2[2])
    square(randomx2,randomy2,60)
    fill(shipColor3[0], shipColor3[1], shipColor3[2])
    square(randomx3, randomy3, 60)
    fill(shipColor4[0], shipColor4[1], shipColor4[2])
    square(randomx4,randomy4,60)
    fill(shipColor5[0], shipColor5[1], shipColor5[2])
    square(randomx5,randomy5,60)
}



function mouseClicked(){
    if (dist(mouseX, mouseY, randomx1 + 30, randomy1 - 30) <= 30){
        shipColor1[0] = 255;
        shipColor1[1] = 0;
        shipColor1[2] = 0;
        fill("black")
        text("Hit", randomx1  + 30, randomy1 - 30)
    } else if (dist(mouseX, mouseY, randomx2 + 30, randomy2 - 30) <= Math.sqrt(900)){
        shipColor2[0] = 255;
        shipColor2[1] = 0;
        shipColor2[2] = 0;
    } else if (dist(mouseX, mouseY, randomx3 +30, randomy3 - 30) <= Math.sqrt(900)){
        shipColor3[0] = 255;
        shipColor3[1] = 0;
        shipColor3[2] = 0;
    } else if(dist(mouseX, mouseY, randomx4 + 30, randomy4 - 30) <= Math.sqrt(900)){
        shipColor4[0] = 255;
        shipColor4[1] = 0;
        shipColor4[2] = 0;
    } else if (dist(mouseX, mouseY, randomx5 +30 , randomy5 - 30) <= Math.sqrt(900)){
        shipColor5[0] = 255;
        shipColor5[1] = 0;
        shipColor5[2] = 0;
    }
}

