const sendForm = (idForm) => {
  const errorMessage = 'Что-то пошло не так...',
    loadMessage = 'Загрузка...',
    successMessage = 'Спасибо! Мы скоро с вами свяжемся';

  const form = document.getElementById(idForm);
  let inputs = form.querySelectorAll('input');
  inputs.forEach(input => {
    let type = input.getAttribute('type');
    input.addEventListener('input', (event) => {
      if (type === 'tel') {
        input.value = input.value.replace(/[^+\d]/gi, '');
      } else if (type === 'text' || input.classList.contains('mess')) {
        input.value = input.value.replace(/[^а-яё\s]/gi, '');
      }
    });
  });

  const statusMessage = document.createElement('div');
  statusMessage.style.cssText = 'font-size: 2rem; color: #fff;';

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    form.appendChild(statusMessage);
    statusMessage.textContent = loadMessage;
    const formData = new FormData(form);
    let body = {};
    formData.forEach((val, key) =>{
     body[key] = val;
    })
    postData(body)
      .then((response) => {
        if (response.status !== 200) throw new Error('status network not 200');
        console.log(response);
        statusMessage.textContent = successMessage;
      })
      .catch((error) => {
        statusMessage.textContent = errorMessage;
        console.log(error);
      });

    inputs.forEach(elem => {
      elem.value = '';
    })
  });

  const postData = (body) => {
    return fetch('./server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
    })
  }
}

export default sendForm;
