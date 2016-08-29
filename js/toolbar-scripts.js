function setToolbar() {
    document.getElementById('toolbar-dragger-max-page').innerHTML = totalpages;
    document.getElementById('toolbar-dragger-current-page').addEventListener('focus', function() {
        var tmp = this.value;
        this.value = '';
        this.value = tmp;
    });
    DOMtoolbardraggerline.addEventListener('click', function(e) {
        setPage((e.clientX - DOMtoolbardraggerline.getBoundingClientRect().left) / DOMtoolbardraggerline.offsetWidth * totalpages);
    });
}
