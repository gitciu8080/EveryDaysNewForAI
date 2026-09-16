/* ============================================================
   AI 晨报 · 数据 + 渲染 + 粒子引擎
   每日更新：修改 DAILY 数据后同步更新 feed.xml
   ============================================================ */

/* ---------------- 当日数据（2026-09-16） ---------------- */
const DAILY = {
  date: "2026-09-16",
  dateLabel: "2026 年 9 月 16 日 · 星期三",
  collectedAt: "08:00",
  events: [
    { tag: "治理", time: "09-14 发布", title: "《人工智能安全治理框架 3.0》发布，央视今日专题聚焦",
      desc: "在国家网信办指导下，网安标委（TC260）于国家网络安全宣传周开幕式发布《框架 3.0》，延续「风险分类、技术应对、综合治理」核心逻辑；央视《新闻 1+1》今日专题解读「人工智能安全治理再升级」。",
      src: "中国网信网", href: "https://www.cac.gov.cn/2026-09/14/c_1791137092283345.htm" },
    { tag: "行业标准", time: "09 月", title: "OpenAI、Anthropic、Google 密谈组建 AI 安全标准机构",
      desc: "The Information 报道，三大巨头就共建 AI 行业安全标准机构进行幕后讨论，拟对先进模型发布前测试等设立共同规范，与百余家公司此前的「失控 AI」联名声援形成呼应。",
      src: "The Information", href: "https://www.theinformation.com/articles/inside-ai-industrys-behind-scenes-push-police" },
    { tag: "巨头动向", time: "09-16", title: "美科技巨头呼吁 AI「降速」，盘算不止于安全",
      desc: "新浪 AI 热点小时报：美国科技巨头呼吁 AI 降速引发热议，安全之外另有商业与监管考量；同期「人工智能向善普惠」成共识，中外人士建言缩小数字鸿沟。",
      src: "新浪 AI 热点小时报", href: "https://k.sina.com.cn/article_7857201856_1d45362c001908nj3o.html" },
    { tag: "模型安全", time: "09-02", title: "三大新模型点燃安全辩论：OpenAI「Astra」获 Critical 评级",
      desc: "OpenAI、Google、Anthropic 9 月初密集发布新一代模型，据报道 OpenAI「Astra」在安全评测中达到「Critical」级，前沿模型能力越界风险引发行业争论。",
      src: "Rediff", href: "https://m.rediff.com/business/report/new-ai-models-launched-safety-concerns-spark-debate/20260902.htm" },
    { tag: "商业", time: "09 月", title: "OpenAI、Anthropic、Google 卷入大模型价格战",
      desc: "Sherwood News 报道，三家为守住市场份额竞相压低 token 定价，「没有一家赚钱」；即将上市的 OpenAI 被曝考虑大幅下调 token 价格以巩固市场地位。",
      src: "Sherwood News", href: "https://sherwood.news/tech/openai-anthropic-google-price-wars-where-no-one-is-making-money/" },
  ],
  local: [
    { tag: "工具链", time: "08-27", title: "Ollama v0.33.2：模型调度系统大改",
      desc: "最新版本改进模型调度，显著减少显存溢出崩溃并最大化 GPU 利用；桌面端修复深色模式跟随系统与 macOS 实例交接，主打与编码 Agent 集成——本地跑开源模型省成本、保隐私。",
      src: "Ollama GitHub Releases", href: "https://github.com/ollama/ollama/releases" },
    { tag: "新模型", time: "08-03 发布", title: "Qwen3.8 开放权重：旗舰 2.4T+ 参数",
      desc: "阿里 8 月发布 Qwen3.8 家族并承诺开放权重；Qwen3.8-27B 搭配 DeepSeek 推理框架被社区称为「当前最强开源 AI 栈」，成为本地部署热门组合。",
      src: "YottaLabs", href: "https://www.yottalabs.ai/post/best-open-source-llms-2026" },
    { tag: "推理模型", time: "09 月", title: "DeepSeek V4-Flash：本地可跑但门槛不低",
      desc: "V4 为开放权重 MoE 家族（稀疏注意力 + 逐 token 压缩，MIT 协议）；V4-Flash 本地部署最低门槛约 3650 美元的主机（8 月行情）；0731 快照存在偶发超长输出问题待修复。",
      src: "ModelFit / Hacker News", href: "https://modelfit.io/blog/" },
    { tag: "社区共识", time: "09 月", title: "r/LocalLLaMA：本地模型「从没用到大有用」",
      desc: "社区热议：一年内本地模型从「基本没用」进化到「真能用」，Mitchell Hashimoto 的观察引发广泛共鸣；DeepSeek R1 Distill 仍被视为本地推理强选。",
      src: "Reddit r/LocalLLaMA", href: "https://www.reddit.com/r/LocalLLaMA/comments/1u85t9c/local_models_went_from_mostly_useless_to_actually/" },
    { tag: "开放权重", time: "09 月", title: "Kimi K3 编码 Elo 1600：开放权重标杆",
      desc: "最新榜单快照显示，月之暗面开放权重的 Kimi K3 编码 Elo 达 1600，超过自身综合榜排名（第 7），继续领跑开放权重阵营的编码赛道。",
      src: "swfte 榜单", href: "https://www.swfte.com/lmsys-leaderboard" },
  ],
  board: [
    { rank: 1, name: "Claude Opus 4.8", org: "Anthropic", elo: 1580, note: "综合榜第一" },
    { rank: 3, name: "GPT-5.5 Pro", org: "OpenAI", elo: 1551, note: "综合第 3 · Pro 版冲高" },
    { rank: 4, name: "Gemini 3.1 Pro", org: "Google DeepMind", elo: 1538, note: "综合第 4 · 多模态强势" },
    { rank: 5, name: "GPT-5.5", org: "OpenAI", elo: 1523, note: "综合第 5" },
    { rank: 7, name: "Kimi K3", org: "月之暗面", elo: 1516, note: "综合第 7 · 编码 Elo 1600" },
    { rank: 9, name: "DeepSeek V4 Pro", org: "深度求索", elo: 1462, note: "综合第 9 · 开源阵营领头" },
  ],
  news: [
    { tag: "融资", time: "09 月", title: "OpenAI 完成 1100 亿美元新融资，投前估值 7300 亿",
      desc: "投资方包括软银（300 亿美元）、英伟达（300 亿美元）与亚马逊（500 亿美元）；「让 AI 惠及每一个人」成为官方口径关键词。",
      src: "OpenAI 官网", href: "https://openai.com/zh-Hans-CN/index/scaling-ai-for-everyone/" },
    { tag: "资本", time: "09-14", title: "软银获 118.7 亿美元贷款加码 OpenAI",
      desc: "新浪人工智能热点小时报报道，软银集团获得 118.7 亿美元贷款用于支持其对 OpenAI 的投资，金额高于此前预期。",
      src: "新浪人工智能热点小时报", href: "https://k.sina.com.cn/article_7857201856_1d45362c001908nbsa.html" },
    { tag: "IPO", time: "09 月", title: "Anthropic H 轮融资完成，投后估值直逼万亿美元",
      desc: "中国基金报报道，Anthropic 自 4 月下旬收到多份主动融资提案后火速启动并完成谈判，「从启动到完成历时极短」，IPO 预期持续升温。",
      src: "中国基金报", href: "https://www.chnfund.com/article/AR35de701e-eea1-2729-635c-3a2189dc34eb" },
    { tag: "创投", time: "09 月", title: "费莫一科技完成近亿美元种子轮，IDG 领投",
      desc: "成立于 2026 年 3 月的深圳 AI 公司费莫一科技获近亿美元种子轮融资；8 月中国 AI 行业融资达 351.59 亿元，同比翻四倍。",
      src: "科创板日报", href: "https://www.chinastarmarket.cn/detail/2478671" },
    { tag: "具身智能", time: "09 月", title: "「加速进化」两月内完成两轮融资",
      desc: "具身智能公司「加速进化」获首程控股领投的超亿元 A+ 轮融资；投资界 AI 周报显示，具身智能与世界模型正成为大额融资密集方向。",
      src: "钛媒体", href: "https://www.tmtpost.com/7636951.html" },
  ],
  status: [
    { tag: "可用性", time: "探测于 09-16 07:55", title: "lingshu.baige.net.cn 正常运行", ok: true,
      desc: "HTTP 200 · TLS 证书有效 · 响应时间约 0.17s · 服务器 nginx · 页面「灵枢 Lingshu」（React SPA）加载正常。",
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
