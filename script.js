console.log("Welcome to Spotify!");
let songIndex = 0;
let audioElement = new Audio("ynm.mp3"); 
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        let playIcon = masterPlay.querySelector('img');
        playIcon.src = "pause_button.png";
        playIcon.alt = "Pause button";
    } else {
        audioElement.pause();
        let playIcon = masterPlay.querySelector('img');
        playIcon.src = "playbutton.png";
        playIcon.alt = "Play button";
    }
});
audioElement.addEventListener('timeupdate', () => {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});
myProgressBar.addEventListener('input', () => {
    let seekTime = (myProgressBar.value / 100) * audioElement.duration;
    audioElement.currentTime = seekTime;
});
