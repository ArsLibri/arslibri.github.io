var size = {
    x: 1000,
    y: 1465
};
var ratio = size.x / size.y;
var activepages = {
    left: 1,
    right: 2
};
var totalpages = 6;
var dualpagemode = false;
var olddualpagemode = false;

function resizer() {
    var pageswrapper = document.getElementById('pages-wrapper');
    dualpagemode = pageswrapper.offsetWidth / pageswrapper.offsetHeight < 2 * ratio;
    if (dualpagemode) {

    } else {


    }
}

window.addEventListener('resize', function() {
    resizer();
});
resizer();
