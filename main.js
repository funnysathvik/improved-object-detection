img = "";
status = "";
function preload(){
    img = loadImage("dog_cat.jpg");
    identifier = ml5.objectClassifier("cocossd",modelloaded);
}
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
}
function draw(){
    image(img,0,0,640,420);
    fill("red");
    text("dog",35,75);
    noFill();
    stroke("red");
    rect(30,60,450,350);
    fill("red");
    text("cat",320,120);
    noFill();
    stroke("red");
    rect(300,90,270,320);
}
function modelloaded(){
    status=true;
    identifier.on(img,gotpose);
}
function gotpose(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
    }
}