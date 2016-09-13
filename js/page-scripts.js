var Ratio = PageSizePX.x / PageSizePX.y;
var ActivePages = {
    left: 1,
    right: 2
};
var DualPageMode = false;
var OldDualPageMode = 'toset';

function getPageLink(Page) {
    var PageString = Page.toString();
    while (PageString.length < FilePageDigits) PageString = "0" + PageString;
    return "url('var/" + FilePrefix + PageString + FileSuffix + "')";
}

function resizer() {
    DualPageMode = ((DOMwrapper.offsetWidth - 80) / (DOMwrapper.offsetHeight - 192)) >= Ratio * 2;
    if (DualPageMode) {
        if (OldDualPageMode == 'toset' || !OldDualPageMode) {
            DOMpageright.style.display = 'inline-block';
            DOMpageleft.style.width = '50%';
            setPage(ActivePages.left);
        }
        DOMpageswrapper.style.width = 2 * Ratio * DOMpageswrapper.offsetHeight + 'px';
    } else {
        if (OldDualPageMode == 'toset' || OldDualPageMode) {
            DOMpageright.style.display = 'none';
            DOMpageleft.style.width = '100%';
            setPage(ActivePages.left);
        }
        DOMpageswrapper.style.width = Ratio * DOMpageswrapper.offsetHeight + 'px';
    }
    OldDualPageMode = DualPageMode;
}

function handleKey(e) {
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
}

function scrollLeft() {
    if (DualPageMode) setPage(ActivePages.left - 2);
    else setPage(ActivePages.left - 1);
}

function scrollRight() {
    if (DualPageMode) setPage(ActivePages.left + 2);
    else setPage(ActivePages.left + 1);
}

function setPage(NewPage) {
    if (NewPage < 1 || NewPage > PageNumber) return;
    if (DualPageMode) {
        NewPage = NewPage - ((NewPage + 1) % 2);
        ActivePages.left = NewPage;
        ActivePages.right = NewPage + 1;
        DOMpageleftimg.style.backgroundImage = getPageLink(ActivePages.left);
        DOMpagerightimg.style.backgroundImage = getPageLink(ActivePages.right);
        DOMtoolbardraggerlineloaded.style.right = (100 - (ActivePages.right / PageNumber) * 100) + '%';
        if (PagesARR[ActivePages.left] != undefined) DOMpageleftcontent.innerHTML = PagesARR[ActivePages.left];
        else DOMpageleftcontent.innerHTML = "";
        if (PagesARR[ActivePages.right] != undefined) DOMpageleftcontent.innerHTML = PagesARR[ActivePages.right];
        else DOMpageleftcontent.innerHTML = "";

    } else {
        ActivePages.left = NewPage;
        ActivePages.right = NewPage + 1;
        DOMpageleftimg.style.backgroundImage = getPageLink(ActivePages.left);
        DOMpagerightimg.style.backgroundImage = getPageLink(ActivePages.right);
        DOMtoolbardraggerlineloaded.style.right = (100 - (ActivePages.left / PageNumber) * 100) + '%';
        if (PagesARR[ActivePages.left] != undefined) DOMpageleftcontent.innerHTML = PagesARR[ActivePages.left];
        else DOMpageleftcontent.innerHTML = "";
    }
    DOMtoolbardraggercurrentpage.value = ActivePages.left;
}
