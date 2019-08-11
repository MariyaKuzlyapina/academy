const mainSlider = () => {
  const parentSlider = document.querySelector('.main-slider');
  let slides = parentSlider.querySelectorAll('.slide');
  const parentDots = document.querySelector('.dots');
  let dots;

  slides.forEach((slide, index) => {
    let dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('dot-active');
    dots = document.querySelectorAll('.dot');
    parentDots.insertBefore(dot, dots[dots.length]);
  });

  let currentSlide = 0,
    interval;
  
  dots = document.querySelectorAll('.dot');

  const getAutoSlider = () => {
    slides[currentSlide].setAttribute('style', 'display: none');
    dots[currentSlide].classList.remove('dot-active');

    if (currentSlide !== 4) currentSlide += 1;
    else currentSlide = 0;

    slides[currentSlide].removeAttribute('style');
    dots[currentSlide].classList.add('dot-active');
  }

  const startSlide = (time = 1500) => interval = setInterval(getAutoSlider, time);
  startSlide(1300);

  dots.forEach((dot, index) => {
    dot.addEventListener('click', (event) => {
      clearInterval(interval);
      slides[currentSlide].setAttribute('style', 'display: none');
      dots[currentSlide].classList.remove('dot-active');

      slides[index].removeAttribute('style');
      dots[index].classList.add('dot-active');
      currentSlide = index;
      startSlide(1500);
    });
  });
};

export default mainSlider;