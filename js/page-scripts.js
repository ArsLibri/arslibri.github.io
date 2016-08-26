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
var olddualpagemode = 'toset';

var DOMpageleft = document.getElementById('page-left');
var DOMpageright = document.getElementById('page-right');
var DOMpageswrapper = document.getElementById('pages-wrapper');
var DOMpageleftimg = document.getElementById('page-left-img');
var DOMpagerightimg = document.getElementById('page-right-img');

function getPageLink(page) {
    return "https://placeholdit.imgix.net/~text?txtsize=110&txt=" + page + "&w=1000&h=1465";
}

function resizer() {

    dualpagemode = !(DOMpageswrapper.offsetWidth / DOMpageswrapper.offsetHeight < 2 * ratio);
    if (dualpagemode) {
        if (olddualpagemode == 'toset' || !olddualpagemode) {
            DOMpageright.style.display = 'block';
            DOMpageleft.style.right = '50%';
            DOMpageleft.style.left = 'auto';
            DOMpageleftimg.style.backgroundPosition = 'right center';
        }
        DOMpageleft.style.width = DOMpageswrapper.offsetHeight * ratio + 'px';
        DOMpageright.style.width = DOMpageswrapper.offsetHeight * ratio + 'px';
    } else {
        if (olddualpagemode == 'toset' || olddualpagemode) {
            DOMpageright.style.display = 'none';
            DOMpageleft.style.right = '0';
            DOMpageleft.style.left = '0';
            DOMpageleftimg.style.backgroundPosition = 'center center';
        }
        DOMpageleft.style.width = (DOMpageswrapper.offsetHeight - 128) * ratio;
    }

    olddualpagemode = dualpagemode;
}

window.addEventListener('resize', function() {
    resizer();
});

document.addEventListener('keydown', function(e) {
    e = e || window.event;
    console.log(e.keyCode);
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

    }
});

function scrollLeft() {
    if (dualpagemode) updatePage(activepages.left - 2);
    else updatePage(activepages.left - 1);
}

function scrollRight() {
    if (dualpagemode) updatePage(activepages.left + 2);
    else updatePage(activepages.left + 1);
}

function updatePage(newpage) {
    if (newpage < 1) return;
    if (newpage) {
        newpage = newpage - (newpage + 1) % 2;
        activepages.left = newpage;
        activepages.right = newpage + 1;
    }
    DOMpageleftimg.style.backgroundImage = 'url(' + getPageLink(activepages.left) + ')';
    DOMpagerightimg.style.backgroundImage = 'url(' + getPageLink(activepages.right) + ')';
}
