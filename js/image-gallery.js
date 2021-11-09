function caption(text){
    document.getElementById("cap").innerHTML = event.target.alt;
}

//to display the captions I decidede the easiest way to perform this in the shortest amount of code is to reference the alt text in each image and use it as the captions.. Worked well!


function mark(id) {
    var childImages = document.getElementById("thumbnails").children;
    var i;

    for (i = 0; i < childImages.length; i++) {
       childImages[i].style.border = '';
    }

    document.getElementById(id).style.border="2px solid white";
    document.getElementById("largeImage").src = document.getElementById(id).src;
}

//this code does two things, adds the white border and changes the src of the larger image to the image that got clicked on!