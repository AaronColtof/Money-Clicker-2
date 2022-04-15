var rotate = 0;

function sleep(ms) { //sleep function
    return new Promise(resolve => setTimeout(resolve, ms));
}

function rotate_image(image) {
    document.getElementById(image).style.transform = "rotate("+rotate+"deg)";
    rotate += 1;
}

setInterval(function update(){
    rotate_image("earth-image")
}, 500);