var topbartoggled = false;
var currentpage = 1;

var DOMtopbartoggle = document.getElementById('top-bar-toggle');
var DOMtopbar = document.getElementById('top-bar');
var DOMtopbarmenuactivator = document.getElementById('top-bar-menu-activator');

DOMtopbartoggle.onclick = function() {
    topbartoggled = !topbartoggled;
    DOMtopbar.style.top = (75 * topbartoggled) + 'px';
};
