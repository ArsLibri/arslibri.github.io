var pageInner = [];
var videos = [];
videos[3] = '<video class="pagevideo" width="550" height="380" controls>' +
    '<source src="var/page3.mp4" type="video/mp4">' +
    'Your browser does not support HTML5 video.' +
    '</video>';

pageInner[3] = "<div class='video-wrapper'> <div class='play-video' onclick='this.parentElement.innerHTML =" + videos[3] + "></div></div>";
console.log(pageInner[3]);
