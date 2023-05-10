const mainmenuactive = document.getElementById("mainmenu-activate");
//const mainmenua = document.getElementsByClassName("mainmenu-a");
const mainmenum = document.getElementById("mainmenu-moving");
const active = document.getElementsByClassName("active");
const shortextend = document.getElementById("textmenu-column-short");
const textmenuactive = document.getElementById("textmenu-active");
const textextendmenu = document.getElementById("textmenu-nav-moving");
const cross = document.getElementById("cross");
const plus = document.getElementById("plus");

let canvaswidth = document.body.offsetWidth;
let canvasheight = document.body.offsetHeight;

const img = document.getElementsByClassName("img");
const nav1 = document.getElementById("nav-img1");
const nav2 = document.getElementById("nav-img2");

let imgvar1 = 1;
let imgvar2 = 0;

let changephotosloop = setInterval(changephotos, 5000);
function changephotos() {
  //setInterval(() => {
  if (imgvar1 == 1 && imgvar2 == 0) {
    img[0].style.opacity = "0";
    img[1].style.opacity = "1";
    imgvar1 = 0;
    imgvar2 = 1;
  } else if (imgvar1 == 0 && imgvar2 == 1) {
    img[0].style.opacity = "1";
    img[1].style.opacity = "0";
    imgvar1 = 1;
    imgvar2 = 0;
  }
  //}, 5000)
}
nav1.onclick = () => {
  clearInterval(changephotosloop);
  img[0].style.opacity = "1";
  img[1].style.opacity = "0";
  imgvar1 = 0;
  imgvar2 = 1;
  changephotosloop = setInterval(changephotos, 5000);
};
nav2.onclick = () => {
  clearInterval(changephotosloop);
  img[0].style.opacity = "0";
  img[1].style.opacity = "1";
  imgvar1 = 1;
  imgvar2 = 0;
  changephotosloop = setInterval(changephotos, 5000);
};

let filename = window.location.pathname;
console.log(filename);
//pro github
if (
  filename == "/web_OAMB/index.html" ||
  filename == "/web_OAMB/doc.html" ||
  filename == "/web_OAMB/maturita.html" ||
  filename == "/web_OAMB/obory.html" ||
  filename == "/web_OAMB/oskole.html" ||
  filename == "/web_OAMB/proj.html" ||
  filename == "/web_OAMB/web_OAMB"
) {
  active[0].style.background = "linear-gradient(lightblue, rgb(61, 213, 240))";
  active[3].style.background = "linear-gradient(lightblue, rgb(61, 213, 240))";
} else if (
  filename == "/web_OAMB/jazykkurz.html" ||
  filename == "/web_OAMB/jaztyp.html" ||
  filename == "/web_OAMB/statjazzkous.html"
) {
  active[1].style.background = "linear-gradient(lightblue, rgb(61, 213, 240))";
  active[4].style.background = "linear-gradient(lightblue, rgb(61, 213, 240))";
} else if (filename == "/web_OAMB/kontakty.html") {
  active[2].style.background = "linear-gradient(lightblue, rgb(61, 213, 240))";
  active[5].style.background = "linear-gradient(lightblue, rgb(61, 213, 240))";
} else {
  active[0].style.background = "linear-gradient(lightblue, rgb(61, 213, 240))";
  active[3].style.background = "linear-gradient(lightblue, rgb(61, 213, 240))";
}
//pro využití na localstorage
/*if (
  filename == "/index.html" ||
  filename == "/doc.html" ||
  filename == "/maturita.html" ||
  filename == "/obory.html" ||
  filename == "/oskole.html" ||
  filename == "/proj.html" ||
  filename == "/web_OAMB"
) {
  active[0].style.background = "linear-gradient(lightblue, rgb(61, 213, 240))";
  active[3].style.background = "linear-gradient(lightblue, rgb(61, 213, 240))";
} else if (
  filename == "/jazykkurz.html" ||
  filename == "/jaztyp.html" ||
  filename == "/statjazzkous.html"
) {
  active[1].style.background = "linear-gradient(lightblue, rgb(61, 213, 240))";
  active[4].style.background = "linear-gradient(lightblue, rgb(61, 213, 240))";
} else if(filename == "/kontakty.html"){
  active[2].style.background = "linear-gradient(lightblue, rgb(61, 213, 240))";
  active[5].style.background = "linear-gradient(lightblue, rgb(61, 213, 240))";
}
else{
  active[0].style.background = "linear-gradient(lightblue, rgb(61, 213, 240))";
  active[3].style.background = "linear-gradient(lightblue, rgb(61, 213, 240))";
}*/

