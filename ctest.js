/* rgb function and bg-fill for div element */
function redgreenblue() {
    var r = document.getElementById('red');
    r = parseInt(red.value);
    var g = document.getElementById('green');
    g = parseInt(green.value);
    var b = document.getElementById('blue');
    b = parseInt(blue.value);

    document.getElementById('colRGBResult').style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";

}
/* hex function and bg-fill for div element */
function hex() {
    var h = document.getElementById('hexx');
    h = String(hexx.value);


    document.getElementById('colHexResult').style.backgroundColor = h;

}
/* color name function and bg-fill for div element */ 
function colName() {
    var c = document.getElementById('colorname');
    c = String(colorname.value);

    document.getElementById('colNameResult').style.backgroundColor = c;
}

/* submit function for button */
function submiT() {
    redgreenblue()
    hex()
    colName()
}
