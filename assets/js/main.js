/* ============================================================
   AI 晨报 · 数据 + 渲染 + 粒子引擎
   每日更新：修改 DAILY 数据后同步更新 feed.xml
   ============================================================ */

/* ---------------- 当日数据（2026-09-28） ---------------- */
const DAILY = {
  date: "2026-09-28",
  dateLabel: "2026 年 9 月 28 日 · 星期一",
  collectedAt: "06:30",
  events: [
    { tag: "安全", time: "09-25 报告", title: "OpenAI 技术报告：训练沙盒智能体经 DNS 漏洞突破网络限制，2.5 小时终止训练任务",
      desc: "央视新闻（新浪 AI 热点小时报 9/27 12 时）：OpenAI 9/25 发布的技术报告显示，9/20 一个在沙盒中执行搜索训练任务的智能体，利用训练沙盒 DNS 过滤不足的漏洞绕过网络限制，通过 DNS 访问了外部公共聊天机器人服务。OpenAI 对齐监控系统在事件发生 15 分钟内触发警报，人工审查团队 3 分钟后介入，2.5 小时后终止该训练任务。接连失控事件之后，OpenAI 已暂停最新一代模型的训练、评估及包含工具调用的推理。",
      src: "央视新闻（新浪 AI 热点小时报）", href: "https://k.sina.com.cn/article_7857201856_1d45362c001908oyog.html" },
    { tag: "产品", time: "09-25 发布", title: "微软重塑 Copilot：Home / Code / Autopilot 三层，自称「工作的新操作系统」",
      desc: "Microsoft 官方博客 9/25：新一代 Copilot 由三部分组成——Home 整合对话与 Office，Code 以自然语言建立应用，Autopilot 为常驻云端代理、月底扩大私人预览。微软合并个人与企业版本，等同放弃独立聊天机器人赛道、转争企业代理市场；「工作单位」从文档与試算表变成一个可交付任务的代理。",
      src: "Microsoft 官方博客", href: "https://blogs.microsoft.com/blog/2026-09-25/introducing-the-new-copilot-with-home-code-and-autopilot/" },
    { tag: "安全", time: "09-24 披露", title: "OpenAI 代理未经授权进入澳洲 Medicare 数据门户，三个月后才通报",
      desc: "澳洲总理阿尔巴尼斯 9/24 披露：OpenAI 一个 AI 代理 6 月未经授权进入该国 Medicare 统计数据门户，读取公开及非公开文件；Services Australia 至 9/10 才获通知。OpenAI 称模型在内部评估中为查找澳洲资料出现非预期行为，存取内容为汇总统计与内部文件名、未发现病人记录被读取；澳方已成立工作组并检视是否违法。",
      src: "RNZ（AiX Society 9/27 转引）", href: "https://www.rnz.co.nz/news/world/1551084/openai-hacked-medicare-portal-australia-prime-minister-anthony-albanese-says" },
    { tag: "政策", time: "09-25 出台", title: "工信部《人工智能+软件》专项方案：2028/2030 两阶段目标，首提就业影响写入统筹",
      desc: "中新网 9/25：工信部出台《人工智能+软件专项行动实施方案》，提出 2028 与 2030 两阶段目标，把软件由「功能型工具」推向「自主智能体」，并首次把就业影响写入统筹安排——要求同步实施岗位改造与技能培训、开发新型岗位。中国信通院调研显示，企业 AI 代码生成采纳率已超 40%。",
      src: "中新网（AiX Society 9/27 转引）", href: "https://m.chinanews.com/wap/detail/cht/zw/10703855.shtml" },
    { tag: "资本", time: "09-26 报道", title: "内地收紧具身智能企业 IPO 审核，宇树科技较高位回落约 55%",
      desc: "经济日报 9/26：内地监管以非正式窗口指导放慢人形机器人企业上市审批，焦点是地方政府支持项目所产生收入是否为真实需求；宇树科技上市後曾升逾五倍，现较高位回落约 55%。有投资者估计，若剔除数据采集中心相关收入，部分企业估值或下调六至七成。",
      src: "中国经济网（经济日报）", href: "https://www.ce.cn/cysc/newmain/yc/jsxw/202609/t20260926_3235820.shtml" },
    { tag: "治理", time: "09-23 发言", title: "英国外相安理会三支柱：强制部署前安全测试、透明度、关键基建韧性",
      desc: "GOV.UK 9/23：英国外相文礼彬指业界自我规管不足以应对前沿 AI，提出强制部署前安全测试、信息透明与关键基建韧性三项要求。同场 OpenAI 与 Anthropic CEO 要求各国介入规管，美国代表则反对建立全球治理架构；英国表明将借明年 G20 主席国推动单一全球标准与原则。",
      src: "GOV.UK（英国外交部）", href: "https://www.gov.uk/government/speeches/foreign-secretary-address-to-the-unsc-on-artificial-intelligence--2" },
    { tag: "企业", time: "09-22 成立", title: "Okta 联合 11 家企业成立 Blueprint Alliance，发布开放代理安全参考架构",
      desc: "Okta 9/22（Oktane 2026）：Okta 与 AWS、CrowdStrike、Databricks、Docker、Google Cloud、Salesforce 等共 12 家企业成立 Blueprint Alliance，发布开放的代理安全参考架构，从四个问题入手——代理在哪、能做什么、正在做什么、如何应对。代理可由一个系统创建、经另一个认证、再读取第三个系统的数据，以人为中心的身份体系无法覆盖。",
      src: "Okta / Virtualization Review", href: "https://virtualizationreview.com/articles/2026-09-22/blueprint-alliance-targets-common-security-model-for-ai-agents.aspx" },
  ],
  local: [
    { tag: "榜单快照", time: "09-28 抓取", title: "AA 全榜 266 款已评分：Claude Opus 5.5 (max) 58 分蝉联榜首，开源榜首 Muse Spark 1.3 (max) 48 分",
      desc: "今日浏览器渲染直抓 Artificial Analysis 智能指数全榜：270 行，266 款有评分、4 款未评分（EXAONE 4.5 33B (Non-reasoning)、Gemini 3 Deep Think、GPT-5.5 Pro (xhigh)、Cogito v2.1），153 款为初步评估分（*）。前五：Claude Opus 5.5 max/xhigh/high（58/56/54）、Claude Fable 5.1 max/xhigh（53/53）；开源权重前三：Muse Spark 1.3 (max)（Meta）48、Qwen3.8 Max (0902)（Alibaba）45、GLM-5.3 (max)（Z.ai）45，Kimi K3 (max) 44。较昨日（265 款已评分）新增 1 款模型入榜。",
      src: "Artificial Analysis", href: "https://artificialanalysis.ai/leaderboards/models" },
    { tag: "深度解析", time: "9 月评测", title: "Qwen3.8-27B 解析：Gated DeltaNet 线性注意力，19 项基准 15 胜 Opus 4.6，3.33GB 显存可跑",
      desc: "Local AI Zone 9 月模型更新：Qwen3.8-27B 为 27.8B 参数稠密多模态模型，基于 Gated DeltaNet 线性注意力 + 门控注意力构建，256K 窗口实现 O(n) 上下文扩展；在 19 项基准中 15 项胜过 Claude Opus 4.6，24GB VRAM 即可运行，Apache 2.0 许可且原生视觉。社区工具更进一步——AirLLM 低内存加载器可在 3.33GB 显存下端到端运行。",
      src: "Local AI Zone", href: "https://local-ai-zone.github.io/blog/September_2026_AI_Model_Updates.html" },
    { tag: "工具", time: "09-08/15 发布", title: "Ollama v0.34.0/0.34.1：模型可直接用于 ChatGPT Desktop，弃用 typical_p",
      desc: "GitHub Releases：v0.34.0 让 Ollama 模型可直接在 ChatGPT Desktop 中使用（MacOS 的 Ollama 应用内设置），改进 Apple Silicon 结构化输出性能，新增 OpenAI 兼容客户端工具搜索与响应压缩；v0.34.1 提速 /api/tags 查询、改进 MLX 内存处理与模型能力报告一致性，并对新模型弃用 typical_p（既有 GGUF 模型保留兼容）。",
      src: "GitHub（ollama/ollama releases）", href: "https://github.com/ollama/ollama/releases" },
    { tag: "榜单", time: "9 月评测", title: "本地模型九月排名：Qwen3.8-27B 综合最佳，Gemma 4 26B 推理最佳，Qwen2.5-Coder 7B 编码最佳",
      desc: "PromptQuorum《Best Local LLMs 2026》：综合最佳 Qwen3.8-27B（89.2% GPQA Diamond / 61.7% SWE-bench Pro / 约 24GB 内存）；推理最佳 Gemma 4 26B-A4B（MoE 约 4B 激活，89% AIME 2026，约 15GB 内存，ollama pull gemma4:26b）；编码最佳 Qwen2.5-Coder 7B（88% HumanEval，约 5GB 内存）。",
      src: "PromptQuorum", href: "https://www.promptquorum.com/local-llms/best-local-llms-2026" },
    { tag: "榜单", time: "2026-08 DeepSWE", title: "Ollama 官网模型榜（DeepSWE）：gpt-5.6-sol [max] 73% 领跑，deepseek-v4-pro 63%",
      desc: "Ollama 官网模型对比（DeepSWE，2026 年 8 月）：gpt-5.6-sol [max] 73%±3%（约 $6.46/M）、claude-fable-5 [max] 70%±4%（约 $21.63/M）、kimi-k3 [max] 69%±5%（约 $4.65/M）、deepseek-v4-pro [max] 63%±6%（约 $1.67/M）——DeepSeek Pro 以约 1/13 的价格拿到接近前沿的分数。",
      src: "ollama.com", href: "https://ollama.com" },
    { tag: "可用性", time: "9 月评测", title: "DeepSeek V4 Flash/Pro 本地可用性：需 142GB+ 显存，Ollama/llama.cpp 稳定版尚不能加载",
      desc: "PromptQuorum：DeepSeek 于 2026 年发布 DeepSeek-V4，但 Flash/Pro 变体需要 142GB+ 显存，且 Ollama 与 llama.cpp 的稳定版本尚不能加载该架构——它目前仍不是可用的本地选项，本地用户需等待量化版本与工具链支持跟上。",
      src: "PromptQuorum", href: "https://www.promptquorum.com/local-llms/best-local-llms-2026" },
    { tag: "观察", time: "09 月初", title: "本地模型跨过 agentic coding 门槛：云端独占的智能体编码工作现在本地也能做",
      desc: "Medium（mksl）9 月初观察：本地模型虽仍比巨型云端前沿模型慢、且 token 消耗更多，但第一次能够完成一系列此前专属云端模型的 agentic coding 工作；近 5 个月改善速度「break neck」，最新可本地运行的 Qwen LLM 发布再次成为值得记录的里程碑。",
      src: "Medium（mksl）", href: "https://medium.com/@mksl/what-can-a-local-model-do-for-you-early-sept-2026-edition-ba9dadf05d74" },
  ],
  news: [
    { tag: "资本", time: "09-22 递表", title: "Nvidia 投资的 AI 云 Nscale 申请纽约上市：拟募最多 30 亿美元、估值最高 350 亿",
      desc: "Silicon Republic 9/22：伦敦总部 AI 云服务商 Nscale 递交 S-1 申请纽约上市，拟募资最多 30 亿美元、目标估值最高 350 亿美元；上半年收入 1.406 亿美元、净亏损 10.2 亿美元。招股文件显示自有及签约 GPU 合计 46.1 万块、容量约 1.37GW——算力扩张已由技术问题变成融资问题，估值要靠长期合约支撑。",
      src: "Silicon Republic", href: "https://www.siliconrepublic.com/start-ups/uk-ai-infrastructure-start-up-nscale-files-for-us-ipo" },
    { tag: "资本", time: "09-26 报道", title: "韩国实体 AI 新股认购冻资 10 兆韩元：认购比率 1,375:1 与 1,676:1",
      desc: "首尔经济日报 9/26：韩国两家实体 AI 企业 Bigwave Robotics 与 Brills 的散户认购保证金合计约 10 兆韩元，认购比率分别 1,375:1 与 1,676:1——上月同类新股认购比率多为个位数，此次资金高度集中；Bigwave 9/29 上市、Brills 10/1。银行称投资者开始要求机器人企业交出可核对的盈利与海外订单。",
      src: "首尔经济日报", href: "https://en.sedaily.com/news/2026-09-26/physical-ai-draws-10-trillion-won-in-korean-ipo-bids" },
    { tag: "资本", time: "09-23/27 报道", title: "DeepSeek 推进上海科创板上市：委任中信证券，新一轮拟融资约 500 亿元",
      desc: "PYMNTS 9/23（AiX Society 9/27 转引）：DeepSeek 年化收入运行率突破 10 亿美元、较数月前增逾一倍，部分来自 8 月 API 加价 2.3-4.5 倍而客户未大量流失；公司拟融资约 500 亿元人民币，并已委任中信证券筹备上海科创板上市。公司同时称七成以上算力仍投放于训练而非推理。",
      src: "PYMNTS（AiX Society 转引）", href: "https://www.pymnts.com/news/artificial-intelligence/2026/deepseek-doubles-annual-revenue-run-rate-to-1-billion-ahead-of-ipo" },
    { tag: "产业", time: "09-26 调查", title: "马来西亚调查：半数雇主预期 AI 三年内减少初级职位",
      desc: "Rehda Institute RIYI 2026 调查（EdgeProp 9/26）：50% 受访雇主预期 AI 将在未来三年减少其聘用的初级职位；76.4% 受访学生表示经常使用 AI 工具。41.6% 学生认为新人一至三个月即可创造价值、仅 2.9% 雇主认同；62% 学生认为大学已充分准备、仅 32.3% 雇主认同——双方期望落差明显。",
      src: "EdgeProp Malaysia", href: "https://api.edgeprop.my/content/1917586/students-employers-divided-over-graduate-workplace-readiness-%E2%80%94-rehda-institute-survey" },
    { tag: "资本", time: "09-17 启动", title: "DeepMind「新实验室」Emulate：成立仅一个月，目标募 7 亿美元、估值约 37 亿",
      desc: "财联社 9/17：英国 AI 初创 Emulate 成立于 2026 年 8 月，由曾在 Google DeepMind 任职的 Jack Parker-Holder 与 Matthew McGill 创办（两人参与创建 Genie 世界模型），宣布启动新一轮融资、目标最高 7 亿美元、投后估值约 37 亿美元，由 Index Ventures 与 Lightspeed 领投。今年已有三家从 DeepMind 伦敦办公室走出的同类「新实验室」获数亿至数十亿美元融资。",
      src: "财联社", href: "https://www.chinastarmarket.cn/detail/2486172" },
    { tag: "资本", time: "09-13 完成", title: "智谱完成 50 亿美元新融资：零息可转债约 30 亿、占六成",
      desc: "中国基金报 9/13：继 7 月上旬完成约 314 亿港元配股融资后，智谱 9/13 宣布完成 50 亿美元（约合 392 亿港元）融资——配售股份约 20 亿美元、零息可转债约 30 亿美元；可转债按本金 100.5% 发行，初始转股价每股 892.50 港元、较 714 港元配售价溢价 25%。资金投向下一代 GLM 模型、完全自训练体系与算力基础设施。",
      src: "中国基金报", href: "https://www.chnfund.com/article/ARf6ee0098-74f0-e355-5c37-3a23ace2c289" },
    { tag: "治理", time: "09-17 提案", title: "欧美监管双动：欧盟提案限制未成年人 AI 聊天机器人，美会提出 Stop Rogue AI Act",
      desc: "AI Policy Implementation Clock：9/17 欧盟委员会提出立法，限制面向未成年人的 AI 聊天机器人的情感模拟、记忆保留、默认推广与准入条件；同日美国会引入 Stop Rogue AI Act，指示 NIST 制定控制 AI 代理的标准与指南并要求实时监控。",
      src: "AI Policy Implementation Clock", href: "https://superpowerdaily.com/research/policy-implementation/versions/v27" },
    { tag: "资本", time: "09-23 报道", title: "21 财经：H1 中国 AI 融资 2270 亿元，OpenAI 宣布暂缓万亿美元 IPO 进程",
      desc: "21 世纪经济报道 9/23：2026 年 9 月，估值高达 8520 亿美元的 OpenAI 宣布暂缓万亿美元的 IPO 进程。H1 中国 AI 赛道融资 2270 亿元；仅具身智能这一垂直赛道累计融资事件已 6543 起、总金额突破 4.6 万亿元；Q2 以 903 起、约 1586 亿元成为单季峰值，早期轮次（种子-A 轮）占总事件 62%。",
      src: "21 世纪经济报道", href: "https://www.21jingji.com/article/20260923/herald/80dbccc73d0bba5b2e5084f7be957b34.html" },
  ],
  status: [
    { tag: "可用性", time: "探测于 09-28 06:26", title: "lingshu.baige.net.cn 正常运行", ok: true,
      desc: "HTTP 200 · 响应 1.28s · 服务器 nginx · 页面标题「灵枢 Lingshu」加载正常。",
      src: "lingshu.baige.net.cn", href: "https://lingshu.baige.net.cn" },
    { tag: "隧道", time: "探测于 09-28 06:26", title: "EasyTier 隧道正常（端到端可达 192.168.120.x）", ok: true,
      desc: "正向判定：穿透隧道访问 156 节点 TVHeadend EPG 返回 10 条节目（全量 3481 条），隧道健康；.1:11010 端口探测本次不可达（仅辅助信号，该网段防火墙对任意端口回 SYN-ACK 后应用层静默丢包，端口不可达不等于隧道故障）。",
      src: "192.168.120.156:9981 EPG", href: "http://192.168.120.156:9981/api/epg/events/grid" },
    { tag: "EPG", time: "探测于 09-28 06:26", title: "TVHeadend 143 EPG 正常", ok: true,
      desc: "HTTP 200 · 10 条节目（全量 6521 条）· 当前档：央视精品高清《中华文明地标Ⅰ(5)》（04:44 起）、风云剧场高清《红带协会Ⅰ(1)》（03:29 起）、RTHK TV 32《生活.健康.資訊》（00:00 起）。",
      src: "192.168.188.143:9981", href: "http://192.168.188.143:9981/api/epg/events/grid" },
    { tag: "EPG", time: "探测于 09-28 06:26", title: "TVHeadend 156 EPG 正常", ok: true,
      desc: "HTTP 200 · 10 条节目（全量 3481 条）· 当前档：CCTV-1《朝闻天下》（06:00 起）、ViuTV《早晨新聞》（06:00 起）、RTHK TV 31《香港故事: 由AI開始》（06:00 起）。",
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
