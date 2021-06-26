const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour;
var bg ;

function preload() {
    // create getBackgroundImg( ) here
    bts();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
if(backgroundImg){
    background(backgroundImg)
}

    Engine.update(engine);

    // write code to display time in correct format here
fill("white")
textSize(30)
if(hour>=12){
    text("Time :"+ hour%12 + "PM",50,100)
}
else if(hour==0){
    text("Time: 12 AM",100,100)
}
else{
    text("Time :"+ hour%12 + "AM",50,100) 
}
}
async function bts(){
    var get=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var get1=await get.json();
    var get2=get1.datetime
     hour=get2.slice(11,13);
    if(hour>06&&hour<=08){
        bg="sunrise1.png"
    }
    if(hour>08&&hour<=12){
        bg="sunrise2.png"
    }
    if(hour>12&&hour<=15){
        bg="sunrise3.png"
    }
    if(hour>15&&hour<=18){
        bg="sunset7.png"
    }
    if(hour>18&&hour<=20){
        bg="sunset11.png"
    }
    
    else{

    
        bg="sunset12.png"
    }
    backgroundImg=loadImage(bg)
}


    // write code to fetch time from API


    //change the data in JSON format

    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here


