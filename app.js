function clickFunction() {
    window.alert("Esti sigur? \n Profilul meu e prea cool")
}

function imagineMare(x) {
    x.style.height = "800px";
    x.style.width = "800px";
}

function imagineNormala(x) {
    x.style.height = "400px";
    x.style.width = "400px";
}

function textBoxMove(x) {
    document.getElementById(textbox1);
    x.style.marginLeft = "35%";
    x.style.transition = "1s";
    x.style.position = "relative";
}

function textBoxMoveBack(x) {
    document.getElementById(textbox1);
    x.style.marginLeft = "25px";
    x.style.position = "relative";
}