setInterval(() => {
  //každých 10s se restartuje velikost canvasu
  canvaswidth = document.body.offsetWidth;
  canvasheight = document.body.offsetHeight;
  canvas.width = canvaswidth;
  canvas.height = canvasheight;
  //console.log(canvas.width);
  //console.log(canvas.height);
}, 10000);

//hlavní menu
mainmenuactive.onclick = () => {
  if (mainmenum.style.left != "0px") {
    mainmenum.style.display = "block";
    setTimeout(() => {
      mainmenum.style.transition = ".4s";
      mainmenum.style.left = "0px";
    }, 100);
  } else if (mainmenum.style.left == "0px") {
    mainmenum.style.transition = ".4s";
    mainmenum.style.left = "650px";
    setTimeout(() => {
      mainmenum.style.display = "none";
    }, 100);
  }
};

//vedlejší menu
shortextend.onclick = () => {
  if (textextendmenu.style.left != "25px") {
    textextendmenu.style.transition = ".2s";
    textextendmenu.style.left = "25px";
    cross.style.display = "unset";
    plus.style.display = "none";
    textmenuactive.style.transition = ".2s";
    /*  textmenuactive.style.transform = "rotate(45deg)";*/
  } else if (textextendmenu.style.left == "25px") {
    textextendmenu.style.left = "-300px";
    cross.style.display = "none";
    plus.style.display = "unset";
    textmenuactive.style.transition = ".2s";
    /*  textmenuactive.style.transform = "rotate(0deg)";*/
  }
};

let docTitle = document.title;
window.addEventListener("blur", () => {
  document.title = "Come back :(";
});
window.addEventListener("focus", () => {
  document.title = docTitle;
});

/*Canvas testing*/

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const mousecoor = document.getElementById("mousecoor");

canvas.width = canvaswidth;
canvas.height = canvasheight;

let mouseX = canvas.width / 2;
let mouseY = canvas.height / 2;
let snow = Math.random(Math.floor) * canvas.width;
let changepossX = Math.random(Math.floor) * 50;
let changepossY = Math.random(Math.floor) * 50;
let changepossXY1 = Math.random(Math.floor) * 25;
let circlesposs = [];
let maxcircles = 20;
let radius = Math.random(Math.floor) * 15;
let radiusarr = [];

//color
let redr = Math.random(Math.floor) * 256;
let greenr = Math.random(Math.floor) * 256;
let bluer = Math.random(Math.floor) * 256;
let savecolor = [];

let distToCircle;
let distCircleToCircle;

let randompossX = Math.random(Math.floor) * canvas.width;
let randompossY = Math.random(Math.floor) * canvas.height;
let speedX = Math.random(Math.floor) * 1;
let speedY = Math.random(Math.floor) * 1;
let speedXY = [];

function mousepos() {
  canvas.addEventListener("mousemove", function (event) {
    mouseX = event.clientX;
    mouseY = event.clientY - 84; //-84 aby myš byla správně napozicována
    mousecoor.innerHTML = `${mouseX},${mouseY}`;
  });
}

