function testFunction() {
    document.getElementById('demo').innerHTML = Date();
}


var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 3000;	// Time Between Switch
	 
// Image List
images[0] = "media\\flower.png";
images[1] = "media\\abstract.PNG";
images[2] = "media\\amberriver.PNG";
images[3] = "media\\antiquerose.PNG";
images[4] = "media\\autumnflames.PNG";
images[5] = "media/bluebird.png";
images[6] = "media/bluefeather.PNG";
images[7] = "media/blueflower.PNG";
images[8] = "media/dancinglady.PNG";
images[9] = "media/dromedary.PNG";
images[10] = "media/embers.PNG";
images[11] = "media/fireworks.PNG";

// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;