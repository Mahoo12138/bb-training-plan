const siteData = {
  heroStats: [
    { value: "5", label: "培养目标", detail: "毕业约 5 年的发展预期" },
    { value: "12", label: "毕业要求", detail: "完整覆盖工程教育认证框架" },
    { value: "6", label: "专业方向", detail: "形成差异化培养路径" },
    { value: "2", label: "实践层级", detail: "课内实践 + 课外实践" }
  ],
  glanceCards: [
    {
      icon: "waypoints",
      title: "课程体系优先",
      text: "页面先解释课程结构，再回看培养目标和指标点，符合在校学生的浏览顺序。"
    },
    {
      icon: "compass",
      title: "方向分流明确",
      text: "六个专业方向让核心课程之后的成长路线有了清晰分叉。"
    },
    {
      icon: "flask-conical",
      title: "实践链条完整",
      text: "课程设计、开发实训、专业实践、毕业实习和毕业设计构成连续的工程训练闭环。"
    },
    {
      icon: "chart-no-axes-column",
      title: "指标点可视化",
      text: "毕业要求不再是长列表，而是先看分布，再按需展开到具体指标点。"
    }
  ],
  modules: [
    {
      icon: "landmark",
      title: "通识教育平台",
      units: 2,
      unitLabel: "2 类结构单元",
      note: "选修最低应修满 6 学分",
      description:
        "公共课程先搭起价值判断、语言表达、体能素质与大学学习方法的底座，是进入后续专业课程之前的共同起点。",
      highlights: [
        "必修覆盖思想政治理论、大学英语、体育、军事理论和计算机科学导论。",
        "选修按自然科学、人文社科、经济管理、艺术体育四类组织。",
        "理工类学生须在人文社科、经济管理、艺术体育三类课程中至少修满 3 学分。"
      ]
    },
    {
      icon: "sigma",
      title: "学科基础平台",
      units: 11,
      unitLabel: "11 门代表性基础课",
      note: "数学物理与计算基础并重",
      description:
        "通过数学、物理和计算机系统课程，为复杂软件工程问题的分析、建模和求解提供前置能力。",
      highlights: [
        "高等数学、线性代数、概率论、大学物理构成科学基础。",
        "离散数学、程序设计基础、计算机系统基础构成计算思维底盘。",
        "数据结构、数据库、操作系统、网络及其计算把基础知识推向系统层。"
      ]
    },
    {
      icon: "cpu",
      title: "专业核心课程",
      units: 8,
      unitLabel: "8 门核心课",
      note: "主干课程直接对应工程能力",
      description:
        "核心课程从软件工程过程、质量保证、建模技术到项目管理与体系结构，构成专业能力主干。",
      highlights: [
        "面向对象程序设计 A。",
        "软件工程、WEB 程序设计、软件质量保证与测试。",
        "软件建模技术、软件项目管理、软件构造、软件设计与体系结构。"
      ]
    },
    {
      icon: "git-branch-plus",
      title: "专业拓展与方向课程",
      units: 9,
      unitLabel: "6 个方向 + 3 组代表性拓展内容",
      note: "方向 1-4 至少选修 4 学分；方向 5-6 至少选修 1 学分",
      description:
        "学生在完成核心课程后进入差异化培养阶段，通过六个方向和专业任选课组合出更贴近个人发展意图的学习路线。",
      highlights: [
        "六个方向分别是软件设计与开发、软件测试、移动互联、嵌入式系统开发、飞行器控制技术、测控技术。",
        "专业任选课示例包括人工智能、大数据与云计算、Python 程序设计。",
        "方向课程与实训、专业实践相连，决定后续作品和能力呈现方式。"
      ]
    },
    {
      icon: "hammer",
      title: "实践教学模块",
      units: 10,
      unitLabel: "10 项代表性实践内容",
      note: "课内实践与课外实践双层推进",
      description:
        "实践模块不是附属内容，而是把课程知识变成工程产出的关键环节，直接连接到毕业实习和毕业设计。",
      highlights: [
        "课内实践包括程序设计基础课程设计、面向对象课程设计、专业综合课程设计。",
        "软件开发实训 I/II、专业实践、毕业实习构成持续性的工程训练。",
        "毕业设计（论文）12 学分，另有创新创业教育与素质拓展。"
      ]
    }
  ],
  journey: [
    {
      icon: "library-big",
      stage: "01",
      title: "通识与科学底座",
      text: "从思政、英语、体育、军事理论到高数、线性代数、概率论、大学物理，先把公共素养和科学基础铺满。"
    },
    {
      icon: "binary",
      stage: "02",
      title: "计算与系统基础",
      text: "离散数学、程序设计基础、计算机系统基础、数据结构、数据库、操作系统、网络课程共同搭起工程分析能力。"
    },
    {
      icon: "route",
      stage: "03",
      title: "核心能力与方向选择",
      text: "通过面向对象、软件工程、质量保证、项目管理、软件构造和体系结构课程形成主干能力，再进入六个方向。"
    },
    {
      icon: "graduation-cap",
      stage: "04",
      title: "实训、实践与毕业设计",
      text: "课程设计、开发实训、专业实践、毕业实习和 12 学分毕业设计共同完成从知识学习到工程交付的闭环。"
    }
  ],
  practiceModules: [
    {
      icon: "code-xml",
      title: "课内实践",
      items: [
        "程序设计基础课程设计（2 学分）",
        "面向对象课程设计（2 学分）",
        "专业综合课程设计（4 学分）",
        "软件开发实训 I（3 学分）",
        "软件开发实训 II（3 学分）",
        "专业实践（4 学分）",
        "毕业实习（2 学分）",
        "毕业设计（论文）（12 学分）"
      ]
    },
    {
      icon: "rocket",
      title: "课外实践",
      items: [
        "创新创业教育（科技创新）3 学分",
        "素质拓展 3 学分",
        "素质拓展中包含社会实践 1 学分和公共劳动 1 学分"
      ]
    }
  ],
  directions: [
    {
      id: "design-dev",
      name: "方向 1 · 软件设计与开发",
      minCredits: "至少选修 4 学分",
      summary: "偏向应用研发全链路，强调从界面、交互到系统功能实现的综合开发能力。",
      keywords: ["应用开发", "前端实现", "交互体验", "系统设计"],
      sampleCourses: ["移动终端编程", "前端技术", "人机交互"],
      note: "适合希望进入应用研发、前端工程或客户端开发的学生，侧重界面与交互实现、前后端协作与工程化实践，适合参与产品化项目、用户体验优化与企业实训。"
    },
    {
      id: "software-testing",
      name: "方向 2 · 软件测试",
      minCredits: "至少选修 4 学分",
      summary: "更强调质量保障与验证环节，把测试设计、过程管理与案例分析作为能力重点。",
      keywords: ["测试设计", "质量保障", "过程管理", "验证分析"],
      sampleCourses: ["测试工具", "过程管理", "案例分析"],
      note: "适合对质量工程与测试开发感兴趣的学生，强调测试设计、自动化测试、缺陷跟踪与持续集成实践，适合走测试开发、QA 工程或质量管理方向。"
    },
    {
      id: "mobile-internet",
      name: "方向 3 · 移动互联（东软 3+1）",
      minCredits: "至少选修 4 学分",
      summary: "以东软 3+1 协同培养为特征，面向移动互联应用场景，强调项目化与企业协同体验。",
      keywords: ["移动互联", "企业协同", "项目训练", "3+1 模式"],
      sampleCourses: [],
      note: "适合希望进入移动/互联网应用与企业协同项目的学生，偏向移动端与前端实现、客户端与后端接口对接、项目化训练与企业实习。"
    },
    {
      id: "embedded-dev",
      name: "方向 4 · 嵌入式系统开发（东软 3+1）",
      minCredits: "至少选修 4 学分",
      summary: "同样采用东软 3+1 协同培养模式，适合希望把软件能力延伸到嵌入式系统开发场景的学生。",
      keywords: ["嵌入式", "协同培养", "软硬结合", "项目开发"],
      sampleCourses: [],
      note: "适合对软硬件结合、嵌入式系统和实时控制开发感兴趣的学生，侧重底层编程、驱动与硬件调试，适合参加校企协同培养与项目实训。"
    },
    {
      id: "flight-control",
      name: "方向 5 · 飞行器控制技术",
      minCredits: "至少选修 1 学分",
      summary: "把软件工程学习与航空特色结合，在飞行器控制相关场景中理解软件的行业应用。",
      keywords: ["航空特色", "控制技术", "行业应用", "测控结合"],
      sampleCourses: ["无损检测", "测试技术"],
      note: "适合希望把软件能力延展到航空与飞行控制系统的学生，偏向控制算法、传感器融合、实时系统与系统级验证，适合参与航电/飞控相关项目与产业合作。"
    },
    {
      id: "measurement-control",
      name: "方向 6 · 测控技术",
      minCredits: "至少选修 1 学分",
      summary: "更强调测控领域背景知识，为软件工程能力进入航空与仪器相关场景提供行业接口。",
      keywords: ["测控技术", "工程背景", "行业接口", "航空应用"],
      sampleCourses: ["工程力学", "空气动力学", "飞行力学"],
      note: "适合希望向测控与仪器系统延展的学生，侧重传感器、信号处理、数据采集与系统集成能力，适合参与仪器开发、测控工程与跨学科项目实践。"
    }
  ],
  objectives: [
    "能够对软件产品的业务逻辑、系统功能和性能、用户体验进行合理设计，对设计方案进行分析、评审和实现，根据工程标准，对软件产品进行验证和确认以保证软件产品质量，提升产品竞争力。",
    "能够对软件项目的组织和实施进行有效跟踪管理，并能够动态评估软件项目对社会、健康、安全、法律、文化和环境等因素的影响。",
    "能够在项目团队中适应各种角色，并能够与其他成员进行有效沟通；能够在项目过程中与合作方进行有效的沟通并完成系统衔接、与用户进行有效沟通并得到用户的认可。",
    "能够跟踪软件技术发展趋势，对技术进行整合和选型，在终身学习和专业发展等方面表现出担当和进步。",
    "能够自觉坚守工程伦理和职业道德规范，爱岗敬业，具备良好的人文素养、法律意识和创新精神。"
  ],
  requirements: [
    {
      number: 1,
      title: "工程知识",
      cluster: "工程基础与分析",
      statement: "能够将数学、自然科学、工程基础和专业知识用于解决复杂软件工程问题。",
      indicators: [
        "掌握数学、自然科学、工程基础和软件工程学科的基本原理和专业知识，包括基本概念和基本方法。",
        "能够将数学、自然科学、工程基础和软件工程专业知识用于复杂软件工程问题的表述、建模和求解。",
        "能够将数学、自然科学、工程基础和软件工程专业知识用于复杂软件工程问题的推演和分析。",
        "能够将数学、自然科学、工程基础和软件工程专业知识用于复杂软件工程问题解决方案的比较和综合。"
      ]
    },
    {
      number: 2,
      title: "问题分析",
      cluster: "工程基础与分析",
      statement: "能够应用数学、自然科学和工程科学的基本原理，识别、表达、并通过文献研究分析复杂软件工程问题，以获得有效结论。",
      indicators: [
        "能够应用软件工程学科的基本原理和方法，正确识别和判断复杂软件工程问题的关键需求。",
        "能够基于软件工程学科的基本原理和数学模型方法正确表达复杂软件工程问题。",
        "能够通过文献检索对复杂软件工程问题的多种解决途径进行比较、分析和选择。",
        "能够应用工程原理和专业知识，借助文献研究，分析复杂软件工程问题的解决途径及其合理性，并获得有效结论。"
      ]
    },
    {
      number: 3,
      title: "设计/开发解决方案",
      cluster: "工程基础与分析",
      statement: "能够设计针对复杂软件工程问题的解决方案，设计满足特定需求的软件系统或模块，并能够在设计环节中体现创新意识，考虑社会、健康、安全、法律、文化以及环境等因素。",
      indicators: [
        "熟练掌握软件生命周期各阶段的设计方法和开发技术，具备软件设计开发能力。",
        "能够理解计算机系统结构、软硬件体系结构或其他能够影响软件设计目标和技术方案的相关工程因素。",
        "能够面向复杂软件工程问题的特定需求，运用软件工程专业知识与方法完成软件模块的设计。",
        "能够针对需求和目标，完成软件系统的设计并在设计中体现创新意识。",
        "能够在软件模块或系统设计中考虑社会、健康、安全、法律、文化及环境等制约因素。"
      ]
    },
    {
      number: 4,
      title: "研究",
      cluster: "工程基础与分析",
      statement: "能够基于科学原理并采用科学方法对复杂软件工程问题进行研究，包括设计实验、分析与解释数据、并通过信息综合得到合理有效的结论。",
      indicators: [
        "能够基于科学原理，通过文献研究或相关方法，调研和分析复杂工程问题的解决方案。",
        "能够根据对象特征，选择研究路线，设计实验方案。",
        "能够根据实验方案构建实验系统，安全开展实验，正确收集实验数据。",
        "能够整理和分析实验数据，对实验结果进行解释和评价以得到有效结论。"
      ]
    },
    {
      number: 5,
      title: "使用现代工具",
      cluster: "工具、责任与规范",
      statement: "能够针对复杂软件工程问题，开发、选择与使用恰当的技术、资源、现代工程工具和信息技术工具，包括对复杂工程问题的预测与模拟，并能够理解其局限性。",
      indicators: [
        "理解软件工程专业常用现代工程工具、信息技术工具的使用原理和方法，并能够理解其局限性。",
        "能够开发、选择和使用恰当的现代工程工具和信息技术工具，对复杂软件系统进行分析、设计与构建。",
        "能够选用合适的现代工具对复杂软件工程问题中的具体对象进行模拟和预测，并能够理解其局限性。"
      ]
    },
    {
      number: 6,
      title: "工程与社会",
      cluster: "工具、责任与规范",
      statement: "能够基于工程相关背景知识进行合理分析，评价专业工程实践和复杂软件工程问题解决方案对社会、健康、安全、法律以及文化的影响，并理解应承担的责任。",
      indicators: [
        "能够理解软件工程相关领域的技术标准、知识产权、产业政策和法律法规，理解不同社会文化对软件项目实施的影响。",
        "能够分析和评价软件工程专业实践对社会、健康、安全、法律和文化的影响，并理解应承担的相应责任。"
      ]
    },
    {
      number: 7,
      title: "环境和可持续发展",
      cluster: "工具、责任与规范",
      statement: "能够理解和评价针对复杂软件工程问题的专业工程实践对环境、社会可持续发展的影响。",
      indicators: [
        "能够理解环境保护和可持续发展的内涵和意义。",
        "能够理解复杂软件工程问题的专业实践对环境以及社会可持续发展的影响，评价产品周期中可能对人类和环境造成的损害和隐患。"
      ]
    },
    {
      number: 8,
      title: "职业规范",
      cluster: "工具、责任与规范",
      statement: "具有人文社会科学素养、社会责任感，能够在软件工程实践中理解并遵守工程职业道德和规范，履行责任。",
      indicators: [
        "具有扎实的人文社会科学素养及正确的价值观，理解个人与社会的关系，了解中国国情。",
        "能够理解并遵守软件工程的相关职业道德、软件行业规范和法律法规，能够在软件工程实践中坚守职业操守，尽职尽责做好本职工作。",
        "能够理解软件工程师对公众的安全、健康、福祉和环境保护的社会责任，能够在软件工程实践中自觉履行责任。"
      ]
    },
    {
      number: 9,
      title: "个人和团队",
      cluster: "协作与沟通",
      statement: "能够在多学科背景下的软件项目团队中承担个体、团队成员以及负责人的角色。",
      indicators: [
        "理解个人与团队利益的一致性，具有合作精神，能够与软件项目团队内成员（包括其他学科成员）有效沟通，合作共事。",
        "能够在软件项目团队合作中独立思考并承担不同团队角色的相应职责，具备有效运作、组织协调能力。"
      ]
    },
    {
      number: 10,
      title: "沟通",
      cluster: "协作与沟通",
      statement: "能够就复杂软件工程问题与业界同行及社会公众进行有效沟通和交流，包括撰写报告和设计文稿、陈述发言、清晰表达或回应指令，并具备一定的国际视野，能够在跨文化背景下进行沟通和交流。",
      indicators: [
        "能够依据相关的工程标准及技术规范，针对复杂软件工程问题的解决方案与同学、同行及公众进行有效沟通，包括撰写报告、设计文稿、陈述观点、表达意见以及准确回应提问等。",
        "了解专业领域的国际发展趋势、研究热点，理解和尊重世界不同文化的差异性和多样性。",
        "掌握一门外语，具有一定的听说、读写译能力；能够在跨文化背景下进行沟通和交流。"
      ]
    },
    {
      number: 11,
      title: "项目管理",
      cluster: "管理与持续发展",
      statement: "理解并掌握软件工程工程管理原理与经济决策方法，并能在多学科环境中应用，具有一定的软件项目管理能力。",
      indicators: [
        "掌握软件工程项目中涉及的管理与经济决策方法。",
        "理解软件工程及软件产品全周期、全流程的成本构成，理解其中涉及的工程管理与经济决策问题。",
        "能在多学科环境下（包括模拟环境），在设计开发解决方案的过程中，运用工程管理与经济决策方法。"
      ]
    },
    {
      number: 12,
      title: "终身学习",
      cluster: "管理与持续发展",
      statement: "具有自主学习和终身学习的意识，有不断学习和适应发展的能力。",
      indicators: [
        "能够理解自主学习和终身学习的重要性与必要性，以适应社会进步和软件工程专业相关技术发展的要求。",
        "具有一定的自主学习能力，包括掌握新技术和新方法的能力、总结归纳知识经验的能力以及提出问题的能力。"
      ]
    }
  ],
  // ---- 各学期课程数据（来源：2018版课程体系原始网页表格） ----
  courses: [
    // 通识必修 ── 第1学期
    { name: "思想道德修养与法律基础", credits: 3, hours: 48, category: "通识必修", assessment: "C", semester: 1 },
    { name: "大学英语读写译1", credits: 3, hours: 48, category: "通识必修", assessment: "S", semester: 1 },
    { name: "大学英语听说1", credits: 3, hours: 48, category: "通识必修", assessment: "S", semester: 1 },
    { name: "计算机科学导论", credits: 1.5, hours: 24, category: "通识必修", assessment: "C", semester: 1 },
    { name: "职业生涯规划", credits: 1, hours: 22, category: "通识必修", assessment: "C", semester: 1 },
    { name: "体育（一）", credits: 1, hours: 36, category: "通识必修", assessment: "C", semester: 1 },
    // 通识必修 ── 第2学期
    { name: "马克思主义基本原理概论", credits: 3, hours: 48, category: "通识必修", assessment: "S", semester: 2 },
    { name: "大学英语读写译2", credits: 3, hours: 48, category: "通识必修", assessment: "S", semester: 2 },
    { name: "大学英语听说2", credits: 3, hours: 48, category: "通识必修", assessment: "S", semester: 2 },
    { name: "军事理论", credits: 1, hours: 36, category: "通识必修", assessment: "C", semester: 2 },
    { name: "体育（二）", credits: 1, hours: 36, category: "通识必修", assessment: "C", semester: 2 },
    // 通识必修 ── 第3学期
    { name: "毛泽东思想和中国特色社会主义理论体系概论", credits: 5, hours: 80, category: "通识必修", assessment: "S", semester: 3 },
    { name: "体育（三）", credits: 1, hours: 36, category: "通识必修", assessment: "C", semester: 3 },
    // 通识必修 ── 第4学期
    { name: "中国近现代史纲要", credits: 3, hours: 48, category: "通识必修", assessment: "S", semester: 4 },
    { name: "体育（四）", credits: 1, hours: 36, category: "通识必修", assessment: "C", semester: 4 },
    // 通识必修 ── 第6学期
    { name: "就业创业指导", credits: 1, hours: 16, category: "通识必修", assessment: "C", semester: 6 },
    // 学科基础 ── 第1学期
    { name: "高等数学A1", credits: 6, hours: 96, category: "学科基础", assessment: "S", semester: 1 },
    { name: "程序设计基础", credits: 4, hours: 76, category: "学科基础", assessment: "S", semester: 1 },
    // 学科基础 ── 第2学期
    { name: "高等数学A2", credits: 6, hours: 96, category: "学科基础", assessment: "S", semester: 2 },
    { name: "线性代数A", credits: 2.5, hours: 40, category: "学科基础", assessment: "S", semester: 2 },
    { name: "离散数学A", credits: 3.5, hours: 56, category: "学科基础", assessment: "S", semester: 2 },
    // 学科基础 ── 第3学期
    { name: "概率论与数理统计", credits: 3, hours: 48, category: "学科基础", assessment: "S", semester: 3 },
    { name: "大学物理C", credits: 4, hours: 64, category: "学科基础", assessment: "S", semester: 3 },
    { name: "计算机系统基础", credits: 4.5, hours: 72, category: "学科基础", assessment: "S", semester: 3 },
    { name: "数据结构A", credits: 4.5, hours: 72, category: "学科基础", assessment: "S", semester: 3 },
    // 学科基础 ── 第4学期
    { name: "物理实验B", credits: 1, hours: 32, category: "学科基础", assessment: "C", semester: 4 },
    { name: "数据库概论", credits: 3.5, hours: 56, category: "学科基础", assessment: "S", semester: 4 },
    { name: "操作系统A", credits: 4, hours: 64, category: "学科基础", assessment: "S", semester: 4 },
    // 学科基础 ── 第5学期
    { name: "网络及其计算", credits: 4, hours: 64, category: "学科基础", assessment: "S", semester: 5 },
    // 专业核心 ── 第4学期
    { name: "软件工程", credits: 3.5, hours: 56, category: "专业核心", assessment: "S", semester: 4 },
    { name: "WEB程序设计", credits: 3, hours: 48, category: "专业核心", assessment: "C", semester: 4 },
    // 专业核心 ── 第5学期
    { name: "软件质量保证与测试", credits: 2.5, hours: 40, category: "专业核心", assessment: "C", semester: 5 },
    { name: "软件建模技术", credits: 3, hours: 48, category: "专业核心", assessment: "C", semester: 5 },
    { name: "软件项目管理", credits: 3, hours: 48, category: "专业核心", assessment: "C", semester: 5 },
    // 专业核心 ── 第6学期
    { name: "软件构造", credits: 3, hours: 48, category: "专业核心", assessment: "C", semester: 6 },
    { name: "软件设计与体系结构", credits: 3, hours: 48, category: "专业核心", assessment: "C", semester: 6 },
    // 实践 ── 第2学期（含小学期）
    { name: "程序设计基础课程设计", credits: 2, hours: 0, category: "实践", assessment: "C", semester: 2, note: "2 周" },
    { name: "软件开发实训Ⅰ", credits: 3, hours: 0, category: "实践", assessment: "C", semester: 2, note: "4 周 · 小学期" },
    // 实践 ── 第3学期
    { name: "电工技能与电子工艺技术实训", credits: 1, hours: 0, category: "实践", assessment: "C", semester: 3, note: "1 周" },
    // 实践 ── 第4学期（含小学期）
    { name: "面向对象课程设计", credits: 2, hours: 0, category: "实践", assessment: "C", semester: 4, note: "2 周" },
    { name: "软件开发实训Ⅱ", credits: 3, hours: 0, category: "实践", assessment: "C", semester: 4, note: "4 周 · 小学期" },
    // 实践 ── 第6学期
    { name: "专业综合课程设计", credits: 4, hours: 0, category: "实践", assessment: "C", semester: 6, note: "4 周 · 小学期" },
    // 实践 ── 第7学期
    { name: "专业实践", credits: 4, hours: 0, category: "实践", assessment: "C", semester: 7, note: "8 周" },
    { name: "毕业实习", credits: 2, hours: 0, category: "实践", assessment: "C", semester: 7, note: "4 周" },
    // 实践 ── 第8学期
    { name: "毕业设计（论文）", credits: 12, hours: 0, category: "实践", assessment: "C", semester: 8, note: "14 周" },
    // 方向选修 ── 方向1·软件设计与开发
    { name: "前端技术", credits: 3, hours: 48, category: "方向选修", assessment: "C", semester: 5, direction: "方向1·软件设计与开发" },
    { name: "移动终端编程技术", credits: 3, hours: 48, category: "方向选修", assessment: "C", semester: 6, direction: "方向1·软件设计与开发" },
    { name: "人机交互", credits: 3, hours: 48, category: "方向选修", assessment: "C", semester: 6, direction: "方向1·软件设计与开发" },
    // 方向选修 ── 方向2·软件测试
    { name: "软件测试环境与工具", credits: 3, hours: 48, category: "方向选修", assessment: "C", semester: 5, direction: "方向2·软件测试" },
    { name: "测试过程与测试管理", credits: 3, hours: 48, category: "方向选修", assessment: "C", semester: 6, direction: "方向2·软件测试" },
    { name: "软件测试案例分析", credits: 3, hours: 48, category: "方向选修", assessment: "C", semester: 6, direction: "方向2·软件测试" },
    // 方向选修 ── 方向3·移动互联
    { name: "移动Web应用开发", credits: 3, hours: 48, category: "方向选修", assessment: "C", semester: 5, direction: "方向3·移动互联" },
    { name: "Android应用测试", credits: 3, hours: 48, category: "方向选修", assessment: "C", semester: 6, direction: "方向3·移动互联" },
    // 方向选修 ── 方向4·嵌入式系统开发
    { name: "Linux应用编程", credits: 3, hours: 48, category: "方向选修", assessment: "C", semester: 5, direction: "方向4·嵌入式系统开发" },
    { name: "嵌入式系统", credits: 3, hours: 48, category: "方向选修", assessment: "C", semester: 6, direction: "方向4·嵌入式系统开发" },
    // 方向选修 ── 方向5·测控技术
    { name: "无损检测技术", credits: 3, hours: 48, category: "方向选修", assessment: "C", semester: 5, direction: "方向5·测控技术" },
    { name: "数字图像处理", credits: 3, hours: 48, category: "方向选修", assessment: "C", semester: 5, direction: "方向5·测控技术" },
    { name: "测试技术基础", credits: 3, hours: 48, category: "方向选修", assessment: "C", semester: 6, direction: "方向5·测控技术" },
    { name: "无损检测仪器", credits: 3, hours: 48, category: "方向选修", assessment: "C", semester: 6, direction: "方向5·测控技术" },
    // 方向选修 ── 方向6·飞行器控制技术
    { name: "工程力学", credits: 2.5, hours: 40, category: "方向选修", assessment: "S", semester: 3, direction: "方向6·飞行器控制技术" },
    { name: "空气动力学C", credits: 2, hours: 32, category: "方向选修", assessment: "S", semester: 4, direction: "方向6·飞行器控制技术" },
    { name: "自动控制原理", credits: 3, hours: 48, category: "方向选修", assessment: "S", semester: 5, direction: "方向6·飞行器控制技术" },
    { name: "飞行力学", credits: 2, hours: 32, category: "方向选修", assessment: "S", semester: 6, direction: "方向6·飞行器控制技术" },
    { name: "飞行器控制系统设计", credits: 2.5, hours: 40, category: "方向选修", assessment: "S", semester: 6, direction: "方向6·飞行器控制技术" },
    // 专业任选
    { name: "专业英语", credits: 1, hours: 16, category: "专业任选", assessment: "C", semester: 5 },
    { name: "算法设计与分析A", credits: 2, hours: 32, category: "专业任选", assessment: "C", semester: 6 },
    { name: "工程与社会", credits: 1, hours: 16, category: "专业任选", assessment: "C", semester: 6 },
    { name: "大型数据库系统", credits: 2.5, hours: 40, category: "专业任选", assessment: "C", semester: 6 },
    { name: "人工智能", credits: 3, hours: 48, category: "专业任选", assessment: "C", semester: 6 },
    { name: "计算机图形学", credits: 3, hours: 48, category: "专业任选", assessment: "C", semester: 6 },
    { name: "3D编程技术", credits: 3, hours: 48, category: "专业任选", assessment: "C", semester: 6 },
    { name: "Python程序设计", credits: 2.5, hours: 40, category: "专业任选", assessment: "C", semester: 6 },
    { name: "大数据与云计算", credits: 2.5, hours: 40, category: "专业任选", assessment: "C", semester: 6 }
  ]
};