function drawCanvas() {
  ctx.fillStyle = "white";
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //circles
  /*myš*/ //circlesposs.push({ x: (mouseX+changepossX-changepossXY1), y: (mouseY+changepossY-changepossXY1) });
  /*obrazovka je top*/ //circlesposs.push({ x: snow, y: 0});
  /*obrazovka všude*/ circlesposs.push({ x: randompossX, y: randompossY });

  /*color*/ savecolor.push({ x: redr, y: greenr, z: bluer });

  /*Speed*/ speedXY.push({ x: speedX, y: speedY });

  radiusarr.push({ x: radius });
  if (circlesposs.length >= 100) {
    for (let i = 0; i < 100; i++) {
      if (radiusarr[i].x < 0) {
        radiusarr[i].x = Math.abs(radiusarr[i].x);
      }
      ctx.beginPath();

      ctx.fillStyle = `rgb(${savecolor[i].x},${savecolor[i].y},${savecolor[i].z})`; //barva kruhů

      ctx.arc(
        circlesposs[i].x,
        circlesposs[i].y,
        radiusarr[i].x,
        0,
        Math.PI * 2
      );
      ctx.fill();

      distToCircle = Math.sqrt(
        (mouseX - circlesposs[i].x) ** 2 + (mouseY - circlesposs[i].y) ** 2
      );
      for (let y = 0; y < 100; y++) {
        distCircleToCircle = Math.sqrt(
          (circlesposs[y].x - circlesposs[i].x) ** 2 +
            (circlesposs[y].y - circlesposs[i].y) ** 2
        );
        if (distCircleToCircle < 100) {
          ctx.beginPath();
          //ctx.strokeStyle = `rgba(256,0,0,${opacitystick})`; //barva kruhu s kruhem
          ctx.strokeStyle = "aqua";
          ctx.moveTo(circlesposs[y].x, circlesposs[y].y);
          ctx.lineTo(circlesposs[i].x, circlesposs[i].y);
          ctx.stroke();
        }
      }
      if (distToCircle < 100) {
        //let opacitystick = (1-(distToCircle/100)); //čím blíže tím bude plnější
        let opacitystick = distToCircle / 100; //čím blíže tím bude prázdnější                               //barva kruhu s myší
        ctx.beginPath();
        //ctx.strokeStyle = `rgba(256,0,0,${opacitystick})`;
        ctx.strokeStyle = "aqua";
        ctx.moveTo(mouseX, mouseY);
        ctx.lineTo(circlesposs[i].x, circlesposs[i].y);
        ctx.stroke();
      }
    }
  }
}
//opacity podle vzdálenosti k objektu
function fall() {
  for (let i = 0; i < circlesposs.length; i++) {
    circlesposs[i].y += speedXY[i].y;
    circlesposs[i].x -= speedXY[i].x;
    /*if (circlesposs[i].y <= canvas.height && radiusarr[i].x > 0) {
      circlesposs[i].y += speedXY[i].y;
      //radiusarr[i].x -= 0.01;   //potom navazuje čáru s 0
      if (circlesposs[i].y == canvas.height) {
        circlesposs[i].x = 0; //pokud by to vycházelo na celou stránku
      }
    } else if (radiusarr[i].x <= 0 || circlesposs[i].y >= canvas.height) {
      radiusarr[i].x = 0;
    }*/
    if (
      circlesposs[i].y + radiusarr[i].x > canvas.height ||
      circlesposs[i].x + radiusarr[i].x > canvas.width
    ) {
      //bottom
      if (circlesposs[i].y > 0) {
        circlesposs[i].y -= speedXY[i].y;
        speedXY[i].y = speedXY[i].y * -1;
      }
      if (circlesposs[i].x > 0) {
        circlesposs[i].x += speedXY[i].x;
        speedXY[i].x = speedXY[i].x * -1;
        //console.log("ahoj right");
      }
    } else if (
      circlesposs[i].y + radiusarr[i].x < canvas.height ||
      circlesposs[i].x + radiusarr[i].x < canvas.width
    ) {
      //top   //left
      if (circlesposs[i].y < 0) {
        circlesposs[i].y -= speedXY[i].y;
        speedXY[i].y = speedXY[i].y * -1;
        //console.log("Ahoj top");
      } else if (circlesposs[i].x < 0) {
        circlesposs[i].x += speedXY[i].x;
        speedXY[i].x = speedXY[i].x * -1;
        //console.log("ahoj left");
      }
    }
  }
}

//https://stackoverflow.com/questions/37101054/how-to-make-object-bounce-off-edge-of-canvas
function bounce() {
  for (let i = 0; i < 100; i++) {
    if (circlesposs[i].y + radiusarr[i].x >= canvas.height) {
      circlesposs[i].y -= 1;
    } else if (circlesposs[i].y + radiusarr[i].x <= canvas.height) {
      circlesposs[i].y += 1;
    } else if (circlesposs[i].x + radiusarr[i].x >= canvas.width) {
      circlesposs[i].x += 1;
    } else if (circlesposs[i].x + radiusarr[i].x <= canvas.width) {
      circlesposs[i].x -= 1;
    }
  }
}

function drawingLoop() {
  setInterval(() => {
    radius = Math.random(Math.floor) * 15;
    changepossX = Math.random(Math.floor) * 50;
    changepossY = Math.random(Math.floor) * 50;
    changepossXY1 = Math.random(Math.floor) * 25;
    snow = Math.random(Math.floor) * canvas.width;

    redr = Math.random(Math.floor) * 256;
    greenr = Math.random(Math.floor) * 256;
    bluer = Math.random(Math.floor) * 256;
    randompossX = Math.random(Math.floor) * canvas.width;
    randompossY = Math.random(Math.floor) * canvas.height;
    speedX = Math.random(Math.floor) * 1;
    speedY = Math.random(Math.floor) * 1;
    drawCanvas();
  }, 50);
  setInterval(() => {
    fall();
  }, 10);
}

window.onload = () => {
  mousepos();
  drawingLoop();
  changephotosloop;
};