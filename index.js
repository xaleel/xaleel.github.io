document.addEventListener('DOMContentLoaded', () => {
    let x1;
    let y1;
    let swipe;
    document.addEventListener('touchstart', ev => {
        x1 = ev.touches[0].clientX;
        y1 = ev.touches[0].clientY
    })
    document.addEventListener('touchmove', ev => {
        let xDiff = x1 - ev.touches[0].clientX;
        let yDiff = y1 - ev.touches[0].clientY;
        if (xDiff > 50 && Math.abs(yDiff) < 50) {
            swipe = 'right';
        } else if (xDiff < -50 && Math.abs(yDiff) < 50) {
            swipe = 'left';
        }      
    })
    document.addEventListener('touchend', _ => {
        let checkbox = document.getElementById('menu-checkbox');
        if ((checkbox.checked && swipe == 'left') || (!checkbox.checked && swipe == 'right')) {
            document.getElementById('menu-checkbox').click();
        }
        swipe = 'reset';
    })
    document.addEventListener('click', ev => {
        let checkbox = document.getElementById('menu-checkbox');
        if (checkbox.checked && ev.target.id !== 'ver-header' && ev.target.id !== 'menu-checkbox'){
            checkbox.click()
        }
    })

    setTimeout(() => {
        document.querySelector('.main-anim-svg').classList.add('shrink');
        document.querySelectorAll('.no-dsp-1').forEach(div => {
            div.classList.remove('no-dsp-1')
            div.classList.add('fade-in')
        })
    }, 2500);

    document.addEventListener('scroll', ev => {
        let gh = document.getElementById('gh-icon');
        let arr = document.getElementById('arr');
        let deg = (arr.getBoundingClientRect().bottom - gh.getBoundingClientRect().bottom) / 2.38
        deg = deg > 50 ? 50 : deg < -50 ? -50 : deg;
        arr.style.transform = `rotate(${deg}deg)`;
    })
})

function randColor(){
    rand = Math.random() + 0.75
    let r = Math.floor(125 * rand);
    let g = Math.floor(175 * rand);
    let b = Math.floor(200 * rand);
    document.querySelector('#K').style = `fill: rgb(${r}, ${g}, ${b});`
}

function formSubmitHandler(event){
    // Credits: https://github.com/dwyl/learn-to-send-email-via-google-script-html-no-server
    event.preventDefault()
    if (!document.getElementById('email').checkValidity()){
        document.getElementById('email').classList.remove('flash');
        setTimeout(() => {
            document.getElementById('email').classList.add('flash');
        }, 50);
        return;
    }
    document.getElementById('send-txt').classList.add('no-dsp-2')
    document.getElementById('spin').classList.remove('no-dsp-2')
    let form = document.getElementById('contact-form');
    fetch(form.action, {method: 'POST', body: new FormData(form)})
    .then(res => res.json())
    .then(data => {
        form.className = 'no-dsp-2'
        if (data.result == 'success') {
            document.getElementById('form-title').innerHTML = 'Message sent. I\'ll get back to you soon.'
        } else {
            document.getElementById('form-title').innerHTML = 'Something went wrong :( Please refresh the page and try again.'
        }
    })
    .catch(err => console.log(err))
}
