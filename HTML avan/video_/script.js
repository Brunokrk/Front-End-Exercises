let video = document.getElementById("video1");

function retroceder(){
    video.currentTime -= 15;
}

function avancar(){
    video.currentTime += 15;
}

function diminuirVelocidade(){
    video.playbackRate -= 0.1;
}

function aumentarVelocidade (){
video.playbackRate += 0.1;
}

function play(){
    let status = document.getElementById("playbtn");
    status.addEventListener("click", function(){
        last_action = status.getAttribute("src")
        if (last_action == "images/play.png"){
            video.play();
            status.setAttribute("src","images/pause.png");
        }else{
            video.pause();
            status.setAttribute("src","images/play.png")
        }
    })

}

function stop(){
    video.pause();
    video.currentTime = 0;
}