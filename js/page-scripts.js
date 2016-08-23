var DOMpagetoolbarcounterhandle = document.getElementById('page-toolbar-counter-handle');
var DOMpagetoolbarcounter = document.getElementById('page-toolbar-counter');
var DOMpagetoolbarleftcounterinput = document.getElementById('page-toolbar-leftcounter-input');
var DOMwrapper = document.getElementById('wrapper');
var dragging = false;
var maxpage = 169;
var startdrag = 0;
var startleft = 0;
DOMpagetoolbarcounterhandle.onmousedown = function(e) {
    dragging = true;
    startdrag = e.clientX;
    startleft = parseInt(DOMpagetoolbarcounterhandle.style.left.slice(0, -2));
};
DOMwrapper.onmousemove = function(e) {
    if (dragging) {
        var handleleft = parseInt(DOMpagetoolbarcounterhandle.style.left.slice(0, -2));
        var offset = e.clientX - startdrag;
        if (startleft + offset <= 0)
            DOMpagetoolbarcounterhandle.style.left = '0px';
        else if (startleft + offset >= DOMpagetoolbarcounter.offsetWidth)
            DOMpagetoolbarcounterhandle.style.left = DOMpagetoolbarcounter.offsetWidth + 'px';
        else DOMpagetoolbarcounterhandle.style.left = (startleft + offset) + 'px';
        var percent = handleleft / DOMpagetoolbarcounter.offsetWidth;
        console.log(percent);
        DOMpagetoolbarleftcounterinput.value = Math.floor(percent * maxpage);
    }
};
DOMwrapper.onmouseout = function(e) {
    e = e ? e : window.event;
    var targetnode = e.relatedTarget || e.toElement;
    if (!targetnode || targetnode.nodeName == 'HTML') {
        dragging = false;
    }
};
DOMwrapper.onmouseup = function(e) {
    dragging = false;
};
DOMpagetoolbarleftcounterinput.onfocus = function() {
    var initial = this.value;
    this.value = '';
    this.value = initial;
};
document.getElementById('page-toolbar-rightcounter').innerHTML = maxpage;
