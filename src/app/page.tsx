import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  Code,
  ExternalLink,
  FileText,
  GraduationCap,
  MapPin,
} from "lucide-react";

const publications = [
  {
    venue: "Findings of ACL 2026",
    title: "AutoRubric: Rubric-Based Generative Rewards for Faithful Multimodal Reasoning",
    summary:
      "A rubric-driven reward framework for improving the accuracy and faithfulness of multimodal reasoning.",
    links: [
      { label: "Paper", href: "https://arxiv.org/abs/2510.14738" },
      { label: "Code", href: "https://github.com/Jill0001/AutoRubric-R1V" },
    ],
  },
  {
    venue: "TMLR",
    title: "Leopard: A Vision-Language Model for Text-Centric Multi-Image Tasks",
    summary:
      "A vision-language model and instruction data for reasoning over text-rich, multi-image inputs.",
    links: [
      { label: "Paper", href: "https://arxiv.org/abs/2410.01744" },
      { label: "Code", href: "https://github.com/tencent-ailab/Leopard" },
      {
        label: "Dataset",
        href: "https://huggingface.co/datasets/wyu1/Leopard-Instruct",
      },
    ],
  },
  {
    venue: "NAACL 2025",
    title: "MultiChartQA: Benchmarking Vision-Language Models on Multi-Chart Problems",
    summary:
      "A benchmark for multi-hop, comparative, and sequential reasoning across multiple charts.",
    links: [
      { label: "Code", href: "https://github.com/Zivenzhu/Multi-chart-QA" },
    ],
  },
];

const experiences = [
  {
    period: "Mar — Sep 2025",
    role: "Research Intern",
    organization: "Orby AI · Mountain View, CA",
    description: "Worked on multimodal reasoning research and research-to-product systems.",
  },
  {
    period: "May — Sep 2024",
    role: "Research Intern",
    organization: "Tencent AI Lab · Seattle, WA",
    description:
      "Contributed to large-scale training for text-rich, multi-image vision-language models.",
  },
  {
    period: "Jun 2022 — Jan 2023",
    role: "Research Intern",
    organization: "Alibaba DAMO Academy · Hangzhou, China",
    description: "Conducted applied multimodal machine-learning research.",
  },
  {
    period: "Apr 2021 — Jan 2022",
    role: "Research Intern",
    organization: "Kuaishou · Beijing, China",
    description: "Worked on video captioning and multimodal pretraining.",
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
    label: "GitHub",
    href: "https://github.com/Jill0001/",
    icon: Code,
  },
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
            MJ.
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
                Ph.D. student in Computer Science and Engineering at the University of Notre Dame.
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

            <div className="mt-7 border-t border-slate-200 pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#344dba]">
                Open to opportunities
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                I am currently seeking internship and full-time opportunities in multimodal AI,
                vision-language models, and AI reasoning. Please reach out at{" "}
                <span className="font-medium text-slate-700">
                  jiamengzhao98 [at] gmail [dot] com
                </span>
                .
              </p>
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
              I study how multimodal models can reason faithfully over complex visual and textual evidence.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
              I am advised by Prof. Meng Jiang at the University of Notre Dame. My work sits at the intersection of multimodal reasoning, vision-language models, and trustworthy AI—with an emphasis on process supervision, multi-image understanding, and mathematical reasoning.
            </p>

            <div className="mt-9 flex flex-wrap gap-2.5">
              {[
                "Multimodal reasoning",
                "Vision-language models",
                "Process supervision",
                "Trustworthy AI",
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
          <div className="grid gap-10 lg:grid-cols-[minmax(220px,0.55fr)_minmax(0,1.45fr)] lg:gap-20">
            <div>
              <h2 className="font-serif text-4xl font-medium tracking-[-0.045em] text-slate-950 sm:text-5xl">
                Publications
              </h2>
            </div>

            <div className="divide-y divide-slate-200 border-t border-slate-200">
              {publications.map((publication, index) => (
                <article key={publication.title} className="grid gap-4 py-8 sm:grid-cols-[2.5rem_minmax(0,1fr)] sm:gap-6">
                  <p className="pt-1 font-mono text-xs text-slate-400">0{index + 1}</p>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#344dba]">
                      {publication.venue}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold leading-7 tracking-[-0.025em] text-slate-900 sm:text-2xl">
                      {publication.title}
                    </h3>
                    <p className="mt-3 max-w-2xl leading-7 text-slate-600">{publication.summary}</p>
                    <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                      {publication.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-800 transition-colors hover:text-[#344dba]"
                        >
                          {link.label}
                          <ExternalLink className="size-3.5" aria-hidden="true" />
                        </a>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

        </section>

        <section id="experience" className="border-b border-slate-200 py-16 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[minmax(220px,0.55fr)_minmax(0,1.45fr)] lg:gap-20">
            <div>
              <h2 className="font-serif text-4xl font-medium tracking-[-0.045em] text-slate-950 sm:text-5xl">
                Experience
              </h2>
            </div>

            <ol className="border-t border-slate-200">
              {experiences.map((experience) => (
                <li key={`${experience.organization}-${experience.period}`} className="grid gap-3 border-b border-slate-200 py-7 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-8">
                  <p className="font-mono text-xs leading-6 text-slate-400">{experience.period}</p>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{experience.role}</h3>
                    <p className="mt-1 font-medium text-slate-700">{experience.organization}</p>
                    <p className="mt-2 max-w-2xl leading-7 text-slate-600">{experience.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="education" className="py-16 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[minmax(220px,0.55fr)_minmax(0,1.45fr)] lg:gap-20">
            <div>
              <h2 className="font-serif text-4xl font-medium tracking-[-0.045em] text-slate-950 sm:text-5xl">
                Education
              </h2>
            </div>

            <div className="grid gap-4">
              {education.map((item) => (
                <article key={item.degree} className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <GraduationCap className="mt-1 size-5 shrink-0 text-[#344dba]" aria-hidden="true" />
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">{item.degree}</h3>
                        <p className="mt-1 font-medium text-slate-700">{item.school}</p>
                      </div>
                    </div>
                    <p className="font-mono text-xs text-slate-400">{item.period}</p>
                  </div>
                  <p className="mt-4 pl-8 leading-7 text-slate-600">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
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
