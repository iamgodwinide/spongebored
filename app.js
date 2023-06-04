
const pimg = document.querySelector(".overlay");
const plank = document.querySelector("#plank")
const gary = document.querySelector("#gary")
const bubble = document.querySelector("#bubble")
const arrow = document.querySelector(".arrow-wrap")


const check = () => {
    if(window.innerHeight > window.innerWidth){
        pimg.style.display = "block";
    }else{
        pimg.style.display = "none";
    }
}

setInterval(check, 500)


arrow.addEventListener("click", () => {
    document.querySelectorAll(".main-img").forEach((el,index) => {
        if(index == 0) el.style.zIndex = 2;
        else el.style.zIndex = 1;
    });
    arrow.style.zIndex = -1;
    plank.pause();
    plank.currentTime = 0;
    bubble.pause();
    bubble.currentTime = 0.9;
})

const handleClick = (index) => {
    arrow.style.zIndex = 10;
    const img = document.querySelectorAll(".main-img")[index];
    img.style.zIndex = "2";
    if(index == 1){
        plank.play()
    }
    else if(index == 2){
        bubble.currentTime = 0.9;
        bubble.play();
    }
    else{
        gary.play()
    }
    return false;
}


