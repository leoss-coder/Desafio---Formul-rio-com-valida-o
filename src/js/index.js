const inputs = document.querySelectorAll('.input');
const camposObrigatorios = document.querySelectorAll('.campo');
const botao = document.querySelector('.botao');

botao.addEventListener('click', function (event) {
  event.preventDefault();
  let valido = true;

  inputs.forEach((input, index) => {
    const campo = camposObrigatorios[index];
    if (input.value.trim() === '') {
      input.classList.remove('verde');
      input.classList.add('vermelho');
      campo.classList.add('visivel');
      valido = false;
    } else {
      input.classList.remove('vermelho');
      input.classList.add('verde');
      campo.classList.remove('visivel');
    }
  });

  if (valido) {
    alert('Formulário enviado com sucesso!');
    inputs.forEach(input => {
      input.classList.remove('verde');
      input.value = '';
    });
  }
});
