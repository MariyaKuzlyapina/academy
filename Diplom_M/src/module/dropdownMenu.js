const dropdownMenu = () => {
  const menuTitle = document.querySelector('.clubs-list__title');
  const menuPoints = document.querySelector('.clubs-list__points');

  menuTitle.addEventListener('click', (e) => {
    menuPoints.classList.toggle('clubs-list__points_active');
    menuTitle.classList.toggle('clubs-list__title_active');
  });
};

export default dropdownMenu;