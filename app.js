// ===== データ =====
const flowData = [
  {
    id: 1, shortTitle: "資金調達", title: "資金調達モデルの構築",
    point: "難民本人が渡航時に支払う負担を最小限に抑えながら、持続的にプログラムを運営できる資金調達モデルを検討",
    keywords: ["負担を最小限に抑え", "持続的にプログラムを運営", "資金調達モデル"],
    checklist: [
      "難民本人が前払いできない初期費用（渡航費やビザ代等）をカバーする仕組みが構築されているか？",
      "多様な資金源（大学、財団、民間等）に基づく分散型の資金モデルになっているか？"
    ],
    stakeholders: { hub: ["資金提供者", "中間組織"], host: ["受入機関"], origin: ["現地パートナー"] },
    actions: [
      { role: "ハブ", text: "財団等から初期運営費や渡航費ローンを調達", project: "各種", country: "グローバル", source: "Fratzke - Refugee Resettlement and Complementary Pathways", url: "https://www.migrationpolicy.org/research/refugee-resettlement-complementary-pathways" },
      { role: "ハブ", text: "就労成功時に投資家にリターンを支払う成果報酬型モデル（SIB）を活用", project: "KOTO SIB", country: "フィンランド", source: "Davitti & Vankova (2025) - From Funding to Financing", url: "https://doi.org/10.1080/15562948.2024.2385980" },
      { role: "受入側", text: "大学の授業料免除や学生の少額課徴金等で費用をカバー", project: "WUSC", country: "カナダ", source: "Fratzke - Refugee Resettlement and Complementary Pathways", url: "https://www.migrationpolicy.org/research/refugee-resettlement-complementary-pathways" },
      { role: "送出し側", text: "パスポート取得等の少額の初期費用を現地で支援", project: "RefugePoint等", country: "ケニア", source: "TBB+Global+Evaluation+2020+Final+(External).pdf", url: "https://www.talentbeyondboundaries.org/s/TBB-Global-Evaluation-2020-Final-External.pdf" }
    ]
  },
  {
    id: 2, shortTitle: "受入先開拓", title: "受入れ先の開拓",
    point: "受入主体となる企業や学校にアプローチし、受入れにあたり生じるコストや求められる支援、期待される効果について十分な説明を行う",
    keywords: ["企業や学校にアプローチ", "生じるコストや求められる支援", "期待される効果について十分な説明"],
    checklist: [
      "受入機関に対して、受入れにかかるコストと求める支援の責任範囲を事前に明確に提示しているか？",
      "自治体、商工会議所、大学コンソーシアムなど、多様なアクターを巻き込んで受入枠を開拓しているか？"
    ],
    stakeholders: { hub: ["中間組織"], host: ["就業支援事業者", "受入機関"], origin: [] },
    actions: [
      { role: "ハブ・受入側", text: "企業に人材の売り込み（ピッチ）を実施し、求人枠を獲得", project: "Displaced Talent Mobility Pilot", country: "イギリス", source: "Dorst - Engaging Employers in Growing Refugee Labor Pathways", url: "https://www.migrationpolicy.org/research/employers-refugee-labor-pathways" },
      { role: "ハブ・受入側", text: "業界団体等を巻き込み、複数の雇用主に一括アプローチ", project: "Healthcare Pilot (NHS)", country: "イギリス", source: "Dorst - Engaging Employers in Growing Refugee Labor Pathways", url: "https://www.migrationpolicy.org/research/employers-refugee-labor-pathways" }
    ]
  },
  {
    id: 3, shortTitle: "候補者募集", title: "候補者の募集・選抜",
    point: "受入側の具体的なニーズに基づき、現地パートナーと連携して候補者を募集し、公正なスキル評価や事前の期待値調整を行う",
    keywords: ["具体的なニーズに基づき", "公正なスキル評価", "事前の期待値調整"],
    checklist: [
      "信頼のある現地NGOや難民主導組織と連携し、候補者を発掘する関係性を構築しているか？",
      "正確な情報を周知し、候補者に誤った期待を持たせないための事前調整（期待値調整）を行っているか？"
    ],
    stakeholders: { hub: ["中間組織"], host: ["受入機関"], origin: ["現地パートナー"] },
    actions: [
      { role: "ハブ", text: "人材DBを活用し、ニーズとスキルをマッチング", project: "TBB", country: "カナダ・豪州", source: "Higgins et al. (2023) - Refugees as Skilled Migrants", url: "https://doi.org/10.1007/s11205-023-03130-9" },
      { role: "送出し側", text: "現地NGO等がスクリーニングや履歴書作成を支援し、コミュニティへ情報周知と期待値調整を行う", project: "RefugePoint等", country: "ケニア", source: "TBB+Global+Evaluation+2020+Final+(External).pdf", url: "https://www.talentbeyondboundaries.org/s/TBB-Global-Evaluation-2020-Final-External.pdf" },
      { role: "受入側", text: "企業や学校が書類選考やオンライン面接で採用・入学を決定", project: "EMPP", country: "カナダ", source: "Dorst - Engaging Employers in Growing Refugee Labor Pathways", url: "https://www.migrationpolicy.org/research/employers-refugee-labor-pathways" }
    ]
  },
  {
    id: 4, shortTitle: "入国前教育", title: "入国前教育の実施",
    point: "語学・職業教育やオリエンテーションを提供し、スキル面での準備を行う",
    keywords: ["語学・職業教育やオリエンテーション", "スキル面での準備"],
    checklist: [
      "受入国で求められる言語要件や実務スキルに直結した事前研修を提供しているか？",
      "受入国での生活インフラや職場文化に関する、実務的なオリエンテーションが含まれているか？"
    ],
    stakeholders: { hub: [], host: [], origin: ["現地パートナー"] },
    actions: [
      { role: "送出し側", text: "渡航前の第一庇護国で、現地の機関が語学・文化オリエンテーションや実務的な職業訓練を直接提供", project: "IOM等 / Triple Win等", country: "世界各地", source: "Fratzke - Refugee Resettlement and Complementary Pathways", url: "https://www.migrationpolicy.org/research/refugee-resettlement-complementary-pathways" }
    ]
  },
  {
    id: 5, shortTitle: "入国手続き", title: "入国に向けた手続き",
    point: "安全かつスムーズに滞在国から出国できるよう、関係機関との調整やビザ取得のサポートを行う",
    keywords: ["安全かつスムーズに滞在国から出国", "関係機関との調整", "ビザ取得のサポート"],
    checklist: [
      "第一庇護国から合法的に出国するための調整を現地政府・国際機関等と交渉・合意できているか？",
      "パスポート等の代替文書の許容やビザ要件の緩和について、受入国政府と交渉・合意できているか？"
    ],
    stakeholders: { hub: ["中間組織"], host: ["受入国政府"], origin: ["国連・政府機関"] },
    actions: [
      { role: "ハブ", text: "代替書類の交渉やビザ申請の進行を実務的に管理", project: "Displaced Talent Mobility Pilot", country: "イギリス", source: "Zanzuchi - Building Refugee-Inclusive Labour Mobility Pathways", url: "https://www.migrationpolicy.org/research/refugee-labor-mobility" },
      { role: "受入側", text: "ビザ要件を緩和し、迅速かつ優先的に審査・発給", project: "EMPP", country: "カナダ", source: "Dorst - Engaging Employers in Growing Refugee Labor Pathways", url: "https://www.migrationpolicy.org/research/employers-refugee-labor-pathways" }
    ]
  },
  {
    id: 6, shortTitle: "受入体制整備", title: "地域の受入れ体制の構築",
    point: "支援団体や地域コミュニティのネットワークを形成し、難民が円滑に地域に統合できる環境を整備",
    keywords: ["地域コミュニティのネットワークを形成", "円滑に地域に統合できる環境"],
    checklist: [
      "当事者コミュニティや市民グループを含めた、社会全体（Whole-of-Society）での受入体制を構築できているか？",
      "受入機関と地域の支援団体等の間で、役割分担が明確になっているか？"
    ],
    stakeholders: { hub: [], host: ["伴走支援団体", "自治体"], origin: [] },
    actions: [
      { role: "受入側", text: "地域のボランティアネットワークが、新しく到着した医療従事者（難民）を地域社会に受け入れ、定住に向けた生活の立ち上げを支援", project: "Healthcare Pilot", country: "イギリス", source: "Dorst - Engaging Employers in Growing Refugee Labor Pathways", url: "https://www.migrationpolicy.org/research/employers-refugee-labor-pathways" },
      { role: "受入側", text: "大学内の学生グループがスポンサーとなり生活を支援", project: "WUSC", country: "カナダ", source: "Mude & Baker - Possibilities of Educational Pathways", url: "https://www.vitalsource.com/products/possibilities-of-educational-pathways-to-refugee-william-mude-sally-baker-v9781916985292" }
    ]
  },
  {
    id: 7, shortTitle: "定住支援", title: "定住支援",
    point: "難民特有の事情を考慮し、トラウマに配慮したケアや、在留資格等に関する法的支援・定住支援を行う",
    keywords: ["難民特有の事情を考慮", "トラウマに配慮したケア", "法的支援・定住支援"],
    checklist: [
      "在留資格やメンタルケアに関して、専門家による相談体制が構築されているか？",
      "入国直後から住居の確保や生活環境の整備をサポートする体制が構築されているか？"
    ],
    stakeholders: { hub: [], host: ["伴走支援団体", "自治体"], origin: [] },
    actions: [
      { role: "受入側", text: "地域のNGOや支援団体が、語学学習やトラウマケア、職場・学校への統合支援を継続的に実施", project: "Pathways Japan等", country: "日本", source: "Husseini (2025) - International Education as Complementary Pathways", url: "https://doi.org/10.1080/15562948.2025.2573941" },
      { role: "受入側", text: "企業が定住支援機関に費用を支払い、専門的な伴走支援を委託", project: "Skilled Refugee Labour", country: "豪州", source: "Dorst - Engaging Employers in Growing Refugee Labor Pathways", url: "https://www.migrationpolicy.org/research/employers-refugee-labor-pathways" }
    ]
  },
  {
    id: 8, shortTitle: "進路支援", title: "進路支援",
    point: "定住・永住を見据えた長期的なキャリアパスが構築できるよう、就労支援・進学支援を行う",
    keywords: ["定住・永住を見据えた", "長期的なキャリアパスが構築", "就労支援・進学支援"],
    checklist: [
      "長期的なキャリア形成に向けた語学・職業能力の向上のための仕組みがあるか？",
      "就職活動を伴走支援する体制が構築されているか？"
    ],
    stakeholders: { hub: [], host: ["受入機関", "就業支援事業者"], origin: [] },
    actions: [
      { role: "受入側", text: "企業や大学、就業支援事業者が、本人の免許取得や卒業後のキャリア形成を長期的に支援", project: "Leadership for Syria等", country: "ドイツ", source: "Fratzke - Refugee Resettlement and Complementary Pathways", url: "https://www.migrationpolicy.org/research/refugee-resettlement-complementary-pathways" },
      { role: "受入側", text: "就労や進学を通じて、定住・永住へのルートに乗るためのサポートを行う", project: "EMPP等", country: "カナダ", source: "Heather - The Economic Mobility Pathways Project", url: "https://www.unhcr.ca/wp-content/uploads/2019/07/The-Economic-Mobility-Pathways-Project-Policy-Principles-and-Lessons-Learned-June-2019.pdf" }
    ]
  }
];

// ===== ユーティリティ =====
function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function highlightText(text, keywords) {
  let result = escapeHtml(text);
  keywords.forEach(kw => {
    const escaped = escapeHtml(kw);
    result = result.replace(escaped, `<strong>${escaped}</strong>`);
  });
  return result;
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
            <p class="leverage-text">${highlightText(s.point, s.keywords)}</p>
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
