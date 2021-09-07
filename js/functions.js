let __canvas = document.createElement('canvas');
let __ctx = __canvas.getContext('2d');
let __pathWasStart = false;
const __ordinary = {
    color: __ctx.fillStyle,
    strokeColor: __ctx.strokeStyle,
    strokeWeight: __ctx.lineWidth,
};

function createCanvas(width = 600, height = 400, id = 'none') {
    if (id !== 'none') {
        __canvas = document.getElementById(id);
    } else {
        __canvas = document.querySelector('canvas');
    }
    __canvas.width = width;
    __canvas.height = height;
    __ctx = __canvas.getContext('2d');
    return __canvas;
}

function fillRect(x, y, width, height, color = 'white') {
    __ctx.color = color;
    __ctx.fillRect(x, y, width, height);
}

function rect(x, y, width, height, strokeColor = 'black') {
    __ctx.strokeStyle = strokeColor;
    __ctx.strokeRect(x, y, width, height);
}

function strokedRect(x, y, width, height, color = 'white', strokeColor = 'black') {
    fillRect(x, y, width, height, color);
    rect(x, y, width, height, strokeColor);
}

function dot(x, y, radius, color = 'white') {
    __ctx.beginPath();
    __ctx.fillStyle = color;
    __ctx.arc(x, y, radius, 0, 2 * Math.PI);
    __ctx.fill();
    __ctx.closePath();
}

function circle(x, y, radius, color = 'white') {
    __ctx.beginPath();
    __ctx.strokeStyle = color;
    __ctx.arc(x, y, radius, 0, 2 * Math.PI);
    __ctx.stroke();
    __ctx.closePath();
}

function strokedDot(x, y, radius, color = 'white', strokeColor = 'black') {
    dot(x, y, radius, color);
    circle(x, y, radius, strokeColor);
}

function backGround(red = 255, blue = 255, green = 255, alpha = 1.0) {
    alpha = (alpha < 0 || alpha > 1) ? 1.0 : alpha;
    const color = `rgba(${red},${green},${blue},${alpha})`
    __ctx.fillStyle = color;
    fillRect(0, 0, __canvas.width, __canvas.height, color);
}

function clearScreen(bgColor = 'white') {
    __ctx.clearRect(0, 0, __canvas.width, __canvas.height);
    __ctx.fillStyle = bgColor;
    fillRect(0, 0, __canvas.width, __canvas.height, bgColor);
}

function line(x0, y0, x1, y1) {
    __ctx.beginPath();
    __ctx.moveTo(x0, y0);
    __ctx.lineTo(x1, y1);
    __ctx.stroke();
    __ctx.closePath();
}

function strokeWeight(weight) {
    __ctx.lineWidth = weight;
}

function strokeColor(color) {
    __ctx.strokeStyle = color;
}

function setColor(color) {
    __ctx.fillStyle = color;
}

function getContext() {
    return __ctx;
}

function degToradians(deg) {
    return (deg * Math.PI) / 180;
}

function radiansToDeg(radians) {
    return (180 / Math.PI) * radians;
}

function restore() {
    strokeColor(__ordinary.strokeColor);
    strokeWeight(__ordinary.strokeWeight);
    setColor(__ordinary.color);
}

function sin(rad) {
    return Math.sin(rad);
}

function cos(rad) {
    return Math.cos(rad);
}

function tan(rad) {
    return Math.tan(rad);
}

function createVector(x = 0, y = 0) {
    return new Vector(x, y);
}