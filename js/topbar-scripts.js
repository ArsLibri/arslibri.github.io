var menutoggled = false;
var currentpage = 1;

var DOMtopbartoggle = document.getElementById('top-bar-toggle');
var DOMtopbar = document.getElementById('top-bar');
var DOMsummary = document.getElementById('summary');

DOMtopbartoggle.onclick = function() {
    menutoggled = !menutoggled;
    DOMsummary.style.left = (100 * !menutoggled) + '%';
};
