(() => {
  const contact = document.querySelector('.ow-contact');
  if (!contact) return;
  const button = contact.querySelector('[data-copy-email]');
  const address = contact.querySelector('.ow-email-address');
  const status = contact.querySelector('.ow-copy-status');
  if (!button || !address || !status || !navigator.clipboard?.writeText) return;

  button.hidden = false;
  button.addEventListener('click', async () => {
    button.disabled = true;
    status.textContent = '';
    try {
      await navigator.clipboard.writeText(address.textContent.trim());
      status.textContent = button.dataset.copied;
    } catch {
      status.textContent = button.dataset.copyFailed;
    } finally {
      button.disabled = false;
    }
  });
})();
