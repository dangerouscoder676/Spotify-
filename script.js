console.log("Welcome to Spotify!");
let songs = [
    { title: "Shape of You", filePath: "songs/shape_of_you.mp3", coverPath: "shape_of_you.jpg" },
    { title: "Perfect", filePath: "songs/perfect.mp3", coverPath: "perfect.jpg" },
    { title: "Thinking Out Loud", filePath: "songs/thinking_out_loud.mp3", coverPath: "thinking_out_loud.jpg" },
    { title: "Photograph", filePath: "songs/photograph.mp3", coverPath: "photograph.jpg" },
    { title: "Nina", filePath: "songs/nina.mp3", coverPath: "nina.jpg" },
    { title: "I Don't Care", filePath: "songs/i_dont_care.mp3", coverPath: "i_dont_care.jpg" },
    { title: "Beautiful People", filePath: "songs/beautiful_people.mp3", coverPath: "beautiful_people.jpg" },
    { title: "You Need Me, I Don't Need You", filePath: "songs/ynm.mp3", coverPath: "you_need_me.jpg" },
    { title: "Don't", filePath: "songs/dont.mp3", coverPath: "dont.jpg" }
];
let songIndex = 7;
let audioElement = new Audio(songs[songIndex].filePath);
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let playNext = document.getElementById('playNext');
let playPrevious = document.getElementById('playPrevious');
let songTitle = document.getElementById('songTitle');
let songItems = document.querySelectorAll('.song .play-btn'); // Fixed play button selection
function updateSongDetails() {
    songTitle.textContent = songs[songIndex].title;
    audioElement.src = songs[songIndex].filePath;
    audioElement.currentTime = 0;
    myProgressBar.value = 0;
}
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.querySelector('img').src = "pause_button.png";
    } else {
        audioElement.pause();
        masterPlay.querySelector('img').src = "playbutton.png";
    }
});
audioElement.addEventListener('timeupdate', () => {
    let progress = (audioElement.currentTime / audioElement.duration) * 100;
    myProgressBar.value = progress;
});
myProgressBar.addEventListener('input', () => {
    let seekTime = (myProgressBar.value / 100) * audioElement.duration;
    audioElement.currentTime = seekTime;
});
playNext.addEventListener('click', () => {
    songIndex = (songIndex + 1) % songs.length;
    updateSongDetails();
    audioElement.play();
    masterPlay.querySelector('img').src = "pause_button.png";
});
playPrevious.addEventListener('click', () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    updateSongDetails();
    audioElement.play();
    masterPlay.querySelector('img').src = "pause_button.png";
});
document.querySelectorAll('.song').forEach((songElement, index) => {
    songElement.addEventListener('click', () => {
        songIndex = index;
        updateSongDetails();
        audioElement.play();
        masterPlay.querySelector('img').src = "pause_button.png";
    });
});
updateSongDetails();
