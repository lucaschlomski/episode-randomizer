
var url = require("./url");

window.addEventListener('load', (event) => {
    var episode_link = url.howimetyourmother[Object.keys(url.howimetyourmother)[Math.floor(Math.random()*Object.keys(url.howimetyourmother).length)]];
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if (iOS) {
        window.location.replace("nflx://" + episode_link);
    } else {
        window.location.replace("http://" + episode_link);
    }
});