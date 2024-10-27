document.addEventListener('DOMContentLoaded', () => {
    let current = 0;
    const slides = document.querySelectorAll(".slideshow-item");
    const totalSlides = slides.length;

    const update = () => {
        const slideshowImage = document.querySelector(".slideshow-item img");
        if (!slideshowImage) return; 

        let newWidth = slideshowImage.clientWidth;
        let newHeight = slideshowImage.clientHeight;
        let newMargin = newWidth * current;

        slides[0].style.marginLeft = `-${newMargin}px`; 
        slides[0].style.height = `${newHeight}px`; 

        const width = window.innerWidth;

        if (width <= 480) {
            document.getElementById('banner01').setAttribute("src", "assets/img/banner/banner_01-mobile.jpg");
            document.getElementById('banner02').setAttribute("src", "assets/img/banner/banner_02-mobile.jpg");
            document.getElementById('banner03').setAttribute("src", "assets/img/banner/banner_03-mobile.jpg");
        }
    };

    const goPrev = () => {
        current--;
        if (current < 0) {
            current = totalSlides - 1;
        }
        update();
    };

    const goNext = () => {
        current++;
        if (current >= totalSlides) {
            current = 0;
        }
        update();
    };

    update();

    const btnPrev = document.querySelector(".prev");
    if (btnPrev) {
        btnPrev.addEventListener("click", goPrev);
    }

    const btnNext = document.querySelector(".next");
    if (btnNext) {
        btnNext.addEventListener("click", goNext);
    }

    setInterval(goNext, 2000);

});

