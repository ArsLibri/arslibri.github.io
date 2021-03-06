var MenuToggled = false;
var CurrentPage = 1;

var DOMtopbartoggle = document.getElementById('top-bar-toggle');
var DOMsummary = document.getElementById('summary');
var DOMtopbartoggletop = document.getElementById('top-bar-icon-top');
var DOMtopbartogglemiddle = document.getElementById('top-bar-icon-middle');
var DOMtopbartogglebottom = document.getElementById('top-bar-icon-bottom');

function simulateToggle() {
    MenuToggled = !MenuToggled;
    DOMsummary.style.left = (100 * !MenuToggled) + '%';
    if (MenuToggled) {
        TweenLite.to(DOMtopbartoggletop, 0.25, {
            transform: "rotate(45deg)",
            width: '25.612px',
            top: '6px'
        });
        TweenLite.to(DOMtopbartogglebottom, 0.25, {
            top: '24px',
            transform: "rotate(-45deg)",
            width: '25.612px'
        });
        TweenLite.to(DOMtopbartogglemiddle, 0.25, {
            opacity: '0'
        });
    } else {
        {
            TweenLite.to(DOMtopbartoggletop, 0.25, {
                top: '8px',
                transform: "rotate(0deg)",
                width: '20px'
            });
            TweenLite.to(DOMtopbartogglebottom, 0.25, {
                top: '22px',
                transform: "rotate(0deg)",
                width: '20px'
            });
            TweenLite.to(DOMtopbartogglemiddle, 0.25, {
                opacity: '1'
            });
        }
    }
}

function loadTitle() {
    DOMtopbartitle.innerHTML = BookTitle;
}

DOMtopbartoggle.onclick = function() {
    simulateToggle();
};
