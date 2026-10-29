export interface ReleaseVersion {
  version: string;
  releaseDate: string;
  isLatest?: boolean;
  fileSize?: string;
  downloadUrl?: string;
  sha256?: string;
  highlights?: string[];
  changelog: {
    category: string;
    icon: string;
    description: string;
  }[];
}

export interface SoftwareProduct {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  description: string;
  status: 'available' | 'coming_soon';
  category: string;
  iconName: string;
  latestVersion: string;
  latestReleaseDate: string;
  platforms: {
    name: string;
    arch: string;
    type: string;
    downloadUrl: string;
    fileName: string;
    fileSize: string;
    sha256: string;
    icon: string;
    isRecommended?: boolean;
  }[];
  quickStartGuide: {
    step: number;
    title: string;
    desc: string;
    details?: string[];
    tips?: string;
  }[];
  systemRequirements: {
    dimension: string;
    minimum: string;
    recommended: string;
    notes: string;
  }[];
  highlights?: string[];
  comparison?: {
    traditionalTitle: string;
    traditionalItems: string[];
    productTitle: string;
    productItems: string[];
  };
  releases: ReleaseVersion[];
}

export const softwareProducts: SoftwareProduct[] = [
  {
    id: 'personal-ai-hub',
    name: 'Personal AI Hub',
    tagline: '个人智能数字助理与高管参谋长系统',
    badge: '商业正式版',
    description: '零代码门槛、本地数据主权、双模型智能容灾、高管知行合一的桌面智能参谋系统。工业级独立绿色免安装，内置独立 Python 运行时与 SQLite 数据库。',
    status: 'available',
    category: '智能参谋与桌面数字人',
    iconName: 'Bot',
    latestVersion: 'v1.2.0',
    latestReleaseDate: '2026-08-25',
    highlights: [
      '零代码门槛',
      '工业级绿色免安装',
      '内置离线 SenseVoice 语音',
      '双模型智能容灾',
      '本地数据主权'
    ],
    platforms: [
      {
        name: 'Windows x64 绿色完整包',
        arch: 'x86_64',
        type: '绿色免安装 .zip',
        downloadUrl: 'https://pcyhc-releases.oss-cn-beijing.aliyuncs.com/ai-releases/Personal_AI_Hub_latest.zip',
        fileName: 'Personal_AI_Hub_v1.2.0_全新开箱完整版.zip',
        fileSize: '340.8 MB',
        sha256: 'a9f59e400c65094b5f0a92e78b5533215f2d5fa7e80fd420a3e0b4386e8c83d8',
        icon: 'Windows',
        isRecommended: true
      }
    ],
    quickStartGuide: [
      {
        step: 1,
        title: '下载解压',
        desc: '下载完整解压包后，解压至任意磁盘目录（推荐路径：D:\\Personal_Knowledge_Hub，路径中避免特殊符号或过长空格）。'
      },
      {
        step: 2,
        title: '一键启动',
        desc: '支持两种便捷交互模式，双击即可无缝启动：',
        details: [
          '日常桌面交互：双击「启动数字助理.bat」；',
          '静默托盘模式：双击「启动数字助理(托盘模式).vbs」（后台静默驻留，系统托盘图标随时唤出）。'
        ]
      },
      {
        step: 3,
        title: '初始化配置 & 极速上手',
        desc: '浏览器自动弹出控制台，点击右上角「⚙️ 系统设置」，填入您的 DeepSeek / Kimi API Key 与激活授权即可开启工作。',
        tips: '💡 老用户升级：运行包内【老用户数据一键无损迁移助手.bat】即可自动无损迁移全部历史记忆库与业务配置。'
      }
    ],
    systemRequirements: [
      {
        dimension: '操作系统',
        minimum: 'Windows 10 64位 (Build 19041+)',
        recommended: 'Windows 11 64位 / Windows Server 2019+',
        notes: '全面原生支持 x86_64 架构系统'
      },
      {
        dimension: '处理器 (CPU)',
        minimum: 'Intel Core i3 / AMD Ryzen 3',
        recommended: 'Intel Core i5/i7 或 AMD 6核以上',
        notes: '本地离线语音识别与超大文档向量解析更流畅'
      },
      {
        dimension: '运行内存 (RAM)',
        minimum: '4 GB',
        recommended: '8 GB 或更高',
        notes: '保障多任务后台调度与大文本高并发解析'
      },
      {
        dimension: '存储空间 (Disk)',
        minimum: '2 GB 可用空间 (SSD 固态硬盘)',
        recommended: '10 GB+ 可用空间 (SSD)',
        notes: '需预留私有业务域文档与长周期向量记忆库空间'
      },
      {
        dimension: '软件运行依赖',
        minimum: '无需安装任何环境 (绿色纯净)',
        recommended: '无需安装任何环境 (即开即用)',
        notes: '工业级独立绿色免安装，内置独立 Python 运行时与 SQLite 数据库，无需安装 Python/Node.js/C++ 运行库'
      },
      {
        dimension: '网络要求',
        minimum: '基础互联网连接',
        recommended: '基础互联网连接',
        notes: '用于连接 DeepSeek/Kimi 大模型 API、在线版本更新及 PushPlus 微信早报推送'
      }
    ],
    releases: [
      {
        version: 'v1.2.0',
        releaseDate: '2026-08-25',
        isLatest: true,
        fileSize: '340.8 MB',
        downloadUrl: 'https://pcyhc-releases.oss-cn-beijing.aliyuncs.com/ai-releases/Personal_AI_Hub_latest.zip',
        sha256: 'a9f59e400c65094b5f0a92e78b5533215f2d5fa7e80fd420a3e0b4386e8c83d8',
        changelog: [
          {
            category: '文档',
            icon: '📖',
            description: '内置全景使用攻略与高管实战手册（明暗双主题、8大核心章节、即时搜索与目录导航）；'
          },
          {
            category: '语音',
            icon: '🎙️',
            description: '集成 SenseVoice 纯本地离线高精度语音大模型（0 API 费用、80ms 极速转写）；'
          },
          {
            category: '多模态',
            icon: '📸',
            description: '原生视觉直传解析 + 本地归档历史图片自动回溯调阅；'
          },
          {
            category: '图片解析',
            icon: '🖼️',
            description: '复杂长图、多折页海报自适应压缩与超长视觉图文诊断；'
          },
          {
            category: '稳定性',
            icon: '⚡',
            description: '根治多轮对话历史图片上下文幽灵污染与 150s 悬停死锁；'
          },
          {
            category: '更新',
            icon: '📡',
            description: '客户端双通道毫秒级在线自动更新与静默版本心跳探测。'
          }
        ]
      },
      {
        version: 'v1.1.0',
        releaseDate: '2026-08-24',
        changelog: [
          {
            category: '升级机制',
            icon: '🚀',
            description: '客户端在线自动版本检测与外部接力更新器；'
          },
          {
            category: '安全性',
            icon: '🛡️',
            description: 'Windows 绿色软件进程解闭锁与 SHA-256 完整性防篡改校验；'
          },
          {
            category: '微信',
            icon: '📱',
            description: '支持 PushPlus 微信早报富文本高亮排版；'
          },
          {
            category: '知识库',
            icon: '⚡',
            description: '优化大文件秒级分块与向量检索。'
          }
        ]
      },
      {
        version: 'v1.0.0',
        releaseDate: '2026-08-23',
        changelog: [
          {
            category: '首发',
            icon: '🚀',
            description: '个人智能数字助理与高管参谋长系统商业版绿色免安装发布；'
          },
          {
            category: '授权',
            icon: '💎',
            description: 'RSA-2048 离线机器码数字签名授权与时间水印防倒拨防篡改；'
          },
          {
            category: '模型',
            icon: '🤖',
            description: 'DeepSeek-V3 与 Kimi 200 万字双长文本引擎动态智能调度。'
          }
        ]
      }
    ]
  },
  {
    id: 'omniflow-growth-engine',
    name: 'OmniFlow Growth Engine',
    tagline: '全域多模态智能拓客与自动化内容增长引擎',
    badge: '商业正式版 (PYD核心加密)',
    description: '专为工业制造、B2B高客单及独立创业者（OPC）打造的端到端AI营销流水线。集成全网市场雷达监听、短视频/小红书图文全自动装配渲染、全渠道矩阵分发及私域线索沉淀。核心底层采用 C-Python PYD 级代码混淆与安全保护。',
    status: 'available',
    category: 'AI 营销拓客与增长流水线',
    iconName: 'Compass',
    latestVersion: 'v2.0.0',
    latestReleaseDate: '2026-10-14',
    highlights: [
      'C-Python PYD 混淆加密',
      '全自动短视频/图文渲染工厂',
      '全网爆款市场雷达监听',
      'PushPlus 微信商机早报',
      '内建私域 CRM 线索闭环'
    ],
    platforms: [
      {
        name: 'Windows x64 全功能完整版',
        arch: 'x86_64',
        type: '独立离线完整版 .zip',
        downloadUrl: 'https://pcyhc-releases.oss-cn-beijing.aliyuncs.com/ai-releases/OmniFlow_v2.0.0_Full_PYD.zip',
        fileName: 'OmniFlow_v2.0.0_Full_PYD.zip',
        fileSize: '417.6 MB',
        sha256: '77ca92e9ddb63645463316570c9eda7e40337323ac708e97abef903ff5273bc7',
        icon: 'Windows',
        isRecommended: true
      }
    ],
    quickStartGuide: [
      {
        step: 1,
        title: '下载解压',
        desc: '下载完整离线包后，解压至磁盘任意目录（推荐路径：D:\\OmniFlow_Growth_Engine，路径中请避免特殊符号或过长空格）。'
      },
      {
        step: 2,
        title: '配置大模型 API 密钥',
        desc: '打开根目录「.env」配置文件，填入您的 DeepSeek / Kimi API Key 及 PushPlus 微信早报推送 Token。'
      },
      {
        step: 3,
        title: '一键拉起自动化流水线',
        desc: '双击「启动OmniFlow.bat」，系统将自动启动后台服务并拉起 Web 交互控制台，开启雷达监听、内容渲染与线索看板。'
      }
    ],
    systemRequirements: [
      {
        dimension: '操作系统',
        minimum: 'Windows 10 64位 (Build 19041+)',
        recommended: 'Windows 11 64位 / Windows Server 2019+',
        notes: '全面原生支持 x86_64 架构系统'
      },
      {
        dimension: '处理器 (CPU)',
        minimum: 'Intel Core i3 / AMD Ryzen 3',
        recommended: 'Intel Core i5/i7 或 AMD 6核以上',
        notes: '多媒体剪辑与 FFmpeg 硬件加速合成更流畅'
      },
      {
        dimension: '运行内存 (RAM)',
        minimum: '4 GB',
        recommended: '8 GB 或更高',
        notes: '保障短视频批量渲染与多渠道并发调度'
      },
      {
        dimension: '存储空间 (Disk)',
        minimum: '3 GB 可用空间 (SSD 固态硬盘)',
        recommended: '20 GB+ 可用空间 (SSD)',
        notes: '需预留视频素材库、音频库与渲染成片输出空间'
      },
      {
        dimension: '软件运行依赖',
        minimum: '内置独立运行时与 PYD 编译核心',
        recommended: '开箱即用，无需配置环境',
        notes: '工业级核心算法已全量 Cython/PYD 二进制编译保护，内置依赖组件'
      },
      {
        dimension: '网络要求',
        minimum: '基础互联网连接',
        recommended: '基础互联网连接',
        notes: '用于连接 DeepSeek/Kimi 大模型 API、市场爆款雷达检索及微信早报通知'
      }
    ],
    releases: [
      {
        version: 'v2.0.0',
        releaseDate: '2026-10-14',
        isLatest: true,
        fileSize: '417.6 MB',
        downloadUrl: 'https://pcyhc-releases.oss-cn-beijing.aliyuncs.com/ai-releases/OmniFlow_v2.0.0_Full_PYD.zip',
        sha256: '77ca92e9ddb63645463316570c9eda7e40337323ac708e97abef903ff5273bc7',
        changelog: [
          {
            category: '核心安全',
            icon: '🛡️',
            description: '核心模块全量迁移至 Cython/PYD 二进制加密编译，构筑算法级知识产权安全防线；'
          },
          {
            category: '视频工厂',
            icon: '🎬',
            description: '集成 FFmpeg 硬件加速与多轨音频自动混音对齐引擎，实现工业级自动化批量成片；'
          },
          {
            category: '图文引擎',
            icon: '📸',
            description: '新增小红书高权重信息图/卡片排版自动渲染器与爆款文案自动仿写；'
          },
          {
            category: '市场雷达',
            icon: '📡',
            description: '上线全天候行业爆款视频文案提取与竞品监控，集成 PushPlus 微信早报推送；'
          },
          {
            category: '商机沉淀',
            icon: '🎯',
            description: '内建轻量化本地 CRM 数据库，支持公域访客意向与留资线索全流程追溯与状态管理。'
          }
        ]
      }
    ]
  },
  {
    id: 'oceanone-database',
    name: 'OceanOne Premium 18',
    tagline: '新一代极速数据库旗舰 · 深度兼容 Navicat · 毫秒级极速启动',
    badge: '商业旗舰版 · 终身买断',
    description: '深度平替 Navicat 16/17，支持 1 秒一键导入 Navicat 全量连接与密码无损解密。基于 Tauri 2.0 + 纯 Rust 内核构建，冷启动仅 0.2 秒，内存占用仅 30MB。支持画布级动态 ER 关系拓扑图、跨库 Schema 结构差分增量生成与实时会话死锁监控强杀。原生通吃 MySQL / PostgreSQL / SQL Server / SQLite 全平台。',
    status: 'available',
    category: '现代化开发与数据底座',
    iconName: 'Database',
    latestVersion: 'v0.1.1',
    latestReleaseDate: '2026-10-29',
    highlights: [
      '5.4MB 纯 Rust 极速内核',
      '0.2秒秒开 · 30MB 超轻内存',
      '1秒一键导入 Navicat 连接',
      '画布级智能动态 ER 拓扑图',
      '跨库结构差分与增量 SQL 生成',
      '一次买断 · 终身免费升级维护'
    ],
    comparison: {
      traditionalTitle: '传统的 Navicat 等老旧工具',
      traditionalItems: [
        '按年高昂订阅费用，普通开发者/中小团队成本压力巨大',
        '换电脑或系统升级频繁掉激活，重填数十个连接耗时耗力',
        '底层依赖沉重架构，冷启动转圈数秒，内存动辄消耗数百兆',
        '十万级大表滚动发烫卡顿，频繁崩溃丢失临时查询'
      ],
      productTitle: '全新的 OceanOne Premium 18',
      productItems: [
        '终身买断制：拒绝按月年续费，一次购买尊享终身大版本免费升级',
        '1秒无缝平替：一键导入 .ncx 连接，自动解密密码，零学习成本无痛迁移',
        '纯 Rust 底层：冷启动仅 0.2 秒，日常内存占用仅约 30MB，十万数据秒级响应',
        '黑科技超越：画布级网格 ER 图、跨环境 Schema 比对自动生成 ALTER TABLE'
      ]
    },
    platforms: [
      {
        name: 'Windows x64 原生安装包',
        arch: 'x86_64',
        type: '原生独立安装程序 .exe',
        downloadUrl: 'https://pcyhc-releases.oss-cn-beijing.aliyuncs.com/ai-releases/OceanOne_0.1.1_x64-setup.exe',
        fileName: 'OceanOne_0.1.1_x64-setup.exe',
        fileSize: '5.4 MB',
        sha256: 'bfeb4a92256f5de29e65d717a1a6f25071fed5cf7fa600d217a665deaa4febe9',
        icon: 'Windows',
        isRecommended: true
      }
    ],
    quickStartGuide: [
      {
        step: 1,
        title: '下载与极速安装',
        desc: '下载 5.4MB 原生安装程序，双击「OceanOne_0.1.1_x64-setup.exe」即可完成秒级安装，无需配置任何 Node/Python/Java 环境。'
      },
      {
        step: 2,
        title: '一键无痛迁移（1 秒平替）',
        desc: '打开软件，点击顶部【导入连接】，选择您原有的 Navicat 导出配置（.ncx 文件），系统将自动识别并解密所有数据库连接与密码，立即连接！'
      },
      {
        step: 3,
        title: '开启现代化数据管理体验',
        desc: '即可享受 0.2 秒冷启动、十万级数据秒开、可视化 ER 拓扑图与跨库结构自动化比对生成。换电脑随时使用，终身免费包维护。'
      }
    ],
    systemRequirements: [
      {
        dimension: '操作系统',
        minimum: 'Windows 10 64位 (1809+) / Windows 11',
        recommended: 'Windows 10 / Windows 11 64位',
        notes: '全面原生支持 x86_64 架构系统，Mac 平台版本即将推出'
      },
      {
        dimension: '处理器 (CPU)',
        minimum: '任意 x86_64 双核处理器',
        recommended: 'Intel Core / AMD Ryzen 现代处理器',
        notes: 'Rust 底层极高并发与运算效率，不挑硬件'
      },
      {
        dimension: '运行内存 (RAM)',
        minimum: '512 MB 内存',
        recommended: '2 GB 内存',
        notes: '日常稳定占用仅约 30MB~80MB，告别传统工具数百兆内存吞噬'
      },
      {
        dimension: '存储空间 (Disk)',
        minimum: '50 MB 可用空间',
        recommended: '500 MB 可用空间 (预留大表导出缓存)',
        notes: '安装包仅 5.4MB，极致轻量纯净'
      },
      {
        dimension: '运行环境依赖',
        minimum: '零环境依赖（开箱即用）',
        recommended: '零环境依赖（开箱即用）',
        notes: '纯 C/Rust 机器码编译封装，无需额外安装 Java JRE 或 Python'
      },
      {
        dimension: '兼容数据库类型',
        minimum: 'MySQL 5.7+, PostgreSQL, SQLite',
        recommended: 'MySQL 5.7/8.0, PostgreSQL 12+, SQL Server 2016+, SQLite 3',
        notes: '全量驱动原生集成，支持高可用 SSL 加密与 SSH 安全隧道穿透'
      }
    ],
    releases: [
      {
        version: 'v0.1.1',
        releaseDate: '2026-10-29',
        isLatest: true,
        fileSize: '5.4 MB',
        downloadUrl: 'https://pcyhc-releases.oss-cn-beijing.aliyuncs.com/ai-releases/OceanOne_0.1.1_x64-setup.exe',
        sha256: 'bfeb4a92256f5de29e65d717a1a6f25071fed5cf7fa600d217a665deaa4febe9',
        changelog: [
          {
            category: '平替兼容',
            icon: '⚡',
            description: '深度平替 Navicat 16/17：支持一键解析导入 .ncx 配置文件，自动解密已保存密码；'
          },
          {
            category: '极致性能',
            icon: '🚀',
            description: '采用 Tauri 2.0 + 纯 Rust 底层架构，5.4MB 超轻包体，0.2 秒冷启动，内存占用降低 90%；'
          },
          {
            category: '智能 ER',
            icon: '🕸️',
            description: '上线画布级智能实体关系模型图（ER Diagram），主外键平滑贝塞尔曲线实时拓扑跟随；'
          },
          {
            category: '结构差分',
            icon: '🔄',
            description: '一键跨库 Schema 结构差分比对，自动生成标准的 ALTER TABLE 增量变更 SQL 脚本；'
          },
          {
            category: '安全会话',
            icon: '🛡️',
            description: '内置 Processlist 实时监控与死锁检测，支持一键中断慢查询与踢出卡死连接；'
          },
          {
            category: '多源支持',
            icon: '🗄️',
            description: '全面原生直连支持 MySQL 5.7/8.0、PostgreSQL、SQL Server 与本地 SQLite。'
          }
        ]
      }
    ]
  }
];
