document.getElementById("wrap1Icon1").addEventListener("click", stopSlide);
document.getElementById("wrap1Icon3").addEventListener("click", stopSlide);
document.getElementById("wrap1Button1").addEventListener("click", stopSlide);
document.getElementById("wrap1Button2").addEventListener("click", stopSlide);
document.getElementById("wrap1Button3").addEventListener("click", stopSlide);

var slide = null;

function stopSlide() {
    clearInterval(slide);
}

function slideshow1() {
    var x = document.getElementById("wrap1div");
    var y = x.scrollWidth;
    var z = y / 3;
    if (x.scrollLeft + z == x.scrollWidth) {
        x.scroll({ left: (x.scrollWidth * -1), behavior: 'smooth' })
    } else {
        x.scrollBy({ left: (z), behavior: 'smooth' });
    }
}

onload = function() {
    slide = setInterval(slideshow1, 5000);
    document.getElementById("wrap1Icon2").setAttribute("style", "opacity: 0;");
}

function slideshow() {
    var x = document.getElementById("wrap1div");
    var y = x.scrollWidth;
    var z = y / 3;
    if (x.scrollLeft + z == x.scrollWidth) {
        x.scroll({ left: (x.scrollWidth * -1), behavior: 'smooth' })
    } else {
        x.scrollBy({ left: (z), behavior: 'smooth' });
    }
    slide = setInterval(slideshow1, 5000);
    document.getElementById("wrap1Icon2").setAttribute("style", "opacity: 0;");
}

function scrollSlideF() {
    var x = document.getElementById("wrap1div");
    var y = x.scrollWidth;
    var z = y / 3;
    if (x.scrollLeft + z == x.scrollWidth) {
        x.scroll({ left: (x.scrollWidth * -1), behavior: 'smooth' })
    } else {
        x.scrollBy({ left: (z), behavior: 'smooth' });
    }
    document.getElementById("wrap1Icon2").setAttribute("style", "opacity: 1;");
}

function scrollSlideR() {
    var x = document.getElementById("wrap1div");
    var y = x.scrollWidth;
    var z = (y / 3);
    if (x.scrollLeft == 0) {
        x.scroll({ left: (x.scrollWidth), behavior: 'smooth' })
    } else {
        x.scrollBy({ left: (z * -1), behavior: 'smooth' });
    }
    document.getElementById("wrap1Icon2").setAttribute("style", "opacity: 1;");
}

function wrap1Info1Mostrar()   {
    document.getElementById("wrapInfo1").setAttribute("style", "transform: scale(1)");
    document.getElementById("wrapInfo1Cont").setAttribute("style", "transition-duration: .4s;transition-delay: .4s; opacity: 1;");
}

function wrap1Cerrar()    {
    var x = document.getElementById("wrap1div");
    var y = x.scrollWidth;
    var z = y / 3;
    if (x.scrollLeft + z == x.scrollWidth) {
        x.scroll({ left: (x.scrollWidth * -1), behavior: 'smooth' })
    } else {
        x.scrollBy({ left: (z), behavior: 'smooth' });
    }
    slide = setInterval(slideshow1, 5000);
    document.getElementById("wrap1Icon2").setAttribute("style", "opacity: 0;");
    document.getElementById("wrapInfo1").setAttribute("style", "transform: scale(1,0);")
    document.getElementById("wrapInfo1Cont").setAttribute("style", "transition-duration: 0; transition-delay: 0s; opacity: 0;");
}

function wrap1Info2Mostrar()   {
    document.getElementById("wrapInfo2").setAttribute("style", "transform: scale(1)");
    document.getElementById("wrapInfo2Cont").setAttribute("style", "transition-duration: .4s;transition-delay: .4s; opacity: 1;");
}

function wrap2Cerrar()    {
    var x = document.getElementById("wrap1div");
    var y = x.scrollWidth;
    var z = y / 3;
    if (x.scrollLeft + z == x.scrollWidth) {
        x.scroll({ left: (x.scrollWidth * -1), behavior: 'smooth' })
    } else {
        x.scrollBy({ left: (z), behavior: 'smooth' });
    }
    slide = setInterval(slideshow1, 5000);
    document.getElementById("wrap1Icon2").setAttribute("style", "opacity: 0;");
    document.getElementById("wrapInfo2").setAttribute("style", "transform: scale(1,0);")
    document.getElementById("wrapInfo2Cont").setAttribute("style", "transition-duration: 0; transition-delay: 0s; opacity: 0;");
}

function wrap1Info3Mostrar()   {
    document.getElementById("wrapInfo3").setAttribute("style", "transform: scale(1)");
    document.getElementById("wrapInfo3Cont").setAttribute("style", "transition-duration: .4s;transition-delay: .4s; opacity: 1;");
}

function wrap3Cerrar()    {
    var x = document.getElementById("wrap1div");
    var y = x.scrollWidth;
    var z = y / 3;
    if (x.scrollLeft + z == x.scrollWidth) {
        x.scroll({ left: (x.scrollWidth * -1), behavior: 'smooth' })
    } else {
        x.scrollBy({ left: (z), behavior: 'smooth' });
    }
    slide = setInterval(slideshow1, 5000);
    document.getElementById("wrap1Icon2").setAttribute("style", "opacity: 0;");
    document.getElementById("wrapInfo3").setAttribute("style", "transform: scale(1,0);")
    document.getElementById("wrapInfo3Cont").setAttribute("style", "transition-duration: 0; transition-delay: 0s; opacity: 0;");
}