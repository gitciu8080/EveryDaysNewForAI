/* ============================================================
   AI 晨报 · 数据 + 渲染 + 粒子引擎
   每日更新：修改 DAILY 数据后同步更新 feed.xml
   ============================================================ */

/* ---------------- 当日数据（2026-09-22） ---------------- */
const DAILY = {
  date: "2026-09-22",
  dateLabel: "2026 年 9 月 22 日 · 星期二",
  collectedAt: "06:27",
  events: [
    { tag: "模型", time: "09-21 路透", title: "Anthropic 在「放缓」呼声后数日考虑发布新模型，安全评估进行中",
      desc: "路透（Tech Insider 转述）21 日报道：Anthropic 正考虑发布新模型，安全评估仍在进行、无确认发布日期；此前数日 CEO Dario Amodei 刚发表约 3800 词长文呼吁放缓最先进 AI 开发，OpenAI CEO Altman 与 SpaceX 的 Musk 随后公开表示支持。",
      src: "Tech Insider（引路透）", href: "https://tech-insider.org/anthropic-3-step-slowdown-new-model-bid-2026" },
    { tag: "资本", time: "09-20 官宣", title: "卡塔尔投资局确认参投 Crusoe 39 亿美元 F 轮，估值 309 亿美元",
      desc: "QIA 20 日官宣作为战略投资者参与 Crusoe 39 亿美元 F 轮融资（首轮关闭），Atreides Management、Mubadala Capital、Valor Equity Partners 共同领投，Founders Fund、GIC、NVIDIA、Radical Ventures、TPG 跟投；Crusoe 坚持能源优先战略与模块化 Spark 数据中心，累计合同额超 1400 亿美元、签约产能 6GW+。",
      src: "Crusoe 官方 / TechCrunch", href: "https://www.crusoe.ai/resources/newsroom/crusoe-announces-series-f-funding" },
    { tag: "产业观察", time: "09-21", title: "花旗 CEO：AI 发展瓶颈不再是芯片，而是能源",
      desc: "新浪 AI 热点小时报（21 日 01 时）：花旗集团 CEO 表示 AI 发展的瓶颈已不再是芯片，而是能源；与 Crusoe 等 AI 基础设施公司的「能源优先」战略、以及 APEC 能源部长会议「AI+能源」共识文件形成呼应。",
      src: "新浪 AI 热点小时报", href: "https://k.sina.com.cn/article_7857201856_1d45362c001908o6ro.html" },
    { tag: "芯片", time: "09-21 报道", title: "Meta：自研 Arke AI 芯片 2027 上半年部署数据中心，降低对 Nvidia 依赖",
      desc: "TradingKey 报道：Meta 计划 2027 上半年开始在数据中心部署下一代自研 AI 芯片 Arke，称此举将在运行 AI 模型时节省成本与能耗，并降低对英伟达处理器的依赖。",
      src: "TradingKey", href: "https://www.tradingkey.com/analysis/stocks/us-stocks/262169141-openai-anthropic-google-deepmind-ai-safety-collaboration-tradingkey" },
    { tag: "国产芯片", time: "09-21 财联社", title: "行云集成完成近 8 亿元新融资，宁德时代旗下溥泉资本领投",
      desc: "财联社 21 日讯：国内全自研 GPGPU 企业北京行云集成电路完成新一轮近 8 亿元人民币融资，由宁德时代旗下产业投资平台溥泉资本及自有资金领投，春华资本、基石创投跟投；资金将用于产品工程化、供应链准备与客户交付。",
      src: "财联社 / 网易科技", href: "https://www.163.com/dy/article/L7BHRQMT0550B1DU.html" },
    { tag: "国产芯片", time: "近日", title: "奕行智能完成近 20 亿元新融资，投后估值近 150 亿元",
      desc: "搜狐时间线：RISC-V 云端 AI 算力芯片企业奕行智能（EVAS Intelligence）完成新一轮近 20 亿元融资，投后估值接近 150 亿元；华泰创新、钟鼎资本、中芯聚源、九安医疗、通富微电子等 20 余家机构参与，为今年 15 亿元 B 轮后数月内的再次大额注资。",
      src: "搜狐时间线", href: "https://timeline.sohu.com/news/Urw5zdpX7f?from=news" },
    { tag: "治理", time: "09-15 背景", title: "OpenAI、Anthropic、谷歌确认已就行业 AI 安全标准密谈数周",
      desc: "TechCrunch 15 日报道：OpenAI 全球政策主管 Lehane 在华盛顿表示三家公司已就 AI 安全协作数周（Bloomberg 首发）；The Information 称三家正共建 AI 行业标准机构，Altman 对员工表示此事无需美国政府支持即可推进。",
      src: "TechCrunch", href: "https://techcrunch.com/2026/09/15/openai-anthropic-google-have-been-in-talks-on-ai-safety-for-weeks" },
  ],
  local: [
    { tag: "榜单快照", time: "09-22 抓取", title: "AA 全榜 271 款已评分（live 直抓）：Fable 5.1 与 GPT-6 Astra (max) 并列 53 分榜首",
      desc: "今日直抓 Artificial Analysis 智能指数全榜：共 275 行、271 款有评分、4 款未评分；前三均为 53 分（Claude Fable 5.1 max/xhigh with fallback、GPT-6 Astra max），GPT-6 Astra (xhigh) 52 分，162 款为初步评估分（*）。昨日数据取自 Wayback 快照，今日 live 站点恢复正常直抓。",
      src: "Artificial Analysis", href: "https://artificialanalysis.ai/leaderboards/models" },
    { tag: "开源采用", time: "8 月", title: "Qwen3.8-27B：unsloth GGUF 三天下载超 194 万，24GB Mac 可跑",
      desc: "ModelFit：阿里 8 月中发布 Qwen3.8-27B 后社区快速采用，unsloth GGUF 版约三天下载量突破 1,945,635 次（HuggingFace API）；该 27B 稠密视觉语言模型有详细的 24GB Mac/GPU 部署指南。",
      src: "ModelFit", href: "https://modelfit.io/blog" },
    { tag: "本地智能体", time: "07-31 发布", title: "DeepSeek-V4-Flash 0731：284B 智能体模型塞进 128GB MacBook",
      desc: "DeepSeek 7 月 31 日发布 284B 参数智能体模型正式版 DeepSeek-V4-Flash-0731，社区量化阶梯把它推上消费硬件：2-bit DQ MLX 构建可在 128GB MacBook 上运行。",
      src: "ModelFit", href: "https://modelfit.io/blog" },
    { tag: "本地智能体", time: "08-10 当周", title: "本地智能体市场三方竞赛：Meta Muse Glimmer 30B、NVIDIA Nemotron 入场",
      desc: "ModelFit 汇总：8 月 10 日当周，Meta 发布面向常驻本地智能体的 30B 模型 Muse Glimmer（Ollama 库），NVIDIA 同期发布 Nemotron 系列，本地智能体市场进入三方竞赛格局。",
      src: "ModelFit", href: "https://modelfit.io/blog" },
    { tag: "能力边界", time: "9 月初", title: "本地模型首次可完成大量原属云端独占的 agentic coding 任务",
      desc: "Medium 实测（9 月初）：Qwen、DeepSeek Flash V4 0307 等本地模型虽仍比前沿云端模型慢、token 消耗更多，但已首次能完成一整批此前为巨型云端模型独占领域的 agentic coding 工作。",
      src: "Medium（mksl）", href: "https://medium.com/@mksl/what-can-a-local-model-do-for-you-early-sept-2026-edition-ba9dadf05d74" },
    { tag: "选型指南", time: "9 月更新", title: "2026 本地模型六大系：Qwen 最稳默认、DeepSeek 推理、Mistral 代码",
      desc: "daily.dev 指南：2026 年最重要的本地模型家族是 Llama、Mistral、Qwen、DeepSeek、Gemma、Phi 六系；Qwen 是最安全的全能默认，DeepSeek 是逻辑重任务首选，Mistral 适合代码优先场景，qwen3-coder 30B-A3B 的 262K 上下文适合大型代码库。",
      src: "daily.dev", href: "https://daily.dev/blog/best-local-llm-models-run" },
  ],
  news: [
    { tag: "产业趋势", time: "09-13", title: "报告：中国 AI 发展重心从大模型转向智能体",
      desc: "联合早报：一项报告指出中国 AI 产业发展重心从大模型与算力竞争，转向智能体规模落地与应用变现（综合央视新闻与《证券时报》报道）。",
      src: "联合早报", href: "https://www.zaochenbao.com/news/china/202609/1380970.html" },
    { tag: "量子", time: "09-14", title: "英伟达扩展 CUDA-Q 平台，推出量子容错计算编排层",
      desc: "数据猿 AI 全球观察（9 月）：英伟达扩展 CUDA-Q 平台并推出量子容错计算编排层，把量子计算编程栈向大规模容错部署再推一步。",
      src: "数据猿（AI 全球观察）", href: "http://www.datayuan.cn/article/24124.htm" },
    { tag: "医疗", time: "09-14", title: "AWS × Proximie × 德勤：英国 NHS 最大规模外科 AI 评估项目",
      desc: "数据猿 AI 全球观察：AWS 14 日宣布与外科智能平台 Proximie 及德勤合作，在英国国家医疗服务体系（NHS）开展迄今最大规模的外科人工智能评估项目。",
      src: "数据猿（AI 全球观察）", href: "http://www.datayuan.cn/article/24124.htm" },
    { tag: "企业", time: "09-14", title: "英伟达、Palantir、博思艾伦要求 OpenAI/Anthropic 提供新安全保障",
      desc: "界面新闻：英伟达、Palantir 与博思艾伦正要求 OpenAI、Anthropic 提供新的安全保障，并减少或停止使用两家公司最先进 AI 模型；Palantir 已说服 Anthropic 承诺对所有模型提供「不可撤销」的零数据保留（ZDR）保障。",
      src: "界面新闻（引自数据猿）", href: "http://www.datayuan.cn/article/24124.htm" },
    { tag: "国内应用", time: "09-15", title: "飞书发布国内首个团队智能体「豆包工作伙伴」；主权 AI 公司深度内核完成种子轮",
      desc: "数据猿：飞书发布国内首个团队智能体「豆包工作伙伴」；15 日，主权 AI 基础设施公司深度内核（DeepKernel）完成数千万元种子轮融资，顺为资本领投、L2F 光源创业者基金跟投，用于主权 AI 三层架构工程化落地与核心团队建设。",
      src: "数据猿", href: "http://www.datayuan.cn/article/24124.htm" },
    { tag: "主权 AI", time: "09-16", title: "OpenAI：英国主权 AI 新篇章——Stargate UK 与 10 月 24 日数据驻留",
      desc: "OpenAI 官方博客：英国是其付费订阅与 API 开发者规模全球前五大市场；通过 Stargate UK 项目（与 NVIDIA、Nscale 合作）及与政府谅解备忘录，10 月 24 日推出英国数据驻留，司法部将率先受惠。",
      src: "OpenAI 官方", href: "https://openai.com/zh-Hant-HK/index/the-next-chapter-for-uk-sovereign-ai" },
    { tag: "评测", time: "09-04", title: "AA 智能指数 v4.2：新增两项评估、GPQA Diamond 被撤、私有测试权重翻倍",
      desc: "explainx：9 月 4 日 Artificial Analysis 发布 Intelligence Index v4.2，作为 v5 前的中间版本——新增两项评估、长期因「太容易」被保留的 GPQA Diamond 基准被撤下、模型从未见过的测试题权重翻倍至 40%。",
      src: "explainx", href: "https://www.explainx.ai/blog/artificial-analysis-intelligence-index-v4-2-september-2026" },
  ],
  status: [
    { tag: "可用性", time: "探测于 09-22 06:27", title: "lingshu.baige.net.cn 正常运行", ok: true,
      desc: "HTTP 200 · 响应 1.42s · 服务器 nginx · 页面标题「灵枢 Lingshu」加载正常。",
      src: "lingshu.baige.net.cn", href: "https://lingshu.baige.net.cn" },
    { tag: "隧道", time: "探测于 09-22 06:27", title: "EasyTier 隧道正常（端到端可达 192.168.120.x）", ok: true,
      desc: "正向判定：穿透隧道访问 156 节点 TVHeadend EPG 返回 10 条节目（全量 3675 条），隧道健康；.1:11010 端口探测 connect ok（仅辅助信号，该网段防火墙对任意端口回 SYN-ACK 后应用层静默丢包）。",
      src: "192.168.120.156:9981 EPG", href: "http://192.168.120.156:9981/api/epg/events/grid" },
    { tag: "EPG", time: "探测于 09-22 06:27", title: "TVHeadend 143 EPG 正常", ok: true,
      desc: "HTTP 200 · 10 条节目（全量 2467 条）· 当前档：ViuTV《早晨新聞》（06:00-09:00）、RTHK TV 32《生活.健康.資訊》（02:00-07:30）。",
      src: "192.168.188.143:9981", href: "http://192.168.188.143:9981/api/epg/events/grid" },
    { tag: "EPG", time: "探测于 09-22 06:27", title: "TVHeadend 156 EPG 正常", ok: true,
      desc: "HTTP 200 · 10 条节目（全量 3675 条）· 当前档：CCTV-1《朝聞天下》（06:00-08:30）、ViuTV《早晨新聞》（06:00-09:00）。",
      src: "192.168.120.156:9981", href: "http://192.168.120.156:9981/api/epg/events/grid" },
  ],
};

