/* ============================================================
   AI 晨报 · 数据 + 渲染 + 粒子引擎
   每日更新：修改 DAILY 数据后同步更新 feed.xml
   ============================================================ */

/* ---------------- 当日数据（2026-09-15） ---------------- */
const DAILY = {
  date: "2026-09-15",
  dateLabel: "2026 年 9 月 15 日 · 星期二",
  collectedAt: "22:30",
  events: [
    { tag: "公益 AI", time: "09-15", title: "盖茨基金会宣布投入 10 亿美元推动 AI",
      desc: "西雅图消息：盖茨基金会宣布计划未来两年至少投入 10 亿美元，推动人工智能及基于 AI 的解决方案发展，聚焦全球健康与公共卫生领域。",
      src: "新浪科技", href: "https://k.sina.com.cn/article_7857201856_1d45362c001908nh1g.html" },
    { tag: "行业争论", time: "09-14/15", title: "黄仁勋公开反对「AI 降速」呼声",
      desc: "英伟达 CEO 黄仁勋在峰会上反对放慢 AI 发展速度的呼吁，认为「AI 接管世界」的风险被夸大；话题带动存储芯片概念股走强。此前 Anthropic 联合创办人呼吁为 AI 强制设置「紧急关机」机制，安全之争升温。",
      src: "新浪 AI 情报站", href: "https://k.sina.com.cn/article_7857201856_1d45362c001908nh1g.html" },
    { tag: "产业大会", time: "09-15", title: "2026 人工智能产业大会官宣：10 月济南启幕",
      desc: "山东省政府新闻办宣布：2026 人工智能产业大会将于 10 月 14-16 日在济南举办，主题为「加快推进人工智能赋能新型工业化」，将设 AI 投融资路演并集中发布具身智能等成果。济南 2025 年 AI 核心产业规模达 640 亿元。",
      src: "中新网山东", href: "https://www.sd.chinanews.com.cn/2/2026/0915/103997.html" },
    { tag: "安全", time: "09 月", title: "Anthropic 发布 9 月威胁情报报告",
      desc: "报告披露 2025 年 12 月至 2026 年 8 月间被扰乱威胁行为者的案例研究，覆盖网络攻击到生物滥用等七大危害领域，提出 AI 滥用检测与反制方法。",
      src: "Anthropic 官方", href: "https://www.anthropic.com/threat-intelligence-report-september-2026" },
    { tag: "公司动态", time: "09-15", title: "Sam Altman：OpenAI 2026 年不会上市",
      desc: "Altman 接受《财富》采访时表示，出于安全考虑，此时进行 IPO 是「不明智的」，OpenAI 今年不会寻求上市。",
      src: "AI Weekly", href: "https://aiweekly.co/ai-news-today/edition/2026-09-15" },
    { tag: "融资", time: "近期", title: "AI 融资热潮：Anthropic 冲刺 150 亿美元信贷额度",
      desc: "Anthropic 接近敲定 150 亿美元循环信贷额度，全力筹备「世纪 IPO」；快手旗下可灵 AI 完成独立融资 14 亿元，投后估值 1228 亿元；8 月中国 AI 领域月度融资达 351.59 亿元，同比翻四倍。",
      src: "新浪 AI 情报站", href: "https://k.sina.com.cn/article_7857201856_1d45362c001908nh1g.html" },
  ],
  local: [
    { tag: "新模型", time: "2026", title: "Qwen 3.6-27B：本地编码新王者",
      desc: "被评为主流本地编码最强实用选择，SWE-bench 得分 77.2%，兼顾隐私与性能，是当前隐私优先开发者的首选本地模型。",
      src: "AI Thinker Lab", href: "https://aithinkerlab.com/best-local-llm-models-privacy-dev/" },
    { tag: "推理模型", time: "04-22 发布", title: "DeepSeek V4：推理与日常编码兼顾",
      desc: "2026 年 4 月 22 日发布的 DeepSeek V4 在日常编码、隐私敏感任务与推理场景表现出色，持续占据多个「最佳本地模型」榜单。",
      src: "sanj.dev", href: "https://sanj.dev/post/best-local-llm-models-2026/" },
    { tag: "社区共识", time: "09 月", title: "r/LocalLLaMA：大显存首选 MiniMax M2.5",
      desc: "社区实测共识：在 100+ GB 显存环境下，MiniMax M2.5 综合表现优于 Qwen3.5 系列（397B 变体除外），成为大显存用户的新宠。",
      src: "Reddit", href: "https://www.reddit.com/r/LocalLLaMA/comments/1rkppnl/what_is_the_best_local_llms_as_of_march_2026/" },
    { tag: "生态", time: "2026", title: "本地六大模型家族与工具生态定型",
      desc: "2026 年本地部署六大主流家族：Llama、Mistral、Qwen、DeepSeek、Gemma、Phi；工具链方面 Ollama、LM Studio、Unsloth、Atomic Chat 与 text-generation-webui 领跑。",
      src: "daily.dev / Pinggy", href: "https://daily.dev/blog/best-local-llm-models-run/" },
    { tag: "开放权重", time: "07-09 月", title: "Kimi K3 开放权重冲击编码榜",
      desc: "月之暗面开放权重的 Kimi K3 登顶 LMArena 前端代码竞技场第一，成为首个在编码赛道夺得头名的开放权重模型。",
      src: "swfte 榜单", href: "https://www.swfte.com/lmsys-leaderboard" },
  ],
  board: [
    { rank: 1, name: "Claude Opus 4.8", org: "Anthropic", elo: 1580, note: "综合榜第一" },
    { rank: 2, name: "GPT-5", org: "OpenAI", elo: 1560, note: "紧咬第一梯队" },
    { rank: 3, name: "Gemini 3 Pro", org: "Google DeepMind", elo: 1552, note: "多模态强势" },
    { rank: 4, name: "Kimi K3", org: "月之暗面", elo: 1541, note: "编码榜第一（开放权重）" },
    { rank: 5, name: "Grok 4.5", org: "xAI", elo: 1533, note: "推理特化" },
    { rank: 6, name: "DeepSeek V4", org: "深度求索", elo: 1524, note: "开源阵营领头" },
  ],
  news: [
    { tag: "趋势", time: "09-06", title: "「模型疲劳」：四大巨头同周密集发版",
      desc: "CNBC 报道，Anthropic、OpenAI、Meta 与 Google 同一周内接连发布模型更新，行业发布节奏过快引发「模型疲劳」讨论。",
      src: "CNBC", href: "https://www.cnbc.com/2026/09/06/meta-google-openai-anthropic-ai-model-fatigue.html" },
    { tag: "安全", time: "09-09", title: "Anthropic 研究员警示 AI 加速风险",
      desc: "《纽约时报》报道 Anthropic 内部研究员对 AI 发展速度的担忧；OpenAI 表示将扩大安全测试、放缓部分发布节奏。",
      src: "The New York Times", href: "https://www.nytimes.com/2026/09/09/technology/anthropic-researchers-raise-alarm.html" },
    { tag: "治理", time: "08-27", title: "百余家 AI 公司联名推动行业标准组织",
      desc: "OpenAI、Anthropic、Google 等 100+ 公司联名呼吁防范失控 AI，并讨论建立发布前测试先进模型的行业标准组织。",
      src: "TechCrunch", href: "https://techcrunch.com/2026/08/27/openai-anthropic-google-and-100-other-companies-call-for-action-to-defend-against-rogue-ai/" },
    { tag: "I/O 2026", time: "近期", title: "Google：进入 Agentic Gemini 时代",
      desc: "Google I/O 2026 宣布全面转向「智能体化 Gemini」战略，Agent 能力成为全家桶核心主线。",
      src: "Google 官方博客", href: "https://blog.google/innovation-and-ai/sundar-pichai-io-2026/" },
    { tag: "版权", time: "09 月", title: "Google AI 训练数据再遭版权诉讼",
      desc: "新的诉讼指控 Google 的 AI 系统未经授权使用受版权保护的汽车摄影作品进行训练，AI 训练数据版权争议持续发酵。",
      src: "ChatGPT Is Eating the World", href: "https://chatgptiseatingtheworld.com/" },
  ],
  status: [
    { tag: "可用性", time: "探测于 09-15 22:28", title: "lingshu.baige.net.cn 正常运行", ok: true,
      desc: "HTTP 200 · TLS 证书有效 · 响应时间约 0.11s · 服务器 nginx · 页面「灵枢 Lingshu」（React SPA）加载正常。",
      src: "lingshu.baige.net.cn", href: "https://lingshu.baige.net.cn" },
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

  const maxElo = DAILY.board[0].elo, minElo = Math.min(...DAILY.board.map((b) => b.elo)) - 30;
  $("#board-list").innerHTML = DAILY.board.map((b) => `
    <li class="board-item">
      <span class="rank">${b.rank}</span>
      <span class="b-name">${esc(b.name)}<small>${esc(b.org)} · ${esc(b.note)}</small></span>
      <span class="b-bar"><span class="b-fill" data-w="${((b.elo - minElo) / (maxElo - minElo) * 100).toFixed(1)}"></span></span>
      <span class="b-elo">Elo ${b.elo}</span>
    </li>`).join("");

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
        s.style.display = f === "all" ? "" : (matched && hasVisible ? "" : "none");
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
          setTimeout(() => { f.style.width = f.dataset.w + "%"; }, 150 + i * 90);
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
