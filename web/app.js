const STORAGE_KEY = "meaning-path-mvp-state";

const paths = [
  { title: "意义之路", summary: "把生活重新接回价值、方向、贡献与一致。", status: "当前开放" },
  { title: "正念之路", summary: "回到当下，练习觉察情绪、身体与念头。", status: "即将开放" },
  { title: "运动之路", summary: "用身体活动支撑精力、情绪与韧性。", status: "即将开放" },
  { title: "疗愈之路", summary: "在消耗之后修复自己，重新变得完整。", status: "即将开放" },
  { title: "失败之路", summary: "把挫折转化为学习，而不是身份否定。", status: "即将开放" },
  { title: "自愈之路", summary: "用更友善的方式陪自己走过低谷。", status: "即将开放" },
  { title: "关系之路", summary: "建立真实、支持、可靠的生命连接。", status: "即将开放" },
  { title: "自醒之路", summary: "持续看见自己的模式、价值、需要与盲点。", status: "即将开放" },
  { title: "接纳之路", summary: "允许现实先成为现实，才有力量选择下一步。", status: "即将开放" },
  { title: "感恩之路", summary: "训练自己看见已存在的支持、善意与资源。", status: "即将开放" },
];

const valueLibrary = [
  "爱",
  "成长",
  "真实",
  "自由",
  "贡献",
  "创造",
  "稳定",
  "勇气",
  "美",
  "信任",
  "健康",
  "家庭",
  "学习",
  "敬畏",
  "善良",
  "影响力",
  "宁静",
  "责任",
  "连接",
  "觉察",
  "诚实",
  "尊重",
  "理解",
  "同理心",
  "陪伴",
  "忠诚",
  "友谊",
  "亲密",
  "合作",
  "服务",
  "利他",
  "慷慨",
  "包容",
  "接纳",
  "耐心",
  "温柔",
  "自律",
  "坚持",
  "卓越",
  "专注",
  "行动力",
  "效率",
  "秩序",
  "简洁",
  "独立",
  "自主",
  "冒险",
  "探索",
  "好奇",
  "智慧",
  "洞察",
  "清明",
  "信念",
  "希望",
  "热情",
  "喜悦",
  "幽默",
  "感恩",
  "谦逊",
  "公正",
  "正义",
  "平等",
  "安全感",
  "归属感",
  "成就",
  "专业",
  "声誉",
  "富足",
  "丰盛",
  "节制",
  "韧性",
  "复原力",
  "边界感",
  "表达",
  "审美",
  "灵性",
  "使命",
  "意义",
  "影响",
  "乐趣",
  "玩心",
];

const dayPlans = [
  ["第 1 周：看见意义", "写下你最重视的 10 个价值词", "先不判断对错，只写下真正会触动你的词。下面已经放了完整的价值词参考库，你可以直接点击加入，再慢慢筛出最重要的 10 个。"],
  ["第 1 周：看见意义", "缩减为 5 个核心价值", "从昨天的 10 个词里，留下最不想丢掉的 5 个。今天的重点是做选择，而不是追求标准答案。"],
  ["第 1 周：看见意义", "写下过去一年最有意义的 3 个时刻", "回想那些辛苦但值得、微小但真实的瞬间。意义常常藏在你愿意反复回看的时刻里。"],
  ["第 1 周：看见意义", "写下过去一年最空心的 3 个时刻", "不用批评自己，只观察哪些事情让你忙却不踏实。它们会提醒你正在偏离什么。"],
  ["第 1 周：看见意义", "观察你每天时间花在什么地方", "今天记录几个主要时间块，看看时间是否真的流向了你重视的人和事。"],
  ["第 1 周：看见意义", "找出一个最偏离价值的习惯", "选择一个最明显的耗散习惯，先看见它，不急着彻底改变。"],
  ["第 1 周：看见意义", "做一次 30 分钟 Time-in", "给自己一段安静时间，复盘这一周最有生命力和最空耗的时刻。"],
  ["第 2 周：把意义落到行动", "选一个你最想活出的价值", "从 5 个核心价值里，选择这周最想靠近的一个。让它成为今天行动的主线。"],
  ["第 2 周：把意义落到行动", "围绕这个价值，做一个最小行动", "行动越小越好，小到今天真的可以完成。意义感从可执行处开始生长。"],
  ["第 2 周：把意义落到行动", "把一个日常任务连接到“它服务谁”", "选择一个普通任务，重新理解它最终在服务谁、创造什么价值。"],
  ["第 2 周：把意义落到行动", "拒绝一件不符合价值的事", "温和但清楚地减少一个偏离自己的安排。拒绝有时也是保护意义。"],
  ["第 2 周：把意义落到行动", "主动做一件有贡献感的小事", "不求很大，只要它确实让某个人、某段关系或某件事变好一点。"],
  ["第 2 周：把意义落到行动", "记录今天最有意义的小事", "把注意力放在真实的小事上。越具体，越容易被自己记住。"],
  ["第 2 周：把意义落到行动", "复盘哪些行动最让你感到踏实", "看看这一周有哪些行动让你不一定兴奋，但很踏实、很对齐。"],
  ["第 3 周：让意义成为生活节律", "设计你的晨间意义锚点", "写一句适合早晨看的提醒，比如：今天我想带着真实和耐心生活。"],
  ["第 3 周：让意义成为生活节律", "设计你的晚间意义回顾", "睡前固定问一句：今天我为重要之事做了什么？"],
  ["第 3 周：让意义成为生活节律", "梳理一个你最想投入的长期方向", "这个方向可以很朴素。重点是它和你的价值有关，而不是看起来厉害。"],
  ["第 3 周：让意义成为生活节律", "写下你想减少的 3 种无意义耗散", "可能是无效比较、过度刷屏、讨好式答应、报复性熬夜。先写下来。"],
  ["第 3 周：让意义成为生活节律", "和一个重要的人聊一次真正想过的生活", "找一个安全的人，说说你最近真正想靠近的生活状态。"],
  ["第 3 周：让意义成为生活节律", "写一封给 1 年后自己的短信", "不用很长，只写你希望未来的自己记得什么、守住什么。"],
  ["第 3 周：让意义成为生活节律", "写下你的意义福祉宣言", "把这 21 天的发现收束成几句话。它不需要完美，只需要真实。"],
];

