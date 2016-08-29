var pageInner = [];
var videos = [];
var videosizes = [];
videos[3] = "<video class='pagevideo' width='500' height='380' controls>" +
    "<source src='var/page3.mp4' type='video/mp4'>" +
    "Your browser does not support HTML5 video." +
    "</video>";
videosizes[3] = {
    w: 500,
    h: 380
};

pageInner[3] = "<div class='interactive-zone' intType='play' onclick='loadModal(\"video\", 3)' style='left:50px; top:50px; width:475px; height:300px;'></div>"
