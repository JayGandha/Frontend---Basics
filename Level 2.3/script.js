var arr= [
    {songName:"Jab Tak",url:"./songs/Jab Tak.mp3",img:"./image/ladakh.avif"},
    {songName:"O Rangdrez",url:"./songs/O Rangdrez.mp3",img:"./image/flower.avif"},
    {songName:"Quafirana",url:"./songs/Quafirana.mp3",img:"./image/mountain.avif"},
    {songName:"suniyaan suniyaan",url:"./songs/Suniyaan Suniyaan.mp3",img:"./image/lovely.avif"},
]
var allsongs = document.querySelector("#all-songs")
var poster = document.querySelector("#left")

var play = document.querySelector("#play")
var backword = document.querySelector("#backword")
var forward = document.querySelector("#forward")

var audio = new Audio()

var selectedSong = 0

function mainFunction(){
    var clutter = ""

arr.forEach(function(elem,index){
     clutter += `<div class="song-card" id=${index}>
                    <div class="part1">
                        <img src=${elem.img} alt="">
                    <h2>${elem.songName}</h2>
                    </div>
                </div>`
})
  allsongs.innerHTML = clutter

  audio.src = arr[selectedSong].url
  poster.style.backgroundImage = `url(${arr[selectedSong].img})`
}
mainFunction()

allsongs.addEventListener("click",function(dets){
   selectedSong = dets.target.id
   mainFunction()
   play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
   flag = 1
   audio.play()
})

var flag = 0

play.addEventListener("click",function(){
    if(flag == 0){
    play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
    mainFunction()
    audio.play()
    flag = 1
    }else{
    play.innerHTML = `<i class="ri-play-mini-fill"></i>`
    mainFunction()
    audio.pause()
    flag = 0
    }
})

forward.addEventListener("click",function(){
    if(selectedSong < arr.length - 1){
        selectedSong++
        mainFunction()
        audio.play()
    }else{
        forward.style.opacity = 0.4
    }
})

backward.addEventListener("click",function(){
    if(selectedSong > 0){
        selectedSong--
        mainFunction()
        audio.play()
    }else{
        backward.style.opacity = 0.4
    }
})