const defaultState = {
  selectedDay: 1,
  participant: {
    nickname: "",
    name: "",
  },
  entries: {},
  declaration: {
    coreValues: "",
    personIWantToBe: "",
    serviceDirection: "",
    keepDoing: "",
    reduceDoing: "",
  },
};

let state = loadState();

const elements = {
  pathGrid: document.querySelector("#pathGrid"),
  participantFields: {
    nickname: document.querySelector("#nicknameInput"),
    name: document.querySelector("#nameInput"),
  },
  exportData: document.querySelector("#exportData"),
  exportStatus: document.querySelector("#exportStatus"),
  dayButtons: document.querySelector("#dayButtons"),
  dayBadge: document.querySelector("#dayBadge"),
  weekBadge: document.querySelector("#weekBadge"),
  dayTitle: document.querySelector("#dayTitle"),
  dayPrompt: document.querySelector("#dayPrompt"),
  valueLibrarySection: document.querySelector("#valueLibrarySection"),
  valueChipList: document.querySelector("#valueChipList"),
  valueInput: document.querySelector("#valueInput"),
  momentInput: document.querySelector("#momentInput"),
  directionInput: document.querySelector("#directionInput"),
  completeDay: document.querySelector("#completeDay"),
  clearDay: document.querySelector("#clearDay"),
  nextOpenDay: document.querySelector("#nextOpenDay"),
  progressCount: document.querySelector("#progressCount"),
  progressBar: document.querySelector("#progressBar"),
  progressNote: document.querySelector("#progressNote"),
  journalList: document.querySelector("#journalList"),
  declarationFields: {
    coreValues: document.querySelector("#coreValues"),
    personIWantToBe: document.querySelector("#personIWantToBe"),
    serviceDirection: document.querySelector("#serviceDirection"),
    keepDoing: document.querySelector("#keepDoing"),
    reduceDoing: document.querySelector("#reduceDoing"),
  },
  previewTitle: document.querySelector("#previewTitle"),
  previewBody: document.querySelector("#previewBody"),
};

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return saved ? { ...defaultState, ...saved } : structuredClone(defaultState);
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function renderParticipant() {
  Object.entries(elements.participantFields).forEach(([key, field]) => {
    field.value = state.participant[key] || "";
  });
  updateExportStatus();
}

function renderPaths() {
  elements.pathGrid.innerHTML = paths
    .map((path, index) => {
      const current = index === 0 ? " current" : "";
      const href = index === 0 ? "#meaning" : "#home";
      return `
        <a class="path-card${current}" href="${href}">
          <span class="path-number">${String(index + 1).padStart(2, "0")}</span>
          <h3>${path.title}</h3>
          <p>${path.summary}</p>
          <span class="path-status">${path.status}</span>
        </a>
      `;
    })
    .join("");
}

