const openModal = (modalId, elemClass) => {
  const body = document.getElementById('body');
  let modalWindow = document.getElementById(modalId);
  

  body.addEventListener('click', (event) => {
    let target = event.target;
    let clickElem = document.querySelector('.fixed-gift');
    
    if (target.closest(elemClass)) modalWindow.classList.add('active');
    if (target.matches('.overlay, .close_icon')) modalWindow.classList.remove('active');
    
    if (target.closest('.fixed-gift')) {
      clickElem.classList.add('no-active');
    } else {
      clickElem.classList.remove('no-active');
    }
  });
};

export default openModal;