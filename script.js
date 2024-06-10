document.addEventListener('DOMContentLoaded', () => {
    const arrowBtns = document.querySelectorAll('.arrowbtn');

    arrowBtns.forEach((arrowBtn) => {
        arrowBtn.addEventListener('click', () => {
            const descContent = arrowBtn.closest('.threada').nextElementSibling;
            if (descContent.classList.contains('d-none')) {
                descContent.classList.remove('d-none');
            } else {
                descContent.classList.add('d-none');
            }
        });
    });
});
