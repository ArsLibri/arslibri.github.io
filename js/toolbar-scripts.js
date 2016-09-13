function setToolbar() {
    document.getElementById('toolbar-dragger-max-page').innerHTML = PageNumber;
    document.getElementById('toolbar-dragger-current-page').addEventListener('focus', function() {
        var tmp = this.value;
        this.value = '';
        this.value = tmp;
    });
    DOMtoolbardraggerline.addEventListener('click', function(e) {
        setPage(parseInt((e.clientX - DOMtoolbardraggerline.getBoundingClientRect().left) / DOMtoolbardraggerline.offsetWidth * PageNumber));
    });
}
