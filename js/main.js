/**
 * Muchukota Shria Portfolio - Lightweight Interactions
 * - Mobile image tap fullscreen lightbox
 * - Accessible keyboard & tap dismiss
 */
document.addEventListener('DOMContentLoaded', () => {
  // Mobile tap image viewer
  const isMobile = () => window.matchMedia('(max-width: 899px)').matches || ('ontouchstart' in window);
  
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.setAttribute('role', 'dialog');
  lightbox.setAttribute('aria-modal', 'true');
  lightbox.setAttribute('aria-label', 'Fullscreen image preview');
  lightbox.innerHTML = `
    <button class="lightbox-close" aria-label="Close fullscreen preview">&times;</button>
    <img src="" alt="Fullscreen image display">
  `;
  document.body.appendChild(lightbox);

  const lightboxImg = lightbox.querySelector('img');
  const closeBtn = lightbox.querySelector('.lightbox-close');

  function openLightbox(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt || 'Fullscreen preview';
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    lightboxImg.src = '';
    document.body.style.overflow = '';
  }

  // Bind to artboard images
  document.querySelectorAll('.artboard img').forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', (e) => {
      if (isMobile()) {
        e.preventDefault();
        openLightbox(img.currentSrc || img.src, img.alt);
      }
    });
  });

  lightbox.addEventListener('click', closeLightbox);
  closeBtn.addEventListener('click', closeLightbox);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });
});
