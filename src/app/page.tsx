import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  FileText,
  MapPin,
} from "lucide-react";

type Publication = {
  venue: string;
  title: string;
  authors: string[];
  equalContributionAuthors?: string[];
  image: string;
  imageAlt: string;
  imageHref: string;
  summary: string;
  links: { label: string; href: string }[];
};

const publications: Publication[] = [
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
    venue: "Findings of ACL 2026",
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
    venue: "arXiv 2026",
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
      "Meng Jiang",
      "Dong Yu",
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
    venue: "arXiv 2024",
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
  {
    period: "Jun 2022 — Jan 2023",
    role: "Research Intern",
    organization: "Alibaba DAMO Academy · Hangzhou, China",
  },
  {
    period: "Apr 2021 — Jan 2022",
    role: "Research Intern",
    organization: "Kuaishou · Beijing, China",
  },
];

const education = [
  {
    period: "2023 — Present",
    degree: "Ph.D. in Computer Science and Engineering",
    school: "University of Notre Dame",
    detail: "Advised by Prof. Meng Jiang.",
  },
  {
    period: "2020 — 2023",
    degree: "M.S. in Computer Science and Engineering",
    school: "Shandong University",
    detail: "Advised by Prof. Liqiang Nie.",
  },
  {
    period: "2016 — 2020",
    degree: "B.Eng. in Electronic Science and Technology",
    school: "Shandong University",
    detail: "Undergraduate studies in electronic science and technology.",
  },
];

const socialLinks = [
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?hl=en&user=E332upAAAAAJ",
    icon: BookOpen,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fbfbf8] text-slate-900">
      <header className="border-b border-slate-200/90 bg-[#fbfbf8]/95">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-8 gap-y-4 px-5 py-5 sm:px-8">
          <a
            href="#top"
            className="font-serif text-xl font-semibold tracking-[-0.05em] text-slate-950 transition-colors hover:text-[#344dba]"
            aria-label="Mengzhao Jia home"
          >
            Mengzhao Jia
          </a>
          <nav
            aria-label="Primary navigation"
            className="flex w-full flex-wrap items-center justify-between gap-x-3 gap-y-2 text-sm font-medium text-slate-600 sm:w-auto sm:justify-end sm:gap-x-7"
          >
            <a className="transition-colors hover:text-slate-950" href="#about">
              About
            </a>
            <a className="transition-colors hover:text-slate-950" href="#work">
              Publications
            </a>
            <a className="transition-colors hover:text-slate-950" href="#experience">
              Experience
            </a>
            <a className="transition-colors hover:text-slate-950" href="#education">
              Education
            </a>
            <a
              className="inline-flex items-center gap-1 text-slate-950 transition-colors hover:text-[#344dba]"
              href="/Mengzhao_Jia_CV.pdf"
              target="_blank"
              rel="noreferrer"
            >
              CV <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-6xl px-5 sm:px-8">
        <section id="about" className="grid gap-12 border-b border-slate-200 py-16 lg:grid-cols-[minmax(260px,0.72fr)_minmax(0,1.45fr)] lg:gap-20 lg:py-24">
          <aside className="lg:pt-2">
            <div className="relative aspect-square max-w-[235px] overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_12px_35px_rgba(15,23,42,0.06)]">
              <Image
                src="/mengzhao-jia.jpg"
                alt="Portrait of Mengzhao Jia"
                fill
                priority
                sizes="235px"
                className="object-cover"
              />
            </div>

            <div className="mt-7 space-y-3 text-sm leading-6 text-slate-600">
              <p className="flex items-start gap-2">
                <MapPin className="mt-1 size-3.5 shrink-0 text-slate-400" aria-hidden="true" />
                <span>Notre Dame, Indiana</span>
              </p>
              <p>
                Third-year Ph.D. student in Computer Science and Engineering at the University of Notre Dame.
              </p>
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {socialLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-xs font-medium text-slate-700 transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:text-[#344dba] hover:shadow-sm"
                  >
                    <Icon className="size-3.5" aria-hidden="true" />
                    {link.label}
                  </a>
                );
              })}
            </div>

            <a
              href="/Mengzhao_Jia_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition-colors hover:text-[#344dba]"
            >
              <FileText className="size-4" aria-hidden="true" />
              Download CV
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </a>
          </aside>

          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#344dba]">Ph.D. Student</p>
            <h1 className="mt-5 max-w-2xl font-serif text-5xl font-medium leading-[0.98] tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-7xl">
              Mengzhao Jia
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl">
              I work on multimodal large language models, with a focus on multimodal reasoning,
              reinforcement learning, and vision-language-action models.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
              I am a third-year Ph.D. student in Computer Science and Engineering at the University
              of Notre Dame, advised by Prof. Meng Jiang. Before starting my Ph.D., I received my
              M.S. in Computer Science and Engineering from Shandong University, advised by Prof.
              Liqiang Nie.
            </p>

            <div className="mt-7 max-w-2xl border-l-2 border-[#344dba] pl-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#344dba]">
                Open to internships &amp; full-time roles
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                I am currently seeking opportunities in multimodal AI, reinforcement learning, and
                vision-language-action models. Please reach out at{" "}
                <span className="font-medium text-slate-700">
                  jiamengzhao98 [at] gmail [dot] com
                </span>
                .
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {[
                "Multimodal Large Language Models",
                "Multimodal Reasoning",
                "Reinforcement Learning",
                "Vision Language Action Models",
              ].map((interest) => (
                <span
                  key={interest}
                  className="rounded-full border border-slate-200 bg-white px-3.5 py-2 text-sm text-slate-600"
                >
                  {interest}
                </span>
              ))}
            </div>

            <a
              href="#work"
              className="mt-11 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition-colors hover:text-[#344dba]"
            >
              View publications
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
          </div>
        </section>

        <section id="work" className="border-b border-slate-200 py-16 lg:py-24">
          <h2 className="font-serif text-3xl font-medium tracking-[-0.045em] text-slate-950 sm:text-4xl">
            Publications
          </h2>
          <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
            {publications.map((publication, index) => (
              <article
                key={publication.title}
                className="grid gap-6 py-8 sm:grid-cols-[13.5rem_minmax(0,1fr)] sm:items-start sm:gap-8"
              >
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
                <div>
                  <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#344dba]">
                    <span className="font-mono tracking-normal text-slate-400">0{index + 1}</span>
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
                        {publication.equalContributionAuthors?.includes(author) ? (
                          <sup className="text-[0.65rem] font-semibold">*</sup>
                        ) : null}
                        {authorIndex < publication.authors.length - 1 ? ", " : ""}
                      </span>
                    ))}
                  </p>
                  {publication.equalContributionAuthors ? (
                    <p className="mt-1 text-xs italic text-slate-500">* Equal Contribution</p>
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

        <section id="experience" className="border-b border-slate-200 py-16 lg:py-24">
          <h2 className="font-serif text-3xl font-medium tracking-[-0.045em] text-slate-950 sm:text-4xl">
            Experience
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
                  <p className="mt-2 max-w-3xl leading-7 text-slate-600">{item.detail}</p>
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
            <a className="transition-colors hover:text-slate-900" href="/Mengzhao_Jia_CV.pdf" target="_blank" rel="noreferrer">
              CV
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
