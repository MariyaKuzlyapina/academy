const togglePopUp = () => {
  const popup = document.querySelector('.popup'),
    popupBtn = document.querySelectorAll('.popup-btn'),
    popupContent = document.querySelector('.popup-content');

  popupBtn.forEach((elem) => {
    elem.addEventListener('click', () => {
      if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) popup.style.display = 'block';
      else {
        popup.style.display = 'block';
        popup.style.opacity = '0';
        let position = 0 - popupContent.clientHeight;
        const setPosition = () => {
          popup.style.opacity = '1';
          popupContent.style.top = `${position}px`;
          if (popupContent.getBoundingClientRect().top < 72) position +=1;
          else clearInterval(idIntervalPosition);
        };

        let idIntervalPosition = setInterval(setPosition, 1);
      }
    });
  });

  popup.addEventListener('click', (event) => {
    let target = event.target;
    if(target.classList.contains('popup-close')) popup.style.display = 'none';
    else {
      target = target.closest('.popup-content');
      if (!target) popup.style.display = 'none';
    }
  });
}

export default togglePopUp;
