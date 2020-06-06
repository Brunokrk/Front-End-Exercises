let image = document.getElementById("like");

image.addEventListener("click", function(){

    last_image = image.getAttribute("src")
    if(last_image == "./images/thumbs-down.png"){
        image.setAttribute("src", "./images/thumbs-up.png")
    }else{
        image.setAttribute("src", "./images/thumbs-down.png")
    }
   
})