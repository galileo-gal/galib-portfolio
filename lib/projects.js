export const projects = [
  {
    slug: "aquavision",
    title: "AquaVision BD",
    tag: "Multimodal Deep Learning",
    year: "2026",
    summary:
      "A multimodal diagnosis system for farmed fish and shrimp disease, fusing image data with water-quality sensor readings.",
    stack: ["PyTorch", "CNN + Tabular Fusion", "Computer Vision"],
    body: [
      "AquaVision BD is a capstone system built to diagnose disease in farmed fish and shrimp by combining two very different kinds of signal: photographs of the animals and continuous water-quality readings — temperature, pH, dissolved oxygen, and ammonia.",
      "Neither signal is sufficient alone. Visual symptoms can lag or mimic other conditions; water chemistry alone can't localize disease to an individual animal. The core engineering problem was designing a fusion architecture that lets the image branch and the tabular sensor branch inform each other rather than being stapled together at the end.",
      "The project spans two semesters — a foundation and prototype phase, followed by a capstone design phase focused on refining the fusion approach and improving diagnostic accuracy.",
    ],
    links: [{ label: "Repository", href: "https://github.com/pakeezahtajwarwafa-dev/AquaVision_v1" }],
  },
  {
    slug: "hishabi",
    title: "Hishabi",
    tag: "Speech-to-Text · Android",
    year: "2026",
    summary:
      "An offline-first inventory and credit tracking Android app for Bengali shopkeepers, built around a speech-to-text pipeline.",
    stack: ["Android", "ASR / Whisper", "Bengali NLP"],
    body: [
      "Hishabi lets shopkeepers log inventory and credit transactions by voice, in Bengali, without needing a data connection. The interesting engineering surface is the ASR pipeline: audio preprocessing (noise reduction, normalization, silence trimming) feeding into a Bengali speech recognition model.",
      "Three models were evaluated head-to-head: bangla-speech-processing/BanglaASR, openai/whisper-large-v3, and hishab/titu_stt_bn_fastconformer — including fixing an input_features bug in the Hugging Face BanglaASR integration.",
      "One detail that mattered more than expected: Word Error Rate came out wrong until the Bengali dari character (the sentence-ending mark, |) was stripped from both reference and hypothesis text before scoring — an easy, silent source of misleading metrics.",
    ],
    links: [],
  },
  {
    slug: "payroll-management",
    title: "Payroll Management App",
    tag: "Full-Stack",
    year: "2026",
    summary:
      "A full-stack payroll management application with a Django backend, async task processing, and a React frontend.",
    stack: ["Django", "React / Vite", "Celery + Redis", "PostgreSQL"],
    body: [
      "A ground-up payroll management system: Django REST backend, PostgreSQL for storage, Celery with Redis for background/async processing (the kind of task queue payroll runs actually need — batch calculations, scheduled jobs), and a React + Vite frontend.",
      "Built and run locally end-to-end, including the full development stack setup — database, task queue, and both servers running together.",
    ],
    links: [{ label: "Repository", href: "https://github.com/galileo-gal/Payroll_Management" }],
  },
  {
    slug: "finance-tracker",
    title: "IEEE NSU SB Finance Tracker",
    tag: "Data Architecture",
    year: "2026",
    summary:
      "A treasury tracking system for a 100+ member student organization, designed around a centralized-log architecture.",
    stack: ["Google Sheets / Excel", "AppScript", "Data Modeling"],
    body: [
      "Built as the financial infrastructure for the IEEE NSU Student Branch treasury. The design problem was less about spreadsheets and more about data modeling: raw entries land in centralized Expense Breakdown and Sponsor Log tabs, tagged by event.",
      "Per-event tabs pull from those centralized logs via SUMIFS, roll up into a Master Events registry, and finally feed a dashboard alongside other income and an opening balance — a real centralized-log-to-dashboard pipeline, just built in spreadsheet tooling instead of a database.",
      "The system also separates two kinds of 'balance' — one including pledged/receivable amounts, one reflecting only money that has actually moved — a distinction that matters a lot once an organization has sponsors who commit funds before paying them.",
    ],
    links: [],
  },
];
