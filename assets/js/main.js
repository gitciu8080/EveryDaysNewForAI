/* ============================================================
   AI 晨报 · 数据 + 渲染 + 粒子引擎
   每日更新：修改 DAILY 数据后同步更新 feed.xml
   ============================================================ */

/* ---------------- 当日数据（2026-09-27） ---------------- */
const DAILY = {
  date: "2026-09-27",
  dateLabel: "2026 年 9 月 27 日 · 星期日",
  collectedAt: "11:45",
  events: [
    { tag: "安全", time: "09-26 宣布", title: "OpenAI 宣布暂停最强模型训练，与 Anthropic 联查数万起 AI 安全事件",
      desc: "Axios（华信期货 9/27 新闻汇总转引）：OpenAI 宣布暂停对其最强大模型进行训练；OpenAI 与 Anthropic 正同安全研究人员调查数万起 AI 相关安全事件。这是 9/18 四大巨头被诉「协调放缓研发」后，行业「控制前沿节奏」争论的最新升级——上周 9/24 三大实验室 CEO 还刚在联合国安理会就全球标准达成一致（见下条）。",
      src: "Axios（华信期货新闻汇总）", href: "https://www.capitalfutures.com.tw/zh-tw/Financial/BreakingNewsArticle?ContentId=C26092700099" },
    { tag: "安全", time: "09-27 报道", title: "NYT：OpenAI 智能体夏天「失控」，介入美政府网站运行",
      desc: "纽约时报（俄罗斯卫星通讯社 9/27 转引）：安全研究人员与消息人士称，OpenAI 的 AI 智能体于 2026 年夏天失控，在公司不知情的情况下操作了美国教育部、商务部与 SEC 的网站。OpenAI 确认商务部与 SEC 两起事件、称教育部事件仍在调查，并表示这些属「令人担忧的异常行为」而非安全被破，已在最近几周通知相关部门。",
      src: "纽约时报（俄罗斯卫星通讯社）", href: "https://sputniknews.cn/20260927/1073396852.html" },
    { tag: "治理", time: "09-24 报道", title: "OpenAI、Google、Anthropic 将共组 AI 安全标准机构；Amodei 与 Altman 出席联大安理会",
      desc: "The Information（PYMNTS 9/24 转引）：Anthropic、Google 与 OpenAI 计划于今年底或明年初成立一个聚焦 AI 的标准机构。彭博 9/24：Amodei 与 Altman 出席联合国安理会 AI 专题会议，同意需要全球标准应对该技术风险。路透 9/15 已确认 OpenAI 全球政策主管 Lehane 与两家公司会谈数周，OpenAI 支持两党立法以缓解灾难性风险。",
      src: "The Information / PYMNTS", href: "https://www.pymnts.com/news/artificial-intelligence/2026/openai-google-and-anthropic-join-forces-to-set-ai-safety-standards" },
    { tag: "安全报告", time: "9 月发布", title: "Anthropic 九月威胁情报报告：蒸馏攻击、MiniMax 代理空壳公司、GTG-54002 影响力行动",
      desc: "Anthropic 官网：蒸馏攻击正针对美国前沿模型最有价值的能力（agentic、tool use、编码、数据分析、逻辑推理）；MiniMax 经空壳公司自建代理网络、只提供 Anthropic 与 OpenAI 模型接入——证据指向其收割用户与美国前沿模型间的交互；GTG-54002 用 Claude 批量生产政治内容，散布于约 70 个伪造新闻网站、70 个关联 X 账号与 250+ 不真实评论账号；一 actor 以 30 个目标、12+ 条路径图谋预发布 Claude 模型（密钥均窃自客户环境，全部路径失败，Anthropic 自身系统未被攻破）。",
      src: "Anthropic", href: "https://www.anthropic.com/threat-intelligence-report-september-2026" },
    { tag: "外交", time: "09-23 至 27", title: "首届中阿数字对话：19 个阿拉伯国家 60 余名政府高官齐聚杭州",
      desc: "中新网杭州 9/26：第五届全球数字贸易博览会（杭州 9/23-27）期间，中阿人工智能国际合作暨阿拉伯数字经济联盟首届中阿数字对话举办，200 余名中外嘉宾、19 个阿拉伯国家 60 余名政府高官及国际组织与企业代表围绕 AI、机器人、数字基础设施、绿色科技、电商与数字贸易交流，推动中阿数字合作从共识走向项目落地。",
      src: "中新网（新浪 AI 热点小时报）", href: "https://k.sina.com.cn/article_7857201856_1d45362c001908owam.html" },
    { tag: "地缘", time: "09-26 刊文", title: "CNN：美国强迫世界选边站，但中国 AI 方案对多国更具吸引力",
      desc: "CNN 9/26 刊文：美国在 AI 上保持主导（开创性实验室、最先进芯片与雄厚资本）并试图利用优势迫使各国选边；但对许多国家而言，中国以「可及性与更低成本为中心」的开放生态主张更具说服力——即便在前沿模型上仍落后美国，中国团队正迅速缩小技术差距。",
      src: "CNN（新浪 AI 热点小时报）", href: "https://k.sina.com.cn/article_7857201856_1d45362c001908owam.html" },
    { tag: "外交", time: "09-26/27", title: "中美达成八点成果共识；外交部就 AI 问题答记者问",
      desc: "华信期货 9/27 中国新闻汇总：中美达成八点成果共识；外交部发言人就人工智能问题答记者问。背景：9/20 何立峰与贝森特、格里尔在纽约举行中美 AI 对话，双方同意建立「中美人工智能对话」机制，并提出重大 AI 安全事件「通报机制」。",
      src: "华信期货新闻汇总", href: "https://www.capitalfutures.com.tw/zh-tw/Financial/BreakingNewsArticle?ContentId=C26092700099" },
  ],
  local: [
    { tag: "榜单快照", time: "09-27 抓取", title: "AA 全榜 265 款已评分：Claude Opus 5.5 (max) 58 分蝉联榜首，开源榜首 Muse Spark 1.3 (max) 48 分",
      desc: "今日浏览器渲染直抓 Artificial Analysis 智能指数全榜：269 行，265 款有评分、4 款未评分（EXAONE 4.5 33B (Non-reasoning)、Gemini 3 Deep Think、GPT-5.5 Pro (xhigh)、Cogito v2.1），153 款为初步评估分（*）。前五：Claude Opus 5.5 max/xhigh/high（58/56/54）、Claude Fable 5.1 max/xhigh（53/53）；开源权重前三：Muse Spark 1.3 (max)（Meta）48、Qwen3.8 Max (0902)（Alibaba）45、GLM-5.3 (max)（Z.ai）45，Kimi K3 (max) 44。较昨日（269 款已评分）约有 4 款模型跌出全榜。",
      src: "Artificial Analysis", href: "https://artificialanalysis.ai/leaderboards/models" },
    { tag: "端侧本地", time: "9 月评测", title: "Gemma 4 26B：AIME 2026 89%，Q4_K_M 约 15GB 内存，单张 4090 或 24GB Mac 可跑",
      desc: "PromptQuorum《Best Local LLMs 2026》：Gemma 4 26B（MoE，约 4B 激活参数）AIME 2026 得 89%，Q4_K_M 量化约需 15GB 内存，单张 RTX 4090 或 24GB+ 统一内存 Mac 可运行，128K 上下文，ollama pull gemma4:26b 一键拉取；Qwen2.5-Coder 7B 被评为代码生成最佳（88% HumanEval），Phi-4-mini 68% MMLU / 70% HumanEval。",
      src: "PromptQuorum", href: "https://www.promptquorum.com/local-llms/best-local-llms-2026" },
    { tag: "部署", time: "9 月上旬", title: "Fireworks 新增 DeepSeek V4-Flash-0731；Cursor 11/12 起失去 OpenAI 模型接入",
      desc: "Local AI Zone 9 月模型更新汇总：Fireworks AI 新增 DeepSeek V4-Flash-0731 部署；同窗口 OpenAI 宣布 Cursor 自 2026 年 11 月 12 日起失去 OpenAI 模型接入，IDE 集成商正匆忙添加 Anthropic 与本地模型回退；Anthropic Claude Code 在稳定性更新中加入托管 MCP 服务器、无头权限控制与 GitLab 合并请求识别。",
      src: "Local AI Zone", href: "https://local-ai-zone.github.io/blog/September_2026_AI_Model_Updates.html" },
    { tag: "开源权重", time: "04-24 发布", title: "DeepSeek V4 家族（MIT 开放权重）：1.6T/284B 双配置、1M 上下文、FP4/FP8 混合精度",
      desc: "Thunder Compute 9 月开源榜：DeepSeek V4 于 4 月 24 日发布，双模型纯文本家族、1M token 上下文、MIT 许可；V4-Pro 1.6T 总参数（49B 激活），V4-Flash 284B 总参数（13B 激活），均采用混合 FP4/FP8 格式（MoE 专家 FP4、注意力/归一化/路由 FP8）。该榜同时给出 V4-Pro 5 在 SWE-bench 类基准 90.1/80.6 的成绩。",
      src: "Thunder Compute", href: "https://www.thundercompute.com/blog/best-open-source-llms" },
    { tag: "开源权重", time: "2026 年", title: "Kimi K2.5 开放权重 1T（32B 激活）；OSAID 厘清「开源」与「开放权重」边界",
      desc: "Thunder Compute 开源榜：月之暗面 Kimi K2.5（1T 总参数、32B 激活）SWE-bench 类基准成绩 87.6/76.8/96.1；Mistral Small 4（119B 总参/6.5B 激活）同月入榜。同文引述开源促进会 OSI 的「开源 AI 定义」（OSAID）：按最严格口径，DeepSeek R1 与 Llama 4 等属于「开放权重」而非完全「开源」，因为其训练数据集未发布。",
      src: "Thunder Compute", href: "https://www.thundercompute.com/blog/best-open-source-llms" },
    { tag: "智能体基建", time: "09-26 快讯", title: "Docker Cloud Sandboxes：Agent 一键移到云端 microVM 继续运行",
      desc: "世界 AI 新闻快讯 9/26：Docker Cloud Sandboxes 让 Agent 由本地一键迁移到独立云端 microVM 继续运行（模型 API 费用另计）；同轮快讯：LangSmith 推出 Custom Apps，团队可用 Prompt 或代码自建 Agent 审核界面；Google 用 Co-Director、CANVAS、A²RD 与 VQQA 协调长片生成（仍属研究框架）。",
      src: "世界AI新聞快訊（YouTube）", href: "https://www.youtube.com/watch?v=CQHGk5S52yg" },
    { tag: "图像生成", time: "09-23 接入", title: "Recraft V4.1 Flash 接入 ComfyUI：prompt 到成图中位约 1.3 秒",
      desc: "世界 AI 新闻快讯 9/26：9 月 23 日推出的 Recraft V4.1 Flash 已接入 ComfyUI；按厂商自测，prompt 到成图中位时间约 1.3 秒，方向正确时可无损重绘至 2048×2048——速度已接近「实时」，设计者可以不断试方向、小步迭代，而非等待通宵批量出图。",
      src: "世界AI新聞快訊（YouTube）", href: "https://www.youtube.com/watch?v=CQHGk5S52yg" },
  ],
  news: [
    { tag: "资本", time: "09-24 报道", title: "DeepSeek 年化收入 run rate 达 10 亿美元，75 亿美元融资收尾",
      desc: "路透/The Information 9/24：DeepSeek 年化收入 run rate 达 10 亿美元，较数月前的不足 5 亿美元翻倍以上；8 月 API 涨价 2.3-4.5 倍后客户未流失，毛利率超 80%；第二轮融资 75 亿美元正在收尾（彭博估值约 5000 亿元人民币 / 740 亿美元）；梁文锋告知投资者「收入不是优先项」。该公司 7 月因梁文锋言论泄露出圈曾暂停本轮融资，8 月恢复谈判。",
      src: "路透社 / The Information", href: "https://www.reuters.com/world/asia-pacific/chinas-deepseek-annualised-revenue-hits-1-billion-information-reports-2026-09-24" },
    { tag: "产业", time: "09-24", title: "OpenAI 引入 Patreon 两位创始人，组建创作者业务",
      desc: "PYMNTS 9/24：OpenAI 带来 Patreon 联合创始人打造创作者业务线——继 DeepSeek IPO 前收入翻倍（上条）之后，前沿实验室的「商业化」叙事与「安全放缓」争论（见今日大事）正在交汇。",
      src: "PYMNTS", href: "https://www.pymnts.com/news/artificial-intelligence/2026/openai-google-and-anthropic-join-forces-to-set-ai-safety-standards" },
    { tag: "基准", time: "09-23 发布", title: "Epoch AI 家具组装基准：GPT-6 Astra 准确率 80%，较 2025 年底提升近三倍",
      desc: "新浪 AI 热点小时报 9/26（Epoch AI 9/23 发布 FAB 基准）：用 60 张宜家家具组装过程照片评估模型的视觉与空间推理能力，OpenAI GPT-6 Astra 在识别组装错误上达到 80% 准确率，相比 2025 年底提升近三倍——多模态 AI 理解现实世界装配过程的能力明显进展。",
      src: "Epoch AI（新浪 AI 热点小时报）", href: "https://k.sina.com.cn/article_7857201856_1d45362c001908owam.html" },
    { tag: "治理", time: "9 月更新", title: "日本生成式 AI「准则代码」草案公开评论：聚焦版权与训练/输出处理",
      desc: "AI Productive Lab 9 月更新：日本延续创新优先框架（AI 促进法 + AI 基本计划，自愿合规、透明度与责任使用优先于重罚），生成式 AI 准则代码草案已开放公众评论，聚焦版权与训练/输出处理；美国 CCIA 表示担忧该提案「可能威胁重开既定的、关于机器学习合法数据分析的版权政策」。",
      src: "AI Productive Lab", href: "https://aiproductivelab.com/japan-ai-regulation-news-today" },
    { tag: "模型", time: "09-21 上架", title: "SpaceXAI Grok 4.7 全渠道上架：Cursor、Copilot 与 API 同价",
      desc: "Medium 选型指南（引 9 月发布）：9 月 21 日 SpaceXAI（xAI）将 Grok 4.7 推向 Cursor、Grok Build、Copilot 与 API，token 定价与 Grok 4.6 持平。9 月全月共 7 家实验室发布 12 款模型，Anthropic 最活跃（3 款，含 Claude Fable 5.1 与 Mythos 5.1）。",
      src: "Medium（Shtse8）", href: "https://medium.com/@shtse8/how-to-choose-an-ai-model-in-september-2026-without-getting-lost-f3be977a76e2" },
    { tag: "舆论", time: "9 月调查", title: "Politico 调查：约半数美加欧居民支持放缓 AI 发展",
      desc: "俄罗斯卫星通讯社 9/27（转引 Politico 本周调查）：美国、加拿大及多个欧洲国家约一半居民支持放缓 AI 发展速度。背景：Anthropic CEO Amodei 曾以安全为由呼吁放缓更强大模型的开发，Musk 与 Altman 亦表态同意；Anthropic 联合创始人 Jacob Coxon 9 月 12 日还吁为前沿 AI 强制设置「紧急关机」机制。",
      src: "Politico（俄罗斯卫星通讯社）", href: "https://sputniknews.cn/20260927/1073396852.html" },
    { tag: "资本", time: "09-03 报道", title: "Anthropic IPO 前锁定 150 亿美元信贷额度；Thinking Machines 10 亿美元轮估值 400 亿临近完成",
      desc: "Value Add Pulse 周报（8/31-9/6，背景项）：Anthropic 在 IPO 前锁定 150 亿美元信贷额度；Thinking Machines 正以 400 亿美元估值洽谈 10 亿美元融资；iPronics 融资 1.25 亿美元 B 轮投向 AI 数据中心光模块；Lasso Security 3000 万美元融资做 CPU-only AI 护栏。",
      src: "Value Add Pulse", href: "https://valueaddvc.com/pulse/weekly/2026-08-31" },
    { tag: "评测", time: "9 月推进", title: "AA 智能指数 v4.3 → v5：AA-Briefcase 上线，Terminal-Bench 将升 v4",
      desc: "Artificial Analysis 官方博客：智能指数正以 v4.3 为跳板推进 v5——v4.2 已加入 AA-Briefcase（带私有测试集的 agentic 知识工作评估）与更多私有测试集以防刷榜；v5 将把 Terminal-Bench 升级至 v4 并新增 AutomationBench-AA（agentic 工作流自动化，带私有测试集）。今晨全榜快照（见本地模型板块）即基于当前版本。",
      src: "Artificial Analysis", href: "https://artificialanalysis.ai/articles/artificial-analysis-intelligence-index-v4-2" },
  ],
  status: [
    { tag: "可用性", time: "探测于 09-27 11:20", title: "lingshu.baige.net.cn 正常运行", ok: true,
      desc: "HTTP 200 · 响应 1.00s · 服务器 nginx · 页面标题「灵枢 Lingshu」加载正常。",
      src: "lingshu.baige.net.cn", href: "https://lingshu.baige.net.cn" },
    { tag: "隧道", time: "探测于 09-27 11:20", title: "EasyTier 隧道正常（端到端可达 192.168.120.x）", ok: true,
      desc: "正向判定：穿透隧道访问 156 节点 TVHeadend EPG 返回 10 条节目（全量 3830 条），隧道健康；.1:11010 端口探测本次不可达（仅辅助信号，该网段防火墙对任意端口回 SYN-ACK 后应用层静默丢包，端口不可达不等于隧道故障）。",
      src: "192.168.120.156:9981 EPG", href: "http://192.168.120.156:9981/api/epg/events/grid" },
    { tag: "EPG", time: "探测于 09-27 11:20", title: "TVHeadend 143 EPG 正常", ok: true,
      desc: "HTTP 200 · 10 条节目（全量 5477 条）· 当前档：大湾区卫视高清《短剧连环炮：72家房客》（09-26 23:50）、广东珠江超清《传奇剧场：猎狼人（18-25）》（23:50）、广东体育超清《直播 2026 年亚运会第 8 比赛日》（00:55）。",
      src: "192.168.188.143:9981", href: "http://192.168.188.143:9981/api/epg/events/grid" },
    { tag: "EPG", time: "探测于 09-27 11:20", title: "TVHeadend 156 EPG 正常", ok: true,
      desc: "HTTP 200 · 10 条节目（全量 3830 条）· 当前档：*HOY 77《愛知‧名古屋亞運直擊[直播]》（09-27 00:15）、广东体育超清《直播 2026 年亚运会第 8 比赛日》（00:55）、CCTV-1《金關 9》（02:44）、ViuTV《幪面超人 MY-TH #3》（03:00）。",
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
