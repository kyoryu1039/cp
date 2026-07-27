// ===== データ =====
// 以前はここに flowData という配列を直接書いていたが、それだと中身が
// 「JSの中に埋まったデータ」になってしまい、HTMLエディタ等で編集できなかった。
// 今は index.html の #step-source に本物のHTMLとして書かれているので、
// ここではそれを読み取って同じ形のデータに変換するだけにしている。
// レンダリング関数(renderNav/renderContent等)は元のまま変えていない。
function parseStepsFromDOM() {
  const sections = document.querySelectorAll('#step-source .step');
  return Array.from(sections).map(section => {
    const text = sel => (section.querySelector(sel)?.textContent || '').trim();
    const listTexts = sel => Array.from(section.querySelectorAll(sel)).map(el => el.textContent.trim());
    return {
      id: parseInt(section.dataset.stepId, 10),
      shortTitle: text('.step-shorttitle'),
      title: text('.step-title'),
      pointHtml: section.querySelector('.step-point').innerHTML,
      checklist: listTexts('.step-checklist > li'),
      stakeholders: {
        hub: listTexts('.stakeholder-hub > li'),
        host: listTexts('.stakeholder-host > li'),
        origin: listTexts('.stakeholder-origin > li'),
      },
      actions: Array.from(section.querySelectorAll('.action-item')).map(li => ({
        role: li.querySelector('.action-role').textContent.trim(),
        project: li.querySelector('.action-project').textContent.trim(),
        country: li.querySelector('.action-country').textContent.trim(),
        text: li.querySelector('.action-text').textContent.trim(),
        source: li.querySelector('.action-source').textContent.trim(),
        url: li.querySelector('.action-source').getAttribute('href'),
      })),
    };
  });
}

const flowData = parseStepsFromDOM();

// ===== ユーティリティ =====
function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// ===== 状態管理 =====
let activeStepId = 1;

function setActiveStep(id) {
  activeStepId = id;
  renderNav();
  renderContent();
  lucide.createIcons();
}

// ===== レンダリング =====
function renderNav() {
  const grid = document.getElementById('nav-grid');
  grid.innerHTML = flowData.map(step => {
    const cls = step.id === activeStepId ? 'nav-btn active' : 'nav-btn';
    return `<button class="${cls}" onclick="setActiveStep(${step.id})">${step.id}. ${escapeHtml(step.shortTitle)}</button>`;
  }).join('');
}

function renderStakeholderCol(label, icon, colClass, items) {
  const tags = items.length > 0
    ? items.map(t => `<span class="stakeholder-tag">${escapeHtml(t)}</span>`).join('')
    : '<span class="stakeholder-empty">—</span>';
  return `
    <div class="stakeholder-col ${colClass}">
      <div class="stakeholder-col-label">
        <i data-lucide="${icon}"></i>
        ${escapeHtml(label)}
      </div>
      <div>${tags}</div>
    </div>`;
}

function renderContent() {
  const container = document.getElementById('main-content');
  const s = flowData.find(d => d.id === activeStepId);

  const checklistHtml = s.checklist.map(item => `
    <li class="checklist-item">
      <i data-lucide="check-square"></i>
      <span>${escapeHtml(item)}</span>
    </li>
  `).join('');

  const stakeholdersHtml = `
    <div style="margin-top: 16px; margin-bottom: 8px; font-weight: bold; font-size: 0.95rem; color: #1e293b; display: flex; align-items: center; gap: 6px;">
      <i data-lucide="users" style="width: 18px; height: 18px; color: #3b82f6;"></i>
      主要なステークホルダー
    </div>
    <div class="stakeholders-section">
      ${renderStakeholderCol('ハブ', 'network', 'col-hub', s.stakeholders.hub)}
      ${renderStakeholderCol('受入側', 'building', 'col-host', s.stakeholders.host)}
      ${renderStakeholderCol('送出し側', 'globe', 'col-origin', s.stakeholders.origin)}
    </div>`;

  const actionsHtml = s.actions.map(a => `
    <a class="action-card" href="${escapeHtml(a.url)}" target="_blank" rel="noopener noreferrer">
      <div class="action-card-inner">
        <div>
          <div class="action-tags">
            <span class="role-badge">${escapeHtml(a.role)}</span>
            <span class="project-label">${escapeHtml(a.country)} | ${escapeHtml(a.project)}</span>
          </div>
          <p class="action-text">${escapeHtml(a.text)}</p>
        </div>
        <div class="action-footer">
          <div class="source-info">
            <i data-lucide="file-text"></i>
            <span class="source-text">資料: ${escapeHtml(a.source)}</span>
          </div>
          <span class="ext-icon"><i data-lucide="external-link"></i></span>
        </div>
      </div>
    </a>
  `).join('');

  container.innerHTML = `
    <div class="title-card">
      <h1>${s.id}. ${escapeHtml(s.title)}</h1>
    </div>

    <div class="leverage-box">
      <div style="display:flex;flex-direction:column;gap:10px;">
        <div class="leverage-header">
          <i data-lucide="target"></i>
          <div>
            <div class="leverage-label">レバレッジポイント</div>
            <p class="leverage-text">${s.pointHtml}</p>
          </div>
        </div>
        <div class="checklist-box">
          <ul style="list-style:none;">${checklistHtml}</ul>
        </div>
      </div>
    </div>

    ${stakeholdersHtml}

    <div style="margin-top: 16px; margin-bottom: 8px; font-weight: bold; font-size: 0.95rem; color: #1e293b; display: flex; align-items: center; gap: 6px;">
      <i data-lucide="activity" style="width: 18px; height: 18px; color: #10b981;"></i>
      参考事例・アクション
    </div>
    <div class="actions-grid">${actionsHtml}</div>
  `;
}

// ===== 初期化 =====
document.addEventListener('DOMContentLoaded', () => {
  renderNav();
  renderContent();
  lucide.createIcons();
});
