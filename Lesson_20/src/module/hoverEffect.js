const hoverEffect = () => {
  const pict = document.querySelectorAll('.command__photo');
  pict.forEach(item => {
    let first = '';
    item.addEventListener('mouseenter', (event) => {
      first = event.target.src;
      event.target.src = event.target.dataset.img;
    });
    item.addEventListener('mouseleave', (event) => event.target.src = first);
  });
}
export default hoverEffect;
