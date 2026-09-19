/* ============================================================
   AI 晨报 · 数据 + 渲染 + 粒子引擎
   每日更新：修改 DAILY 数据后同步更新 feed.xml
   ============================================================ */

/* ---------------- 当日数据（2026-09-19） ---------------- */
const DAILY = {
  date: "2026-09-19",
  dateLabel: "2026 年 9 月 19 日 · 星期六",
  collectedAt: "10:00",
  events: [
    { tag: "治理", time: "09-14 发布 · 09-18 解读", title: "《人工智能安全治理框架 3.0》落地：首次对 AI 智能体提出单独安全要求",
      desc: "网安标委在国家网络安全宣传周开幕式发布《框架 3.0》，延续「风险分类、技术防控、综合治理」逻辑；新版首次明确自主 AI 智能体的风险并给出可靠性原则，与 5 月《智能体规范应用与创新发展实施意见》的智能体官方定义形成呼应。",
      src: "俄罗斯卫星通讯社", href: "https://sputniknews.cn/20260918/1073307228.html" },
    { tag: "安全合作", time: "09-15", title: "OpenAI 证实与 Anthropic、Google 已就 AI 安全协同数周",
      desc: "OpenAI 全球政策主管 Chris Lehane 表示，在 Amodei 呼吁放缓前沿 AI 节奏后，三家公司已合作数周；OpenAI 认为与对手在安全事务上协调无需反垄断豁免，并拟与 Anthropic 一同引入第三方评估机构驻场监督。",
      src: "TechCrunch / Bloomberg Law", href: "https://techcrunch.com/2026/09/15/openai-anthropic-google-have-been-in-talks-on-ai-safety-for-weeks" },
    { tag: "模型发布", time: "09-03 发布", title: "GPT-6 Astra 登场：通用智能指数 61 分，与 GPT-5.6 Sol 持平",
      desc: "OpenAI 于 9 月 3 日发布 GPT-6 Astra，定价 $10/$50 每百万 token，面向 Agent 工作负载；Artificial Analysis 综合智能指数 61 分，与 GPT-5.6 Sol 并列、落后 Claude Fable 5.1 的 66 分；ARC-AGI-3 Standard 基准 62.7%。",
      src: "ofox.ai", href: "https://ofox.ai/blog/best-ai-models-complete-guide-2026" },
    { tag: "模型发布", time: "09-01 发布", title: "Claude Fable 5.1 登顶 AA 智能指数 66 分，刷新历史最高",
      desc: "Anthropic 发布 Fable 5.1 与放宽生物/网络安全限制、仅限邀请的 Mythos 5.1；Fable 5.1 在 max 推理档拿下 Artificial Analysis Intelligence Index 66 分，为平台有记录以来最高，缓存读取价格同天下调 75% 至 $0.25。",
      src: "Fello AI", href: "https://felloai.com/best-ai-models" },
    { tag: "行业", time: "09 月", title: "三巨头加码医疗 AI 安全，预测市场押注 Anthropic 九月夺魁",
      desc: "Anthropic、OpenAI 与 Google DeepMind 联合推进医疗领域 AI 安全与生物安全措施；相关预测市场定价显示，Anthropic 在 9 月底拥有最强模型的概率达 91%。",
      src: "Crypto Briefing", href: "https://cryptobriefing.com/anthropic-openai-google-deepmind-boost-ai-safety-in-healthcare-initiatives" },
    { tag: "产业", time: "09-18", title: "武汉发布 AI 产业行动方案，科创板 AI ETF 资金持续净流入",
      desc: "界面新闻报道：武汉发布人工智能产业行动方案；科创板人工智能 ETF（588930）单日实时成交额突破 3600 万元，过去 10 个交易日资金净流入超 2 亿元。",
      src: "界面新闻（09-18 汇总）", href: "https://happydayhappylife.com/2026/09/18/%F0%9F%A4%96-2026%E5%B9%B49%E6%9C%8818%E6%97%A5ai%E6%96%B0%E9%97%BB%E6%B1%87%E6%80%BB-%E5%85%A8%E7%90%83ai%E5%8A%A8%E6%80%81%E4%B8%8E%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%E8%B5%84%E8%AE%AF/" },
  ],
  local: [
    { tag: "本地首选", time: "09 月", title: "Qwen3.8-27B 被评 2026 本地 LLM 首选",
      desc: "Q4_K_M 量化约 24GB 内存即可运行；GPQA Diamond 89.2%、SWE-bench Pro 61.7%；原生视觉-语言（直接理解图像与视频），262K 上下文可扩展至 1M，被多家评测列为本地部署默认选择。",
      src: "PromptQuorum", href: "https://www.promptquorum.com/local-llms/best-local-llms-2026" },
    { tag: "开放权重", time: "09-02 盘点", title: "开放权重格局：Qwen3.8 双轨许可，DeepSeek V4 仍需 142GB+ 显存",
      desc: "截至 9 月初：Qwen3.8 提供 Apache 2.0 的 27B 多模态检查点与自研 Max 许可的 2.4T 稀疏模型；DeepSeek V4 双档 MIT 许可但 Flash/Pro 需 142GB+ VRAM，Ollama/llama.cpp 稳定版尚不能加载；Kimi K3 多模态 + 1M 窗口，Llama 4 对欧盟开发者保留多模态许可限制。",
      src: "Wavect", href: "https://wavect.io/blog/open-weight-llm-comparison-2026" },
    { tag: "开放权重", time: "09 月", title: "Kimi K3 领跑开放权重：AA 指数 60 分、总榜第 3",
      desc: "月之暗面 7 月 27 日开源权重的 2.8T MoE（104B 激活、1M 上下文）拿下 Artificial Analysis 开放权重最高 60 分，总榜位列第 3，并登顶前端代码 Arena；API 定价 $3/$15 每百万 token。",
      src: "Swfte / Fello AI", href: "https://www.swfte.com/ai/leaderboard" },
    { tag: "小模型", time: "09 月", title: "Gemma 4 26B A4B：单张 4090 可跑的多语言本地模型",
      desc: "Q4_K_M 约 15GB 内存，可放入单张 RTX 4090 或 24GB 统一内存 Mac；AIME 2026 89%、128K 上下文，支持 140+ 语言离线推理，`ollama pull gemma4:26b` 即可运行。",
      src: "PromptQuorum", href: "https://www.promptquorum.com/local-llms/best-local-llms-2026" },
    { tag: "选型指南", time: "09 月", title: "2026 本地模型六大族谱：先按显存选，再按任务选",
      desc: "daily.dev 年度指南：Llama、Mistral、Qwen、DeepSeek、Gemma、Phi 是本地部署六大主流家族；Qwen 是最稳妥的全能默认，DeepSeek 擅长逻辑推理，8GB 显存可用 R1 Distill 7B/8B Q4 起步。",
      src: "daily.dev", href: "https://daily.dev/blog/best-local-llm-models-run" },
    { tag: "榜单快照", time: "09-19", title: "AA 全榜 268 款已评分模型：开放权重仍占近半",
      desc: "今日抓取 Artificial Analysis 全榜共 268 款已评分模型（另 4 款未评分）；榜首 Claude Fable 5.1 (max) 53 分，开放权重阵营 GLM-5.3 (max) 45 分、Kimi K3 (max) 44 分、GLM-5.3-Flash 42 分居前列。",
      src: "Artificial Analysis", href: "https://artificialanalysis.ai/leaderboards/models" },
  ],
  news: [
    { tag: "融资", time: "09-10", title: "Positron AI 完成 8.75 亿美元 C 轮，估值 50 亿美元",
      desc: "NEA、Atreides Management 等领投，卡塔尔投资局、Cisco 投资部与 Naver Ventures 跟投；公司自研内存优先推理处理器，单芯片最高 2.3TB 内存，已在 Oracle Cloud Infrastructure 部署 50 余架机架。",
      src: "Ignita", href: "https://www.ignita.ai/insights/biggest-us-funding-rounds-week-ending-2026-09-11" },
    { tag: "融资", time: "09-11 当周", title: "Cognition AI 融资 20 亿美元，估值 480 亿美元",
      desc: "截至 9 月 11 日当周，美国披露融资总额约 93 亿美元、16 轮以上大额融资，为 2026 年前沿 AI 巨轮之外的单周最高水平；Cognition 与隧道基建项目并列当周头部。",
      src: "Ignita", href: "https://www.ignita.ai/insights/biggest-us-funding-rounds-week-ending-2026-09-11" },
    { tag: "治理", time: "09-06", title: "AI Score 获 460 万欧元种子轮，加码企业 AI 治理",
      desc: "英国初创 AI Score 完成由 Fuel Ventures 领投的 460 万欧元种子轮融资，用于扩展其企业 AI 治理平台，「AI 治理」赛道融资热度延续。",
      src: "N24", href: "https://n24.com.tr/technology/ai-score-secures-46-million-seed-funding-for-ai-governance-539" },
    { tag: "市场", time: "09 月首周", title: "印度初创 9 月首周融资 2.77 亿美元，企业 AI 在列",
      desc: "9 月 1-7 日印度共 22 轮融资超 2.77 亿美元，覆盖太空、健康科技、金融科技与企业 AI 等 10 个赛道；Pixxel 单轮 1 亿美元领跑，Navana.ai 获 40 亿卢比主权语音 AI 融资。",
      src: "BestStartup", href: "https://beststartup.in/india-startup-funding-september-2026-week-one" },
    { tag: "市场", time: "2026 H1", title: "MENA 上半年 AI 投资 17 亿美元，向少数大额轮次集中",
      desc: "Wamda 数据：海湾市场 2026 上半年部署 17 亿美元、242 轮融资，同比下滑 18%；资本向 pre-IPO 与成长期集中，AI 相关公司在海湾市场持续享受估值溢价。",
      src: "Ignita", href: "https://www.ignita.ai/insights/biggest-mena-funding-rounds-week-ending-2026-09-04" },
    { tag: "资本", time: "09 月", title: "1100 亿美元融资落地后，三巨头 token 价格战继续",
      desc: "软银、英伟达、亚马逊参投的 OpenAI 1100 亿美元融资落地后，Sherwood News 报道 OpenAI/Anthropic/Google 竞相压低 token 定价以守市场份额，「没有一家赚钱」；即将上市的 OpenAI 被曝拟进一步降价。",
      src: "Sherwood News", href: "https://sherwood.news/tech/openai-anthropic-google-price-wars-where-no-one-is-making-money/" },
  ],
  status: [
    { tag: "可用性", time: "探测于 09-19 09:58", title: "lingshu.baige.net.cn 正常运行", ok: true,
      desc: "HTTP 200 · 响应 0.81s · 服务器 nginx · 页面标题「灵枢 Lingshu」加载正常。",
      src: "lingshu.baige.net.cn", href: "https://lingshu.baige.net.cn" },
    { tag: "隧道", time: "探测于 09-19 09:58", title: "EasyTier 隧道正常（端到端可达 192.168.120.x）", ok: true,
      desc: "正向判定：穿透隧道访问 156 节点 TVHeadend EPG 返回 10 条节目单，隧道健康；.1:11010 端口探测不可达（该节点防火墙对任意端口回 SYN-ACK 后应用层静默丢包，仅辅助信号）。",
      src: "192.168.120.156:9981 EPG", href: "http://192.168.120.156:9981/api/epg/events/grid" },
    { tag: "EPG", time: "探测于 09-19 09:58", title: "TVHeadend 143 EPG 正常", ok: true,
      desc: "HTTP 200 · 10 条节目 · 当前档：大湾区卫视高清《短剧连环炮：72 家房客》、RTHK TV 31《演藝盛薈：粵劇 八和會館》。",
      src: "192.168.188.143:9981", href: "http://192.168.188.143:9981/api/epg/events/grid" },
    { tag: "EPG", time: "探测于 09-19 09:58", title: "TVHeadend 156 EPG 正常", ok: true,
      desc: "HTTP 200 · 10 条节目 · 当前档：*HOY 77《愛知‧名古屋亞運會開幕典禮[直播]》、TVB Plus《日本職業足球聯賽 福岡黃蜂 對 廣島》。",
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
