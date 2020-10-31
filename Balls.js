class Balls{
    constructor(image, positionX, positionY, width, height) {
        this.image = image;
        this.positionX = positionX;
        this.positionY = positionY;
        this.width = width;
        this.height = height;
    }
    move(){
        this.positionX += 20;
    }
    getImage(){
        return `<img src="${this.image}" style= "left : ${this.positionX}px; top: ${this.positionY}px;
                     position : absolute; width : ${this.width}px; height : ${this.height}px" >`
    }
    setX(positionX){
        this.positionX = positionX;
    }
}
let ball = new Balls("ball.png", 100, 100, 200, 100);
function start(){
    if(ball.positionX < window.innerWidth){
        ball.move();
    }else{
        ball.setX(100);
        ball.move();
    }
    document.getElementById("game").innerHTML = ball.getImage();
    setTimeout(start, 100);
}
start();
