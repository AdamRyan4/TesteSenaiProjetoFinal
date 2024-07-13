document.getElementById('leadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const socialMedia = document.getElementById('socialMedia').value;

    alert(`Nome: ${name}\nEmail: ${email}\nRede Social: ${socialMedia}`);
    // Aqui você pode adicionar a lógica para enviar esses dados para um servidor
    // lembrar de colocr o acento ` `
})