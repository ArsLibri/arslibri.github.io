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
        if (!olddualpagemode) {
            DOMpageright.style.display = 'block';
            DOMpageleft.style.right = '50%';
            DOMpageleftimg.style.backgroundPosition = 'right center';
        }
        //DOMpageleftimg.style.width = (DOMpageleftimg.offsetHeight * ratio) + 'px';
        //DOMpagerightimg.style.width = DOMpageleftimg.style.width;
    } else {
        if (olddualpagemode) {
            DOMpageright.style.display = 'none';
            DOMpageleft.style.right = '0';
            DOMpageleftimg.style.backgroundPosition = 'center center';
        }
        //DOMpageleftimg.style.width = DOMpageleftimg.offsetHeight * ratio;
    }

    olddualpagemode = dualpagemode;
}

window.addEventListener('resize', function() {
    resizer();
});

function updatePage(newpage) {
    if (newpage) {
        newpage = newpage - (newpage + 1) % 2;
        activepages.left = newpage;
        activepages.right = newpage + 1;
    }
    DOMpageleftimg.style.backgroundImage = 'url(' + getPageLink(activepages.left) + ')';
    DOMpagerightimg.style.backgroundImage = 'url(' + getPageLink(activepages.right) + ')';
}
