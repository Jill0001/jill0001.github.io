import Image from "next/image";
type Publication = {
  venue: string;
  title: string;
  authors: string[];
  equalContributionAuthors?: string[];
  coreContributors?: string[];
  videoSrc?: string;
  image: string;
  imageAlt: string;
  imageHref: string;
  summary: string;
  links: { label: string; href: string }[];
};

const publications: Publication[] = [
  {
    venue: "Preprint 2026",
    title: "Agent as Policy for Robotic Manipulation",
    authors: [
      "Mengzhao Jia",
      "Yang Lin",
      "Xixin Zhang",
      "Zhihan Zhang",
      "Xiaobai Liu",
      "Meng Jiang",
    ],
    coreContributors: ["Mengzhao Jia", "Yang Lin", "Xixin Zhang"],
    image: "/images/publications/agent-as-policy.jpg",
    imageAlt: "Agent as Policy robotic manipulation demonstrations",
    imageHref: "https://agent-as-policy-2026.github.io/",
    videoSrc: "/videos/agent-as-policy.mp4",
    summary:
      "Agent as Policy (AGP) lets a general purpose agent control a physical robot through visual reasoning, runtime programming, and feedback from execution. It performs assembly, block construction, dice flipping, targeted throwing, and bimanual towel folding without task or environment specific training.",
    links: [
      { label: "Project", href: "https://agent-as-policy-2026.github.io/" },
      { label: "Paper", href: "https://arxiv.org/abs/2609.12541" },
      { label: "Code", href: "https://github.com/agent-as-policy-2026/agent-as-policy" },
      { label: "Video", href: "/videos/agent-as-policy.mp4" },
    ],
  },
  {
    venue: "ACL 2026",
    title: "MMTutorBench: The First Multimodal Benchmark for AI Math Tutoring",
    authors: [
      "Tengchao Yang",
      "Sichen Guo",
      "Mengzhao Jia",
      "Jiaming Su",
      "Yuanyang Liu",
      "Zhihan Zhang",
      "Meng Jiang",
    ],
    equalContributionAuthors: ["Tengchao Yang", "Sichen Guo"],
    image: "/images/publications/mmtutorbench.png",
    imageAlt: "MMTutorBench overview",
    imageHref: "https://aclanthology.org/2026.acl-long.1068/",
    summary:
      "A benchmark for evaluating multimodal models on mathematical tutoring across insight discovery, operation formulation, and operation execution.",
    links: [
      { label: "Paper", href: "https://aclanthology.org/2026.acl-long.1068/" },
      { label: "Code", href: "https://github.com/TangciuYueng/MMTutorBench" },
      { label: "Dataset", href: "https://huggingface.co/datasets/Tangchiu/mmtutorbench" },
    ],
  },
  {
    venue: "ACL 2026 (Findings)",
    title: "AutoRubric: Rubric-Based Generative Rewards for Faithful Multimodal Reasoning",
    authors: [
      "Mengzhao Jia",
      "Zhihan Zhang",
      "Ignacio Cases",
      "Zheyuan Liu",
      "Meng Jiang",
      "Peng Qi",
    ],
    image: "/images/publications/autorubric.png",
    imageAlt: "AutoRubric method overview",
    imageHref: "https://aclanthology.org/2026.findings-acl.1282/",
    summary:
      "A rubric-driven reward framework for improving the accuracy and faithfulness of multimodal reasoning.",
    links: [
      { label: "Paper", href: "https://aclanthology.org/2026.findings-acl.1282/" },
      { label: "Code", href: "https://github.com/Jill0001/AutoRubric-R1V" },
    ],
  },
  {
    venue: "EMNLP 2026 (Findings)",
    title: "Prioritizing the Best: Incentivizing Reliable Multimodal Reasoning by Rewarding Beyond Answer Correctness",
    authors: ["Mengzhao Jia", "Zhihan Zhang", "Meng Jiang"],
    image: "/images/publications/prioritizing-best.png",
    imageAlt: "Groupwise Ranking Reward overview",
    imageHref: "https://arxiv.org/abs/2604.18892",
    summary:
      "A groupwise ranking reward that favors reliable, verifier-passed multimodal reasoning trajectories beyond final-answer correctness.",
    links: [{ label: "Paper", href: "https://arxiv.org/abs/2604.18892" }],
  },
  {
    venue: "TMLR 2025",
    title: "Leopard: A Vision Language Model for Text-Rich Multi-Image Tasks",
    authors: [
      "Mengzhao Jia",
      "Wenhao Yu",
      "Kaixin Ma",
      "Tianqing Fang",
      "Zhihan Zhang",
      "Siru Ouyang",
      "Hongming Zhang",
      "Dong Yu",
      "Meng Jiang",
    ],
    image: "/images/publications/leopard.png",
    imageAlt: "Leopard model overview",
    imageHref: "https://openreview.net/forum?id=R2rasAEPVi",
    summary:
      "A vision-language model and instruction data for reasoning over text-rich, multi-image inputs.",
    links: [
      { label: "Paper", href: "https://openreview.net/forum?id=R2rasAEPVi" },
      { label: "Code", href: "https://github.com/tencent-ailab/Leopard" },
      {
        label: "Dataset",
        href: "https://huggingface.co/datasets/wyu1/Leopard-Instruct",
      },
    ],
  },
  {
    venue: "NAACL 2025",
    title: "Protecting Privacy in Multimodal Large Language Models with MLLMU-Bench",
    authors: [
      "Zheyuan Liu",
      "Guangyao Dou",
      "Mengzhao Jia",
      "Zhaoxuan Tan",
      "Qingkai Zeng",
      "Yongle Yuan",
      "Meng Jiang",
    ],
    image: "/images/publications/mllmu-bench.png",
    imageAlt: "MLLMU-Bench overview",
    imageHref: "https://aclanthology.org/2025.naacl-long.207/",
    summary:
      "A benchmark for evaluating multimodal machine unlearning and privacy protection in large language models.",
    links: [
      { label: "Paper", href: "https://aclanthology.org/2025.naacl-long.207/" },
      { label: "Code", href: "https://github.com/franciscoliu/MLLMU-Bench" },
      { label: "Dataset", href: "https://huggingface.co/datasets/MLLMMU/MLLMU-Bench" },
    ],
  },
  {
    venue: "NAACL 2025",
    title: "MultiChartQA: Benchmarking Vision-Language Models on Multi-Chart Problems",
    authors: ["Zifeng Zhu", "Mengzhao Jia", "Zhihan Zhang", "Lang Li", "Meng Jiang"],
    equalContributionAuthors: ["Zifeng Zhu", "Mengzhao Jia"],
    image: "/images/publications/multichartqa.png",
    imageAlt: "MultiChartQA benchmark overview",
    imageHref: "https://aclanthology.org/2025.naacl-long.566/",
    summary:
      "A benchmark for multi-hop, comparative, and sequential reasoning across multiple charts.",
    links: [
      { label: "Paper", href: "https://aclanthology.org/2025.naacl-long.566/" },
      { label: "Code", href: "https://github.com/Zivenzhu/Multi-chart-QA" },
    ],
  },
  {
    venue: "IEEE TPAMI 2024",
    title: "Query-Oriented Micro-Video Summarization",
    authors: [
      "Mengzhao Jia",
      "Yinwei Wei",
      "Xuemeng Song",
      "Teng Sun",
      "Min Zhang",
      "Liqiang Nie",
    ],
    image: "/images/publications/qms.png",
    imageAlt: "Query-oriented micro-video summarization model overview",
    imageHref: "https://doi.org/10.1109/TPAMI.2024.3355402",
    summary:
      "A multimodal framework for generating concise, query-oriented summaries of micro-videos to support retrieval.",
    links: [
      { label: "Paper", href: "https://doi.org/10.1109/TPAMI.2024.3355402" },
      { label: "Code", href: "https://github.com/Jill0001/QMS" },
    ],
  },
  {
    venue: "Preprint 2024",
    title: "Describe-then-Reason: Improving Multimodal Mathematical Reasoning through Visual Comprehension Training",
    authors: ["Mengzhao Jia", "Zhihan Zhang", "Wenhao Yu", "Fangkai Jiao", "Meng Jiang"],
    image: "/images/publications/describe-then-reason.png",
    imageAlt: "Describe-then-Reason training and inference pipeline",
    imageHref: "https://arxiv.org/abs/2404.14604",
    summary:
      "A two-step training approach that improves multimodal mathematical reasoning through visual comprehension training.",
    links: [
      { label: "Paper", href: "https://arxiv.org/abs/2404.14604" },
      { label: "Code", href: "https://github.com/Jill0001/Describe-then-Reason" },
    ],
  },
  {
    venue: "AAAI 2024",
    title: "Debiasing Multimodal Sarcasm Detection with Contrastive Learning",
    authors: ["Mengzhao Jia", "Can Xie", "Liqiang Jing"],
    image: "/images/publications/debiasing-sarcasm.png",
    imageAlt: "Counterfactual data augmentation for multimodal sarcasm detection",
    imageHref: "https://ojs.aaai.org/index.php/AAAI/article/view/29795",
    summary:
      "A contrastive framework that reduces spurious textual bias for robust out-of-distribution multimodal sarcasm detection.",
    links: [
      { label: "Paper", href: "https://ojs.aaai.org/index.php/AAAI/article/view/29795" },
      { label: "Code", href: "https://github.com/Jill0001/MAS" },
    ],
  },
];

