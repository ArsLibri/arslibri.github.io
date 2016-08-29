var size = {
    x: 1241,
    y: 1754
};
var ratio = size.x / size.y;
var activepages = {
    left: 1,
    right: 2
};
var totalpages = 48;
var dualpagemode = false;
var olddualpagemode = 'toset';

var DOMpageleft = document.getElementById('page-left');
var DOMpageright = document.getElementById('page-right');
var DOMpageswrapper = document.getElementById('pages-wrapper');
var DOMpageleftimg = document.getElementById('page-left-img');
var DOMpageleftcontent = document.getElementById('page-left-content');
var DOMpagerightcontent = document.getElementById('page-right-content');
var DOMpagerightimg = document.getElementById('page-right-img');
var DOMwrapper = document.getElementById('wrapper');
var DOMtoolbardraggerlineloaded = document.getElementById('toolbar-dragger-line-loaded');
var DOMtoolbardraggerline = document.getElementById('toolbar-dragger-line');
var DOMtoolbardraggercurrentpage = document.getElementById('toolbar-dragger-current-page');

function getPageLink(page) {
    return "url(var/page" + page + ".jpg)";
}

function resizer() {

    dualpagemode = (DOMwrapper.offsetWidth / (DOMwrapper.offsetHeight - 192)) >= ratio * 2;

    if (dualpagemode) {
        if (olddualpagemode == 'toset' || !olddualpagemode) {
            DOMpageright.style.display = 'inline-block';
            DOMpageleft.style.width = '50%';
            setPage(activepages.left);
        }
        DOMpageswrapper.style.width = 2 * ratio * DOMpageswrapper.offsetHeight + 'px';
    } else {
        if (olddualpagemode == 'toset' || olddualpagemode) {
            DOMpageright.style.display = 'none';
            DOMpageleft.style.width = '100%';
            setPage(activepages.left);
        }
        DOMpageswrapper.style.width = ratio * DOMpageswrapper.offsetHeight + 'px';
    }
    olddualpagemode = dualpagemode;
}

window.addEventListener('resize', function() {
    resizer();
});
DOMtoolbardraggercurrentpage.addEventListener('blur', function() {
    setPage(parseInt(DOMtoolbardraggercurrentpage.value));
});
document.addEventListener('keydown', function(e) {
    e = e || window.event;
    switch (e.keyCode) {
        case '37': //left
        case 37:
            scrollLeft();
            break;
        case '38': //up
        case 38:

            break;
        case '39': //right
        case 39:
            scrollRight();
            break;
        case '40': //down
        case 40:
            break;
        case '13':
        case 13:
            if (document.activeElement === DOMtoolbardraggercurrentpage) setPage(parseInt(DOMtoolbardraggercurrentpage.value));
            break;

    }
});

function scrollLeft() {
    if (dualpagemode) setPage(activepages.left - 2);
    else setPage(activepages.left - 1);
}

function scrollRight() {
    if (dualpagemode) setPage(activepages.left + 2);
    else setPage(activepages.left + 1);
}

document.getElementById('swapper-left').addEventListener('click', scrollLeft);
document.getElementById('swapper-right').addEventListener('click', scrollRight);

function setPage(newpage) {
    if (newpage < 1 || newpage > totalpages) return;
    if (dualpagemode) {
        newpage = newpage - (newpage + 1) % 2;
        activepages.left = newpage;
        activepages.right = newpage + 1;
        DOMpageleftimg.style.backgroundImage = getPageLink(activepages.left);
        DOMpagerightimg.style.backgroundImage = getPageLink(activepages.right);
        if (pageInner[activepages.left]) DOMpageleftcontent.innerHTML = pageInner[activepages.left];
        else DOMpageleftcontent.innerHTML = '';
        if (pageInner[activepages.right]) DOMpagerightcontent.innerHTML = pageInner[activepages.right];
        else DOMpagerightcontent.innerHTML = '';
        DOMtoolbardraggerlineloaded.style.right = (100 - (activepages.right / totalpages) * 100) + '%';

    } else {
        activepages.left = newpage;
        activepages.right = newpage + 1;
        DOMpageleftimg.style.backgroundImage = getPageLink(activepages.left);
        DOMpagerightimg.style.backgroundImage = getPageLink(activepages.right);
        DOMtoolbardraggerlineloaded.style.right = (100 - (activepages.left / totalpages) * 100) + '%';

    }
    DOMtoolbardraggercurrentpage.value = activepages.left;

}
