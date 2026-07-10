/* ============================================================
   Single source of truth for all publications.
   Every view (chronological, by-area) and the "Selected
   publications" section on the home page render from this list.
   To add a paper: add one object here and it appears everywhere.

   Fields:
     id       unique slug (used by the home-page selected list)
     title    paper title (plain text / unicode)
     authors  author line as HTML (own name bolded; <sup> for notes)
     year     integer, used for chronological sorting
     area     grouping label for the "by area" view
     type     "journal" | "conference" | "preprint"  (badge)
     venue    HTML venue string (rendered italic)
     links    array of {label, href}
     award    optional highlight string (rendered in accent color)
   Array order = display order within a given year / area
   (list is kept newest-first).
   ============================================================ */
window.PUBLICATIONS = [
  {
    id: "projection-lyapunov",
    title: "Projection-Based Lyapunov Method for Fully Heterogeneous Weakly-Coupled MDPs",
    authors: 'Xiangcheng Zhang<sup>#*</sup>, <b>Yige Hong</b><sup>*</sup>, Weina Wang',
    year: 2025,
    area: "Restless bandits",
    type: "conference",
    venue: "Advances in Neural Information Processing Systems (NeurIPS) 38",
    links: [
      { label: "neurips", href: "https://neurips.cc/virtual/2025/loc/san-diego/poster/117242" },
      { label: "arxiv", href: "https://www.arxiv.org/abs/2502.06072" },
      { label: "poster", href: "assets/pdf/NeurIPS25_poster_v2.pdf" },
      { label: "video", href: "https://neurips.cc/virtual/2025/loc/san-diego/poster/117242" }
    ],
    award: "Spotlight at NeurIPS (3.18% of submitted papers); Outstanding Student Poster Award at Stochastic Networks 2026"
  },
  {
    id: "unichain-aperiodicity",
    title: "Unichain and Aperiodicity are Sufficient for Asymptotic Optimality of Average-Reward Restless Bandits",
    authors: '<b>Yige Hong</b>, Qiaomin Xie, Yudong Chen, Weina Wang',
    year: 2024,
    area: "Restless bandits",
    type: "journal",
    venue: "Mathematics of Operations Research. Articles in Advance",
    links: [
      { label: "journal", href: "https://pubsonline.informs.org/doi/full/10.1287/moor.2024.0678" },
      { label: "arxiv", href: "https://arxiv.org/abs/2402.05689" },
      { label: "slides", href: "assets/slides/informs2024v4-online.pdf" }
    ]
  },
  {
    id: "achieving-exponential",
    title: "Achieving Exponential Asymptotic Optimality in Average-Reward Restless Bandits without Global Attractor Assumption",
    authors: '<b>Yige Hong</b>, Qiaomin Xie, Yudong Chen, Weina Wang',
    year: 2024,
    area: "Restless bandits",
    type: "preprint",
    venue: "arXiv preprint arXiv:2405.17882",
    links: [
      { label: "arxiv", href: "https://arxiv.org/abs/2405.17882" },
      { label: "poster", href: "assets/pdf/MLxOR_poster_v1.pdf" }
    ]
  },
  {
    id: "breaking-ugap",
    title: "Restless Bandits with Average Reward: Breaking the Uniform Global Attractor Assumption",
    authors: '<b>Yige Hong</b>, Qiaomin Xie, Yudong Chen, Weina Wang',
    year: 2023,
    area: "Restless bandits",
    type: "conference",
    venue: "Advances in Neural Information Processing Systems (NeurIPS) 36",
    links: [
      { label: "neurips", href: "https://proceedings.neurips.cc/paper_files/paper/2023/hash/2a0babff3ddd4ba12062219ec161ce86-Abstract-Conference.html" },
      { label: "arxiv", href: "https://arxiv.org/abs/2306.00196" },
      { label: "slides", href: "assets/slides/neurips23-v4.pdf" },
      { label: "video", href: "https://nips.cc/virtual/2023/poster/71907" },
      { label: "poster", href: "assets/img/poster-neurips23-break-ugap-v2-final.png" }
    ],
    award: "Spotlight (3.06% of submitted papers)"
  },
  {
    id: "leave-one-out",
    title: "A new 1/(1−ρ)-scaling bound for multiserver queues via a leave-one-out technique",
    authors: '<b>Yige Hong</b>',
    year: 2025,
    area: "Queueing theory",
    type: "preprint",
    venue: "arXiv preprint arXiv:2510.11015",
    links: [
      { label: "arxiv", href: "https://arxiv.org/abs/2510.11015" },
      { label: "slides", href: "assets/slides/APS-v4-1-online.pdf" },
      { label: "poster", href: "assets/pdf/YRW_poster_v1_251006.pdf" }
    ]
  },
  {
    id: "stochastic-bin-packing",
    title: "Near-Optimal Stochastic Bin-Packing in Large Service Systems with Time-Varying Item Sizes",
    authors: '<b>Yige Hong</b>, Qiaomin Xie, Weina Wang',
    year: 2024,
    area: "Queueing theory",
    type: "conference",
    venue: "ACM SIGMETRICS, June 2024",
    links: [
      { label: "sigmetrics", href: "https://dl.acm.org/doi/10.1145/3626779" },
      { label: "arxiv", href: "https://arxiv.org/abs/2209.04123" },
      { label: "talk", href: "https://simons.berkeley.edu/talks/stochastic-bin-packing-time-varying-item-sizes" }
    ]
  },
  {
    id: "gittins-ggk",
    title: "Performance of the Gittins Policy in the G/G/1 and G/G/k, With and Without Setup Times",
    authors: '<b>Yige Hong</b>, Ziv Scully',
    year: 2023,
    area: "Queueing theory",
    type: "journal",
    venue: "Performance Evaluation, 163, 102377",
    links: [
      { label: "peva", href: "https://www.sciencedirect.com/science/article/pii/S0166531623000470" },
      { label: "arxiv", href: "https://arxiv.org/abs/2304.13231" },
      { label: "slides", href: "assets/slides/yigehong-performance-v231114-online.pdf" }
    ],
    award: "Best Paper Award of IFIP Performance 2023"
  },
  {
    id: "reset-marc",
    title: "The RESET and MARC Techniques, with Application to Multiserver-Job Analysis",
    authors: 'Izzy Grosof, <b>Yige Hong</b>, Mor Harchol-Balter, Alan Scheller-Wolf',
    year: 2023,
    area: "Queueing theory",
    type: "journal",
    venue: "Performance Evaluation, 162, 102378",
    links: [
      { label: "peva", href: "https://authors.elsevier.com/c/1hw6nbtMgEvcY" },
      { label: "arxiv", href: "https://arxiv.org/abs/2310.01621" }
    ]
  },
  {
    id: "multiserver-jobs",
    title: "Sharp Waiting-Time Bounds for Multiserver Jobs",
    authors: '<b>Yige Hong</b>, Weina Wang',
    year: 2022,
    area: "Queueing theory",
    type: "conference",
    venue: "ACM Int. Symp. Mobile Ad Hoc Networking and Computing (MobiHoc), Seoul, South Korea",
    links: [
      { label: "journal version (Stochastic Systems)", href: "https://pubsonline.informs.org/doi/10.1287/stsy.2023.0006" },
      { label: "mobihoc", href: "https://dl.acm.org/doi/10.1145/3492866.3549717" },
      { label: "arxiv", href: "https://arxiv.org/abs/2109.05343" },
      { label: "slides", href: "assets/slides/2022-mobihoc-multiserver-clean.pptx" },
      { label: "poster", href: "assets/pdf/yigeh-poster-0604-submit.pdf" }
    ]
  }
];

/* IDs shown in the home-page "Selected publications" section,
   in the order they should appear. */
window.SELECTED_PUBLICATIONS = [
  "projection-lyapunov",
  "gittins-ggk",
  "breaking-ugap",
  "unichain-aperiodicity",
  "leave-one-out"
];
