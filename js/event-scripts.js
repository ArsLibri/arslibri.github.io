DOMswapperleft.addEventListener('click', scrollLeft);
DOMswapperright.addEventListener('click', scrollRight);
window.addEventListener('resize', resizer);
window.addEventListener('keydown', function(e) {
    handleKey(e);
});
DOMtoolbardraggercurrentpage.addEventListener('blur', function() {
    setPage(parseInt(DOMtoolbardraggercurrentpage.value));
});
