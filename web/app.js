const STORAGE_KEY = "happiness-practice-lab-v2";
const LEGACY_STORAGE_KEY = "meaning-path-mvp-state";

const pathOrder = ["meaning", "mindfulness"];

const valueLibrary = [
  "爱", "成长", "真实", "自由", "贡献", "创造", "稳定", "勇气", "美", "信任",
  "健康", "家庭", "学习", "敬畏", "善良", "影响力", "宁静", "责任", "连接", "觉察",
  "诚实", "尊重", "理解", "同理心", "陪伴", "忠诚", "友谊", "亲密", "合作", "服务",
  "利他", "慷慨", "包容", "接纳", "耐心", "温柔", "自律", "坚持", "卓越", "专注",
  "行动力", "效率", "秩序", "简洁", "独立", "自主", "冒险", "探索", "好奇", "智慧",
  "洞察", "清明", "信念", "希望", "热情", "喜悦", "幽默", "感恩", "谦逊", "公正",
  "正义", "平等", "安全感", "归属感", "成就", "专业", "声誉", "富足", "丰盛", "节制",
  "韧性", "复原力", "边界感", "表达", "审美", "灵性", "使命", "意义", "影响", "乐趣", "玩心",
];

const pathConfigs = {
  meaning: {
    title: "意义之路",
    mark: "意",
    status: "当前开放",
    summary: "把生活重新接回价值、方向、贡献与一致。",
    heroTitle: "从意义之路开始，练习一种更稳定的幸福。",
    heroLead: "这里把沙哈尔教授幸福学中的福祉理念，转成一个可以每天使用的练习网页。意义之路帮助我们看见价值、方向、连接、贡献与一致。",
    eyebrow: "意义福祉",
    detailTitle: "把生活重新接回价值",
    detailLead: "意义之路不是寻找一个遥不可及的人生使命，而是让每天的行动、关系和选择，与自己珍视的价值重新连接。",
    positionTitle: "沙哈尔幸福学中的位置",
    positionBody: "在 SPIRE 框架中，意义福祉最接近 Spiritual wellbeing。这里的 spiritual 不一定指宗教，更接近目的感、价值感、方向感、超越自我，以及与更大整体相连接。",
    signalsTitle: "偏离意义的信号",
    signals: [
      "明明很忙，却不知道自己在忙什么。",
      "完成了很多任务，却没有“值得”的感觉。",
      "经常被外界评价推动，很少问自己真正重视什么。",
      "空下来会慌，因为一停下就感觉和自己失联。",
    ],
    pillars: [
      ["01", "价值感", "知道自己重视什么，也知道不愿意丢掉什么。"],
      ["02", "方向感", "不一定已经抵达，但知道大致往哪里走。"],
      ["03", "连接感", "感到自己与他人、家庭、社会、自然或信念有连接。"],
      ["04", "贡献感", "自己的行动对他人、关系或世界有正向影响。"],
      ["05", "一致感", "外在做的事与内心相信的事逐渐对齐。"],
    ],
    courseTitle: "意义之路完整内容",
    courseLead: "先通过视频建立共同语言，再回到自己的价值、故事和行动。",
    courseBlocks: [
      ["共同输入", "看意义/目标之路视频，抓住目的感、价值感与贡献感。"],
      ["回到自己", "写下最有意义和最空心的时刻，找到真正的价值线索。"],
      ["落到行动", "每天做一个最小对齐行动，让意义从想法变成生活。"],
    ],
    practiceTitle: "21 天意义福祉练习",
    practiceLead: "每天只完成一个小任务。输入会自动保存，完成后会出现在你的意义日志里。",
    journalTitle: "意义日志",
    journalLead: "这里会汇总你完成过的每日练习。慢慢看见自己，其实就是很温柔的进步。",
    declarationTitle: "意义福祉宣言",
    declarationLead: "当你完成一段练习后，用几句话把自己的方向写下来。它不需要完美，只需要真实。",
    fieldLabels: ["今天我最想服务的价值是", "今天最有意义的一件小事是", "明天我愿意继续靠近的方向是"],
    placeholders: ["例如：真实、成长、爱、贡献、稳定。也可以直接点击上方价值词加入。", "写一件很小但让你觉得值得的事", "一个最小、真实、可以做到的行动"],
    declarationLabels: ["我的核心价值是", "我希望自己成为一个怎样的人", "我想服务的人、事或方向是", "为了活出意义，我愿意坚持的 3 件小事", "为了不再偏离自己，我准备减少的 3 件事"],
    emptyPreviewTitle: "意义不是想明白，而是慢慢活一致。",
    emptyPreviewBody: "填写左侧内容后，这里会生成你的意义福祉宣言预览。",
    declarationPrefix: ["我的核心价值", "我希望成为", "我想服务", "我愿意坚持", "我准备减少"],
    emptyJournal: "还没有日志。完成 Day 1 后，这里会开始出现你的意义记录。",
    exportFileSuffix: "meaning-21days",
    entriesLabel: ["价值", "小事", "方向"],
    days: [
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
    ],
  },
  mindfulness: {
    title: "正念之路",
    mark: "念",
    status: "当前开放",
    summary: "回到当下，练习觉察呼吸、身体、情绪与念头。",
    heroTitle: "正念之路：发现自己离开了，然后愿意回来。",
    heroLead: "正念是 present-moment awareness，当下觉察。这个页面用于课程后 21 天练习：正式冥想、非正式正念、同伴 Mentoring 和每日记录。",
    eyebrow: "正念福祉",
    detailTitle: "把自己带回当下",
    detailLead: "正念之路不是让脑子什么都不想，而是知道此刻正在发生什么：呼吸、身体、情绪、念头和眼前的人事物。",
    positionTitle: "在精神福祉中的位置",
    positionBody: "意义之路回答“我为什么而做”，正念之路回答“我如何回到当下去做”。如果意义是方向盘，正念就是此刻握住方向盘的那只手。",
    signalsTitle: "需要正念的信号",
    signals: [
      "身体在这里，心却一直在未来或过去。",
      "情绪一上来就立刻反击、逃避或刷手机。",
      "吃饭、走路、陪伴家人时经常像在完成任务。",
      "明明很累，却停不下来，也感受不到自己。",
    ],
    pillars: [
      ["01", "当下觉察", "知道此刻正在发生什么，而不是自动驾驶。"],
      ["02", "正式练习", "坐下来做 10-15 分钟 Mindful Meditation。"],
      ["03", "非正式练习", "把觉察带入吃饭、走路、开会、陪伴。"],
      ["04", "温柔回来", "走神不是失败，回来才是练习。"],
      ["05", "重复", "正念不是一次开悟，而是每天很小地回来。"],
    ],
    courseTitle: "正念之路完整课程内容",
    courseLead: "课程先看视频建立共同语言，然后进入两块 Practice：正式 Mindful Meditation 和非正式正念 Mentoring。",
    courseBlocks: [
      ["看视频", "带着 4 个问题看 P4 正念之路：定义、正式/非正式、准则、最触动的一句话。"],
      ["Practice 1", "10-15 分钟正式 Mindful Meditation：呼吸、身体、走神后回来。"],
      ["Practice 2", "非正式正念 + 同伴 Mentoring：选一个日常场景，设计 24 小时触发器。"],
      ["课后", "用这个网页记录 21 天练习：每天写一句“我此刻注意到……”。"],
    ],
    practiceTitle: "21 天正念之路练习",
    practiceLead: "每天只做一个很小的正念动作：一次呼吸、一次身体觉察、一次情绪命名、一次正念陪伴。",
    journalTitle: "正念日志",
    journalLead: "这里会汇总你完成过的正念练习。正念不是每天完美，而是一次次愿意回来。",
    declarationTitle: "正念福祉宣言",
    declarationLead: "完成一段练习后，写下你最想保留的正念触发器、提醒语和生活场景。",
    fieldLabels: ["我此刻注意到", "今天我练习的正念场景是", "下次我愿意回来的触发器是"],
    placeholders: ["例如：我注意到肩膀有点紧；我注意到自己很急；我注意到呼吸变浅。", "例如：吃饭前三口、走路 5 分钟、开会前三次呼吸、睡前身体扫描。", "例如：打开电脑前 / 午饭前 / 回复消息前 / 睡前。"],
    declarationLabels: ["我的正念触发器是", "我最容易自动驾驶的场景是", "我想练习的正念动作是", "为了回到当下，我愿意坚持的 3 件小事", "为了减少自动驾驶，我准备减少的 3 件事"],
    emptyPreviewTitle: "正念不是不走神，而是愿意回来。",
    emptyPreviewBody: "填写左侧内容后，这里会生成你的正念福祉宣言预览。",
    declarationPrefix: ["我的正念触发器", "我容易自动驾驶的场景", "我想练习", "我愿意坚持", "我准备减少"],
    emptyJournal: "还没有日志。完成 Day 1 后，这里会开始出现你的正念记录。",
    exportFileSuffix: "mindfulness-21days",
    entriesLabel: ["觉察", "场景", "触发器"],
    days: [
      ["第 1 周：回到当下", "做 3 次深呼吸，写“我此刻注意到……”", "找一个安静或普通的时刻，做三次呼吸。不要追求平静，只写下你真实注意到的东西。"],
      ["第 1 周：回到当下", "选择一个固定正念触发器", "选一个每天都会发生的场景：起床后、午饭前、打开电脑前或睡前。让它提醒你回来。"],
      ["第 1 周：回到当下", "吃饭前三口保持觉察", "前三口不看手机，感受味道、温度、咀嚼和身体反应。"],
      ["第 1 周：回到当下", "走路 5 分钟不看手机", "把注意力放在脚底触地、步伐节奏、空气和身体移动上。"],
      ["第 1 周：回到当下", "睡前做 2 分钟身体扫描", "从头到脚看一遍身体：哪里紧、哪里累、哪里柔软。只观察，不急着修复。"],
      ["第 1 周：回到当下", "练习一次“走神后回来”", "当你发现自己走神，在心里说一句“回来”，再把注意力放回呼吸或手上的事。"],
      ["第 1 周：回到当下", "复盘本周最有当下感的一刻", "写下这一周哪一刻你最真实地在场。它可能很小，但很重要。"],
      ["第 2 周：看见情绪", "情绪来时先命名：“我现在有点……”", "不要急着解释原因，先给情绪一个名字：紧张、委屈、烦躁、累、害怕。"],
      ["第 2 周：看见情绪", "找到一个情绪对应的身体感觉", "问自己：这个情绪在身体哪里？胸口、胃、肩膀、喉咙，还是头部？"],
      ["第 2 周：看见情绪", "对一个念头说：“我注意到我有一个念头……”", "把念头从事实里分离出来：我注意到我有一个“我来不及了”的念头。"],
      ["第 2 周：看见情绪", "焦虑或烦躁时做 30 秒呼吸", "不用解决问题，只给自己 30 秒：吸气知道吸气，呼气知道呼气。"],
      ["第 2 周：看见情绪", "记录一个没有抗争情绪的瞬间", "哪怕只持续几秒，也写下来：我允许它在那里，没有马上赶走它。"],
      ["第 2 周：看见情绪", "用五感回到当下", "说出你看到的 5 样东西、听到的 4 个声音、触摸到的 3 个感觉。"],
      ["第 2 周：看见情绪", "复盘一个情绪被看见后的变化", "当情绪被你看见，它有没有一点点变化？强度、身体感觉或行动冲动是否不同？"],
      ["第 3 周：正念生活", "选择一个非正式正念场景", "从洗澡、刷牙、通勤、做饭里选一个，把它变成每天 2-5 分钟的正念练习。"],
      ["第 3 周：正念生活", "做一次正念陪伴", "听别人说话 1 分钟，不急着回应、建议、解释或打断。"],
      ["第 3 周：正念生活", "观察一次“平凡中的奇迹”", "认真看一件平凡事物：一杯水、一片叶子、一束光、一顿饭。写下你看到了什么。"],
      ["第 3 周：正念生活", "设计一个 NOW 提醒物", "可以是一张便签、手机壁纸、桌面物件。看到它，就提醒自己回来。"],
      ["第 3 周：正念生活", "做一次 5 分钟安静坐着", "不需要特别姿势，只是安静坐着，观察呼吸、身体、声音和念头。"],
      ["第 3 周：正念生活", "写下正念如何改变你的一天", "哪怕只改变了一点点：回应慢了一秒、吃饭更在场、少刷了一次手机。"],
      ["第 3 周：正念生活", "写下自己的正念福祉宣言", "把 21 天里最有用的触发器、提醒语和练习方式收束成几句话。"],
    ],
  },
};