/* ---------------- 工具 ---------------- */
const $ = (s, el = document) => el.querySelector(s);
const esc = (s) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

function cardHTML(item, type, tagClass) {
  return `<article class="card glass" data-type="${type}">
    <div class="card-top">
      <span class="card-tag ${tagClass}">${esc(item.tag)}</span>
      <span class="card-time">${esc(item.time)}</span>
    </div>
    <h3>${esc(item.title)}</h3>
    <p>${esc(item.desc)}</p>
    <a class="src" href="${item.href}" target="_blank" rel="noopener">来源：${esc(item.src)} ↗</a>
  </article>`;
}

/* ---------------- 渲染 ---------------- */
function render() {
  $("#events-cards").innerHTML = DAILY.events.map((e) => cardHTML(e, "event", "")).join("");
  $("#local-cards").innerHTML = DAILY.local.map((e) => cardHTML(e, "local", "t-local")).join("");
  $("#news-cards").innerHTML = DAILY.news.map((e) => cardHTML(e, "news", "t-news")).join("");
  $("#status-cards").innerHTML = DAILY.status.map((e) => {
    const dot = e.ok ? '<span class="pulse-dot"></span>' : '<span style="color:#ff8a8a">●</span>';
    return `<article class="card glass" data-type="status">
      <div class="card-top">${dot}<span class="card-tag t-status">${esc(e.tag)}</span>
      <span class="card-time">${esc(e.time)}</span></div>
      <h3>${esc(e.title)}</h3><p>${esc(e.desc)}</p>
      <a class="src" href="${e.href}" target="_blank" rel="noopener">${esc(e.src)} ↗</a>
    </article>`;
  }).join("");

  const maxScore = window.AA_BOARD ? window.AA_BOARD[0].s : 53;
  const rows = window.AA_BOARD || [];
  $("#board-list").innerHTML = rows.map((b) => `
    <li class="board-item">
      <span class="rank">${b.r}</span>
      <span class="b-name">${esc(b.n)}<small>${esc(b.o)}</small></span>
      <span class="b-bar"><span class="b-fill" data-w="${(b.s / maxScore * 100).toFixed(1)}"></span></span>
      <span class="b-score">${b.st ? "*" : ""}${b.s % 1 === 0 ? b.s : b.s.toFixed(1)}</span>
    </li>`).join("");
  $("#board-total").textContent = rows.length;

  $("#hero-date").textContent = DAILY.dateLabel;
  $("#stat-count").textContent = DAILY.events.length + DAILY.local.length + DAILY.news.length + DAILY.status.length;
  $("#stat-time").textContent = DAILY.collectedAt;
}

