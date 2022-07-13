
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const img = document.getElementById('source');
img.onload;
let cw = (canvas.width = img.width),
    cx = cw / 2;
let ch = (canvas.height = img.height),
    cy = ch / 2;

// se crea array con los meses
var meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
var f = new Date();
var result = (meses[f.getMonth()] + ", " + f.getDate() + " " + f.getFullYear());

// se da valor a texto con los valores de date
let texto2 = result;

ctx.textBaseline = "middle";
// el color del texto e blanco con un 50% de transparencia.

ctx.strokeStyle = "black";
// dibuja la imagen en el canvas

// funcion para cambiar el color
document.getElementById("color1").addEventListener('checked', cambiaColor);

function cambiaColor(){
    if(document.getElementById("color1").checked){
        // const color1 = 'black';
        // const color2 = 'white';
        const coloresJuntos = ['#8b6e14', '#ffa62b'];
        const gradient1 = ctx.createRadialGradient(500, -200, 1600, 500, -200, 100);
        gradient1.addColorStop(0, coloresJuntos[0]);

        gradient1.addColorStop(1, coloresJuntos[1]);

        return gradient1;
    } 
    if(document.getElementById("color2").checked){
        const coloresJuntos = ['#15478a', '#2caaff'];
        const gradient1 = ctx.createRadialGradient(500, -200, 1600, 500, -200, 100);
        gradient1.addColorStop(0, coloresJuntos[0]);

        gradient1.addColorStop(1, coloresJuntos[1]);

        return gradient1;
    } 
    if(document.getElementById("color3").checked){
        const coloresJuntos = ['#2c7449', '#51d270'];
        const gradient1 = ctx.createRadialGradient(500, -200, 1600, 500, -200, 100);
        gradient1.addColorStop(0, coloresJuntos[0]);

        gradient1.addColorStop(1, coloresJuntos[1]);

        return gradient1;
    } 
    if(document.getElementById("color4").checked){
        const coloresJuntos = ['#744f2c', '#ce784f'];
        const gradient1 = ctx.createRadialGradient(500, -200, 1600, 500, -200, 100);
        gradient1.addColorStop(0, coloresJuntos[0]);

        gradient1.addColorStop(1, coloresJuntos[1]);

        return gradient1;
    } 
    if(document.getElementById("color5").checked){
        const coloresJuntos = ['#2c6174', '#4fc1ce'];
        const gradient1 = ctx.createRadialGradient(500, -200, 1600, 500, -200, 100);
        gradient1.addColorStop(0, coloresJuntos[0]);

        gradient1.addColorStop(1, coloresJuntos[1]);

        return gradient1;
    }
    if(document.getElementById("color6").checked){
        // const color1 = 'black';
        // const color2 = 'white';
        const coloresJuntos = ['#48346b', '#7562c8'];
        const gradient1 = ctx.createRadialGradient(500, -200, 1600, 500, -200, 100);
        gradient1.addColorStop(0, coloresJuntos[0]);

        gradient1.addColorStop(1, coloresJuntos[1]);

        return gradient1;
    } 
    if(document.getElementById("color7").checked){
        const coloresJuntos = ['#722013', '#e5343a'];
        const gradient1 = ctx.createRadialGradient(500, -200, 1600, 500, -200, 100);
        gradient1.addColorStop(0, coloresJuntos[0]);

        gradient1.addColorStop(1, coloresJuntos[1]);

        return gradient1;
    } 
    if(document.getElementById("color8").checked){
        const coloresJuntos = ['#a15d23', '#ac7d55'];
        const gradient1 = ctx.createRadialGradient(500, -200, 1600, 500, -200, 100);
        gradient1.addColorStop(0, coloresJuntos[0]);

        gradient1.addColorStop(1, coloresJuntos[1]);

        return gradient1;
    } 
    if(document.getElementById("color9").checked){
        const coloresJuntos = ['#0a1b78', '#2569f2'];
        const gradient1 = ctx.createRadialGradient(500, -200, 1600, 500, -200, 100);
        gradient1.addColorStop(0, coloresJuntos[0]);

        gradient1.addColorStop(1, coloresJuntos[1]);

        return gradient1;
    } 
    if(document.getElementById("color10").checked){
        const coloresJuntos = ['#591556', '#b246c4'];
        const gradient1 = ctx.createRadialGradient(500, -200, 1600, 500, -200, 100);
        gradient1.addColorStop(0, coloresJuntos[0]);

        gradient1.addColorStop(1, coloresJuntos[1]);

        return gradient1;
    }else{
        const coloresJuntos = ['red', 'orange'];
        const gradient1 = ctx.createRadialGradient(500, -200, 1600, 500, -200, 100);
        gradient1.addColorStop(0, coloresJuntos[0]);

        gradient1.addColorStop(1, coloresJuntos[1]);

        return gradient1;
    }
};

