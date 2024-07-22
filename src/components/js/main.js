// src/components/js/main.js
document.getElementById('contact-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    try {
        const response = await fetch('http://192.168.100.5:3000/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert('Mensaje enviado exitosamente');
        } else {
            alert('Error al enviar el mensaje');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error al enviar el mensaje');
    }
});