const futurePaths = [
  { title: "运动之路", summary: "用身体活动支撑精力、情绪与韧性。" },
  { title: "疗愈之路", summary: "在消耗之后修复自己，重新变得完整。" },
  { title: "失败之路", summary: "把挫折转化为学习，而不是身份否定。" },
  { title: "自愈之路", summary: "用更友善的方式陪自己走过低谷。" },
  { title: "关系之路", summary: "建立真实、支持、可靠的生命连接。" },
  { title: "自醒之路", summary: "持续看见自己的模式、价值、需要与盲点。" },
  { title: "接纳之路", summary: "允许现实先成为现实，才有力量选择下一步。" },
  { title: "感恩之路", summary: "训练自己看见已存在的支持、善意与资源。" },
];

const declarationKeys = ["coreValues", "personIWantToBe", "serviceDirection", "keepDoing", "reduceDoing"];
const emptyDeclaration = () => ({ coreValues: "", personIWantToBe: "", serviceDirection: "", keepDoing: "", reduceDoing: "" });

const defaultState = {
  currentType: "meaning",
  selectedDayByType: { meaning: 1, mindfulness: 1 },
  participant: { name: "" },
  entries: { meaning: {}, mindfulness: {} },
  declarations: { meaning: emptyDeclaration(), mindfulness: emptyDeclaration() },
};

