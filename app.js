// Meme generator script


// get top and bottom text and asign js vars
var topInput = document.getElementById('topText');
var bottomInput = document.getElementById('bottomText');
var leftInput = document.getElementById("leftText");
var rightInput = document.getElementById("rightText");

var canvas1 = document.getElementById("c");
var ctx1 = canvas1.getContext("2d");
var c1Scale = 1;

var canvas2 = document.getElementById("canvas2");
var ctx2 = canvas2.getContext("2d");
var c2Scale = 4; 

// font size for text boxes
var topSize = document.getElementById('top-size');
window.topSizeNum = document.getElementById('top-size').value;

var bottomSize = document.getElementById('bottom-size');
window.bottomSizeNum = document.getElementById('bottom-size').value;

var leftSize = document.getElementById('left-size');
window.leftSizeNum = document.getElementById('left-size').value;

var rightSize = document.getElementById('right-size');
window.rightSizeNum = document.getElementById('right-size').value;

// text positions
var topPos = document.getElementById("top-pos");
window.topPosNum = document.getElementById("top-pos").value;

var bottomPos = document.getElementById("bottom-pos");
window.bottomPosNum = document.getElementById("bottom-pos").value;

var leftPos = document.getElementById("left-pos");
window.leftPosNum = document.getElementById("left-pos").value;

var rightPos = document.getElementById("right-pos");
window.rightPosNum = document.getElementById("right-pos").value;


// texts as empty strings
window.topText = "";
window.bottomText = "";
window.leftText = "";
window.rightText = "";



// add event listeners to inputs on text
topInput.oninput = textChangeListener;
bottomInput.oninput = textChangeListener;
leftInput.oninput = textChangeListener;
rightInput.oninput = textChangeListener;

topSize.oninput = sizeChangeListener;
bottomSize.oninput = sizeChangeListener;
leftSize.oninput = sizeChangeListener;
rightSize.oninput = sizeChangeListener;

topPos.oninput = posChangeListener;
bottomPos.oninput = posChangeListener;
leftPos.oninput = posChangeListener;
rightPos.oninput = posChangeListener;


// add event listeners to buttons so functions execute when they are clicked
document.getElementById("file").addEventListener("change", handleFileSelect);
document.getElementById("saveBtn").addEventListener("click", saveFile);


// redraw the canvas when image or text is changed
function redrawMeme(canvas, ctx, image, topText, bottomText, leftText, rightText, topSizeNum, bottomSizeNum, leftSizeNum, rightSizeNum, topPosNum, bottomPosNum, leftPosNum, rightPosNum, scale) {
	/*var c = document.getElementById("c");
	var ctx = c.getContext("2d");*/
	
	// draw the image at the start of the canvas, and fit it to 400x400 pixels
	ctx.drawImage(image, 0, 0, 450 * scale, 300 * scale);
	
	ctx.textAlign = "center";
	ctx.strokeStyle = "black";
	ctx.fillStyle = "white";
	ctx.lineWidth = 3 * scale ;
	
	// top text
	ctx.font = topSizeNum * scale + "px impact";
	ctx.textBaseline = "top";
	ctx.strokeText(topText, topPosNum * scale, 0);
	ctx.fillText(topText, topPosNum * scale, 0);

	// bottom text
	ctx.font = bottomSizeNum * scale + "px impact";
	ctx.textBaseline = "bottom";
	ctx.strokeText(bottomText, bottomPosNum * scale, 300 * scale);
	ctx.fillText(bottomText, bottomPosNum * scale, 300 * scale);
	
	//left text
	ctx.save();
	ctx.translate(0, 0);
	ctx.rotate(Math.PI / 2);
	ctx.font = leftSizeNum * scale + "px impact";
	ctx.textBaseline = "bottom";
	ctx.strokeText(leftText, leftPosNum * scale, 0);
	ctx.fillText(leftText, leftPosNum * scale, 0);
	ctx.restore();

	// right 
	ctx.save();
	ctx.translate(0, 0);
	ctx.rotate(Math.PI / 2);
	ctx.font = rightSizeNum * scale + "px impact";
	ctx.textBaseline = "top";
	ctx.strokeText(rightText, rightPosNum * scale, -450 * scale);
	ctx.fillText(rightText, rightPosNum * scale, -450 * scale);
	ctx.restore();
}


