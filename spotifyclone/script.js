console.log("welcome to the javascript")

//inititalize variable
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3")
let masterplay = document.getElementById("masterplay")
let myProgressBar = document.getElementById("myProgressBar")
let gif = document.getElementById("gif")
let songItem = Array.from(document.getElementsByClassName("songItem"))
let masterSongName = document.getElementById("masterSongName")

let songs = [
    {songName:"Warriyo-Mortals", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"Cielo-huma-huma", filePath:"songs/2.mp3", coverPath:"covers/2.jpg"},
    {songName:"Deaf Kev", filePath:"songs/3.mp3", coverPath:"covers/3.jpg"},
    {songName:"Different heaven and EHIDE - My Heart", filePath:"songs/4.mp3", coverPath:"covers/4.jpg"},
    {songName:"Janji - Heroes - Tonight", filePath:"songs/5.mp3", coverPath:"covers/5.jpg"},
    {songName:"Rabba-e-Ishq", filePath:"songs/6.mp3", coverPath:"covers/6.jpg"},
    {songName:"Sakiyan-e-Ishq", filePath:"songs/7.mp3", coverPath:"covers/7.jpg"},
    {songName:"Bhula-e-Ishq", filePath:"songs/8.mp3", coverPath:"covers/8.jpg"},
    {songName:"Pyar-e-Ishq", filePath:"songs/9.mp3", coverPath:"covers/9.jpg"},
    {songName:"Kassam-e-Ishq", filePath:"songs/10.mp3", coverPath:"covers/10.jpg"},
]

songItem.forEach((element,i)=>{
    element.getElementsByTagName('img')[0].src= songs[i].coverPath
    element.getElementsByClassName('songName')[0].innerText= songs[i].songName
})

// audioElement.play();
masterplay.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime<0){
        audioElement.play();
        masterplay.classList.remove("fa-solid", "fa-play")
        masterplay.classList.add("fa-solid", "fa-pause")
        gif.style.opacity = 1
    }
    else{
        audioElement.pause();
        masterplay.classList.remove("fa-solid", "fa-pause")
        masterplay.classList.add("fa-solid", "fa-play")
        gif.style.opacity = 0
    }
})
// Listen to Events
audioElement.addEventListener("timeupdate",()=>{
    console.log("timeupdate")
    //update
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress
})
// fot range and play duration of song
myProgressBar.addEventListener("change",()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})

//for the play and pause button fo the song list
const makeAllPLays =()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
        console.log(element)
        element.classList.remove("fa-solid", "fa-pause")
        element.classList.add("fa-solid", "fa-play")
    });
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener("click",(e)=>{
        console.log(e.target)
        makeAllPLays()
        songIndex = parseInt(e.target.id)
        e.target.classList.remove("fa-solid", "fa-play")
        e.target.classList.add("fa-solid", "fa-pause")
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName
        audioElement.currentTime = 0
        audioElement.play()
        gif.style.opacity = 1
        masterplay.classList.remove("fa-solid", "fa-play")
        masterplay.classList.add("fa-solid", "fa-pause")
    })
})

//for the next and previous button
document.getElementById("next").addEventListener("click",()=>{
    if(songIndex>=9){
        songIndex = 0
    }else{
        songIndex+=1
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName
    audioElement.currentTime = 0
    audioElement.play()
    gif.style.opacity = 1
    masterplay.classList.remove("fa-solid", "fa-play")
    masterplay.classList.add("fa-solid", "fa-pause")
})

document.getElementById("prev").addEventListener("click",()=>{
    if(songIndex<=0){
        songIndex = 0
    }else{
        songIndex-=1
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName
    audioElement.currentTime = 0
    audioElement.play()
    gif.style.opacity = 1
    masterplay.classList.remove("fa-solid", "fa-play")
    masterplay.classList.add("fa-solid", "fa-pause")
})

// const numbers = [65, 44, 12, 4];
// numbers.forEach(myFunction)

// function myFunction(item, index, arr) {
//   a = arr[index] = item * 10;
//   console.log(a)
// }
