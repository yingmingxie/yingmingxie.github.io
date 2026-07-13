const nav = document.querySelector("[data-nav]");
const toggle = document.querySelector("[data-menu-toggle]");
const langToggle = document.querySelector("[data-lang-toggle]");
const year = document.querySelector("[data-year]");
const pageLinks = [...document.querySelectorAll("[data-page-link]")];
const pages = [...document.querySelectorAll("[data-page]")];
const translations = {
  en: {
    "brand.subtitle": "Quantum Matter Theory @ SJTU",
    "nav.home": "Home",
    "nav.research": "Research",
    "nav.members": "Members",
    "nav.publications": "Publications",
    "nav.news": "News",
    "nav.gallery": "Gallery",
    "nav.opening": "Opening",
    "hero.kicker": "Ying-Ming Xie Homepage",
    "hero.title": "Ying-Ming Xie 谢应明",
    "hero.subtitle": "XIE Lab · Shanghai Jiao Tong University · Google Scholar",
    "home.welcomeTitle": "Welcome to XIE Lab",
    "home.welcome1": "XIE Lab is the theoretical condensed matter physics group led by Prof. Ying-Ming Xie at the School of Physics and Astronomy, Shanghai Jiao Tong University. We use field theory, symmetry analysis, and numerical computation to predict and understand quantum properties of matter, working closely with experimental collaborators to explore quantum science.",
    "home.welcome2": "Current interests include unconventional superconductivity, topological phases, moire materials, Josephson physics, nonlinear optical and transport responses, and quantum geometric effects.",
    "home.piBioTitle": "PI Biography: Ying-Ming Xie (谢应明)",
    "home.piBio1": "Ying-Ming Xie received his B.S. in Physics from Beijing Normal University in 2016 and his Ph.D. from the Hong Kong University of Science and Technology in 2021, under the supervision of Prof. Kam Tuen Law. During his Ph.D. study, he also collaborated with Prof. Patrick A. Lee at MIT.",
    "home.piBio2": "He then carried out postdoctoral research at HKUST and RIKEN in the group of Prof. Naoto Nagaosa, and visited Prof. Jason Alicea's group at Caltech as a visiting postdoctoral researcher. He was selected for the National Excellent Young Scientists Fund Program (Overseas) in 2025. He joined the Institute of Condensed Matter Physics, School of Physics and Astronomy at SJTU in June 2026 as a tenure-track associate professor, PhD supervisor, and independent PI.",
    "home.piBio3": "As of April 2026, he has published 31 papers with more than 1900 Google Scholar citations and an h-index of 21. He has more than 20 first-author or corresponding-author papers, including works in Nature Physics, Nature Materials, Physical Review Letters, PNAS, and Nature Communications. He has served as a referee for journals including Nature, Nature Physics, Physical Review Letters, and Nature Communications.",
    "home.scholarSearch": "Search profile: <a href=\"https://scholar.google.com/citations?user=sTvNNzkAAAAJ\">Ying-Ming Xie Google Scholar</a> / yingming xie google scholar.",
    "opening.shortTitle": "Opening",
    "opening.shortText": "The group is well funded and welcomes motivated undergraduate students, master students, PhD students, and postdocs.",
    "opening.postdoc": "Postdoctoral researchers",
    "opening.grad": "Graduate students",
    "opening.undergrad": "Undergraduate research projects",
    "opening.details": "Opening details",
    "news.latest": "Latest News",
    "news.home1": "<strong>06/2026</strong> - XIE Lab starts at the Institute of Condensed Matter Physics, School of Physics and Astronomy, Shanghai Jiao Tong University. Open positions are available.",
    "news.home2": "<strong>2026</strong> - Our work on topological altermagnetic Josephson junctions was published in <em>npj Quantum Materials</em>.",
    "news.home3": "<strong>2025</strong> - Our work on photon-drag photovoltaic effects and quantum geometry was published in <em>PNAS</em>.",
    "news.home4": "<strong>2025</strong> - Invited talks at low-temperature and quantum materials meetings.",
    "research.title": "Research",
    "research.intro": "We develop theory for symmetry, topology, correlation, and quantum geometry in experimentally relevant quantum materials.",
    "research.direction1": "<strong>Low-dimensional correlated quantum systems:</strong> low-dimensional unconventional superconductivity, correlated topology, density waves, and strongly correlated quantum phases.",
    "research.direction2": "<strong>Quantum computation:</strong> topological superconductivity, Majorana zero modes, non-Abelian quasiparticles, topological quantum computation, and superconducting Josephson junctions.",
    "research.direction3": "<strong>Transport and control theory of quantum materials:</strong> quantum transport, nonlinear optical responses, and quantum geometric effects.",
    "research.featuredTitle": "Research Highlights",
    "research.originalPage": "Original research page",
    "research.readArticle": "Read article",
    "research.f1.title": "Photon Drag Photovoltaic Effect from Quantum Geometry",
    "research.f1.text": "We showed how photon momentum and quantum geometry can generate photovoltaic responses even in centrosymmetric systems, providing a route to probe wavefunction geometry through optical transport.",
    "research.f1.ref": "PNAS 122, e2424294122 (2025)",
    "research.f2.title": "Orbital FFLO Pairing in Moiré Ising Superconductors",
    "research.f2.text": "We proposed an orbital mechanism for finite-momentum pairing in moiré Ising superconductors, connecting orbital magnetic effects to FFLO physics and superconducting diode behavior.",
    "research.f2.ref": "Phys. Rev. Lett. 131, 016001 (2023)",
    "research.f3.title": "Kramers Nodal Line Metals",
    "research.f3.text": "We identified Kramers nodal line metals protected by spin-orbit coupling and crystalline symmetries, revealing a route to robust band topology in quantum materials.",
    "research.f3.ref": "Nat. Commun. 12, 3064 (2021)",
    "research.f4.title": "Quasi-1D Supersolids and Strong Correlations",
    "research.f4.text": "We study how superconducting and charge-density-wave orders coexist in coupled Luther-Emery liquids, providing a theoretical route toward quasi-one-dimensional supersolids.",
    "research.f4.ref": "Phys. Rev. Research 7, 023302 (2025)",
    "research.f5.title": "Dynamical and Geometric Effects in Density Wave Materials",
    "research.f5.text": "We study dynamics and geometric effects in materials with charge or spin density-wave orders, including current-driven skyrmion and helix motion, nonreciprocal nonlinear responses in moving charge density waves, and geometric effects in triple-Q density waves.",
    "research.f5.ref": "<a href=\"https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.133.096702\" target=\"_blank\" rel=\"noopener\">Phys. Rev. Lett. 133, 096702 (2024)</a>; <a href=\"https://www.nature.com/articles/s41535-024-00695-7\" target=\"_blank\" rel=\"noopener\">npj Quantum Materials 9, 82 (2024)</a>; <a href=\"https://journals.aps.org/prb/abstract/10.1103/PhysRevB.110.L241108\" target=\"_blank\" rel=\"noopener\">Phys. Rev. B 110, L241108 (2024)</a>",
    "research.f6.title": "Valley-Polarized State Mediated Unconventional Josephson Junctions in Superconducting TBG",
    "research.f6.text": "We helped explain unconventional Fraunhofer patterns in magic-angle twisted bilayer graphene Josephson junctions, and showed that a valley-polarized state can mediate electrically controlled phi-zero Josephson junctions and Josephson diode effects.",
    "research.f6.ref": "<a href=\"https://www.nature.com/articles/s41467-023-38005-7\" target=\"_blank\" rel=\"noopener\">Nat. Commun. 14, 2396 (2023)</a>; <a href=\"https://journals.aps.org/prresearch/abstract/10.1103/PhysRevResearch.5.023029\" target=\"_blank\" rel=\"noopener\">Phys. Rev. Research 5, 023029 (2023)</a>; <a href=\"https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.130.266003\" target=\"_blank\" rel=\"noopener\">Phys. Rev. Lett. 130, 266003 (2023)</a>",
    "research.f7.title": "Gate-Defined Topological Josephson Junctions",
    "research.f7.text": "We proposed electrically defined topological Josephson junctions in Bernal bilayer graphene, providing a route to engineer topological superconductivity and Majorana modes in a tunable two-dimensional material platform.",
    "research.f7.ref": "Phys. Rev. Lett. 131, 146601 (2023)",
    "research.f8.title": "Spin-Orbit-Parity Coupled Superconductivity",
    "research.f8.text": "We introduced spin-orbit-parity coupled superconductivity in topological monolayer WTe2, showing how crystalline symmetry, spin-orbit coupling, and pairing structure can produce unconventional superconducting phases.",
    "research.f8.ref": "Phys. Rev. Lett. 125, 107001 (2020)",
    "research.h1.title": "Quantum Geometry and Photovoltaic Responses",
    "research.h1.text": "We study how quantum geometric tensors control nonlinear optical and transport responses, including photon-drag photovoltaic effects in centrosymmetric materials.",
    "research.h2.title": "Topological Superconductivity and Majorana Modes",
    "research.h2.text": "We explore gate-defined topological Josephson junctions and internally engineered platforms where Majorana zero modes can emerge from superconducting two-dimensional materials.",
    "research.h3.title": "Moiré Materials and Josephson Devices",
    "research.h3.text": "We investigate moiré superconductors, valley-polarized Josephson junctions, superconducting diode effects, and electrically tunable phase-biased devices.",
    "research.h4.title": "Density Waves and Magnetic Textures",
    "research.h4.text": "We study sliding charge density waves, skyrmion and helix dynamics, collective modes, and nonreciprocal responses in ordered quantum matter.",
    "research.h5.title": "Orbital FFLO and Superconducting Diodes",
    "research.h5.text": "We analyze finite-momentum pairing driven by orbital magnetic effects in moiré Ising superconductors and its connection to giant superconducting diode behavior.",
    "research.h6.title": "Quasi-1D Supersolids and Strong Correlations",
    "research.h6.text": "We examine how superconducting and density-wave orders can coexist in coupled Luther-Emery liquids and related strongly correlated low-dimensional systems.",
    "members.title": "Members",
    "members.name": "Ying-Ming Xie (谢应明)",
    "members.pi": "Principal Investigator",
    "members.rank": "Tenure-track Associate Professor; PhD Supervisor; Independent PI",
    "members.email": "Email: <a href=\"mailto:yingming.xie@sjtu.edu.cn\">yingming.xie@sjtu.edu.cn</a>",
    "members.office": "Office: Science Laboratory Building Complex No. 1, Room 213",
    "members.studentsTitle": "Students and Postdocs",
    "members.studentsText": "Names will be added as the group grows.",
    "members.visitorsTitle": "Visitors and Alumni",
    "members.visitorsText": "This section will track visitors, collaborators, and former members.",
    "publications.title": "Publications",
    "publications.intro": "Selected representative publications. The complete publication list is available on Google Scholar and arXiv.",
    "news.title": "News",
    "news.list1": "<strong>06/2026</strong> - XIE Lab starts at the Institute of Condensed Matter Physics, School of Physics and Astronomy, Shanghai Jiao Tong University.",
    "news.list2": "<strong>2026</strong> - Topological altermagnetic Josephson junctions published in <em>npj Quantum Materials</em>.",
    "news.list3": "<strong>2025</strong> - Photon-drag photovoltaic effects and quantum geometry published in <em>PNAS</em>.",
    "news.list4": "<strong>2025</strong> - Invited talk on photodrag photovoltaic effect and quantum geometry at the low temperature conference.",
    "gallery.title": "Gallery",
    "gallery.intro": "Selected moments from group life, seminars, conferences, and everyday research at XIE Lab.",
    "gallery.placeholder1": "XIE Lab @ SJTU",
    "gallery.placeholder2": "Seminars & Talks",
    "gallery.placeholder3": "Group Life",
    "gallery.caption1": "Group photos and campus moments",
    "gallery.caption2": "Academic visits, invited talks, and workshops",
    "gallery.caption3": "Team activities, meals, and informal moments",
    "opening.title": "Opening",
    "opening.intro": "The group has strong funding support and welcomes motivated undergraduate students, master students, PhD students, and postdocs interested in quantum condensed matter theory and computation. We plan to recruit 1-2 PhD or master students each year.",
    "opening.gradTitle": "PhD and Master Student Recruitment",
    "opening.gradText": "We plan to recruit 1-2 PhD or master students each year. Students interested in quantum condensed matter theory and computation are welcome to contact Prof. Xie by email for further discussion.",
    "opening.benefitsTitle": "Postdoctoral Benefits",
    "opening.benefit1": "Excellent research conditions with sufficient and stable funding support.",
    "opening.benefit2": "Annual salary of RMB 300,000-400,000 before tax, with competitive performance-based supplements. Postdocs supported by the Postdoctoral Innovation Talent Support Program, Shanghai Super Postdoctoral Program, SJTU Siyuan Postdoctoral Program (Overseas Talent Recruitment), and related programs may receive additional benefits on top of the base package.",
    "opening.benefit3": "During the appointment, SJTU provides postdoctoral apartments or housing subsidies, with benefits including children's schooling and childcare support, medical care, social insurance, and Shanghai hukou support for the postdoc and family according to relevant policies.",
    "opening.applyTitle": "How to Apply",
    "opening.applyText": "Interested undergraduate students, graduate students, and postdoctoral applicants are welcome to send a CV by email. We look forward to exploring the quantum world together.",
    "opening.address": "Office: Science Laboratory Building Complex No. 1, Room 213, Minhang Campus, Shanghai Jiao Tong University.",
    "footer.copy": "© <span data-year></span> XIE Lab, Shanghai Jiao Tong University"
  },
  zh: {
    "brand.subtitle": "上海交通大学 · 量子物质理论",
    "nav.home": "主页",
    "nav.research": "研究",
    "nav.members": "成员",
    "nav.publications": "论文",
    "nav.news": "新闻",
    "nav.gallery": "相册",
    "nav.opening": "招生招聘",
    "hero.kicker": "Ying-Ming Xie Homepage",
    "hero.title": "Ying-Ming Xie 谢应明",
    "hero.subtitle": "上海交通大学 XIE Lab · Google Scholar",
    "home.welcomeTitle": "欢迎来到 XIE Lab",
    "home.welcome1": "这里是上海交通大学物理与天文学院谢应明副教授的理论凝聚态物理课题组，希望用场论、群论及数值计算等方法预测和理解物质的量子特性，并与实验合作者紧密合作，探索量子科学的奥秘。",
    "home.welcome2": "目前的研究兴趣包括低维关联量子体系理论，拓扑超导及拓扑量子计算，量子材料的输运及调控理论等。",
    "home.piBioTitle": "课题组负责人简介",
    "home.piBio1": "谢应明于2016年获得北京师范大学物理学学士学位，2021年获得香港科技大学物理学博士学位，博士期间师从 Kam Tuen Law 教授，并与 MIT 的 Patrick A. Lee 教授保持合作。",
    "home.piBio2": "博士毕业后，先后在香港科技大学及日本理化研究所 Naoto Nagaosa 教授课题组开展博士后研究，并曾以访问博士后的身份到 Caltech 的 Jason Alicea 教授课题组开展合作研究。2026年6月加入上海交通大学物理与天文学院凝聚态物理研究所，担任长聘教轨副教授、博导、独立 PI。",
    "home.piBio3": "截至2026年4月，已发表学术论文31篇，Google Scholar 总引用1900余次，h-index 为21；其中以第一作者或通讯作者（含共同）发表论文20多篇，包括 Nature Physics、Nature Materials、Physical Review Letters、PNAS 和 Nature Communications 等，并多次担任 Nature、Nature Physics、Physical Review Letters、Nature Communications 等期刊审稿人。",
    "home.scholarSearch": "搜索入口：<a href=\"https://scholar.google.com/citations?user=sTvNNzkAAAAJ\">Ying-Ming Xie Google Scholar</a> / yingming xie google scholar。",
    "opening.shortTitle": "招生招聘",
    "opening.shortText": "目前课题组经费充足，欢迎对量子凝聚态理论和计算感兴趣的本科生、硕士生、博士生和博士后加入。",
    "opening.postdoc": "博士后",
    "opening.grad": "研究生",
    "opening.undergrad": "本科生科研项目",
    "opening.details": "查看招生招聘信息",
    "news.latest": "最新消息",
    "news.home1": "<strong>2026/06</strong> - XIE Lab 在上海交通大学物理与天文学院凝聚态物理研究所成立，欢迎本科生、硕士生、博士生和博士后加入。",
    "news.home2": "<strong>2026</strong> - 关于拓扑反铁磁约瑟夫森结的工作发表于 <em>npj Quantum Materials</em>。",
    "news.home3": "<strong>2025</strong> - 关于 photon-drag photovoltaic effect 与量子几何的工作发表于 <em>PNAS</em>。",
    "news.home4": "<strong>2025</strong> - 在低温物理和量子材料相关会议作邀请报告。",
    "research.title": "研究兴趣",
    "research.intro": "目前的研究兴趣包括低维关联量子体系理论，拓扑超导及拓扑量子计算，量子材料的输运及调控理论等。",
    "research.direction1": "<strong>低维关联量子体系理论：</strong>包括低维非常规超导、低维关联拓扑、低维密度波、低维强关联量子态等。",
    "research.direction2": "<strong>量子计算：</strong>包括拓扑超导、马约拉纳零模、非阿贝尔粒子、拓扑量子计算、超导约瑟夫森结等。",
    "research.direction3": "<strong>量子材料的输运及调控理论：</strong>包括量子输运、非线性光学响应、量子几何效应等。",
    "research.featuredTitle": "研究亮点",
    "research.originalPage": "原研究页面",
    "research.readArticle": "阅读论文",
    "research.f1.title": "源于量子几何的光拖曳光伏效应",
    "research.f1.text": "我们揭示了光子动量和量子几何如何在中心对称体系中产生光伏响应，为通过光输运探测波函数几何提供了途径。",
    "research.f1.ref": "PNAS 122, e2424294122 (2025)",
    "research.f2.title": "莫尔 Ising 超导中的轨道 FFLO 配对",
    "research.f2.text": "我们提出了由轨道磁效应驱动的有限动量配对机制，并将莫尔 Ising 超导中的 FFLO 物理与超导二极管行为联系起来。",
    "research.f2.ref": "Phys. Rev. Lett. 131, 016001 (2023)",
    "research.f3.title": "Kramers 节线金属",
    "research.f3.text": "我们提出了由自旋轨道耦合和晶体对称性保护的 Kramers 节线金属，为量子材料中的稳健能带拓扑提供了新的实现途径。",
    "research.f3.ref": "Nat. Commun. 12, 3064 (2021)",
    "research.f4.title": "准一维超固体与强关联",
    "research.f4.text": "我们研究耦合 Luther-Emery 液体中超导序和电荷密度波序的共存机制，为准一维超固体提供理论图像。",
    "research.f4.ref": "Phys. Rev. Research 7, 023302 (2025)",
    "research.f5.title": "密度波材料中的动力学与几何效应",
    "research.f5.text": "我们研究具有电荷或自旋密度波序材料中的动力学和几何效应，包括电流驱动的斯格明子晶格和螺旋磁体动力学、运动电荷密度波中的非互易非线性响应，以及 triple-Q 密度波中的几何效应。",
    "research.f5.ref": "<a href=\"https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.133.096702\" target=\"_blank\" rel=\"noopener\">Phys. Rev. Lett. 133, 096702 (2024)</a>; <a href=\"https://www.nature.com/articles/s41535-024-00695-7\" target=\"_blank\" rel=\"noopener\">npj Quantum Materials 9, 82 (2024)</a>; <a href=\"https://journals.aps.org/prb/abstract/10.1103/PhysRevB.110.L241108\" target=\"_blank\" rel=\"noopener\">Phys. Rev. B 110, L241108 (2024)</a>",
    "research.f6.title": "谷极化态调控的超导 TBG 非常规约瑟夫森结",
    "research.f6.text": "我们解释了魔角扭转双层石墨烯约瑟夫森结中的非常规 Fraunhofer 图样，并进一步揭示谷极化态可以产生电场调控的 φ0 约瑟夫森结和约瑟夫森二极管效应。",
    "research.f6.ref": "<a href=\"https://www.nature.com/articles/s41467-023-38005-7\" target=\"_blank\" rel=\"noopener\">Nat. Commun. 14, 2396 (2023)</a>; <a href=\"https://journals.aps.org/prresearch/abstract/10.1103/PhysRevResearch.5.023029\" target=\"_blank\" rel=\"noopener\">Phys. Rev. Research 5, 023029 (2023)</a>; <a href=\"https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.130.266003\" target=\"_blank\" rel=\"noopener\">Phys. Rev. Lett. 130, 266003 (2023)</a>",
    "research.f7.title": "门控定义的拓扑约瑟夫森结",
    "research.f7.text": "我们提出了 Bernal 双层石墨烯中的电场定义拓扑约瑟夫森结，为在可调二维材料平台中工程化拓扑超导和 Majorana 模提供途径。",
    "research.f7.ref": "Phys. Rev. Lett. 131, 146601 (2023)",
    "research.f8.title": "自旋-轨道-宇称耦合超导",
    "research.f8.text": "我们提出了拓扑单层 WTe2 中的自旋-轨道-宇称耦合超导，展示晶体对称性、自旋轨道耦合和配对结构如何产生非常规超导相。",
    "research.f8.ref": "Phys. Rev. Lett. 125, 107001 (2020)",
    "research.h1.title": "量子几何与光伏响应",
    "research.h1.text": "我们研究量子几何张量如何控制非线性光学和输运响应，包括中心对称材料中的光拖曳光伏效应。",
    "research.h2.title": "拓扑超导与 Majorana 模",
    "research.h2.text": "我们探索门控拓扑约瑟夫森结和内禀工程化平台，研究二维超导材料中 Majorana 零模的产生机制。",
    "research.h3.title": "莫尔材料与约瑟夫森器件",
    "research.h3.text": "我们研究莫尔超导、谷极化约瑟夫森结、超导二极管效应以及电场可调的相位偏置器件。",
    "research.h4.title": "密度波与磁性织构",
    "research.h4.text": "我们研究滑动电荷密度波、斯格明子和螺旋磁体动力学、集体模以及有序量子物质中的非互易响应。",
    "research.h5.title": "轨道 FFLO 与超导二极管",
    "research.h5.text": "我们分析莫尔 Ising 超导中由轨道磁效应驱动的有限动量配对，以及其与巨大超导二极管效应的联系。",
    "research.h6.title": "准一维超固体与强关联",
    "research.h6.text": "我们研究耦合 Luther-Emery 液体及相关低维强关联系统中超导序和密度波序的共存机制。",
    "members.title": "成员",
    "members.name": "谢应明",
    "members.pi": "课题组负责人",
    "members.rank": "长聘教轨副教授、博导、独立 PI",
    "members.email": "邮箱：<a href=\"mailto:yingming.xie@sjtu.edu.cn\">yingming.xie@sjtu.edu.cn</a>",
    "members.office": "办公室：理科实验楼群1号楼213",
    "members.studentsTitle": "学生与博士后",
    "members.studentsText": "课题组成员名单将陆续更新。",
    "members.visitorsTitle": "访问学生与往届成员",
    "members.visitorsText": "这里将记录访问学生、合作者和离组成员。",
    "publications.title": "论文",
    "publications.intro": "以下为部分代表性论文。完整的论文列表见 Google Scholar、arXiv。",
    "news.title": "新闻",
    "news.list1": "<strong>2026/06</strong> - XIE Lab 在上海交通大学物理与天文学院凝聚态物理研究所成立。",
    "news.list2": "<strong>2026</strong> - 拓扑反铁磁约瑟夫森结工作发表于 <em>npj Quantum Materials</em>。",
    "news.list3": "<strong>2025</strong> - 光拖曳光伏效应与量子几何工作发表于 <em>PNAS</em>。",
    "news.list4": "<strong>2025</strong> - 在低温物理会议作关于 photodrag photovoltaic effect 与量子几何的邀请报告。",
    "gallery.title": "相册",
    "gallery.intro": "记录 XIE Lab 的组内合影、学术交流、会议活动和日常科研生活。",
    "gallery.placeholder1": "XIE Lab @ SJTU",
    "gallery.placeholder2": "学术报告与交流",
    "gallery.placeholder3": "组内生活",
    "gallery.caption1": "组内合影与校园瞬间",
    "gallery.caption2": "学术访问、邀请报告和研讨会",
    "gallery.caption3": "组内活动、聚餐和日常片段",
    "opening.title": "招生招聘",
    "opening.intro": "目前课题组经费充足，欢迎对量子凝聚态理论和计算感兴趣的本科生、硕士生、博士生和博士后联系加入。每年计划招收1-2名博士或硕士研究生。",
    "opening.gradTitle": "博士/硕士研究生招生",
    "opening.gradText": "课题组每年计划招收1-2名博士或硕士研究生。欢迎对量子凝聚态理论和计算感兴趣的同学发邮件交流联系。",
    "opening.benefitsTitle": "博士后待遇与支持",
    "opening.benefit1": "提供良好的科研条件和充足稳定的经费支持。",
    "opening.benefit2": "年薪30-40万元（税前），根据表现给予有竞争力的奖励补贴，具体额度由导师及本人协商确定。支持申报“博士后创新人才支持计划”、上海市“超级博士后”、交大思源博后（海外引才）等项目的博士后，将在基础待遇上进行叠加。",
    "opening.benefit3": "聘期内由学校提供博士后公寓或住房补贴，享有子女入学、入托、医疗及其它社会保险，依政策办理本人及家属的上海户口。",
    "opening.applyTitle": "申请方式",
    "opening.applyText": "感兴趣的本科生、博士/硕士研究生申请者和博士后请发送个人简历至邮箱。期待与你一起探索量子世界。",
    "opening.address": "办公室：理科实验楼群1号楼213；地址：上海交通大学（闵行校区），上海市闵行区东川路800号。",
    "footer.copy": "© <span data-year></span> XIE Lab，上海交通大学"
  }
};