const themeStorageKey = "nchu-se-theme";
const chartRegistry = {
  curriculum: null,
  indicator: null,
  cluster: null,
  semCredits: null,
  categoryDist: null,
  hoursDist: null,
  semTrend: null
};

function getInitialTheme() {
  const savedTheme = localStorage.getItem(themeStorageKey);
  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem(themeStorageKey, theme);
  updateThemeToggle(theme);
  initCharts();
}

function updateThemeToggle(theme) {
  const toggle = document.querySelector("#theme-toggle");
  if (!toggle) {
    return;
  }

  const nextThemeLabel = theme === "dark" ? "切换亮色" : "切换暗色";
  const iconName = theme === "dark" ? "sun-medium" : "moon-star";
  toggle.innerHTML = `
    <i data-lucide="${iconName}"></i>
    <span>${nextThemeLabel}</span>
  `;
  toggle.setAttribute("aria-label", nextThemeLabel);
  renderIcons();
}

function renderHeroStats() {
  const container = document.querySelector("#hero-stats");
  container.innerHTML = siteData.heroStats
    .map(
      (stat) => `
        <article class="stat-card reveal">
          <span class="stat-card__value">${stat.value}</span>
          <span class="stat-card__label">${stat.label}</span>
          <span class="stat-card__detail">${stat.detail}</span>
        </article>
      `
    )
    .join("");
}

