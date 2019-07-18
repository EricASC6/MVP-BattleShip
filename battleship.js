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

let randomx1;
let randomy1;
let randomx2;
let randomy2;
let randomx3;
let randomy3;
let randomx4;
let randomy4;
let randomx5;
let randomy5;

let xCoordinates = [randomx1, randomx2, randomx3, randomx4, randomx5]
let yCoordinates = [randomy1, randomy2, randomy3, randomy4, randomy5]

for (let i = 0; i < xCoordinates.length; i++){
    xCoordinates[i] = Math.floor(Math.random()*10)*60;
}

for (let i = 0; i < yCoordinates.length; i++){
    yCoordinates[i] = Math.floor(Math.random()*10)*60;
}


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
    square(xCoordinates[0], yCoordinates[0],60)
    fill(shipColor2[0], shipColor2[1], shipColor2[2])
    square(xCoordinates[1], yCoordinates[1],60)
    fill(shipColor3[0], shipColor3[1], shipColor3[2])
    square(xCoordinates[2], yCoordinates[2],60)
    fill(shipColor4[0], shipColor4[1], shipColor4[2])
    square(xCoordinates[3], yCoordinates[3],60)
    fill(shipColor5[0], shipColor5[1], shipColor5[2])
    square(xCoordinates[4], yCoordinates[4],60)
}



function mouseClicked(){
    squareX = Math.floor(mouseX/60) * 60
    squareY = Math.floor(mouseY/60) * 60

    for (let i = 0; i < xCoordinates.length; i++){
        if (squareX === xCoordinates[i] && squareY === yCoordinates[i]){
            shipColors[i][0] = 255;
            shipColors[i][1] = 0;
            shipColors[i][2] = 0;
        }
    }



    // if (dist(randomx1 + 30, randomy1 - 30, mouseX, mouseY) <= 30){
    //     shipColor1[0] = 255;
    //     shipColor1[1] = 0;
    //     shipColor1[2] = 0;
    // } else if (dist(randomx2 + 30, randomy2 - 30, mouseX, mouseY) <= 30){
    //     shipColor2[0] = 255;
    //     shipColor2[1] = 0;
    //     shipColor2[2] = 0;
    // } else if (dist(randomx3 +30, randomy3 - 30, mouseX, mouseY) <= 30){
    //     shipColor3[0] = 255;
    //     shipColor3[1] = 0;
    //     shipColor3[2] = 0;
    // } else if(dist(randomx4 + 30, randomy4 - 30, mouseX, mouseY) <= 30){
    //     shipColor4[0] = 255;
    //     shipColor4[1] = 0;
    //     shipColor4[2] = 0;
    // } else if (dist(randomx5 +30 , randomy5 - 30, mouseX, mouseY) <= 30){
    //     shipColor5[0] = 255;
    //     shipColor5[1] = 0;
    //     shipColor5[2] = 0;
    // }
}

