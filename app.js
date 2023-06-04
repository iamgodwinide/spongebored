
const pimg = document.querySelector(".overlay");
const plank = document.querySelector("#plank")


const check = () => {
    if(window.innerHeight > window.innerWidth){
        pimg.style.display = "block";
    }else{
        pimg.style.display = "none";
    }
}

setInterval(check, 500)


const handleClick = (index) => {
    const img = document.querySelectorAll(".main-img")[index];
    img.style.zIndex = "2";
    if(index === 1){
        plank.play()
    }
    return false;
}


