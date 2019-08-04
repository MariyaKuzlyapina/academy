const toggleMenu = () => {
  const menu = document.querySelector('menu'),
    body = document.querySelector('body');

  const handlerMenu = () => {
    menu.classList.toggle('active-menu');
  };

  body.addEventListener('click', (event) => {
    let target = event.target;
    if(target.closest('.menu')) handlerMenu();
    else if (target.closest('.active-menu')) handlerMenu();
    else menu.classList.remove('active-menu');
  });
};

export default toggleMenu;