function renderDayButtons() {
  elements.dayButtons.innerHTML = dayPlans
    .map((_, index) => {
      const day = index + 1;
      const entry = state.entries[day] || {};
      const active = state.selectedDay === day ? " active" : "";
      const done = entry.completed ? " done" : "";
      return `<button class="day-button${active}${done}" type="button" data-day="${day}">${day}</button>`;
    })
    .join("");

  document.querySelectorAll(".day-button").forEach((button) => {
    button.addEventListener("click", () => {
      persistCurrentEntry();
      state.selectedDay = Number(button.dataset.day);
      saveState();
      renderPractice();
    });
  });
}

function renderPractice() {
  const day = state.selectedDay;
  const [week, title, prompt] = dayPlans[day - 1];
  const entry = state.entries[day] || {};

  elements.dayBadge.textContent = `Day ${day}`;
  elements.weekBadge.textContent = week;
  elements.dayTitle.textContent = title;
  elements.dayPrompt.textContent = prompt;
  elements.valueInput.value = entry.value || "";
  elements.momentInput.value = entry.meaningfulMoment || "";
  elements.directionInput.value = entry.nextDirection || "";

  renderValueLibrary();
  renderDayButtons();
  renderProgress();
  renderJournal();
}

function renderValueLibrary() {
  const shouldShow = state.selectedDay === 1 || state.selectedDay === 2;
  elements.valueLibrarySection.hidden = !shouldShow;

  if (!shouldShow) {
    return;
  }

  const selectedValues = splitValues(elements.valueInput.value);
  elements.valueChipList.innerHTML = valueLibrary
    .map((value) => {
      const selected = selectedValues.includes(value) ? " selected" : "";
      return `<button class="value-chip${selected}" type="button" data-value="${value}">${value}</button>`;
    })
    .join("");

  document.querySelectorAll(".value-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      addValueToInput(chip.dataset.value);
    });
  });
}

function persistCurrentEntry() {
  const day = state.selectedDay;
  const previous = state.entries[day] || {};
  state.entries[day] = {
    ...previous,
    value: elements.valueInput.value.trim(),
    meaningfulMoment: elements.momentInput.value.trim(),
    nextDirection: elements.directionInput.value.trim(),
    updatedAt: new Date().toISOString(),
  };
  saveState();
}

function completeCurrentDay() {
  persistCurrentEntry();
  const day = state.selectedDay;
  state.entries[day].completed = true;
  state.entries[day].completedAt = new Date().toISOString();
  if (day < 21) {
    state.selectedDay = day + 1;
  }
  saveState();
  renderPractice();
}

function splitValues(text) {
  return text
    .split(/[、,，\n]+/)
    .map((value) => value.trim())
    .filter(Boolean);
}

function addValueToInput(value) {
  const values = splitValues(elements.valueInput.value);
  if (!values.includes(value)) {
    values.push(value);
  }
  elements.valueInput.value = values.join("、");
  persistCurrentEntry();
  renderValueLibrary();
}

function clearCurrentDay() {
  delete state.entries[state.selectedDay];
  saveState();
  renderPractice();
}

function completedDays() {
  return Object.values(state.entries).filter((entry) => entry.completed).length;
}

function renderProgress() {
  const count = completedDays();
  const nextDay = firstOpenDay();
  const nickname = state.participant.nickname || state.participant.name;
  elements.progressCount.textContent = `${count} / 21`;
  elements.progressBar.style.width = `${(count / 21) * 100}%`;
  elements.progressNote.textContent =
    count === 21
      ? `${nickname ? `${nickname} 已经` : "你已经"}完成 21 天练习，可以去写下自己的意义福祉宣言。`
      : `${nickname ? `${nickname} 的` : ""}下一步可以继续 Day ${nextDay}，让意义感一点点落到生活里。`;
}

function firstOpenDay() {
  const next = dayPlans.findIndex((_, index) => !state.entries[index + 1]?.completed);
  return next === -1 ? 21 : next + 1;
}

function renderJournal() {
  const entries = Object.entries(state.entries)
    .filter(([, entry]) => entry.completed || entry.value || entry.meaningfulMoment || entry.nextDirection)
    .sort(([a], [b]) => Number(a) - Number(b));

  if (!entries.length) {
    elements.journalList.innerHTML = `
      <div class="empty-state">
        还没有日志。完成 Day 1 后，这里会开始出现你的意义记录。
      </div>
    `;
    return;
  }

  elements.journalList.innerHTML = entries
    .map(([day, entry]) => `
      <article class="journal-card">
        <h3>Day ${day}</h3>
        <p><strong>价值：</strong>${entry.value || "暂未填写"}</p>
        <p><strong>小事：</strong>${entry.meaningfulMoment || "暂未填写"}</p>
        <p><strong>方向：</strong>${entry.nextDirection || "暂未填写"}</p>
        <button class="text-button edit-entry" type="button" data-day="${day}">回到这一天</button>
      </article>
    `)
    .join("");

  document.querySelectorAll(".edit-entry").forEach((button) => {
    button.addEventListener("click", () => {
      persistCurrentEntry();
      state.selectedDay = Number(button.dataset.day);
      saveState();
      renderPractice();
      document.querySelector("#practice").scrollIntoView({ behavior: "smooth" });
    });
  });
}

