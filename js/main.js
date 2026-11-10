/**
 * Muchukota Shria — Work in Progress
 * Interactive details: one-click email copy with feedback
 */
document.addEventListener('DOMContentLoaded', () => {
  const copyBtn = document.getElementById('copyBtn');
  const emailToCopy = 'wabi.sabi.gmail@gmail.com';

  if (copyBtn) {
    const feedback = copyBtn.querySelector('.copy-feedback');

    copyBtn.addEventListener('click', async (e) => {
      e.preventDefault();
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(emailToCopy);
        } else {
          // Fallback for older browsers
          const textarea = document.createElement('textarea');
          textarea.value = emailToCopy;
          textarea.style.position = 'fixed';
          textarea.style.opacity = '0';
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand('copy');
          document.body.removeChild(textarea);
        }

        if (feedback) {
          feedback.classList.add('active');
          setTimeout(() => {
            feedback.classList.remove('active');
          }, 2000);
        }
      } catch (err) {
        console.error('Failed to copy email:', err);
      }
    });
  }
});