const experiences = [
  {
    period: "Mar — Sep 2025",
    role: "Research Intern",
    organization: "Orby AI · Mountain View, CA",
  },
  {
    period: "May — Sep 2024",
    role: "Research Intern",
    organization: "Tencent AI Lab · Seattle, WA",
  },
];

const education = [
  {
    period: "2023 — Present",
    degree: "Ph.D. in Computer Science and Engineering",
    school: "University of Notre Dame, advised by Prof. Meng Jiang.",
  },
  {
    period: "2020 — 2023",
    degree: "M.S. in Computer Science and Engineering",
    school: "Shandong University",
  },
  {
    period: "2016 — 2020",
    degree: "B.Eng. in Electronic Science and Technology",
    school: "Shandong University",
  },
];

const socialLinks = [
  { label: "Email", href: "mailto:jiamengzhao98@gmail.com" },
  { label: "Google Scholar", href: "https://scholar.google.com/citations?hl=en&user=E332upAAAAAJ" },
  { label: "GitHub", href: "https://github.com/Jill0001/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mengzhao-jia-a2b838294/" },
  { label: "CV", href: "/Mengzhao_Jia_CV.pdf" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fbfbf8] text-slate-900">
      <header className="border-b border-slate-200/90">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-8 gap-y-4 px-5 py-5 sm:px-8">
          <nav aria-label="Primary navigation" className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-600">
            <a className="hover:text-[#344dba]" href="#about">About</a>
            <a className="hover:text-[#344dba]" href="#work">Publications</a>
            <a className="hover:text-[#344dba]" href="#experience">Experience</a>
            <a className="hover:text-[#344dba]" href="#education">Education</a>
          </nav>
          <nav aria-label="Contact and profiles" className="flex flex-wrap gap-x-3 gap-y-2 text-sm text-[#344dba] sm:gap-x-5">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
                className="hover:underline"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-6xl px-5 sm:px-8">
        <section id="about" className="border-b border-slate-200 py-12 sm:py-16">
          <div className="flex flex-col-reverse items-start justify-between gap-7 sm:flex-row sm:items-center sm:gap-12">
            <div>
              <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl">
                Mengzhao Jia
              </h1>
              <p className="mt-4 font-serif text-lg leading-7 text-slate-500 sm:text-xl">
                Robotics and Agentic AI
              </p>
            </div>
            <Image
              src="/mengzhao-jia.jpg"
              alt="Portrait of Mengzhao Jia"
              width={190}
              height={190}
              priority
              sizes="(max-width: 639px) 140px, 190px"
              className="aspect-square w-[140px] shrink-0 rounded-lg object-cover sm:w-[190px]"
            />
          </div>

          <div className="mt-10 space-y-5 font-serif text-lg leading-8 text-slate-700 sm:mt-12 sm:text-xl sm:leading-9">
            <p>
              I am a fourth-year Ph.D. student in Computer Science and Engineering at the University
              of Notre Dame, advised by Prof. Meng Jiang. Before starting my Ph.D., I received my
              master’s and bachelor’s degrees from Shandong University. I previously interned at
              Orby AI in Mountain View and Tencent AI Lab in Seattle.
            </p>
            <p>
              My research focuses on <strong className="font-semibold text-slate-900">robotics and agentic AI</strong>.
              I study how general-purpose agents can control robots through visual reasoning,
              programming, and physical feedback, with interests in reinforcement learning
              and vision-language-action models.
            </p>
            <p>
              I am open to <strong className="font-semibold text-slate-900">internships and full-time roles</strong> in
              robotics and agentic AI.
              Please <a href="mailto:jiamengzhao98@gmail.com" className="text-[#344dba] hover:underline">get in touch</a>.
            </p>
          </div>
        </section>

        <section id="work" className="pt-16 lg:pt-24">
          <h2 className="font-serif text-3xl font-medium tracking-[-0.045em] text-slate-950 sm:text-4xl">
            Publications
          </h2>
          <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
            {publications.map((publication, index) => (
              <article
                key={publication.title}
                className="grid gap-6 py-8 sm:grid-cols-[13.5rem_minmax(0,1fr)] sm:items-start sm:gap-8"
              >
                {publication.videoSrc ? (
                  <video
                    controls
                    playsInline
                    preload="none"
                    poster={publication.image}
                    width={960}
                    height={720}
                    aria-label={`${publication.title} promotional video`}
                    className="aspect-[4/3] w-full max-w-[17rem] rounded-xl border border-slate-200 bg-black"
                  >
                    <source src={publication.videoSrc} type="video/mp4" />
                    <a href={publication.videoSrc}>Watch the Agent as Policy video</a>
                  </video>
                ) : (
                  <a
                    href={publication.imageHref}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative aspect-[4/3] w-full max-w-[17rem] overflow-hidden rounded-xl border border-slate-200 bg-white"
                    aria-label={`Open ${publication.title}`}
                  >
                    <Image
                      src={publication.image}
                      alt={publication.imageAlt}
                      fill
                      sizes="(min-width: 640px) 216px, 272px"
                      className="object-contain p-2 transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </a>
                )}
                <div>
                  <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#344dba]">
                    <span className="font-mono tracking-normal text-slate-400">{String(index + 1).padStart(2, "0")}</span>
                    <span>{publication.venue}</span>
                  </p>
                  <h3 className="mt-3 text-xl font-semibold leading-7 tracking-[-0.025em] text-slate-900 sm:text-2xl">
                    {publication.title}
                  </h3>
                  <p className="mt-2 max-w-3xl text-sm italic leading-6 text-slate-600">
                    {publication.authors.map((author, authorIndex) => (
                      <span key={author}>
                        {author === "Mengzhao Jia" ? (
                          <strong className="font-bold text-slate-700">{author}</strong>
                        ) : (
                          author
                        )}
                        {(publication.equalContributionAuthors?.includes(author) || publication.coreContributors?.includes(author)) ? (
                          <sup className="text-[0.65rem] font-semibold">*</sup>
                        ) : null}
                        {authorIndex < publication.authors.length - 1 ? ", " : ""}
                      </span>
                    ))}
                  </p>
                  {publication.equalContributionAuthors ? (
                    <p className="mt-1 text-xs italic text-slate-500">* Equal Contribution</p>
                  ) : null}
                  {publication.coreContributors ? (
                    <p className="mt-1 text-xs italic text-slate-500">* Core contributors</p>
                  ) : null}
                  <p className="mt-3 max-w-3xl leading-7 text-slate-600">{publication.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {publication.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 transition-all hover:-translate-y-px hover:border-[#344dba]/35 hover:bg-[#f2f5ff] hover:text-[#344dba] hover:shadow-sm"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="pt-10 sm:pt-12">
          <h2 className="font-serif text-3xl font-medium tracking-[-0.045em] text-slate-950 sm:text-4xl">
            Work Experience
          </h2>
          <ol className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
            {experiences.map((experience) => (
              <li
                key={`${experience.organization}-${experience.period}`}
                className="grid gap-3 py-7 sm:grid-cols-[13.5rem_minmax(0,1fr)] sm:gap-8"
              >
                <p className="font-mono text-xs leading-6 text-slate-400">{experience.period}</p>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{experience.role}</h3>
                  <p className="mt-1 font-medium text-slate-700">{experience.organization}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="education" className="py-16 lg:py-24">
          <h2 className="font-serif text-3xl font-medium tracking-[-0.045em] text-slate-950 sm:text-4xl">
            Education
          </h2>
          <ol className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
            {education.map((item) => (
              <li
                key={item.degree}
                className="grid gap-3 py-7 sm:grid-cols-[13.5rem_minmax(0,1fr)] sm:gap-8"
              >
                <p className="font-mono text-xs leading-6 text-slate-400">{item.period}</p>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{item.degree}</h3>
                  <p className="mt-1 font-medium text-slate-700">{item.school}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

      </main>

      <footer className="border-t border-slate-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-7 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© 2026 Mengzhao Jia</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a className="transition-colors hover:text-slate-900" href="https://github.com/Jill0001/" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="transition-colors hover:text-slate-900" href="https://dblp.org/pid/297/0055.html" target="_blank" rel="noreferrer">
              DBLP
            </a>
            <a className="transition-colors hover:text-slate-900" href="https://openreview.net/profile?id=%7EMengzhao_Jia1" target="_blank" rel="noreferrer">
              OpenReview
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
