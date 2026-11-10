/**
 * Muchukota Shria Portfolio - Image Lightbox & Interactions
 * - Opens fullscreen high-res image preview on click (desktop & mobile)
 * - Accessible keyboard (Escape) & click-outside dismissal
 */
document.addEventListener('DOMContentLoaded', () => {
  // Create lightbox overlay
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.setAttribute('role', 'dialog');
  lightbox.setAttribute('aria-modal', 'true');
  lightbox.setAttribute('aria-label', 'Fullscreen image preview');
  lightbox.innerHTML = `
    <button class="lightbox-close" aria-label="Close fullscreen preview">&times;</button>
    <div class="lightbox-content">
      <img src="" alt="Fullscreen image display">
      <p class="lightbox-caption"></p>
    </div>
  `;
  document.body.appendChild(lightbox);

  const lightboxImg = lightbox.querySelector('img');
  const lightboxCaption = lightbox.querySelector('.lightbox-caption');
  const closeBtn = lightbox.querySelector('.lightbox-close');

  function openLightbox(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt || 'Fullscreen preview';
    lightboxCaption.textContent = alt || '';
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    lightboxImg.src = '';
    lightboxCaption.textContent = '';
    document.body.style.overflow = '';
  }

  // Bind click listener to all artboard images (desktop + mobile)
  document.querySelectorAll('.artboard img').forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', (e) => {
      e.preventDefault();
      // Use full resolution source
      openLightbox(img.currentSrc || img.src, img.alt);
    });
  });

  // Close handlers
  lightbox.addEventListener('click', (e) => {
    // Close if clicking outside the image or on close button
    if (e.target === lightbox || e.target === closeBtn || e.target.classList.contains('lightbox-content')) {
      closeLightbox();
    }
  });

  closeBtn.addEventListener('click', closeLightbox);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });
});
