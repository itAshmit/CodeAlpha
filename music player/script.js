// Get DOM elements
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const stopBtn = document.getElementById('stop-btn');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const audioPlayer = document.getElementById('audio-player');
const progressBar = document.getElementById('progress-bar');
const songTitle = document.getElementById('song-title');
const songImage = document.getElementById('song-image');

// Song list
const songs = [
    {
        title: "Chanakya LIVE",
        src: "Chanakya - Rishab Rikhiram Sharma (Official Music Video) [Out Now!].mp3",
        image:"pexels-gochrisgoxyz-1477166.jpg"
    },
    {
        title: "Jai Radha Madhav",
        src: "Jai Radha Madhav Mahamantra.mp3",
        image: "download (1).png"
    },
    {
        title: "Radha Ramanam Hare Hare",
        src: "Radha Ramanam Hare Hare-(SambalpuriStar.In).mp3",
        image: "pexels-evie-shaffer-1259279-4154613.jpg"
    },
    {
        title: "Shiv Kailash Sitaar",
        src: "Shiv Kailash (Live in Mumbai) [Official Video]  Rishab Rikhiram Sharma  Sitar for Mental Health.mp3",
        image:"download.jpeg"
    }
];

let currentSongIndex = 0;

function loadSong(index) {
    const song = songs[index];
    audioPlayer.src = song.src;
    songTitle.textContent = song.title;
    songImage.src = song.image;
    progressBar.value = 0; 
    audioPlayer.load(); 
}

playBtn.addEventListener('click', () => {
    audioPlayer.play();
});

pauseBtn.addEventListener('click', () => {
    audioPlayer.pause();
});


stopBtn.addEventListener('click', () => {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
    progressBar.value = 0; // Reset progress bar to starting position
});


nextBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length; // Move to the next song
    loadSong(currentSongIndex);
    audioPlayer.play();
});

prevBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length; // Move to the previous song
    loadSong(currentSongIndex);
    audioPlayer.play();
});

audioPlayer.addEventListener('timeupdate', () => {
    const currentTime = audioPlayer.currentTime;
    const duration = audioPlayer.duration;
    if (duration) {
        const progressPercent = (currentTime / duration) * 100;
        progressBar.value = progressPercent;

        // Update the background color of the progress bar
        progressBar.style.background = `linear-gradient(to right, #fda085 ${progressPercent}%, #ddd ${progressPercent}%)`;
    }
});


progressBar.addEventListener('input', () => {
    const duration = audioPlayer.duration;
    const seekTime = (progressBar.value / 100) * duration;
    audioPlayer.currentTime = seekTime;
});

loadSong(currentSongIndex);