// Rolar suavemente para a seção de receitas
document.querySelector('.btn[href="#receitas"]').addEventListener('click', function (e) {
    e.preventDefault(); // Impede o comportamento padrão do link
    const targetSection = document.querySelector('#receitas');
    targetSection.scrollIntoView({ behavior: 'smooth' });
});

// Validação do formulário de newsletter
document.querySelector('.newsletter form').addEventListener('submit', function (e) {
    e.preventDefault(); // Impede o envio automático do formulário

    const nameInput = document.querySelector('input[name="name"]');
    const emailInput = document.querySelector('input[name="email"]');
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();

    if (!nameValue || !emailValue) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    if (!validateEmail(emailValue)) {
        alert('Por favor, insira um endereço de e-mail válido.');
        return;
    }

    // Exibe uma mensagem de sucesso
    alert(`Obrigado por se inscrever, ${nameValue}!`);
    nameInput.value = ''; // Limpa o campo de nome
    emailInput.value = ''; // Limpa o campo de e-mail
});

// Função para validar o formato do e-mail
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
