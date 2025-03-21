document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.dropdown').forEach(dropdown => {
        dropdown.addEventListener('mouseenter', () => {
            const submenu = dropdown.querySelector('.dropdown-content');
            if (submenu) {
                submenu.style.display = 'block';
            }
        });

        dropdown.addEventListener('mouseleave', () => {
            const submenu = dropdown.querySelector('.dropdown-content');
            if (submenu) {
                submenu.style.display = 'none';
            }
        });
    });
});