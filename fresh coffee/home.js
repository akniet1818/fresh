//Функция сохраняет начальное значение отмотанных пикселей,-
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos < currentScrollPos) {
        document.getElementById("navbar").style.top = "0px";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
    document.getElementById("navbar").style.visibility = "visible";
}

//button read more mouseover
function mouseOver() {
    document.getElementById("demo").style.color = "orange";
}
function mouseOut() {
    document.getElementById("demo").style.color = "black";
}

//button-1 read more mouseover
function mouseOver1() {
    document.getElementById("demo1").style.color = "orange";
}
function mouseOut1() {
    document.getElementById("demo1").style.color = "black";
}

//button-2 read more mouseover
function mouseOver2() {
    document.getElementById("demo2").style.color = "orange";
}
function mouseOut2() {
    document.getElementById("demo2").style.color = "black";
}

//confirm your meeting mouseover
$(document).ready(function () {
    $("button").click(function () {
        alert("You have successfully registered!");
        document.getElementById('sound').play();
    });
});

//sound
function sound() {
    document.getElementById('sound').play();
}

//text-animation
ScrollReveal({
    distance: '60px',
    duration: 1500,
    delay: 400
});
ScrollReveal().reveal('#heading1', { delay: 200, origin: 'left', });
ScrollReveal().reveal('#paragraph1', { delay: 100, origin: 'left' });
ScrollReveal().reveal('#heading2', { delay: 100, origin: 'right' });
ScrollReveal().reveal('#paragraph2', { delay: 100, origin: 'right' });
ScrollReveal().reveal('#heading3', { delay: 100, origin: 'left' });
ScrollReveal().reveal('#paragraph3', { delay: 100, origin: 'left' });



$('#fas').html("Nur-Sultan, NS-1, Kaz ");