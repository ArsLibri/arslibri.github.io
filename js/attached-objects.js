var pageInner = [];
var videos = [];
videos[3] = "<video class='pagevideo' width='500' height='380' controls>" +
    "<source src='var/page3.mp4' type='video/mp4'>" +
    "Your browser does not support HTML5 video." +
    "</video>";

pageInner[3] = "<div class='video-wrapper' style='left:40px;'onclick='console.log(this.childNodes[1].style.opacity=1)'> <div class='play-video'>" + videos[3] + "</div></div>";