// funcion para seleccionar el diseño
document.getElementById("desing1").addEventListener('checked', changeDesing);
// dibuja la imagen en el canvas
function changeDesing(){
    if(document.getElementById("desing1").checked){
        // const img = new Image();
        // img.src = '../assets/img-tasas/ultimateV.png';
        // img.onload;
        const img = document.getElementById('source');
        img.onload;
        return img;
    } 
    if(document.getElementById("desing2").checked){
        // const img = new Image();
        // img.src = '../assets/img-tasas/ultimateV.png';
        // img.onload;
        const img = new Image();
        img.src = './assets/img-tasas/desings/2.png';
        img.onload;
        return img;
    } 
    if(document.getElementById("desing3").checked){
        const img = new Image();
        img.src = './assets/img-tasas/desings/3.png';
        img.onload;
        return img;
    } 
    if(document.getElementById("desing4").checked){
        const img = new Image();
        img.src = './assets/img-tasas/desings/4.png';
        img.onload;
        return img;
    }
    if(document.getElementById("desing5").checked){
        // const img = new Image();
        // img.src = '../assets/img-tasas/ultimateV.png';
        // img.onload;
        const img = new Image();
        img.src = './assets/img-tasas/desings/5.png';
        img.onload;
        return img;
    } 
    if(document.getElementById("desing6").checked){
        // const img = new Image();
        // img.src = '../assets/img-tasas/ultimateV.png';
        // img.onload;
        const img = new Image();
        img.src = './assets/img-tasas/desings/6.png';
        img.onload;
        return img;
    } 
    if(document.getElementById("desing7").checked){
        const img = new Image();
        img.src = './assets/img-tasas/desings/7.png';
        img.onload;
        return img;
    } 
    if(document.getElementById("desing8").checked){
        const img = new Image();
        img.src = './assets/img-tasas/desings/8.png';
        img.onload;
        return img;
    }
    if(document.getElementById("desing9").checked){
        const img = new Image();
        img.src = './assets/img-tasas/desings/8.png';
        img.onload;
        return img;
    }
    if(document.getElementById("desing10").checked){
        const img = new Image();
        img.src = './assets/img-tasas/desings/8.png';
        img.onload;
        return img;
    }else{
        const img = document.getElementById('source');
        return img;
    }
};
changeDesing();

function generar() {

    let text1 = document.getElementById("tasa1").value;
    let text2 = document.getElementById("tasa2").value;
    let text3 = document.getElementById("tasa3").value;

    // generar canas y dibujar el texto para luego procesarlo en img
    if (text1.length == 0 || /^\s+$/.test(text1) || text2.length == 0 || /^\s+$/.test(text3) || text3.length == 0 || /^\s+$/.test(text3)) {
        alert('Rellene todos los campos!');
        return false;
    } 
    if(!document.querySelector('input[name="radio1"]:checked')) {
        alert('Error, Porfavor seleccione algun color');
        return false;
    }

    if(!document.querySelector('input[name="radio2"]:checked')) {
        alert('Error, Porfavor seleccione algun diseño');
        return false;
    } else{
        ctx.fillStyle = cambiaColor();
        ctx.fillRect(0, 0, img.width, img.height);
        ctx.drawImage(changeDesing(), 0, 0);

        ctx.textAlign = 'center';
        ctx.fillStyle = "white";
        ctx.font = "55px Montserrat";

        ctx.lineWidth = "7";
        ctx.strokeStyle = "black";
        ctx.strokeText(texto2, cx, 325);
        ctx.fillText(texto2, cx, 325);
    
        ctx.textAlign = 'right';
    
        ctx.font = "110px Montserrat";
        ctx.lineWidth = "7";
        ctx.strokeStyle = "black";
        ctx.strokeText(text1, 890, 700);
        ctx.fillText(text1, 890, 700);
        
        ctx.lineWidth = "7";
        ctx.strokeStyle = "black";
        ctx.strokeText(text2, 890, 835);
        ctx.fillText(text2, 890, 835);

        ctx.lineWidth = "7";
        ctx.strokeStyle = "black";
        ctx.strokeText(text3, 890, 980);
        ctx.fillText(text3, 890, 980);
        // ctx.font = "33px Montserrat";

};

let tamanoTexto = 75;
// empieza con algo grande, más grande de lo que sea necesario
//pinta el texto en el canvas

// mide la anchura del texto
let anchuraTexto = ctx.measureText(ctx.fillText).width;
// mientras que el texto siga demasiado grande
while (anchuraTexto > ctx.width - 20) {
    // disminuie el tamaño del texto
    tamanoTexto--;
    ctx.font = tamanoTexto + "px Georgia";
    anchuraTexto = ctx.measureText(ctx.fillText).width;
}

// funcion para descargar la imagen creada con canvas
function descargar() {
    var filename = prompt("Guardar como...", "Nombre del archivo");
    if (canvas.msToBlob) { //para internet explorer
        var blob = canvas.msToBlob();
        window.navigator.msSaveBlob(blob, filename + ".png");// la extensión de preferencia pon jpg o png
    } else {
        link = document.getElementById("download");
        //Otros navegadores: Google chrome, Firefox etc...
        link.href = canvas.toDataURL("image/png");// Extensión .png ("image/png") --- Extension .jpg ("image/jpeg")
        link.download = filename;
    }
}

// validaciones inputs
// function validaNumericos(event) {
//     if (event.charCode >= 48 && event.charCode <= 57) {
//         return true;
//     }
//     return false;
// }
// no permitir pegar textos
function validaNumericos() {
    var inputtxt = document.getElementById('text');
    console.log(inputtxt);
    var valor = inputtxt.value;
    for (i = 0; i < valor.length; i++) {
        var code = valor.charCodeAt(i);
        if (code <= 48 || code >= 57) {
            inputtxt.value = "";
            return;
        }
    }

}



function setup() {
    blendModes = [
        BLEND,
        ADD,
        DARKEST,
        LIGHTEST,
        DIFFERENCE,
        EXCLUSION,
        MULTIPLY,
        OVERLAY,
        HARD_LIGHT,
        SOFT_LIGHT,
        DODGE,
        BURN
    ]

    index = 0;
    currBlendMode = blendModes[index];

    createCanvas(600, 300);
    textSize(20);
}


// guardar y mostrar texto en el canvas
// se llama los id de los input
let text1 = 20;
let text2 = 20;
// se toman los valores de los input y se guarda en un localstorage
// localStorage.setItem("tasa1", text1);
// localStorage.setItem("tasa2", text2);

// generar canas y dibujar el texto para luego procesarlo en img