// notice when text is changed and reset variables
function textChangeListener (evt) {
	// set to top or bottom as changed
	var id = evt.target.id;
	var text = evt.target.value;
	
	// check which text was changed
	if (id == "topText") {
		window.topText = text;
	} else if (id == "bottomText") {
		window.bottomText = text;
	} else if (id == "leftText") {
		window.leftText = text;
	} else {
		window.rightText = text;
	}
	redrawMeme(canvas1, ctx1, window.imageSrc, window.topText, window.bottomText, window.leftText, window.rightText, window.topSizeNum, window.bottomSizeNum, window.leftSizeNum, window.rightSizeNum, window.topPosNum, window.bottomPosNum, window.leftPosNum, window.rightPosNum, c1Scale);
	redrawMeme(canvas2, ctx2, window.imageSrc, window.topText, window.bottomText, window.leftText, window.rightText, window.topSizeNum, window.bottomSizeNum, window.leftSizeNum, window.rightSizeNum, window.topPosNum, window.bottomPosNum, window.leftPosNum, window.rightPosNum, c2Scale);
}

function sizeChangeListener (evt) {
	console.log("text size is" + topSizeNum);
	var id = evt.target.id;
	var size = evt.target.value;
	if (id == "top-size") {
		window.topSizeNum = size;
		console.log("Its been changed");
	} else if (id == "bottom-size") {
		window.bottomSizeNum = size;
	} else if (id == "left-size") {
		window.leftSizeNum = size;
	} else {
		window.rightSizeNum = size;
	}
	redrawMeme(canvas1, ctx1, window.imageSrc, window.topText, window.bottomText, window.leftText, window.rightText, window.topSizeNum, window.bottomSizeNum, window.leftSizeNum, window.rightSizeNum, window.topPosNum, window.bottomPosNum, window.leftPosNum, window.rightPosNum, c1Scale);
	redrawMeme(canvas2, ctx2, window.imageSrc, window.topText, window.bottomText, window.leftText, window.rightText, window.topSizeNum, window.bottomSizeNum, window.leftSizeNum, window.rightSizeNum, window.topPosNum, window.bottomPosNum, window.leftPosNum, window.rightPosNum, c2Scale);
}

function posChangeListener (evt) {
	var id = evt.target.id;
	var pos = evt.target.value;
	if (id == "top-pos") {
		window.topPosNum = pos;
	} else if (id == "bottom-pos") {
		window.bottomPosNum = pos;
	} else if (id == "left-pos") {
		window.leftPosNum = pos;
	} else {
		window.rightPosNum = pos;
	}
	redrawMeme(canvas1, ctx1, window.imageSrc, window.topText, window.bottomText, window.leftText, window.rightText, window.topSizeNum, window.bottomSizeNum, window.leftSizeNum, window.rightSizeNum, window.topPosNum, window.bottomPosNum, window.leftPosNum, window.rightPosNum, c1Scale);
	redrawMeme(canvas2, ctx2, window.imageSrc, window.topText, window.bottomText, window.leftText, window.rightText, window.topSizeNum, window.bottomSizeNum, window.leftSizeNum, window.rightSizeNum, window.topPosNum, window.bottomPosNum, window.leftPosNum, window.rightPosNum, c2Scale);
}

// function to set canvas image as selected file
function handleFileSelect(evt) {
	var canvasWidth = 450;
	var canvasHeight = 300;
	// files returns a list of selected files, so we choose the first in the list
	var file = evt.target.files[0];
	
	// FileReader allows a web app to read the data of the selected local file
	var reader = new FileReader();
	// when the file is succesfully read
	reader.onload = function(fileObject) {
		// asign the read data to a variable
		var data = fileObject.target.result;
		
		// generate a new html image
		var image = new Image();
		image.onload = function() {
			window.imageSrc = this;
			redrawMeme(canvas1, ctx1, window.imageSrc, window.topText, window.bottomText, window.leftText, window.rightText, window.topSizeNum, window.bottomSizeNum, window.leftSizeNum, window.rightSizeNum, window.topPosNum, window.bottomPosNum, window.leftPosNum, window.rightPosNum, c1Scale);
			redrawMeme(canvas2, ctx2, window.imageSrc, window.topText, window.bottomText, window.leftText, window.rightText, window.topSizeNum, window.bottomSizeNum, window.leftSizeNum, window.rightSizeNum, window.topPosNum, window.bottomPosNum, window.leftPosNum, window.rightPosNum, c2Scale);
		}
		// set background image to read file
		image.src = data;
		console.log(fileObject.target.result);
	};
	// read the processed data as a url for the image source, won't work otherwise!
	reader.readAsDataURL(file);
}

function saveFile() {
	// replaces broken function
	//creats an imgage with the drawn canvas in it as an image, writes it to a new window, and opens that window
	var url = document.getElementById("canvas2").toDataURL();
	var img = "<title>My Meme</title><img src='" + url + "'></img>";

	var openWin = window.open();
	openWin.document.open();
	openWin.document.write(img);
	openWin.document.close();
}