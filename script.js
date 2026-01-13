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

/* Simulação de Envio de Formulário
const form = document.getElementById('formContato');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Impede o recarregamento da página
    
    const nome = form.querySelector('input[type="text"]').value;
    
    // Aqui você integraria com um serviço real de e-mail depois
    alert(`Obrigado, ${nome}! Sua mensagem foi enviada (simulação).`);
    
    form.reset();
});*/