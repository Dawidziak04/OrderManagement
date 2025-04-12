document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const errorMessage = document.getElementById('errorMessage');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'X-CSRF-TOKEN': csrfToken
                },
                body: formData
            });

            if (response.ok) {
                window.location.href = `OrderManagement.html`;
            } else {
                errorMessage.style.display = 'block';
            }
        } catch (error) {
            console.error('Błąd logowania:', error);
            errorMessage.textContent = 'Wystąpił błąd podczas logowania.';
            errorMessage.style.display = 'block';
        }
    });
});
