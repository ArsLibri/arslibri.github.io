var popupwrapper = document.getElementById('popup-wrapper');
var popupwrapperclose = document.getElementById('popup-wrapper-close');
var popupwrappercontent = document.getElementById('popup-wrapper-content');

function loadModal(type, id) {
    switch (type) {
        case 'video':
            popupwrapper.style.display = 'block';
            popupwrappercontent.innerHTML = videos[id];
            popupwrappercontent.style.width = videosizes[id].w + 'px';
            popupwrappercontent.style.height = videosizes[id].h + 'px';
            break;
    }
}

function loadPopupFunction() {
    popupwrapperclose.addEventListener('click', function() {
        popupwrapper.style.display = 'none';
        popupwrapper.style.innerHTML = 'none';
    });
}
