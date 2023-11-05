var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	
	video.loop = false;
	video.autoplay = false;
	video.load();
});

document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
	video.load();
	video.play();
});

