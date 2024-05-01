const shareBtn = document.getElementById("share");
const popupWrapper = document.getElementById("popup-wrapper");
const shareBtnMobile = document.getElementById("share-mobile")
const salesperson = document.getElementById("salesperson-info")
const mobilePop = document.getElementById("mobile")

function popup(){
    popupWrapper.classList.toggle("hidden")
}

function popMobile(){
    mobilePop.classList.toggle("hidden")
    mobilePop.classList.toggle("mobile")
}


shareBtn.addEventListener("click", ()=>{
    const width = window.innerWidth;
    if(width > 760){
        popup()
    }else if(width < 760){
        popMobile()

    }
})
