
function webshow() { //staggered fade-in animation and hover animation
    document.querySelector('#web').style.opacity = 1;
    var css = '.about > div > p:hover {animation: spaceout 20s;}';
    var style = document.createElement('style');
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
    document.getElementsByTagName('head')[0].appendChild(style);
}

function Fadeout() {
    var info = document.getElementById('info');
    info.style.animation='fadeout 1s'
    setTimeout(() => info.style.display = 'none', 1000); 
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(webshow, 4400);   
});

function resume(event){
    if (event.target.id === 'cv' || event.target.id === 'cv-dl'){
        return
    }
    let div = document.querySelector('#resume')
    if (div.classList.contains('nodsp')){
        div.classList.remove('nodsp')
        div.style.animation='fade-in 1s'
        document.querySelector('body').classList.add('stop-scrolling')
    } else {
        div.style.animation='fadeout 1s'
        setTimeout(() => {
            div.classList.add('nodsp')
        }, 1000);
        document.querySelector('body').classList.remove('stop-scrolling')
    }
}

function dlcv(){
    let cv = document.createElement("embed")
    cv.src = "cv.pdf"
    cv.className = "noopc"
    document.querySelector('#resume').appendChild(cv)
}
