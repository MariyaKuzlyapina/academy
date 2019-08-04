const numValid = () => {
  const numInput = document.querySelectorAll('.calc-item');
  numInput.forEach(item => {
    let attr = item.getAttribute('type');
    if(attr === 'number') {
      item.addEventListener('input', (e) => {
        item.value = item.value.replace(/\D/gi, '');
      });
    }
  });
}

export default numValid;
