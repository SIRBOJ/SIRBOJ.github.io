// Hide First picture container & button and display second picture container & button
function hideviewButton() {
    document.getElementById("openGallery").style.display = "none";
    
    document.getElementById("hidepicture1").style.display = "none";
    document.getElementById("hidepictures").style.display = "block";
    
    document.getElementById("closeGallery").style.display = "block";
    return;
}

function hidecloseButton() {
    document.getElementById("closeGallery").style.display = "none";
    
    document.getElementById("hidepictures").style.display = "none";
    document.getElementById("hidepicture1").style.display = "block";
    
    document.getElementById("openGallery").style.display = "block";
    return;
}


//Hide
document.getElementById("openGallery").onclick = function() { hideviewButton(); };

document.getElementById("closeGallery").onclick = function() { hidecloseButton(); };