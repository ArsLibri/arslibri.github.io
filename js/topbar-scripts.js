var menutoggled = false;
var currentpage = 1;

var DOMtopbartoggle = document.getElementById('top-bar-toggle');
var DOMtopbar = document.getElementById('top-bar');
var DOMtopbarmenu = document.getElementById('top-bar-menu');

DOMtopbartoggle.onclick = function() {
    menutoggled = !menutoggled;
    DOMtopbarmenu.style.right = (-300 * !menutoggled) + 'px';
};