let state = loadState();

const elements = {
  brandTitle: document.querySelector("#brandTitle"),
  brandSubtitle: document.querySelector("#brandSubtitle"),
  heroTitle: document.querySelector("#heroTitle"),
  heroLead: document.querySelector("#heroLead"),
  typeTabs: document.querySelector("#typeTabs"),
  pathGrid: document.querySelector("#pathGrid"),
  heroPrimary: document.querySelector("#heroPrimary"),
  heroSecondary: document.querySelector("#heroSecondary"),
  participantFields: { name: document.querySelector("#nameInput") },
  exportData: document.querySelector("#exportData"),
  exportStatus: document.querySelector("#exportStatus"),
  progressCount: document.querySelector("#progressCount"),
  progressBar: document.querySelector("#progressBar"),
  progressNote: document.querySelector("#progressNote"),
  pathEyebrow: document.querySelector("#pathEyebrow"),
  pathDetailTitle: document.querySelector("#pathDetailTitle"),
  pathDetailLead: document.querySelector("#pathDetailLead"),
  pathPositionTitle: document.querySelector("#pathPositionTitle"),
  pathPositionBody: document.querySelector("#pathPositionBody"),
  pathSignalsTitle: document.querySelector("#pathSignalsTitle"),
  pathSignals: document.querySelector("#pathSignals"),
  pathPillars: document.querySelector("#pathPillars"),
  courseTitle: document.querySelector("#courseTitle"),
  courseLead: document.querySelector("#courseLead"),
  courseBlocks: document.querySelector("#courseBlocks"),
  practiceTitle: document.querySelector("#practiceTitle"),
  practiceLead: document.querySelector("#practiceLead"),
  dayButtons: document.querySelector("#dayButtons"),
  dayBadge: document.querySelector("#dayBadge"),
  weekBadge: document.querySelector("#weekBadge"),
  dayTitle: document.querySelector("#dayTitle"),
  dayPrompt: document.querySelector("#dayPrompt"),
  valueLibrarySection: document.querySelector("#valueLibrarySection"),
  valueChipList: document.querySelector("#valueChipList"),
  fieldOneLabel: document.querySelector("#fieldOneLabel"),
  fieldTwoLabel: document.querySelector("#fieldTwoLabel"),
  fieldThreeLabel: document.querySelector("#fieldThreeLabel"),
  valueInput: document.querySelector("#valueInput"),
  momentInput: document.querySelector("#momentInput"),
  directionInput: document.querySelector("#directionInput"),
  completeDay: document.querySelector("#completeDay"),
  clearDay: document.querySelector("#clearDay"),
  nextOpenDay: document.querySelector("#nextOpenDay"),
  journalTitle: document.querySelector("#journalTitle"),
  journalLead: document.querySelector("#journalLead"),
  journalList: document.querySelector("#journalList"),
  declarationTitle: document.querySelector("#declarationTitle"),
  declarationLead: document.querySelector("#declarationLead"),
  declarationLabels: [
    document.querySelector("#declarationLabelOne"),
    document.querySelector("#declarationLabelTwo"),
    document.querySelector("#declarationLabelThree"),
    document.querySelector("#declarationLabelFour"),
    document.querySelector("#declarationLabelFive"),
  ],
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
    if (saved) return normalizeState(saved);

    const legacy = JSON.parse(localStorage.getItem(LEGACY_STORAGE_KEY));
    if (legacy) {
      return normalizeState({
        ...defaultState,
        participant: { name: legacy.participant?.name || legacy.participant?.nickname || "" },
        selectedDayByType: { meaning: legacy.selectedDay || 1, mindfulness: 1 },
        entries: { meaning: legacy.entries || {}, mindfulness: {} },
        declarations: { meaning: { ...emptyDeclaration(), ...(legacy.declaration || {}) }, mindfulness: emptyDeclaration() },
      });
    }
  } catch {
    return structuredClone(defaultState);
  }
  return structuredClone(defaultState);
}

