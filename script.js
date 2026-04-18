/* ═══════════════════════════════════════════════════════
   REBER BUILDING VIRTUAL TOUR — script.js
   SPA navigation, animated counters, tour modal
═══════════════════════════════════════════════════════ */

/* ── Page Navigation ── */
function navigate(pageId) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  // Show target
  const target = document.getElementById(`page-${pageId}`);
  if (target) target.classList.add('active');

  // Update sidebar active state
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const navBtn = document.querySelector(`.nav-item[data-page="${pageId}"]`);
  if (navBtn) navBtn.classList.add('active');

  // Close mobile sidebar
  document.getElementById('sidebar').classList.remove('open');

  // Scroll main to top
  const main = document.querySelector('.content');
  if (main) main.scrollTop = 0;
  window.scrollTo(0, 0);

  // Run page-specific animations
  if (pageId === 'budget') animateBudget();
}

// Wire up sidebar nav buttons
document.querySelectorAll('.nav-item[data-page]').forEach(btn => {
  btn.addEventListener('click', () => navigate(btn.dataset.page));
});

/* ── Hamburger / Mobile Sidebar ── */
document.getElementById('hamburger')?.addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('open');
});

// Close sidebar when clicking outside on mobile
document.addEventListener('click', (e) => {
  const sidebar = document.getElementById('sidebar');
  const hamburger = document.getElementById('hamburger');
  if (
    window.innerWidth <= 900 &&
    sidebar.classList.contains('open') &&
    !sidebar.contains(e.target) &&
    !hamburger.contains(e.target)
  ) {
    sidebar.classList.remove('open');
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
  setTimeout(() => { tourFrame.src = ''; }, 350);
}

// Close on backdrop click
tourModal.addEventListener('click', (e) => {
  if (e.target === tourModal) closeTourModal();
});

// Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeTourModal();
});

window.openTourModal  = openTourModal;
window.closeTourModal = closeTourModal;
window.navigate       = navigate;

/* ── Dashboard Spending Card: animate bar + counter on load ── */
function animateDashSpending() {
  const bar = document.querySelector('.spending-bar-fill');
  const pctEl = document.getElementById('spendPct');
  if (!bar || !pctEl) return;

  setTimeout(() => {
    bar.style.width = bar.dataset.width || '92%';
  }, 400);

  // Counter 0 → 92
  let count = 0;
  const target = 56;
  const duration = 1200;
  const step = duration / target;
  const timer = setInterval(() => {
    count++;
    pctEl.textContent = count + '%';
    if (count >= target) clearInterval(timer);
  }, step);
}

/* ── Budget Page Animations ── */
function animateBudget() {
  // Hero bar
  const heroBar = document.querySelector('.budget-hero-bar-fill');
  if (heroBar) {
    setTimeout(() => { heroBar.style.width = heroBar.dataset.width || '92%'; }, 100);
  }

  // Breakdown bars
  document.querySelectorAll('.bi-bar').forEach((bar, i) => {
    setTimeout(() => {
      bar.style.width = bar.dataset.width || '0%';
    }, 200 + i * 150);
  });
}

/* ── Run on page load ── */
window.addEventListener('load', () => {
  animateDashSpending();

  // Animate dashboard spending card bar on load
  const dashBar = document.querySelector('.spending-bar-fill');
  if (dashBar) {
    setTimeout(() => { dashBar.style.width = '92%'; }, 500);
  }
});
