(() => {
  const artwork = document.getElementById('oyomap-artwork');
  const caption = document.getElementById('ow-feature-caption');
  const controls = [...document.querySelectorAll('[data-feature]')];
  if (!artwork || !caption || !controls.length) return;

  function show(feature) {
    const selected = controls.find(control => control.dataset.feature === feature);
    if (!selected) return;
    artwork.classList.toggle('is-journeys', feature === 'journeys');
    for (const image of artwork.querySelectorAll('[data-art]')) {
      image.hidden = image.dataset.art !== feature;
    }
    for (const control of controls) {
      control.setAttribute('aria-pressed', String(control === selected));
    }
    caption.textContent = selected.dataset.caption;
  }

  for (const control of controls) {
    control.disabled = false;
    control.addEventListener('click', () => show(control.dataset.feature));
  }
})();
