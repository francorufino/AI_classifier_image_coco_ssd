let img;
let detector;

function gotDetectons(error, results){
    if(error){
console.log('deu ruim: ', error);
    }
    console.log(results);
    results.forEach(function(result)
    {stroke(0,255,0);
        strokeWeight(4);
        noFill();
        rect(result.x, result.y, result.width, result.height);
        noStroke();
        fill(255);
        textSize(24);
        text(result.label, result.x + 10, result.y+result.height-10);
        
    })
        
    
}

function preload(){
    img= loadImage('../images/tree.jpeg');
    detector = ml5.objectDetector('cocossd');
}

function setup(){
    createCanvas(640, 480);
    console.log('logando o detector: ',  detector);
    image(img, 0, 0);
    detector.detect(img, gotDetectons);
}