/* ---------------- 筛选 ---------------- */
function bindFilters() {
  const map = { event: "#events", local: "#local", board: "#board", news: "#news", status: "#status" };
  document.querySelectorAll(".fbtn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".fbtn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const f = btn.dataset.filter;
      document.querySelectorAll(".card").forEach((c) => {
        c.style.display = f === "all" || c.dataset.type === f ? "" : "none";
      });
      document.querySelectorAll(".section").forEach((s) => {
        const id = "#" + s.id;
        const matched = f === "all" || Object.entries(map).some(([k, v]) => k === f && v === id);
        const hasVisible = [...s.querySelectorAll(".card")].some((c) => c.style.display !== "none");
        s.style.display = f === "all" || (matched && (hasVisible || !s.querySelector(".card"))) ? "" : "none";
      });
    });
  });
}

/* ---------------- 滚动进入动画 ---------------- */
function bindReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      en.target.classList.add("in");
      if (en.target.classList.contains("board")) {
        en.target.querySelectorAll(".b-fill").forEach((f, i) => {
          setTimeout(() => { f.style.width = f.dataset.w + "%"; }, 200 + (i % 8) * 60); // 302 行若逐行延迟会等到天荒地老
        });
      }
      io.unobserve(en.target);
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal, .card").forEach((el, i) => {
    el.style.transitionDelay = (i % 6) * 60 + "ms";
    io.observe(el);
  });
}

