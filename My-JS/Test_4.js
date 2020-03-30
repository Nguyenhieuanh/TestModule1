let Circle = function (x,y,radius,color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;

    this.render = function (canvas) {
        canvas.beginPath();
        canvas.arc(this.x, this.y, this.radius,0,2*Math.PI);
        canvas.fillStyle = this.color;
        canvas.fill();
        canvas.stroke();
    }
};

let circle = new Circle(10,10,100,'#000000');
let ctx = document.getElementById("myCanvas").getContext("2d");
circle.render(ctx);