function renderDeclaration() {
  Object.entries(elements.declarationFields).forEach(([key, field]) => {
    field.value = state.declaration[key] || "";
  });
  updateDeclarationPreview();
}

function persistParticipant() {
  Object.entries(elements.participantFields).forEach(([key, field]) => {
    state.participant[key] = field.value.trim();
  });
  saveState();
  updateExportStatus();
  renderProgress();
}

function persistDeclaration() {
  Object.entries(elements.declarationFields).forEach(([key, field]) => {
    state.declaration[key] = field.value.trim();
  });
  saveState();
  updateDeclarationPreview();
}

function updateDeclarationPreview() {
  const { coreValues, personIWantToBe, serviceDirection, keepDoing, reduceDoing } = state.declaration;
  const hasContent = [coreValues, personIWantToBe, serviceDirection, keepDoing, reduceDoing].some(Boolean);

  if (!hasContent) {
    elements.previewTitle.textContent = "意义不是想明白，而是慢慢活一致。";
    elements.previewBody.textContent = "填写左侧内容后，这里会生成你的意义福祉宣言预览。";
    return;
  }

  elements.previewTitle.textContent = coreValues ? `我的核心价值：${coreValues}` : "我的意义福祉宣言";
  elements.previewBody.textContent = [
    personIWantToBe && `我希望成为：${personIWantToBe}`,
    serviceDirection && `我想服务：${serviceDirection}`,
    keepDoing && `我愿意坚持：${keepDoing}`,
    reduceDoing && `我准备减少：${reduceDoing}`,
  ]
    .filter(Boolean)
    .join(" ");
}

function exportParticipantData() {
  persistCurrentEntry();
  persistDeclaration();
  persistParticipant();

  const nickname = state.participant.nickname.trim();
  const name = state.participant.name.trim();
  const key = nickname || name || "未命名用户";
  const payload = {
    [key]: {
      profile: {
        nickname,
        name,
      },
      progress: {
        completedDays: completedDays(),
        totalDays: dayPlans.length,
        selectedDay: state.selectedDay,
        exportedAt: new Date().toISOString(),
      },
      entries: state.entries,
      declaration: state.declaration,
    },
  };

  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const filenameBase = sanitizeFileName(key || "meaning-data");
  link.href = url;
  link.download = `${filenameBase}-21days.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);

  elements.exportStatus.textContent = nickname
    ? `已导出 ${key} 的 21 天数据，最外层 key 使用昵称。`
    : `已导出 ${key} 的 21 天数据。当前未填写昵称，已用姓名或默认名称作为 key。`;
}

function sanitizeFileName(value) {
  return value.replace(/[\\/:*?"<>|]/g, "-").trim() || "meaning-data";
}

function updateExportStatus() {
  const nickname = state.participant.nickname.trim();
  const name = state.participant.name.trim();
  if (nickname) {
    elements.exportStatus.textContent = `当前导出 key：${nickname}。姓名会作为辅助字段一起导出。`;
    return;
  }
  if (name) {
    elements.exportStatus.textContent = `当前还没填昵称，导出时会先用姓名 ${name} 作为 key。`;
    return;
  }
  elements.exportStatus.textContent = "建议先填写昵称，再开始记录，这样后续整理会更顺手。";
}

function bindEvents() {
  [elements.valueInput, elements.momentInput, elements.directionInput].forEach((field) => {
    field.addEventListener("input", () => {
      persistCurrentEntry();
      if (field === elements.valueInput) {
        renderValueLibrary();
      }
    });
  });

  Object.values(elements.participantFields).forEach((field) => {
    field.addEventListener("input", persistParticipant);
  });

  elements.completeDay.addEventListener("click", completeCurrentDay);
  elements.clearDay.addEventListener("click", clearCurrentDay);
  elements.exportData.addEventListener("click", exportParticipantData);
  elements.nextOpenDay.addEventListener("click", () => {
    persistCurrentEntry();
    state.selectedDay = firstOpenDay();
    saveState();
    renderPractice();
  });

  Object.values(elements.declarationFields).forEach((field) => {
    field.addEventListener("input", persistDeclaration);
  });

  document.querySelectorAll(".nav a").forEach((link) => {
    link.addEventListener("click", () => {
      document.querySelectorAll(".nav a").forEach((item) => item.classList.remove("active"));
      link.classList.add("active");
    });
  });
}

renderParticipant();
renderPaths();
renderPractice();
renderDeclaration();
bindEvents();
