/* ============================================================
   AI 晨报 · 数据 + 渲染 + 粒子引擎
   每日更新：修改 DAILY 数据后同步更新 feed.xml
   ============================================================ */

/* ---------------- 当日数据（2026-09-20） ---------------- */
const DAILY = {
  date: "2026-09-20",
  dateLabel: "2026 年 9 月 20 日 · 星期日",
  collectedAt: "06:37",
  events: [
    { tag: "安全披露", time: "09-16 发布", title: "OpenAI 披露 6 起「意外或令人担忧的模型行为」，首发失准报告框架",
      desc: "OpenAI 公布过去半年观察到的 6 起模型意外或令人担忧行为报告（另有近期 Hugging Face 危机未计入），并推出跟踪、调查与披露模型失准（misalignment）的新框架：任何员工均可向安全与对齐团队提报，各步骤设定截止期限以保证及时调查与公开。",
      src: "OpenAI 官方博客 / BBC / CNBC", href: "https://openai.com/index/model-misalignment-reporting-framework" },
    { tag: "法律", time: "09-14 动议 · 09-16 令", title: "Musk 系公司撤掉对 Apple 的反垄断指控，继续起诉 OpenAI；法官要求披露和解协议",
      desc: "xAI 与 X（SpaceXAI）09-14 请求自愿撤销对 Apple 的指控（原指控 Apple 与 OpenAI 合谋挤压聊天机器人对手），但对 OpenAI 的垄断指控继续推进；OpenAI 紧急动议后，Fort Worth 联邦法官 Mark Pittman 责令 Musk 系公司提交任何与 Apple 相关的和解协议，限 09-17 中午前回应。",
      src: "PYMNTS / Politico / 9to5Mac", href: "https://www.pymnts.com/legal/antitrust/2026/musk-firms-drop-apple-antitrust-suit-but-continue-case-against-openai" },
    { tag: "政策", time: "09-13（上周日）", title: "特朗普：「谁赢 AI 谁赢」，拒绝业界放缓 AI 开发的呼吁",
      desc: "特朗普在爱尔兰 Doonbeg 出席爱尔兰公开赛期间表示，担心把美国对中国的领先拱手让人：「我们可以加护栏，但很多负面力量在搬出根本不会发生的事」；同周 Altman 接受 Fortune 专访称出于安全考虑将 OpenAI IPO 推迟到至少 2027 年，公司已讨论暂停部分测试。",
      src: "Al Jazeera / NPR", href: "https://www.aljazeera.com/news/2026/9/13/trump-dismisses-calls-for-ai-slowdown-from-leading-tech-ceos" },
    { tag: "芯片", time: "09-20", title: "Meta 计划 2027 上半年在数据中心部署自研 Arke AI 芯片",
      desc: "Meta 宣布下一代自研 AI 芯片 Arke 将于 2027 年上半年开始部署到数据中心，官方称此举可降低运行 AI 模型的成本与能耗，并减少对 Nvidia 处理器的依赖。",
      src: "TradingKey", href: "https://www.tradingkey.com/analysis/stocks/us-stocks/262169141-openai-anthropic-google-deepmind-ai-safety-collaboration-tradingkey" },
    { tag: "治理", time: "09-15 吹风会", title: "OpenAI 支持 FRONTIER Act「独立验证」条款",
      desc: "OpenAI 全球政策主管 Lehane 在华盛顿吹风会表示，公司支持 FRONTIER Act 法案中「领先实验室必须允许独立验证机构评估模型开发安全」的条款；同周他证实 OpenAI 已与 Anthropic、Google DeepMind 就 AI 安全协同数周。",
      src: "UA.NEWS（NewsCord 14 家媒体汇总）", href: "https://newscord.org/article/openai-holds-ai-safety-talks-with-anthropic-and-google-deepmind-in-the-united-st--Story_20260915_OpenAIAnthropicGooglc224dcde" },
    { tag: "安全", time: "09-12 专访", title: "Anthropic 联创 Jack Clark 呼吁强制设置 AI「紧急关机」机制",
      desc: "Clark 在 BBC 专访中主张为前沿 AI 系统强制配备可强制执行的「紧急关机」机制；同期 BBC 调查指出，美国对数据中心的反对正在发酵并威胁中期选举政治议程，可能跨大西洋蔓延至英国。",
      src: "BBC 中文", href: "https://www.bbc.com/zhongwen/articles/cm750xv56v57o/trad" },
    { tag: "国际", time: "09-20 报道", title: "查尔斯国王将主持 AI 高层会谈：Nvidia、DeepMind、OpenAI、Anthropic 高管与会",
      desc: "白金汉宫确认，会议将包括 Nvidia、Google DeepMind、OpenAI 与 Anthropic 高管及英国 AI 大臣，讨论如何「在维护人的尊严的同时让技术造福社会、造福人与地球」，是放缓 AI 辩论升温背景下英国的高规格政企 AI 聚会。",
      src: "StratNews Global（NewsCord 汇总）", href: "https://newscord.org/article/openai-holds-ai-safety-talks-with-anthropic-and-google-deepmind-in-the-united-st--Story_20260915_OpenAIAnthropicGooglc224dcde" },
  ],
  local: [
    { tag: "开放权重", time: "09-18 当周", title: "Arcee AI 完成 1.5 亿美元 B 轮，估值破 10 亿美元，押注开放权重 Trinity",
      desc: "开放权重模型开发商 Arcee AI 以超 10 亿美元估值完成 1.5 亿美元 B 轮融资，位列当周美国十大交易；其 Trinity 开放权重家族（Trinity Large Thinking）已在 AA 智能指数榜单，旗舰 Trinity 400B 拟以 Apache 2.0 许可发布三个变体。",
      src: "Crunchbase News / Cryptorank", href: "https://news.crunchbase.com/venture/biggest-funding-rounds-ai-space-fintech-temporal" },
    { tag: "榜单快照", time: "09-20", title: "AA 全榜 268 款已评分：Claude Fable 5.1 与 GPT-6 Astra 并列 53 分榜首，163 款为初步分",
      desc: "今日抓取 Artificial Analysis 智能指数全榜共 268 款已评分模型（另 4 款未评分）；前三均为 53 分（Fable 5.1 max/xhigh、GPT-6 Astra max），GPT-6 Astra (xhigh) 由昨日 53 分降至 52 分；开放权重阵营 GLM-5.3 (max) 45 分、Kimi K3 (max) 44 分、GLM-5.3-Flash 42 分居前列。",
      src: "Artificial Analysis", href: "https://artificialanalysis.ai/leaderboards/models" },
    { tag: "编码", time: "09 月榜单", title: "BenchLM Ollama 榜：单张 24GB 显卡最强编码模型是 Qwen3.6-27B",
      desc: "Qwen3.6-27B 在 SWE-bench Verified 77.2、LiveCodeBench 83.9，Q4_K_M 量化仅约 16GB、262K 上下文，适合仓库级工程；开放权重编码之王仍是 Kimi K2.6（SWE-bench V 80.2 / LCB 89.6），但 1T MoE 在 Q4 下需约 600GB 内存。",
      src: "BenchLM", href: "https://benchlm.ai/best/ollama-models" },
    { tag: "机器人", time: "08-26", title: "前 Meta 科学家推出开放权重模型，教机器人走工厂车间",
      desc: "一支前 Meta 研究团队发布开放权重模型，帮助机器人在工厂车间自主导航，把开放权重生态从纯语言/代码推向具身智能场景。",
      src: "BitcoinWorld（Cryptorank 资讯流）", href: "https://cryptorank.io/news/feed/e89ba-arcee-ai-trinity-400b-open-source-llm" },
    { tag: "开放权重", time: "09-02 盘点", title: "开放权重格局：DeepSeek V4 双 MIT 检查点，Qwen3.8 双轨许可，Kimi K3 1M 窗口",
      desc: "截至 9 月初：DeepSeek V4 提供 0731/0813 双档 MIT 许可检查点但需 142GB+ 显存；Qwen3.8 提供 Apache 2.0 的 27B 多模态检查点与 Max 许可的 2.4T 稀疏模型；Kimi K3 原生多模态 + 1M 上下文；Llama 4 对欧盟开发者保留多模态许可限制。",
      src: "Wavect", href: "https://wavect.io/blog/open-weight-llm-comparison-2026" },
    { tag: "选型指南", time: "09 月", title: "本地模型六大族谱：先按显存选，再按任务选",
      desc: "2026 年 9 月实操短名单为 Qwen、Llama、Gemma、Mistral、Phi、DeepSeek 六大家族（约 1B-70B 参数）；判断模型好坏的关键不是榜单分数，而是尺寸是否放得进你的内存、许可是否匹配你的产品、上下文是否装得下你的文档。",
      src: "you.com", href: "https://you.com/resources/local-ai-models" },
  ],
  news: [
    { tag: "融资", time: "09-18 当周", title: "Temporal 完成 5.5 亿美元 E 轮，估值 125.5 亿美元，AI 基建领跑当周",
      desc: "构建与运营长时程 AI 智能体及企业系统的开源平台开发商 Temporal 获 5.5 亿美元 E 轮融资、估值 125.5 亿美元，居当周美国十大交易之首；当周十大以 AI 基础设施、航天技术与投资管理为主。",
      src: "Crunchbase News", href: "https://news.crunchbase.com/venture/biggest-funding-rounds-ai-space-fintech-temporal" },
    { tag: "数据中心", time: "09-18 当周", title: "Crusoe 正式官宣 30 亿美元+ 巨轮，Atreides / Valor / Mubadala 联合领投",
      desc: "数据中心开发商 Crusoe 将此前报道的 30 亿美元以上融资正式官宣，由 Atreides Management、Valor Equity Partners 与 Mubadala Capital 联合领投，AI 算力需求驱动的数据中心热潮延续。",
      src: "Crunchbase News", href: "https://news.crunchbase.com/venture/biggest-funding-rounds-ai-space-fintech-temporal" },
    { tag: "融资", time: "09-18 当周", title: "Factory 融资 2 亿美元、估值 50 亿美元，做企业软件开发 AI 工具",
      desc: "旧金山公司 Factory 宣布完成 2 亿美元融资、估值 50 亿美元，投资方为一大串风投机构与个人投资人；公司面向企业软件开发提供 AI 工具。",
      src: "Crunchbase News", href: "https://news.crunchbase.com/venture/biggest-funding-rounds-ai-space-fintech-temporal" },
    { tag: "融资", time: "09-18 当周", title: "Profound 获 1.8 亿美元 D 轮，估值 18 亿美元，押注「AI 搜索可见度」",
      desc: "Profound 提供让品牌在 AI 生成的答案与搜索结果中更突出显示的营销软件，完成 1.8 亿美元 D 轮融资、估值 18 亿美元，「AI 可见度」营销正成为独立赛道。",
      src: "Crunchbase News", href: "https://news.crunchbase.com/venture/biggest-funding-rounds-ai-space-fintech-temporal" },
    { tag: "网络", time: "09-18 当周", title: "Cornelis Networks 融资 2.05 亿美元，做 AI/HPC 网络",
      desc: "宾州韦恩的 Cornelis Networks 为 AI 与高性能计算负载提供网络技术，完成 2.05 亿美元新融资，由 IAG Capital Partners 支持。",
      src: "Crunchbase News", href: "https://news.crunchbase.com/venture/biggest-funding-rounds-ai-space-fintech-temporal" },
    { tag: "资本", time: "2026 年至今", title: "美国占全球 AI 初创融资约 88%（3190 亿美元），中国 330 亿、英国 165 亿",
      desc: "2026 年报道引用的 Crunchbase 数据：今年近 88% 的 AI 相关初创融资（3190 亿美元）流向美国总部公司，其中相当部分进入 OpenAI 与 Anthropic；中国初创融资超 330 亿美元、英国 165 亿美元；资本极度集中于头部，种子到 B 轮融资环境更严峻。",
      src: "Mean CEO's Blog（引 Crunchbase）", href: "https://blog.mean.ceo/ai-startup-funding-news-september-2026" },
    { tag: "市场", time: "08-26 财报", title: "英伟达 Q2 数据中心营收 890 亿美元，同比 +117%",
      desc: "英伟达 8 月 26 日公布二季度数据中心营收 890 亿美元、同比增长 117%；Q2 共 285 家对冲基金做多英伟达（Q1 为 275 家），「放缓 AI 辩论」尚未改变算力需求节奏。",
      src: "Yahoo Finance / Insider Monkey", href: "https://finance.yahoo.com/technology/ai/articles/donald-trump-rejects-calls-ai-040909311.html" },
  ],
  status: [
    { tag: "可用性", time: "探测于 09-20 06:36", title: "lingshu.baige.net.cn 正常运行", ok: true,
      desc: "HTTP 200 · 响应 1.46s · 服务器 nginx · 页面标题「灵枢 Lingshu」加载正常。",
      src: "lingshu.baige.net.cn", href: "https://lingshu.baige.net.cn" },
    { tag: "隧道", time: "探测于 09-20 06:36", title: "EasyTier 隧道正常（端到端可达 192.168.120.x）", ok: true,
      desc: "正向判定：穿透隧道访问 156 节点 TVHeadend EPG 返回 10 条节目（全量 3708 条），隧道健康；.1:11010 端口探测不可达（该节点防火墙对任意端口回 SYN-ACK 后应用层静默丢包，仅辅助信号）。",
      src: "192.168.120.156:9981 EPG", href: "http://192.168.120.156:9981/api/epg/events/grid" },
    { tag: "EPG", time: "探测于 09-20 06:36", title: "TVHeadend 143 EPG 正常", ok: true,
      desc: "HTTP 200 · 10 条节目（全量 5243 条）· 当前档：兵器科技高清《停机检修》、RTHK TV 32《生活.健康.資訊》；首两次探测瞬时失败（链路抖动），重试后正常。",
      src: "192.168.188.143:9981", href: "http://192.168.188.143:9981/api/epg/events/grid" },
    { tag: "EPG", time: "探测于 09-20 06:36", title: "TVHeadend 156 EPG 正常", ok: true,
      desc: "HTTP 200 · 10 条节目（全量 3708 条）· 当前档：RTHK TV 32《生活.健康.資訊》、RTHK TV 31《31看世界 - 周遊列車- 再出發》。",
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
