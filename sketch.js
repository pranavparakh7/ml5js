let video
let mobilenet

function setup(){
  createCanvas(400,400)
  video = createCapture(VIDEO)
  //video.hide()
  //mobilenet = ml5.imageClassifier();
}

function draw(){
  image(video,0,0,320,240)
}
