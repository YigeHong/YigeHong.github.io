/* ============================================================
   Single source of truth for all works.
   Every view (chronological, by-area) and the home-page
   "Selected publications" section render from this list.

   The unit here is a *work* (research project), not a single
   publication record: a work may carry several venues (e.g.
   conference + journal version) and artifacts (slides, poster,
   video), all attached as links.

   Fields:
     id            unique slug (used by the selected list)
     title         paper title (unicode ok)
     authors       author line as HTML (own name bold, <sup> notes)
     area          grouping label for the "by area" view
     firstAppeared "YYYY-MM" of first public appearance (arXiv);
                   used to sort the chronological view
     venue         HTML venue string with year(s) shown inline
     links         array of {label, href, kind}; kind is one of
                   "arxiv" | "journal" | "conference" | "resource"
                   and controls the button color
     award         optional highlight string
     bibtex        official BibTeX (from bib/my_work.bib)
   Array order is kept newest-first by firstAppeared.
   ============================================================ */
window.PUBLICATIONS = [
  {
    id: "entropy-control-llm",
    title: "Demystifying Entropy Control in LLM RL Training: Theoretical Analysis and Dynamic Scheduling",
    shortTitle: "Demystifying entropy control in LLM RL training",
    authors: 'Jingchu Gai, Guanning Zeng, Huaqing Zhang, Han Zhong, <b>Yige Hong</b>, Andrej Risteski, Aditi Raghunathan',
    area: "Other topics",
    firstAppeared: "2026-07",
    venue: "International Conference on Machine Learning (ICML), 2026",
    venueShort: "ICML 2026",
    links: [
      { label: "openreview", href: "https://openreview.net/forum?id=hq2MPYXAko", kind: "conference" },
      { label: "poster", href: "https://icml.cc/virtual/2026/poster/62302", kind: "resource" }
    ],
    award: "Spotlight at ICML (2.2% of submissions)"
  },
  {
    id: "one-fast-two-slow",
    title: "Optimality of a Threshold Policy for a Queueing System with One Fast Server and Two Identical Slow Servers",
    shortTitle: "Optimality of a threshold policy for one-fast-two-slow queueing system",
    authors: 'Weina Wang, Taha Ameen, Yudong Chen, <b>Yige Hong</b>, Josh Nichols, Matthew Zurek',
    area: "Other topics",
    firstAppeared: "2026-07",
    venue: "arXiv preprint, 2026",
    venueShort: "arXiv 2026",
    links: [
      { label: "arxiv", href: "https://arxiv.org/abs/2607.22580", kind: "arxiv" },
      { label: "pdf", href: "assets/pdf/One_fast_two_slow_conjecture.pdf", kind: "resource" }
    ],
    note:
      '<p class="pub-note-credit">The background and authorship note below are adapted from ' +
      'my advisor <a href="https://www.cs.cmu.edu/~weinaw/publications.html">Weina Wang&rsquo;s ' +
      'website</a>.</p>' +
      '<p>This paper solves a case in an open problem originally proposed by ' +
      '<a href="https://ieeexplore.ieee.org/document/1103637">Lin and Kumar (1984)</a>. ' +
      'We first read about this open problem in the paper by ' +
      '<a href="https://dl.acm.org/doi/10.1007/s11134-022-09761-y">Koole (2022)</a> ' +
      'in the special issue &ldquo;100 Views on Queues&rdquo; that celebrates Volume 100 of ' +
      'Queueing Systems.</p>' +
      '<p>This is a special paper since the core technical ideas in this paper are generated ' +
      'by GPT-5.5 Pro. We put ourselves down as authors, but this is not authorship in a ' +
      'traditional sense. Our role is to verify the proofs and rewrite the paper for better ' +
      'rigor, clarity, and exposition. In addition, three key lemmas have also been verified ' +
      'in Lean 4 [<a href="https://github.com/JoshuaAN/one-fast-two-slow-conjecture">GitHub</a>]. ' +
      'We have included a short report at the end of the appendix describing the authors\' ' +
      'interactions with GPT-5.5 Pro.</p>',
    bibtex: [
      "@article{WanEtAl_26_onefasttwoslow,",
      "  author  = {Wang, Weina and Ameen, Taha and Chen, Yudong and Hong, Yige and Nichols, Josh and Zurek, Matthew},",
      "  title   = {Optimality of a Threshold Policy for a Queueing System with One Fast Server and Two Identical Slow Servers},",
      "  journal = {arXiv preprint arXiv:2607.22580},",
      "  year    = {2026}",
      "}"
    ].join("\n")
  },
  {
    id: "leave-one-out",
    title: "An interpretable universal bound for multiserver queues via a leave-one-out technique",
    shortTitle: "Universal bound for multiserver queues via leave-one-out",
    thumb: "assets/img/thumbs/leave-one-out.png",
    authors: '<b>Yige Hong</b>',
    area: "Queueing theory",
    firstAppeared: "2025-10",
    venue: "arXiv preprint, 2025",
    links: [
      { label: "arxiv", href: "https://arxiv.org/abs/2510.11015", kind: "arxiv" },
      { label: "slides", href: "assets/slides/APS-v4-1-online.pdf", kind: "resource" },
      { label: "poster", href: "assets/pdf/YRW_poster_v1_251006.pdf", kind: "resource" }
    ],
    note:
      '<p>Previously titled &ldquo;A new 1/(1−ρ)-scaling bound for multiserver ' +
      'queues via a leave-one-out technique&rdquo; (arXiv v1&ndash;v2). Citations ' +
      'under the earlier title refer to this work.</p>',
    bibtex: [
      "@article{Hon_25_loo,",
      "  author     = {Hong, Yige},",
      "  title      = {An interpretable universal bound for multiserver queues via a leave-one-out technique},",
      "  journal    = {CoRR},",
      "  volume     = {abs/2510.11015},",
      "  year       = {2025},",
      "  doi        = {10.48550/ARXIV.2510.11015},",
      "  eprint     = {2510.11015},",
      "  eprinttype = {arXiv}",
      "}"
    ].join("\n")
  },
  {
    id: "projection-lyapunov",
    title: "Projection-Based Lyapunov Method for Fully Heterogeneous Weakly-Coupled MDPs",
    shortTitle: "Projection-based Lyapunov method for weakly-coupled MDPs",
    thumb: "assets/img/thumbs/projection-lyapunov.png",
    authors: 'Xiangcheng Zhang<sup>#*</sup>, <b>Yige Hong</b><sup>*</sup>, Weina Wang',
    area: "Restless bandits & Weakly-Coupled Markov Decision Processes",
    firstAppeared: "2025-02",
    venue: "Advances in Neural Information Processing Systems (NeurIPS), 2025",
    links: [
      { label: "NeurIPS", href: "https://neurips.cc/virtual/2025/loc/san-diego/poster/117242", kind: "conference" },
      { label: "arxiv", href: "https://www.arxiv.org/abs/2502.06072", kind: "arxiv" },
      { label: "poster", href: "assets/pdf/NeurIPS25_poster_v2.pdf", kind: "resource" },
      { label: "video", href: "https://neurips.cc/virtual/2025/loc/san-diego/poster/117242", kind: "resource" }
    ],
    award: "Spotlight at NeurIPS (3.18% of submissions); Outstanding Student Poster Award at Stochastic Networks 2026",
    bibtex: [
      "@inproceedings{ZhaHonWan_25_proj,",
      "  author    = {Zhang, Xiangcheng and Hong, Yige and Wang, Weina},",
      "  title     = {Projection-based {Lyapunov} method for fully heterogeneous weakly-coupled {MDPs}},",
      "  booktitle = {Advances in Neural Information Processing Systems 38 (NeurIPS 2025)},",
      "  volume    = {38},",
      "  pages     = {91054--91076},",
      "  doi       = {10.52202/085713-3045},",
      "  year      = {2025}",
      "}"
    ].join("\n")
  },
  {
    id: "achieving-exponential",
    title: "Achieving Exponential Asymptotic Optimality in Average-Reward Restless Bandits without Global Attractor Assumption",
    shortTitle: "Exponential asymptotic optimality in RBs without global attractors",
    thumb: "assets/img/thumbs/achieving-exponential.png",
    authors: '<b>Yige Hong</b>, Qiaomin Xie, Yudong Chen, Weina Wang',
    area: "Restless bandits & Weakly-Coupled Markov Decision Processes",
    firstAppeared: "2024-05",
    venue: "arXiv preprint, 2024",
    links: [
      { label: "arxiv", href: "https://arxiv.org/abs/2405.17882", kind: "arxiv" },
      { label: "poster", href: "assets/pdf/MLxOR_poster_v1.pdf", kind: "resource" }
    ],
    bibtex: [
      "@article{HonXieCheWan_24_exp,",
      "  author     = {Hong, Yige and Xie, Qiaomin and Chen, Yudong and Wang, Weina},",
      "  title      = {Achieving Exponential Asymptotic Optimality in Average-Reward Restless Bandits without Global Attractor Assumption},",
      "  journal    = {CoRR},",
      "  volume     = {abs/2405.17882},",
      "  year       = {2024},",
      "  doi        = {10.48550/ARXIV.2405.17882},",
      "  eprint     = {2405.17882},",
      "  eprinttype = {arXiv}",
      "}"
    ].join("\n")
  },
  {
    id: "unichain-aperiodicity",
    title: "Unichain and Aperiodicity are Sufficient for Asymptotic Optimality of Average-Reward Restless Bandits",
    shortTitle: "Unichain and Aperiodicity are Sufficient for Asymptotic Optimality of RBs",
    thumb: "assets/img/thumbs/unichain-aperiodicity.png",
    authors: '<b>Yige Hong</b>, Qiaomin Xie, Yudong Chen, Weina Wang',
    area: "Restless bandits & Weakly-Coupled Markov Decision Processes",
    firstAppeared: "2024-02",
    venue: "Mathematics of Operations Research (Articles in Advance), 2025",
    links: [
      { label: "MOR", href: "https://pubsonline.informs.org/doi/full/10.1287/moor.2024.0678", kind: "journal" },
      { label: "arxiv", href: "https://arxiv.org/abs/2402.05689", kind: "arxiv" },
      { label: "slides", href: "assets/slides/informs2024v4-online.pdf", kind: "resource" },
      { label: "blog", href: "https://www.cs.cmu.edu/~csd-phd-blog/2026/restless-bandits/", kind: "blog" }
    ],
    bibtex: [
      "@article{HonXieCheWan_24_moor,",
      "  author  = {Hong, Yige and Xie, Qiaomin and Chen, Yudong and Wang, Weina},",
      "  title   = {Unichain and Aperiodicity Are Sufficient for Asymptotic Optimality of Average-Reward Restless Bandits},",
      "  journal = {Mathematics of Operations Research},",
      "  note    = {Articles in Advance},",
      "  year    = {2025},",
      "  doi     = {10.1287/moor.2024.0678}",
      "}"
    ].join("\n")
  },
  {
    id: "reset-marc",
    title: "The RESET and MARC Techniques, with Application to Multiserver-Job Analysis",
    shortTitle: "The RESET and MARC techniques for multiserver jobs",
    authors: 'Izzy Grosof, <b>Yige Hong</b>, Mor Harchol-Balter, Alan Scheller-Wolf',
    area: "Queueing theory",
    firstAppeared: "2023-10",
    venue: "Performance Evaluation, 2023",
    venueShort: "Perform. Eval. 2023",
    links: [
      { label: "PEVA", href: "https://authors.elsevier.com/c/1hw6nbtMgEvcY", kind: "journal" },
      { label: "arxiv", href: "https://arxiv.org/abs/2310.01621", kind: "arxiv" }
    ],
    bibtex: [
      "@article{GroHonHarSch_23_reset,",
      "  author  = {Grosof, Isaac and Hong, Yige and Harchol-Balter, Mor and Scheller-Wolf, Alan},",
      "  title   = {The {RESET} and {MARC} techniques, with application to multiserver-job analysis},",
      "  journal = {Perform. Evaluation},",
      "  volume  = {162},",
      "  pages   = {102378},",
      "  year    = {2023},",
      "  doi     = {10.1016/J.PEVA.2023.102378}",
      "}"
    ].join("\n")
  },
  {
    id: "breaking-ugap",
    title: "Restless Bandits with Average Reward: Breaking the Uniform Global Attractor Assumption",
    shortTitle: "Breaking the uniform global attractor assumption",
    thumb: "assets/img/thumbs/breaking-ugap.png",
    authors: '<b>Yige Hong</b>, Qiaomin Xie, Yudong Chen, Weina Wang',
    area: "Restless bandits & Weakly-Coupled Markov Decision Processes",
    firstAppeared: "2023-06",
    venue: "Advances in Neural Information Processing Systems (NeurIPS), 2023",
    links: [
      { label: "NeurIPS", href: "https://proceedings.neurips.cc/paper_files/paper/2023/hash/2a0babff3ddd4ba12062219ec161ce86-Abstract-Conference.html", kind: "conference" },
      { label: "arxiv", href: "https://arxiv.org/abs/2306.00196", kind: "arxiv" },
      { label: "slides", href: "assets/slides/neurips23-v4.pdf", kind: "resource" },
      { label: "video", href: "https://nips.cc/virtual/2023/poster/71907", kind: "resource" },
      { label: "poster", href: "assets/img/poster-neurips23-break-ugap-v2-final.png", kind: "resource" }
    ],
    award: "Spotlight (3.06% of submissions)",
    bibtex: [
      "@inproceedings{HonXieCheWan_23_ugap,",
      "  author    = {Hong, Yige and Xie, Qiaomin and Chen, Yudong and Wang, Weina},",
      "  title     = {Restless Bandits with Average Reward: Breaking the Uniform Global Attractor Assumption},",
      "  booktitle = {Advances in Neural Information Processing Systems 36 (NeurIPS 2023)},",
      "  volume    = {36},",
      "  pages     = {12810--12844},",
      "  year      = {2023}",
      "}"
    ].join("\n")
  },
  {
    id: "gittins-ggk",
    title: "Performance of the Gittins Policy in the G/G/1 and G/G/k, With and Without Setup Times",
    shortTitle: "Gittins Policy in G/G/k with Setup Times",
    thumb: "assets/img/thumbs/gittins-ggk.png",
    authors: '<b>Yige Hong</b>, Ziv Scully',
    area: "Queueing theory",
    firstAppeared: "2023-04",
    venue: "Performance Evaluation, 2024",
    links: [
      { label: "PEVA", href: "https://www.sciencedirect.com/science/article/pii/S0166531623000470", kind: "journal" },
      { label: "arxiv", href: "https://arxiv.org/abs/2304.13231", kind: "arxiv" },
      { label: "slides", href: "assets/slides/yigehong-performance-v231114-online.pdf", kind: "resource" }
    ],
    award: "Best Paper Award of IFIP Performance 2023",
    bibtex: [
      "@article{HonScu_24_gittins,",
      "  author  = {Hong, Yige and Scully, Ziv},",
      "  title   = {Performance of the Gittins policy in the {G/G/1} and {G/G/k}, with and without setup times},",
      "  journal = {Perform. Evaluation},",
      "  volume  = {163},",
      "  pages   = {102377},",
      "  year    = {2024},",
      "  doi     = {10.1016/J.PEVA.2023.102377}",
      "}"
    ].join("\n")
  },
  {
    id: "stochastic-bin-packing",
    title: "Near-Optimal Stochastic Bin-Packing in Large Service Systems with Time-Varying Item Sizes",
    shortTitle: "Stochastic bin-packing with time-varying item sizes",
    thumb: "assets/img/thumbs/stochastic-bin-packing.png",
    authors: '<b>Yige Hong</b>, Qiaomin Xie, Weina Wang',
    area: "Queueing theory",
    firstAppeared: "2022-09",
    venue: "ACM SIGMETRICS, 2024",
    links: [
      { label: "SIGMETRICS", href: "https://dl.acm.org/doi/10.1145/3626779", kind: "conference" },
      { label: "arxiv", href: "https://arxiv.org/abs/2209.04123", kind: "arxiv" },
      { label: "talk", href: "https://simons.berkeley.edu/talks/stochastic-bin-packing-time-varying-item-sizes", kind: "resource" }
    ],
    bibtex: [
      "@article{HonXieWan_23_binpack,",
      "  author  = {Hong, Yige and Xie, Qiaomin and Wang, Weina},",
      "  title   = {Near-Optimal Stochastic Bin-Packing in Large Service Systems with Time-Varying Item Sizes},",
      "  journal = {Proc. {ACM} Meas. Anal. Comput. Syst.},",
      "  volume  = {7},",
      "  number  = {3},",
      "  pages   = {48:1--48:46},",
      "  year    = {2023},",
      "  doi     = {10.1145/3626779}",
      "}"
    ].join("\n")
  },
  {
    id: "multiserver-jobs",
    title: "Sharp Waiting-Time Bounds for Multiserver Jobs",
    shortTitle: "Sharp waiting-time bounds for multiserver jobs",
    thumb: "assets/img/thumbs/multiserver-jobs.png?v=2",
    authors: '<b>Yige Hong</b>, Weina Wang',
    area: "Queueing theory",
    firstAppeared: "2021-09",
    venue: "ACM MobiHoc, 2022 &middot; journal version in Stochastic Systems, 2024",
    links: [
      { label: "Stoch. Syst.", href: "https://pubsonline.informs.org/doi/10.1287/stsy.2023.0006", kind: "journal" },
      { label: "MobiHoc", href: "https://dl.acm.org/doi/10.1145/3492866.3549717", kind: "conference" },
      { label: "arxiv", href: "https://arxiv.org/abs/2109.05343", kind: "arxiv" },
      { label: "slides", href: "assets/slides/2022-mobihoc-multiserver-clean.pptx", kind: "resource" },
      { label: "poster", href: "assets/pdf/yigeh-poster-0604-submit.pdf", kind: "resource" }
    ],
    bibtex: [
      "@article{HonWan_24_ss,",
      "  author  = {Hong, Yige and Wang, Weina},",
      "  title   = {Sharp Waiting-Time Bounds for Multiserver Jobs},",
      "  journal = {Stochastic Systems},",
      "  volume  = {14},",
      "  number  = {4},",
      "  pages   = {455--478},",
      "  year    = {2024},",
      "  doi     = {10.1287/stsy.2023.0006}",
      "}"
    ].join("\n")
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
