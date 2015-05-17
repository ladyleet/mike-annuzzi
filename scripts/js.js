// var myImage = document.getElementById("imageChange");
// var imageArray = ["images/annuzzi-lba-2.jpg", "images/annuzzi-nature.jpg", "images/annuzzi-lba.jpg", "images/annuzzi-mtn-winery.jpg"];

// var imageIndex = 0;

// function changeImage(){
// 	myImage.setAttribute("src", imageArray[imageIndex]);
// 	imageIndex++;
// 	if (imageIndex >= imageArray.length) {
// 		imageIndex = 0;
// 	}
// }

// var intervalHandle = setInterval(changeImage, 5000);

$(document).ready(function(){
	setTimeout(function () {
		$('.slider').slider({full_width: true});
	}, 200);
});

// var songs = {
// 	'../myfile.mp3': new Audio('../myfile.mp3');
// };
var songs = {};

function clickButton (){
$(".accordion-content").toggleClass("open");
};

function clickButtonShows (){
$(".accordion-content-shows").toggleClass("open");
};

function playSong(playPauseButton, songFileName){
	var $playPauseButton = $(playPauseButton);
	var song = songs[songFileName] ? songs[songFileName].song : null;

	if (!song) {
		song = new Audio(songFileName);
		songs[songFileName] = {song: song, elem: $playPauseButton};
	}

	if ($playPauseButton.hasClass("mdi-av-play-arrow")){
		$playPauseButton.removeClass("mdi-av-play-arrow");
		$playPauseButton.addClass("mdi-av-pause");
		song.play();
		
		for(var s in songs) {
			if (!songs[s].song.paused && s !== songFileName) {
				songs[s].elem.removeClass("mdi-av-pause");
				songs[s].elem.addClass("mdi-av-play-arrow");
				songs[s].song.pause();
			}
		}
	}

	else {
		$playPauseButton.removeClass("mdi-av-pause");
		$playPauseButton.addClass("mdi-av-play-arrow");
		song.pause();
	}
}

// MOBILE COLLAPSE
   $(".button-collapse").sideNav();

