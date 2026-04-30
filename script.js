/* ═══════════════════════════════════════════════════════
   DYNAMIC DISPLAYS FOR ME — script.js
   SPA navigation, animated bars, tour modal
═══════════════════════════════════════════════════════ */

/* ── Page Navigation ── */
function navigate(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + pageId);
  if (target) target.classList.add('active');

  document.querySelectorAll('.psu-nav button[data-page]').forEach(b => {
    b.classList.toggle('active', b.dataset.page === pageId);
  });

  const nav = document.getElementById('psuNav');
  if (nav) nav.classList.remove('open');

  window.scrollTo({ top: 0, behavior: 'smooth' });
  setTimeout(animateBars, 250);
}

document.querySelectorAll('.psu-nav button[data-page]').forEach(btn => {
  btn.addEventListener('click', () => navigate(btn.dataset.page));
});

/* ── Mobile Nav Toggle ── */
document.getElementById('navToggle')?.addEventListener('click', (e) => {
  e.stopPropagation();
  document.getElementById('psuNav').classList.toggle('open');
});

document.addEventListener('click', (e) => {
  const nav = document.getElementById('psuNav');
  const toggle = document.getElementById('navToggle');
  if (
    window.innerWidth <= 700 &&
    nav?.classList.contains('open') &&
    !nav.contains(e.target) &&
    !toggle?.contains(e.target)
  ) {
    nav.classList.remove('open');
  }
});

/* ── Tour Modal ── */
const tourModal = document.getElementById('tourModal');
const tourFrame = document.getElementById('tourFrame');

function openTourModal(scene) {
  const src = scene ? `tour.html?scene=${encodeURIComponent(scene)}` : 'tour.html';
  tourFrame.src = src;
  tourModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeTourModal() {
  tourModal.classList.remove('active');
  document.body.style.overflow = '';
  setTimeout(() => { tourFrame.src = ''; }, 300);
}

tourModal?.addEventListener('click', (e) => {
  if (e.target === tourModal) closeTourModal();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && tourModal?.classList.contains('active')) closeTourModal();
});

window.openTourModal = openTourModal;
window.closeTourModal = closeTourModal;
window.navigate = navigate;

/* ── Animate progress bars ── */
function animateBars() {
  document.querySelectorAll('[data-fill]').forEach(el => {
    const w = el.dataset.fill;
    el.style.width = '0';
    requestAnimationFrame(() => requestAnimationFrame(() => {
      el.style.width = w;
    }));
  });
}

window.addEventListener('load', () => {
  setTimeout(animateBars, 200);
});
