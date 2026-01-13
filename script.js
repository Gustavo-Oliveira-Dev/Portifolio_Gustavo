// Menu Mobile (Hambúrguer)
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Seleciona o formulário
const form = document.getElementById('formContato');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // 1. Impede a página de recarregar ou abrir o site do FormSubmit

    // 2. Muda o texto do botão para dar feedback visual
    const btn = form.querySelector('button');
    const textoOriginal = btn.innerText;
    btn.innerText = 'Enviando...';
    btn.disabled = true;

    // 3. Prepara os dados
    const formData = new FormData(form);

    // 4. Envia para o FormSubmit via código (fetch)
    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json' // Importante: pede resposta em dados, não página HTML
        }
    })
    .then(response => {
        if (response.ok) {
            alert('Mensagem enviada com sucesso! Entrarei em contato em breve.');
            form.reset(); // Limpa os campos
        } else {
            alert('Ocorreu um erro ao enviar. Tente novamente mais tarde.');
        }
    })
    .catch(error => {
        alert('Erro de conexão. Verifique sua internet.');
        console.error('Erro:', error);
    })
    .finally(() => {
        // Restaura o botão ao normal
        btn.innerText = textoOriginal;
        btn.disabled = false;
    });
});

/* Simulação de Envio de Formulário
const form = document.getElementById('formContato');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Impede o recarregamento da página
    
    const nome = form.querySelector('input[type="text"]').value;
    
    // Aqui você integraria com um serviço real de e-mail depois
    alert(`Obrigado, ${nome}! Sua mensagem foi enviada (simulação).`);
    
    form.reset();
});*/