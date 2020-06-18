window.addEventListener('DOMContentLoaded', ()=>{
    let slide = document.querySelectorAll('.slide'),
        next = document.querySelector('.next'),
        prev = document.querySelector('.prev'),
        numberBox = 0;

    function reset() {
        slide.forEach(slide => {
            slide.style.opacity = "0";
            slide.style.transform = "translateX(-100%)";
        });
        // slide[numberBox].style.transform = "translateX(+100%)";
    }

    function nextSlide() {
        reset();
        if (numberBox === slide.length){
            numberBox = 0;
        }
        slide[numberBox].style.opacity = "1";
        slide[numberBox].style.transform = "translateX(0)";
        numberBox++;
    }

    function prevSlide() {
        reset();
        numberBox--;
        if (numberBox === 0) {
            numberBox = (slide.length);
        }
        slide[numberBox-1].style.opacity = "1";
        slide[numberBox-1].style.transform = "translateX(0)";

    }

    next.addEventListener('click', nextSlide);
    prev.addEventListener('click', prevSlide);

    setInterval(nextSlide, 3000);
});

