var links;

function addonclicks() {
    links = document.getElementsByClassName('summary-link');
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function(e) {
            var pg = this.getAttribute('summarylinkpage');
            setPage(pg);
            simulateToggle();
        }
    }
}

function StartSummary() {
    console.log(SummaryOBJ.pages.length);
    DOMsummary.innerHTML += "<div id='summary-title'>" + SummaryOBJ.summaryTitle + "</div>";
    for (var i = 0; i < SummaryOBJ.pages.length; i++) {
        DOMsummary.innerHTML += ("<div class='" + SummaryOBJ.pages[i].class + " summary-link' summarylinkpage='" + SummaryOBJ.pages[i].page + "' summarylinkpagecursor='pointer'>" + SummaryOBJ.pages[i].name + "<div class='summary-page-number'>" + SummaryOBJ.pages[i].page + "</div></div>");
    }
}