function renderGlanceCards() {
  const container = document.querySelector("#glance-cards");
  container.innerHTML = siteData.glanceCards
    .map(
      (card) => `
        <article class="glance-card reveal">
          <span class="glance-card__icon"><i data-lucide="${card.icon}"></i></span>
          <h3>${card.title}</h3>
          <p>${card.text}</p>
        </article>
      `
    )
    .join("");
}

function renderModules() {
  const container = document.querySelector("#module-list");
  container.innerHTML = siteData.modules
    .map(
      (module) => `
        <article class="module-card reveal">
          <div class="module-card__meta">
            <div>
              <span class="module-card__icon"><i data-lucide="${module.icon}"></i></span>
              <h3>${module.title}</h3>
            </div>
            <div class="module-card__count">
              <strong>${module.units}</strong>
              <span>${module.unitLabel}</span>
            </div>
          </div>
          <p class="module-card__note">${module.note}</p>
          <p>${module.description}</p>
          <ul class="module-chip-list">
            ${module.highlights.map((item) => `<li class="module-chip">${item}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");
}

function renderJourney() {
  const container = document.querySelector("#journey-rail");
  container.innerHTML = siteData.journey
    .map(
      (step) => `
        <article class="journey-card reveal">
          <span class="journey-card__icon"><i data-lucide="${step.icon}"></i></span>
          <span class="journey-card__stage">${step.stage}</span>
          <h3>${step.title}</h3>
          <p>${step.text}</p>
        </article>
      `
    )
    .join("");
}

function renderDirectionTabs() {
  const container = document.querySelector("#direction-tabs");
  container.innerHTML = siteData.directions
    .map(
      (direction, index) => `
        <button
          class="direction-tab ${index === 0 ? "is-active" : ""}"
          type="button"
          data-direction-id="${direction.id}"
          aria-pressed="${index === 0 ? "true" : "false"}"
        >
          <strong>${direction.name}</strong>
          <span>${direction.minCredits}</span>
        </button>
      `
    )
    .join("");
}

function renderDirectionDetail(directionId) {
  const detail = document.querySelector("#direction-detail");
  const direction = siteData.directions.find((item) => item.id === directionId) || siteData.directions[0];
  const practiceHtml = siteData.practiceModules
    .map(
      (section) => `
        <article class="practice-panel">
          <div class="direction-meta__head">
            <span class="practice-panel__icon"><i data-lucide="${section.icon}"></i></span>
            <div>
              <h4>${section.title}</h4>
              <p>所有方向共享的实践底盘</p>
            </div>
          </div>
          <ul class="practice-list">
            ${section.items.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");

  const sampleCourseHtml =
    direction.sampleCourses.length > 0
      ? direction.sampleCourses.map((course) => `<li class="direction-chip">${course}</li>`).join("")
      : '<li class="direction-chip">当前摘要未展开具体课程名</li>';

  detail.innerHTML = `
    <div class="direction-detail__grid">
      <div class="direction-meta">
        <div class="direction-meta__head">
          <span class="direction-meta__icon"><i data-lucide="map"></i></span>
          <div>
            <p class="section-tag section-tag--muted">Direction Focus</p>
            <h3>${direction.name}</h3>
            <p class="direction-subtitle">${direction.minCredits}</p>
          </div>
        </div>
        <p>${direction.summary}</p>
        <ul class="direction-keywords">
          ${direction.keywords.map((keyword) => `<li class="direction-chip">${keyword}</li>`).join("")}
        </ul>
        <section class="detail-block">
          <h4>代表性课程 / 说明</h4>
          <ul class="detail-list">
            ${sampleCourseHtml}
          </ul>
        </section>
        <section class="detail-block">
          <h4>适合人群</h4>
          <p>${direction.note}</p>
        </section>
      </div>
      <div>
        ${practiceHtml}
      </div>
    </div>
  `;

  renderIcons();
}

function bindDirectionEvents() {
  const container = document.querySelector("#direction-tabs");
  container.addEventListener("click", (event) => {
    const trigger = event.target.closest("button[data-direction-id]");
    if (!trigger) {
      return;
    }

    const directionId = trigger.dataset.directionId;
    container.querySelectorAll("button[data-direction-id]").forEach((button) => {
      const isActive = button === trigger;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
    renderDirectionDetail(directionId);
  });
}

function renderObjectives() {
  const container = document.querySelector("#objectives-grid");
  container.innerHTML = siteData.objectives
    .map(
      (objective, index) => `
        <article class="objective-card reveal">
          <span class="objective-card__index">0${index + 1}</span>
          <h3>培养目标 ${index + 1}</h3>
          <p>${objective}</p>
        </article>
      `
    )
    .join("");
}

function renderRequirements() {
  const container = document.querySelector("#requirements-accordion");
  container.innerHTML = siteData.requirements
    .map(
      (requirement) => `
        <details class="requirement reveal">
          <summary>
            <span class="requirement__index">${requirement.number}</span>
            <div>
              <strong>${requirement.title}</strong>
              <p class="requirement__statement">${requirement.statement}</p>
            </div>
            <span class="requirement__meta">${requirement.indicators.length} 个指标点</span>
          </summary>
          <div class="requirement__body">
            <div class="requirement__body-inner">
              <ul class="requirement__indicators">
                ${requirement.indicators.map((item) => `<li>${item}</li>`).join("")}
              </ul>
            </div>
          </div>
        </details>
      `
    )
    .join("");
}

function setupRequirementScrollOpen() {
  const items = document.querySelectorAll(".requirement");
  if (!items.length) return;

  // Initial state: first item open, rest closed
  items.forEach((el, i) => {
    if (i === 0) {
      el.setAttribute("open", "");
    } else {
      el.removeAttribute("open");
    }
  });

  // On scroll: open the item when it reaches the viewport center, never close others
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.setAttribute("open", "");
        }
      });
    },
    { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
  );

  items.forEach((el) => observer.observe(el));
}

function renderIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function getThemeTokens() {
  const styles = getComputedStyle(document.documentElement);
  return {
    text: styles.getPropertyValue("--text").trim(),
    muted: styles.getPropertyValue("--muted").trim(),
    line: styles.getPropertyValue("--line").trim(),
    palette: [
      styles.getPropertyValue("--chart-1").trim(),
      styles.getPropertyValue("--chart-2").trim(),
      styles.getPropertyValue("--chart-3").trim(),
      styles.getPropertyValue("--chart-4").trim(),
      styles.getPropertyValue("--chart-5").trim(),
      styles.getPropertyValue("--chart-6").trim()
    ]
  };
}

function destroyCharts() {
  Object.keys(chartRegistry).forEach((key) => {
    if (chartRegistry[key]) {
      chartRegistry[key].destroy();
      chartRegistry[key] = null;
    }
  });
}

function initCharts() {
  if (typeof Chart === "undefined") {
    return;
  }

  destroyCharts();
  const tokens = getThemeTokens();
  Chart.defaults.color = tokens.muted;
  Chart.defaults.borderColor = tokens.line;
  Chart.defaults.font.family = '"Noto Sans SC", sans-serif';

  const curriculumCanvas = document.querySelector("#curriculum-chart");
  const indicatorCanvas = document.querySelector("#indicator-chart");
  const clusterCanvas = document.querySelector("#cluster-chart");

  if (curriculumCanvas) {
    chartRegistry.curriculum = new Chart(curriculumCanvas, {
      type: "doughnut",
      data: {
        labels: siteData.modules.map((module) => module.title),
        datasets: [
          {
            data: siteData.modules.map((module) => module.units),
            backgroundColor: tokens.palette.slice(0, siteData.modules.length),
            borderWidth: 0,
            hoverOffset: 8
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "56%",
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              boxWidth: 12,
              padding: 14
            }
          },
          tooltip: {
            callbacks: {
              label(context) {
                return `${context.label}: ${context.raw} 个结构单元 / 代表性内容`;
              }
            }
          }
        }
      }
    });
  }

  if (indicatorCanvas) {
    chartRegistry.indicator = new Chart(indicatorCanvas, {
      type: "bar",
      data: {
        labels: siteData.requirements.map((item) => `${item.number}.${item.title}`),
        datasets: [
          {
            label: "指标点数量",
            data: siteData.requirements.map((item) => item.indicators.length),
            backgroundColor: tokens.palette[0],
            borderRadius: 999,
            maxBarThickness: 24
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: {
              display: false
            },
            ticks: {
              maxRotation: 50,
              minRotation: 50
            }
          },
          y: {
            beginAtZero: true,
            ticks: {
              precision: 0,
              stepSize: 1
            }
          }
        },
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });
  }

  if (clusterCanvas) {
    const clusterOrder = ["工程基础与分析", "工具、责任与规范", "协作与沟通", "管理与持续发展"];
    const clusterCounts = clusterOrder.map((cluster) =>
      siteData.requirements
        .filter((item) => item.cluster === cluster)
        .reduce((count, item) => count + item.indicators.length, 0)
    );

    chartRegistry.cluster = new Chart(clusterCanvas, {
      type: "doughnut",
      data: {
        labels: clusterOrder,
        datasets: [
          {
            data: clusterCounts,
            backgroundColor: tokens.palette.slice(1, 5),
            borderWidth: 0,
            hoverOffset: 8
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "54%",
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              boxWidth: 12,
              padding: 14
            }
          },
          tooltip: {
            callbacks: {
              label(context) {
                return `${context.label}: ${context.raw} 个指标点`;
              }
            }
          }
        }
      }
    });
  }

  // ── Chart 04: credits per semester (stacked bar, required only) ──
  const semCreditsCanvas = document.querySelector("#semester-credits-chart");
  if (semCreditsCanvas) {
    const cats = ["通识必修", "学科基础", "专业核心", "实践"];
    const sems = [1, 2, 3, 4, 5, 6, 7, 8];
    const datasets = cats.map((cat, i) => ({
      label: cat,
      data: sems.map((sem) =>
        siteData.courses
          .filter((c) => c.semester === sem && c.category === cat)
          .reduce((sum, c) => sum + c.credits, 0)
      ),
      backgroundColor: tokens.palette[i],
      borderRadius: 3,
      maxBarThickness: 44
    }));
    chartRegistry.semCredits = new Chart(semCreditsCanvas, {
      type: "bar",
      data: { labels: sems.map((s) => `第 ${s} 学期`), datasets },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: { stacked: true, grid: { display: false } },
          y: { stacked: true, beginAtZero: true, ticks: { precision: 0, stepSize: 2 } }
        },
        plugins: {
          legend: { position: "bottom", labels: { boxWidth: 12, padding: 12 } },
          tooltip: {
            callbacks: {
              label(ctx) {
                return ctx.raw > 0 ? `${ctx.dataset.label}: ${ctx.raw} 学分` : null;
              }
            }
          }
        }
      }
    });
  }

  // ── Chart 05: credit share by category (doughnut) ──
  const categoryDistCanvas = document.querySelector("#category-dist-chart");
  if (categoryDistCanvas) {
    const cats = ["通识必修", "学科基础", "专业核心", "实践", "方向选修", "专业任选"];
    const data = cats.map((cat) =>
      siteData.courses.filter((c) => c.category === cat).reduce((sum, c) => sum + c.credits, 0)
    );
    chartRegistry.categoryDist = new Chart(categoryDistCanvas, {
      type: "doughnut",
      data: {
        labels: cats,
        datasets: [{ data, backgroundColor: tokens.palette, borderWidth: 0, hoverOffset: 8 }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "54%",
        plugins: {
          legend: { position: "bottom", labels: { boxWidth: 12, padding: 12 } },
          tooltip: {
            callbacks: {
              label(ctx) {
                return `${ctx.label}: ${ctx.raw} 学分`;
              }
            }
          }
        }
      }
    });
  }

  // ── Chart 06: total lecture hours by category (horizontal bar) ──
  const hoursDistCanvas = document.querySelector("#hours-dist-chart");
  if (hoursDistCanvas) {
    const cats = ["通识必修", "学科基础", "专业核心", "方向选修", "专业任选"];
    const hours = cats.map((cat) =>
      siteData.courses
        .filter((c) => c.category === cat && c.hours > 0)
        .reduce((sum, c) => sum + c.hours, 0)
    );
    chartRegistry.hoursDist = new Chart(hoursDistCanvas, {
      type: "bar",
      data: {
        labels: cats,
        datasets: [
          {
            label: "授课学时",
            data: hours,
            backgroundColor: tokens.palette.slice(0, cats.length),
            borderRadius: 6,
            maxBarThickness: 32
          }
        ]
      },
      options: {
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            beginAtZero: true,
            grid: { color: tokens.line },
            ticks: { precision: 0 }
          },
          y: { grid: { display: false } }
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label(ctx) {
                return `${ctx.raw} 学时`;
              }
            }
          }
        }
      }
    });
  }

  // ── Chart 07: total required credits per semester (line) ──
  const semTrendCanvas = document.querySelector("#sem-trend-chart");
  if (semTrendCanvas) {
    const sems = [1, 2, 3, 4, 5, 6, 7, 8];
    const requiredCats = ["通识必修", "学科基础", "专业核心", "实践"];
    const semTotals = sems.map((sem) =>
      siteData.courses
        .filter((c) => c.semester === sem && requiredCats.includes(c.category))
        .reduce((sum, c) => sum + c.credits, 0)
    );
    const color = tokens.palette[0];
    const colorSoft = `color-mix(in oklab, ${color} 15%, transparent)`;
    chartRegistry.semTrend = new Chart(semTrendCanvas, {
      type: "line",
      data: {
        labels: sems.map((s) => `第 ${s} 学期`),
        datasets: [
          {
            label: "必修学分",
            data: semTotals,
            borderColor: color,
            backgroundColor: colorSoft,
            pointBackgroundColor: color,
            pointRadius: 5,
            pointHoverRadius: 7,
            borderWidth: 2.5,
            tension: 0.35,
            fill: true
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: { grid: { display: false } },
          y: {
            beginAtZero: true,
            ticks: { precision: 0, stepSize: 4 },
            grid: { color: tokens.line }
          }
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label(ctx) {
                return `必修学分：${ctx.raw}`;
              }
            }
          }
        }
      }
    });
  }
}

// ─────────────────────────────────────────────
// SEMESTER SCHEDULE
// ─────────────────────────────────────────────
function renderSemesterSchedule() {
  const tabsEl = document.querySelector("#semester-tabs");
  const contentEl = document.querySelector("#semester-content");
  if (!tabsEl || !contentEl) return;

  const categoryColors = {
    通识必修: { bg: "color-mix(in oklab, oklch(0.62 0.12 180) 14%, transparent)", text: "oklch(0.38 0.1 175)" },
    学科基础: { bg: "var(--primary-soft)", text: "var(--primary)" },
    专业核心: { bg: "var(--accent-soft)", text: "oklch(0.45 0.1 68)" },
    实践: { bg: "color-mix(in oklab, oklch(0.56 0.08 320) 16%, transparent)", text: "oklch(0.42 0.07 320)" },
    方向选修: { bg: "color-mix(in oklab, oklch(0.63 0.17 28) 14%, transparent)", text: "oklch(0.48 0.12 28)" },
    专业任选: { bg: "color-mix(in oklab, var(--muted) 16%, transparent)", text: "var(--muted)" }
  };

  function courseCard(c, idx) {
    const col = categoryColors[c.category] || categoryColors["专业任选"];
    const assessBg =
      c.assessment === "S"
        ? "color-mix(in oklab, oklch(0.62 0.12 180) 13%, transparent)"
        : "color-mix(in oklab, oklch(0.63 0.17 28) 11%, transparent)";
    const assessText = c.assessment === "S" ? "oklch(0.4 0.1 180)" : "oklch(0.5 0.12 28)";
    const assessLabel = c.assessment === "S" ? "考试" : "考查";
    return `<div class="course-card" style="--delay:${Math.min(idx, 10) * 38}ms">
      <p class="course-card__name">${c.name}</p>
      <div class="course-card__meta">
        <span class="course-badge" style="background:${col.bg};color:${col.text}">${c.category}</span>
        <span class="course-badge" style="background:var(--accent-soft);color:oklch(0.45 0.1 68)">${c.credits} 学分</span>
        <span class="course-badge" style="background:${assessBg};color:${assessText}">${assessLabel}</span>
      </div>
      ${c.note ? `<p class="course-card__note">${c.note}</p>` : ""}
      ${c.direction ? `<p class="course-card__direction">${c.direction}</p>` : ""}
    </div>`;
  }

  function showSemester(sem) {
    const all = siteData.courses.filter((c) => c.semester === sem);
    const required = all.filter((c) => c.category !== "方向选修" && c.category !== "专业任选");
    const elective = all.filter((c) => c.category === "方向选修" || c.category === "专业任选");

    let html = "";
    if (required.length) {
      html += `<div class="course-grid">${required.map((c, i) => courseCard(c, i)).join("")}</div>`;
    }
    if (elective.length) {
      const open = sem >= 5 ? "open" : "";
      html += `<details class="elective-fold" ${open}>
        <summary class="elective-fold__toggle">
          选修课程
          <span class="elective-fold__toggle-count">${elective.length} 门</span>
        </summary>
        <div class="course-grid">${elective.map((c, i) => courseCard(c, required.length + i)).join("")}</div>
      </details>`;
    }
    if (!html) {
      html = `<p style="color:var(--muted);padding:var(--space-lg) 0">本学期数据整理中。</p>`;
    }
    contentEl.innerHTML = html;
  }

  tabsEl.innerHTML = [1, 2, 3, 4, 5, 6, 7, 8]
    .map((s) => `<button class="semester-tab${s === 1 ? " is-active" : ""}" data-sem="${s}" type="button">第 ${s} 学期</button>`)
    .join("");

  showSemester(1);

  tabsEl.addEventListener("click", (e) => {
    const btn = e.target.closest(".semester-tab");
    if (!btn) return;
    tabsEl.querySelectorAll(".semester-tab").forEach((t) => t.classList.remove("is-active"));
    btn.classList.add("is-active");
    showSemester(Number(btn.dataset.sem));
  });
}

// ─────────────────────────────────────────────
// COURSE STATISTICS
// ─────────────────────────────────────────────
function renderCourseStats() {
  const kpiEl = document.querySelector("#stats-kpi");
  if (!kpiEl) return;

  const required = siteData.courses.filter(
    (c) => c.category !== "方向选修" && c.category !== "专业任选"
  );
  const totalRequiredCredits = required.reduce((s, c) => s + c.credits, 0);
  const examCount = siteData.courses.filter((c) => c.assessment === "S").length;
  const checkCount = siteData.courses.filter((c) => c.assessment === "C").length;

  const kpis = [
    { value: siteData.courses.length, label: "课程总数", detail: "含方向选修与专业任选" },
    { value: totalRequiredCredits.toFixed(1), label: "必修最低学分", detail: "通识 + 学科基础 + 专业核心 + 实践" },
    { value: examCount, label: "考试课", detail: "笔试考核课程数" },
    { value: checkCount, label: "考查课", detail: "过程评价 / 课程设计" }
  ];

  kpiEl.innerHTML = kpis
    .map(
      (k) => `<div class="stat-card reveal">
        <span class="stat-card__value">${k.value}</span>
        <span class="stat-card__label">${k.label}</span>
        <span class="stat-card__detail">${k.detail}</span>
      </div>`
    )
    .join("");
}

function setupRevealAnimations() {
  const revealElements = document.querySelectorAll(".reveal");
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    // Lower threshold so elements near the fold trigger reliably.
    // No negative rootMargin — that was hiding elements just below the visible edge.
    { threshold: 0.05 }
  );

  // Group elements by their containing section so stagger resets per section
  // rather than accumulating a huge delay across the whole page.
  let sectionIndex = -1;
  let lastSection = null;
  let countInSection = 0;

  revealElements.forEach((element) => {
    const section = element.closest("section, header, footer") || document.body;
    if (section !== lastSection) {
      lastSection = section;
      sectionIndex++;
      countInSection = 0;
    }
    // Within each section, stagger by 60ms; cap at 3 items so max delay = 180ms.
    const delay = Math.min(countInSection, 3) * 60;
    element.style.transitionDelay = `${delay}ms`;
    countInSection++;

    observer.observe(element);
  });
}

function bindThemeToggle() {
  const toggle = document.querySelector("#theme-toggle");
  toggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.dataset.theme;
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  });
}

/**
 * Intercept anchor-link clicks and replace the browser's unbounded CSS smooth
 * scroll with a JS scroll capped at 500ms. Also accounts for the sticky header
 * height so the target is never hidden behind it.
 */
function bindSmoothScroll() {
  const HEADER_HEIGHT = 90;
  const DURATION = 460;

  document.addEventListener("click", (event) => {
    const anchor = event.target.closest('a[href^="#"]');
    if (!anchor) {
      return;
    }

    const targetId = anchor.getAttribute("href").slice(1);
    if (!targetId) {
      return;
    }

    const target = document.getElementById(targetId);
    if (!target) {
      return;
    }

    event.preventDefault();

    const targetTop = target.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT;
    const startTop = window.scrollY;
    const distance = targetTop - startTop;

    if (Math.abs(distance) < 2) {
      return;
    }

    const startTime = performance.now();

    function easeOutQuart(t) {
      return 1 - Math.pow(1 - t, 4);
    }

    function step(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / DURATION, 1);
      window.scrollTo(0, startTop + distance * easeOutQuart(progress));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  });
}

function initializePage() {
  document.documentElement.dataset.theme = getInitialTheme();
  renderHeroStats();
  renderGlanceCards();
  renderModules();
  renderJourney();
  renderDirectionTabs();
  renderDirectionDetail(siteData.directions[0].id);
  renderSemesterSchedule();
  renderCourseStats();
  renderObjectives();
  renderRequirements();
  updateThemeToggle(document.documentElement.dataset.theme);
  bindThemeToggle();
  bindSmoothScroll();
  bindDirectionEvents();
  initCharts();
  setupRevealAnimations();
  setupRequirementScrollOpen();
  renderIcons();
}

initializePage();