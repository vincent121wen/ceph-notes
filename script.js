// 共用的側邊欄高亮 + checklist localStorage 邏輯

document.addEventListener('DOMContentLoaded', () => {
  // 側邊欄當前頁面高亮
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.sidebar nav a').forEach(a => {
    const href = a.getAttribute('href').split('/').pop();
    if (href === current) a.classList.add('active');
  });

  // Checklist：每個 checkbox 用 data-key 當 localStorage 的 key
  const checkboxes = document.querySelectorAll('.week-block input[type="checkbox"]');
  checkboxes.forEach(cb => {
    const key = cb.dataset.key;
    if (!key) return;

    // 還原狀態
    const saved = localStorage.getItem(key);
    if (saved === 'true') {
      cb.checked = true;
      cb.closest('label').classList.add('done');
    }

    cb.addEventListener('change', () => {
      localStorage.setItem(key, cb.checked);
      cb.closest('label').classList.toggle('done', cb.checked);
      updateProgress();
    });
  });

  updateProgress();
});

function updateProgress() {
  const doneEl = document.getElementById('progress-done');
  const totalEl = document.getElementById('progress-total');
  const pctEl = document.getElementById('progress-pct');
  if (!doneEl) return; // 此頁面沒有進度摘要

  const checkboxes = document.querySelectorAll('.week-block input[type="checkbox"]');
  const total = checkboxes.length;
  const done = Array.from(checkboxes).filter(cb => cb.checked).length;

  doneEl.textContent = done;
  totalEl.textContent = total;
  pctEl.textContent = total ? Math.round((done / total) * 100) + '%' : '0%';
}
