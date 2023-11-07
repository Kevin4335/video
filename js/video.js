var video = document.querySelector(".video");

window.addEventListener("load", function() {
	
	video.loop = false;
	video.autoplay = false;
	video.load();
	
});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	video.volume = document.querySelector("#slider").value / 100;
	document.querySelector("#volume").textContent = document.querySelector("#slider").value + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate - video.playbackRate/10;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate + video.playbackRate/10;
	console.log(video.playbackRate);
});

document.querySelector("#mute").addEventListener("click", function() {
	if(video.muted){
		video.muted = 0 ;
		document.querySelector("#mute").textContent = "Mute";
	}else{
		video.muted = 1;
		document.querySelector("#mute").textContent = "Unmute";
	}
});

document.querySelector("#skip").addEventListener("click", function() {
	if(video.currentTime + 10 > video.duration){
		video.currentTime = 0 ;
	}else{
		video.currentTime = video.currentTime + 10 ;
	}
	
	console.log(video.currentTime);
});


document.querySelector("#slider").addEventListener("click", function() {
	console.log(document.querySelector("#slider").value);
	document.querySelector("#volume").textContent = document.querySelector("#slider").value + "%";
	video.volume = document.querySelector("#slider").value / 100;
});

document.querySelector("#vintage").addEventListener("click", function() {
	document.querySelector(".video").classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	document.querySelector(".video").classList.remove("oldSchool");
});
