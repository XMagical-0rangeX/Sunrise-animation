// drawing landscape

//setup canvas and grapics 
let cnv = document.getElementById("mycanvas");
let ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;

//global variables
let cloud1locat = 150;
let cloud2locat = 200;
let redval = 255;
let greenval = 0;
let circrad = 15;
let circloc = 300;

//store img
let cloudLogo = document.getElementById("cloud-img");

//draw sum stuf





//animation
requestAnimationFrame (loop);
function loop () {

    //update varibles
    cloud2locat++;
    cloud1locat--;
    if (circloc > 100) {
        circloc--;
        circrad += 0.25;
        greenval += 2;
    }
    //draw background
    //rectangle stuf
    //select and fill colors and outline
    //use any valid css colors name rgb rgba hex 
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, 400, 400); //draw filled square
    ctx.fillStyle = "green";
    ctx.fillRect(0, 300, 400, 100); //draw filled square




    //cloud and sun
    ctx.drawImage(cloudLogo, cloud1locat, 100);
    ctx.drawImage(cloudLogo, cloud2locat, 90);

    //sun
    ctx.fillStyle = "rgb(" + redval + "," + greenval + ", 0)";
    ctx.beginPath();
    ctx.arc(200, circloc, circrad, 0, 2 * Math.PI);//circle (0 to 2 pi) with center (250,500) and radius 30
    ctx.fill();
    

    requestAnimationFrame(loop);
}