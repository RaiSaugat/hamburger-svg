
var circle = document.getElementById('circle');
var middleLine = document.getElementById('hide');
var topLine = document.getElementById('top');
var bottomLine = document.getElementById('bottom');
var wrapper = document.getElementById('wrap');


var tl = new TimelineMax();
tl.to(middleLine, 0.2, { scaleX: 0, transformOrigin: "right" });
tl.to(circle, 0.4, { strokeDashoffset: 160 });
tl.to(topLine, 0.2, { rotation: 45, x: 6, y: -5 }, 0);
tl.to(bottomLine, 0.2, { rotation: -45, x: 6, y: 5 }, 0);
tl.reverse();

wrapper.addEventListener("click", function() {
    tl.reversed(!tl.reversed());
})

