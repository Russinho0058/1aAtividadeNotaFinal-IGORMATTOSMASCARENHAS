document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    document.getElementById('error-message').textContent = '';

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        document.getElementById('error-message').textContent = 'Todos os compos são obrigatórios!';
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emaiçPattern.test(email)) {
        document.getElementById('error-message').textContent = 'Por favor, insira um válido email!';
        return;
    }

    alert('Formulário enviado com sucesso!');
});