if (year) {
  year.textContent = new Date().getFullYear();
}

function refreshYear() {
  document.querySelectorAll("[data-year]").forEach((node) => {
    node.textContent = new Date().getFullYear();
  });
}

function setLanguage(lang) {
  const dict = translations[lang] || translations.en;

  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (dict[key]) {
      node.textContent = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach((node) => {
    const key = node.dataset.i18nHtml;
    if (dict[key]) {
      node.innerHTML = dict[key];
    }
  });

  if (langToggle) {
    langToggle.textContent = lang === "zh" ? "English" : "中文";
    langToggle.setAttribute("aria-label", lang === "zh" ? "Switch to English" : "切换到中文");
  }

  localStorage.setItem("xieLabLang", lang);
  refreshYear();
}

function showPage(pageName, shouldPush = true) {
  const target = pages.some((page) => page.dataset.page === pageName) ? pageName : "home";

  pages.forEach((page) => {
    page.classList.toggle("is-active", page.dataset.page === target);
  });

  pageLinks.forEach((link) => {
    link.classList.toggle("is-active", link.dataset.pageLink === target);
  });

  if (nav) {
    nav.classList.remove("is-open");
  }

  if (shouldPush) {
    history.replaceState(null, "", `#${target}`);
  }
}

pageLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const pageName = link.dataset.pageLink;
    if (!pageName) return;
    event.preventDefault();
    showPage(pageName);
  });
});

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    nav.classList.toggle("is-open");
  });
}

if (langToggle) {
  langToggle.addEventListener("click", () => {
    const next = document.documentElement.lang === "zh-CN" ? "en" : "zh";
    setLanguage(next);
  });
}

window.addEventListener("hashchange", () => {
  showPage(window.location.hash.replace("#", ""), false);
});

showPage(window.location.hash.replace("#", "") || "home", false);
setLanguage("en");
