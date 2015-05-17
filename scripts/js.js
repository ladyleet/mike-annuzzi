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
      $('.slider').slider({full_width: true});
    });
        

function clickButton (){
$(".accordion-content").toggleClass("open");
};

