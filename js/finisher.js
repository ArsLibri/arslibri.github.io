window.onload = function() {

    resizer();
    addonclicks();
    document.getElementById('toolbar-dragger-max-page').innerHTML = totalpages;
    document.getElementById('toolbar-dragger-current-page').addEventListener('focus', function() {
        var tmp = this.value;
        this.value = '';
        this.value = tmp;
    });

}
