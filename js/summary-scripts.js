var links;

function addonclicks() {
    links = document.getElementsByClassName('summary-link');
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function(e) {
            var pg = this.getAttribute('summarylinkpage');
            setPage(parseInt(pg));
            simulateToggle();
        }
    }
}

function StartSummary() {
    DOMsummary.innerHTML += "<div id='summary-title'>" + SummaryOBJ.summaryTitle + "</div>";
    for (var i = 0; i < SummaryOBJ.pages.length; i++) {
        var hdr = document.createElement('div');
        hdr.setAttribute('summarylinkpage', SummaryOBJ.pages[i].page);
        hdr.setAttribute('summarylinkpagecursor', 'pointer');
        hdr.setAttribute('class', SummaryOBJ.pages[i].class);
        var name = document.createElement('span');
        name.innerHTML = SummaryOBJ.pages[i].name;
        hdr.appendChild(name);
        var page = document.createElement('span');
        page.innerHTML = SummaryOBJ.pages[i].page;
        page.setAttribute('class', 'summary-page-number');
        hdr.appendChild(page);
        /*if (SummaryOBJ.pages[i].children)
            for (var j = 0; j < SummaryOBJ.pages[i].children.length; j++) {
                var hdrc = document.createElement('div');
                hdrc.setAttribute('class', SummaryOBJ.pages[i].children[j].class);
                var name = document.createElement('span');
                name.innerHTML = SummaryOBJ.pages[i].children[j].name;
                hdrc.appendChild(name);
                var page = document.createElement('span');
                page.innerHTML = SummaryOBJ.pages[i].children[j].page;
                page.setAttribute('class', 'summary-page-number');
                hdrc.appendChild(page);
                hdr.appendChild(hdrc);
            }*/
        DOMsummary.appendChild(hdr);
    }
}
