const bandTitle = document.querySelector(".band-name");
const scrollPage = document.querySelector("html");
const aboutUs = document.querySelector(".about");
const headSize = document.querySelector(".s1");
const aboutSize = document.querySelector(".s2");
let showTitle = true;
let showAbout = false;
const animate1 = headSize.offsetHeight/2;
const animate2 = headSize.offsetHeight*3/4;
const animate3 = headSize.offsetHeight+aboutSize.offsetHeight/4;

window.onload = bandTitle.style.transform = 'translateX(0vw'

const animateDetect = function() {
    if (scrollPage.scrollTop < animate1) showTitle = true;
    if (scrollPage.scrollTop > animate1) showTitle = false;
    if (scrollPage.scrollTop > animate2) showAbout = true;
    if (scrollPage.scrollTop < animate2) showAbout = false;
    if (scrollPage.scrollTop > animate3) showAbout = false;
}

const animateExec = function() {
    if (showTitle) bandTitle.style.transform = 'translateX(0vw)';
    if (!showTitle) bandTitle.style.transform = 'translateX(-100vw)';
    if (showAbout) aboutUs.style.transform = 'translateX(0vw)';
    if (!showAbout) aboutUs.style.transform = 'translateX(100vw)';

}

scrollPage.addEventListener("wheel", event => {
    animateDetect();
    animateExec();
})

scrollPage.addEventListener("touchmove", event => {
    animateDetect();
    animateExec();
})