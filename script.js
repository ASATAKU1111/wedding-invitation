document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const mapContainer = document.getElementById('map-container');

    // Automatically trigger the opening sequence after 1.5 seconds
    setTimeout(() => {
        // Fade out loader
        loader.style.opacity = '0';
        loader.style.transition = 'opacity 1.5s ease';

        setTimeout(() => {
            loader.classList.add('hidden');
            mapContainer.classList.remove('hidden');

            // Trigger animation
            setTimeout(() => {
                mapContainer.classList.add('active');
            }, 100);
        }, 1500);
    }, 1000);
});