/* ---------------- 粒子引擎 ---------------- */
function initParticles() {
  const canvas = $("#particles");
  const ctx = canvas.getContext("2d");
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let w, h, dpr, particles = [], running = true, raf;

  function resize() {
    dpr = Math.min(devicePixelRatio || 1, 2);
    w = innerWidth; h = innerHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    canvas.style.width = w + "px"; canvas.style.height = h + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.min(90, Math.floor((w * h) / 16000)); // 自适应密度
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.8 + 0.5,
      hue: Math.random() < 0.5 ? 217 : 266, // 蓝 / 紫
      a: Math.random() * 0.5 + 0.25,
    }));
  }

  function step() {
    if (!running) return;
    ctx.clearRect(0, 0, w, h);
    const LINK = 120;
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx; p.y += p.vy;
      if (p.x < -10) p.x = w + 10; if (p.x > w + 10) p.x = -10;
      if (p.y < -10) p.y = h + 10; if (p.y > h + 10) p.y = -10;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${p.hue}, 90%, 72%, ${p.a})`;
      ctx.fill();
      for (let j = i + 1; j < particles.length; j++) {
        const q = particles[j];
        const dx = p.x - q.x, dy = p.y - q.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < LINK * LINK) {
          const o = (1 - Math.sqrt(d2) / LINK) * 0.22;
          ctx.strokeStyle = `hsla(230, 85%, 75%, ${o})`;
          ctx.lineWidth = 0.6;
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
        }
      }
    }
    raf = requestAnimationFrame(step);
  }

  resize();
  addEventListener("resize", resize, { passive: true });
  document.addEventListener("visibilitychange", () => { // 标签页隐藏时暂停省电
    running = !document.hidden && !reduced;
    if (running) step(); else cancelAnimationFrame(raf);
  });
  if (reduced) { // 静态绘制一帧
    running = false; step(); running = false; cancelAnimationFrame(raf);
  } else {
    step();
  }
}

/* ---------------- 启动 ---------------- */
render();
bindFilters();
bindReveal();
initParticles();
