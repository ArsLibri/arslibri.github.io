var links;

function addonclicks() {
    links = document.getElementsByClassName('summary-link');
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function(e) {
            var pg = this.getAttribute('summarylinkpage');
            pg = pg - (pg + 1) % 2;
            activepages.left = pg;
            activepages.right = pg + 1;
            setPage();
            simulateToggle();
        }
    }
}
