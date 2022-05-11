const bandTitle = document.querySelector(".band-name");
const scrollPage = document.querySelector("html");
const aboutUs = document.querySelector(".about");
const headSize = document.querySelector(".s1");
const aboutAnimStart = headSize.offsetHeight*3/4;
const aboutAnimDisplay = headSize.offsetHeight/2;

scrollPage.addEventListener("wheel", event => {
    bandTitle.style.left =`max(-100vw, calc(-1*${scrollPage.scrollTop}vw))`;
    if (scrollPage.scrollTop > aboutAnimStart) {
        aboutUs.style.transform = "translateX(0vw)";
    }
    if (scrollPage.scrollTop < aboutAnimDisplay) {
        aboutUs.style.transform = "translateX(100vw)";
    }
})

scrollPage.addEventListener("touchmove", event => {
    bandTitle.style.left =`max(-100vw, calc(-1*${scrollPage.scrollTop}vw))`;
    if (scrollPage.scrollTop > aboutAnimStart) {
        aboutUs.style.transform = "translateX(0vw)";
    }
    if (scrollPage.scrollTop < aboutAnimDisplay) {
        aboutUs.style.transform = "translateX(100vw)";
    }
})