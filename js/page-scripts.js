var size = {
    x: 1000,
    y: 1465
};
var ratio = size.x / size.y;
var activepages = {
    left: 1,
    right: 2
};
var dualpagemode = true;

function resizer() {
    var pageswrapper = document.getElementById('pages-wrapper');
    dualpagemode = pageswrapper.offsetWidth / pageswrapper.offsetHeight < 2 * ratio;
    console.log(dualpagemode);
}

window.addEventListener('resize', function() {
    resizer();
});
resizer();