function normalizeState(saved) {
  const normalized = structuredClone(defaultState);
  normalized.currentType = pathConfigs[saved.currentType] ? saved.currentType : "meaning";
  normalized.participant.name = saved.participant?.name || saved.participant?.nickname || "";
  pathOrder.forEach((type) => {
    normalized.selectedDayByType[type] = clampDay(saved.selectedDayByType?.[type] || (type === "meaning" ? saved.selectedDay : 1));
    normalized.entries[type] = saved.entries?.[type] || (type === "meaning" && saved.entries && !saved.entries.meaning ? saved.entries : {}) || {};
    normalized.declarations[type] = { ...emptyDeclaration(), ...(saved.declarations?.[type] || (type === "meaning" ? saved.declaration : {}) || {}) };
  });
  return normalized;
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function config() { return pathConfigs[state.currentType]; }
function currentEntries() { return state.entries[state.currentType]; }
function currentDeclaration() { return state.declarations[state.currentType]; }
function selectedDay() { return state.selectedDayByType[state.currentType] || 1; }
function setSelectedDay(day) { state.selectedDayByType[state.currentType] = clampDay(day); }
function clampDay(day) { return Math.min(21, Math.max(1, Number(day) || 1)); }

function setCurrentType(type, shouldScroll = false) {
  if (!pathConfigs[type]) return;
  persistCurrentEntry();
  persistDeclaration();
  state.currentType = type;
  saveState();
  renderAll();
  if (shouldScroll) document.querySelector("#pathDetail").scrollIntoView({ behavior: "smooth" });
}

function renderHero() {
  const cfg = config();
  document.body.dataset.type = state.currentType;
  elements.brandTitle.textContent = "幸福福祉练习室";
  elements.brandSubtitle.textContent = `${cfg.title} · 21 天练习`;
  document.querySelector(".brand-mark").textContent = cfg.mark;
  elements.heroTitle.textContent = cfg.heroTitle;
  elements.heroLead.textContent = cfg.heroLead;
  elements.heroPrimary.textContent = `开始${cfg.title} 21 天练习`;
  elements.heroSecondary.textContent = `了解${cfg.title}`;
  elements.typeTabs.innerHTML = pathOrder.map((type) => {
    const item = pathConfigs[type];
    const active = type === state.currentType ? " active" : "";
    return `<button class="type-tab${active}" type="button" data-type="${type}">${item.title}</button>`;
  }).join("");
  document.querySelectorAll(".type-tab").forEach((button) => {
    button.addEventListener("click", () => setCurrentType(button.dataset.type));
  });
}

function renderPaths() {
  const openCards = pathOrder.map((type, index) => {
    const path = pathConfigs[type];
    const current = type === state.currentType ? " current" : "";
    return `
      <button class="path-card${current}" type="button" data-type="${type}">
        <span class="path-number">${String(index + 1).padStart(2, "0")}</span>
        <h3>${path.title}</h3>
        <p>${path.summary}</p>
        <span class="path-status">${current ? "正在查看" : path.status}</span>
      </button>
    `;
  });
  const futureCards = futurePaths.map((path, index) => `
    <button class="path-card disabled" type="button" disabled>
      <span class="path-number">${String(index + 3).padStart(2, "0")}</span>
      <h3>${path.title}</h3>
      <p>${path.summary}</p>
      <span class="path-status">即将开放</span>
    </button>
  `);
  elements.pathGrid.innerHTML = [...openCards, ...futureCards].join("");
  document.querySelectorAll(".path-card[data-type]").forEach((button) => {
    button.addEventListener("click", () => setCurrentType(button.dataset.type, true));
  });
}

function renderParticipant() {
  elements.participantFields.name.value = state.participant.name || "";
  updateExportStatus();
}

function renderPathDetail() {
  const cfg = config();
  elements.pathEyebrow.textContent = cfg.eyebrow;
  elements.pathDetailTitle.textContent = cfg.detailTitle;
  elements.pathDetailLead.textContent = cfg.detailLead;
  elements.pathPositionTitle.textContent = cfg.positionTitle;
  elements.pathPositionBody.textContent = cfg.positionBody;
  elements.pathSignalsTitle.textContent = cfg.signalsTitle;
  elements.pathSignals.innerHTML = cfg.signals.map((item) => `<li>${item}</li>`).join("");
  elements.pathPillars.innerHTML = cfg.pillars.map(([num, title, body]) => `
    <div>
      <span>${num}</span>
      <strong>${title}</strong>
      <p>${body}</p>
    </div>
  `).join("");
  elements.courseTitle.textContent = cfg.courseTitle;
  elements.courseLead.textContent = cfg.courseLead;
  elements.courseBlocks.innerHTML = cfg.courseBlocks.map(([title, body], index) => `
    <article class="course-block">
      <span>${String(index + 1).padStart(2, "0")}</span>
      <h3>${title}</h3>
      <p>${body}</p>
    </article>
  `).join("");
}

function renderPracticeShellText() {
  const cfg = config();
  elements.practiceTitle.textContent = cfg.practiceTitle;
  elements.practiceLead.textContent = cfg.practiceLead;
  elements.journalTitle.textContent = cfg.journalTitle;
  elements.journalLead.textContent = cfg.journalLead;
  elements.declarationTitle.textContent = cfg.declarationTitle;
  elements.declarationLead.textContent = cfg.declarationLead;
  [elements.fieldOneLabel, elements.fieldTwoLabel, elements.fieldThreeLabel].forEach((el, index) => {
    el.textContent = cfg.fieldLabels[index];
  });
  [elements.valueInput, elements.momentInput, elements.directionInput].forEach((el, index) => {
    el.placeholder = cfg.placeholders[index];
  });
  elements.declarationLabels.forEach((el, index) => {
    el.textContent = cfg.declarationLabels[index];
  });
}

function renderDayButtons() {
  const entries = currentEntries();
  const activeDay = selectedDay();
  elements.dayButtons.innerHTML = config().days.map((_, index) => {
    const day = index + 1;
    const entry = entries[day] || {};
    const active = activeDay === day ? " active" : "";
    const done = entry.completed ? " done" : "";
    return `<button class="day-button${active}${done}" type="button" data-day="${day}">${day}</button>`;
  }).join("");

  document.querySelectorAll(".day-button").forEach((button) => {
    button.addEventListener("click", () => {
      persistCurrentEntry();
      setSelectedDay(button.dataset.day);
      saveState();
      renderPractice();
    });
  });
}

function renderPractice() {
  const cfg = config();
  const day = selectedDay();
  const [week, title, prompt] = cfg.days[day - 1];
  const entry = currentEntries()[day] || {};
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
  const shouldShow = state.currentType === "meaning" && (selectedDay() === 1 || selectedDay() === 2);
  elements.valueLibrarySection.hidden = !shouldShow;
  if (!shouldShow) return;

  const selectedValues = splitValues(elements.valueInput.value);
  elements.valueChipList.innerHTML = valueLibrary.map((value) => {
    const selected = selectedValues.includes(value) ? " selected" : "";
    return `<button class="value-chip${selected}" type="button" data-value="${value}">${value}</button>`;
  }).join("");
  document.querySelectorAll(".value-chip").forEach((chip) => chip.addEventListener("click", () => addValueToInput(chip.dataset.value)));
}

function persistCurrentEntry() {
  const day = selectedDay();
  const entries = currentEntries();
  const previous = entries[day] || {};
  entries[day] = {
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
  const day = selectedDay();
  currentEntries()[day].completed = true;
  currentEntries()[day].completedAt = new Date().toISOString();
  if (day < 21) setSelectedDay(day + 1);
  saveState();
  renderPractice();
}

function splitValues(text) {
  return text.split(/[、,，\n]+/).map((value) => value.trim()).filter(Boolean);
}

function addValueToInput(value) {
  const values = splitValues(elements.valueInput.value);
  if (!values.includes(value)) values.push(value);
  elements.valueInput.value = values.join("、");
  persistCurrentEntry();
  renderValueLibrary();
}

function clearCurrentDay() {
  delete currentEntries()[selectedDay()];
  saveState();
  renderPractice();
}

function completedDays(type = state.currentType) {
  return Object.values(state.entries[type] || {}).filter((entry) => entry.completed).length;
}

function participantName() {
  return state.participant.name.trim();
}

function renderProgress() {
  const count = completedDays();
  const nextDay = firstOpenDay();
  const name = participantName();
  const cfg = config();
  elements.progressCount.textContent = `${count} / 21`;
  elements.progressBar.style.width = `${(count / 21) * 100}%`;
  elements.progressNote.textContent = count === 21
    ? `${name ? `${name} 已经` : "你已经"}完成${cfg.title} 21 天练习，可以去写下宣言。`
    : `${name ? `${name} 的` : ""}${cfg.title}下一步可以继续 Day ${nextDay}。`;
}

function firstOpenDay() {
  const next = config().days.findIndex((_, index) => !currentEntries()[index + 1]?.completed);
  return next === -1 ? 21 : next + 1;
}

function renderJournal() {
  const cfg = config();
  const entries = Object.entries(currentEntries())
    .filter(([, entry]) => entry.completed || entry.value || entry.meaningfulMoment || entry.nextDirection)
    .sort(([a], [b]) => Number(a) - Number(b));

  if (!entries.length) {
    elements.journalList.innerHTML = `<div class="empty-state">${cfg.emptyJournal}</div>`;
    return;
  }

  elements.journalList.innerHTML = entries.map(([day, entry]) => `
    <article class="journal-card">
      <h3>Day ${day}</h3>
      <p><strong>${cfg.entriesLabel[0]}：</strong>${entry.value || "暂未填写"}</p>
      <p><strong>${cfg.entriesLabel[1]}：</strong>${entry.meaningfulMoment || "暂未填写"}</p>
      <p><strong>${cfg.entriesLabel[2]}：</strong>${entry.nextDirection || "暂未填写"}</p>
      <button class="text-button edit-entry" type="button" data-day="${day}">回到这一天</button>
    </article>
  `).join("");

  document.querySelectorAll(".edit-entry").forEach((button) => {
    button.addEventListener("click", () => {
      persistCurrentEntry();
      setSelectedDay(button.dataset.day);
      saveState();
      renderPractice();
      document.querySelector("#practice").scrollIntoView({ behavior: "smooth" });
    });
  });
}

function renderDeclaration() {
  const declaration = currentDeclaration();
  Object.entries(elements.declarationFields).forEach(([key, field]) => {
    field.value = declaration[key] || "";
  });
  updateDeclarationPreview();
}

function persistParticipant() {
  state.participant.name = elements.participantFields.name.value.trim();
  saveState();
  updateExportStatus();
  renderProgress();
}

function persistDeclaration() {
  const declaration = currentDeclaration();
  Object.entries(elements.declarationFields).forEach(([key, field]) => {
    declaration[key] = field.value.trim();
  });
  saveState();
  updateDeclarationPreview();
}

function updateDeclarationPreview() {
  const cfg = config();
  const declaration = currentDeclaration();
  const values = declarationKeys.map((key) => declaration[key]);
  if (!values.some(Boolean)) {
    elements.previewTitle.textContent = cfg.emptyPreviewTitle;
    elements.previewBody.textContent = cfg.emptyPreviewBody;
    return;
  }
  elements.previewTitle.textContent = values[0] ? `${cfg.declarationPrefix[0]}：${values[0]}` : `${cfg.title}宣言`;
  elements.previewBody.textContent = values.slice(1)
    .map((value, index) => value && `${cfg.declarationPrefix[index + 1]}：${value}`)
    .filter(Boolean)
    .join(" ");
}

function exportParticipantData() {
  persistCurrentEntry();
  persistDeclaration();
  persistParticipant();

  const name = participantName();
  if (!name) {
    elements.exportStatus.textContent = "请先填写姓名，再导出练习数据。";
    elements.participantFields.name.focus();
    document.querySelector("#participant").scrollIntoView({ behavior: "smooth" });
    return;
  }

  const payload = {
    [name]: {
      profile: { name },
      currentType: state.currentType,
      progress: Object.fromEntries(pathOrder.map((type) => [type, { completedDays: completedDays(type), totalDays: 21 }])),
      entries: state.entries,
      declarations: state.declarations,
      exportedAt: new Date().toISOString(),
    },
  };

  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${sanitizeFileName(name)}-happiness-practice.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  elements.exportStatus.textContent = `已导出 ${name} 的所有路径练习数据。`;
}

function sanitizeFileName(value) {
  return value.replace(/[\\/:*?"<>|]/g, "-").trim() || "happiness-data";
}

function updateExportStatus() {
  const name = participantName();
  elements.exportStatus.textContent = name ? `当前导出 key：${name}。` : "请先填写姓名，再开始记录和导出。";
}

function bindEvents() {
  [elements.valueInput, elements.momentInput, elements.directionInput].forEach((field) => {
    field.addEventListener("input", () => {
      persistCurrentEntry();
      if (field === elements.valueInput) renderValueLibrary();
      renderJournal();
    });
  });
  elements.participantFields.name.addEventListener("input", persistParticipant);
  elements.completeDay.addEventListener("click", completeCurrentDay);
  elements.clearDay.addEventListener("click", clearCurrentDay);
  elements.exportData.addEventListener("click", exportParticipantData);
  elements.nextOpenDay.addEventListener("click", () => {
    persistCurrentEntry();
    setSelectedDay(firstOpenDay());
    saveState();
    renderPractice();
  });
  Object.values(elements.declarationFields).forEach((field) => field.addEventListener("input", persistDeclaration));
  document.querySelectorAll(".nav a").forEach((link) => {
    link.addEventListener("click", () => {
      document.querySelectorAll(".nav a").forEach((item) => item.classList.remove("active"));
      link.classList.add("active");
    });
  });
}

function renderAll() {
  renderHero();
  renderPaths();
  renderParticipant();
  renderPathDetail();
  renderPracticeShellText();
  renderPractice();
  renderDeclaration();
}

renderAll();
bindEvents();
