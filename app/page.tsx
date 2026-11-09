"use client";

import { useState, useEffect } from "react";

/* ───────────────────────────── Navigation ───────────────────────────── */

const NAV_LINKS = [
  { label: "Tentang", href: "#tentang" },
  { label: "Pendidikan", href: "#pendidikan" },
  { label: "Pengalaman", href: "#pengalaman" },
  { label: "Proyek", href: "#proyek" },
  { label: "Keahlian", href: "#keahlian" },
  { label: "Kontak", href: "#kontak" },
] as const;

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          Portfolio<span className="text-blue-600">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          className="flex items-center justify-center rounded-md p-2 text-zinc-600 transition-colors hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="flex flex-col gap-2 border-t border-zinc-200 bg-white px-6 py-4 dark:border-zinc-800 dark:bg-zinc-950 md:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block rounded-md px-3 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

/* ───────────────────────── Section wrapper ───────────────────────── */

function Section({
  id,
  title,
  children,
  className = "",
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-20 py-20 ${className}`}>
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          {title}
          <span className="mx-auto mt-3 block h-1 w-12 rounded-full bg-blue-600" />
        </h2>
        {children}
      </div>
    </section>
  );
}

/* ──────────────────────────── Hero Section ─────────────────────────── */

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-50 via-white to-blue-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-blue-100 opacity-40 blur-3xl dark:bg-blue-900/30" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-purple-100 opacity-40 blur-3xl dark:bg-purple-900/20" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
          Selamat Datang
        </p>
        <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight text-zinc-900 sm:text-6xl lg:text-7xl dark:text-zinc-50">
          Halo, Saya{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Dhafi Muhammad Firdaus
          </span>
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          Seorang developer yang bersemangat dalam membuat inovasi
          dan pengalaman digital yang bermakna.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#proyek"
            className="inline-flex h-12 items-center justify-center rounded-full bg-blue-600 px-8 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30"
          >
            Lihat Proyek
          </a>
          <a
            href="#kontak"
            className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-300 px-8 text-sm font-semibold text-zinc-700 transition-colors hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:bg-zinc-800"
          >
            Hubungi Saya
          </a>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────── Tentang ──────────────────────────── */

function Tentang() {
  return (
    <Section id="tentang" title="Tentang Saya" className="bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          Fresh Graduate S1 Informatika dengan minat pada{" "}
          <strong className="text-zinc-800 dark:text-zinc-200">Software Development</strong>,{" "}
          <strong className="text-zinc-800 dark:text-zinc-200">Data Analytics</strong>,{" "}
          <strong className="text-zinc-800 dark:text-zinc-200">Machine Learning</strong>, dan{" "}
          <strong className="text-zinc-800 dark:text-zinc-200">Cybersecurity</strong>.
          Memiliki pengalaman magang di C-Tech X Edwar sebagai full-stack developer
          dalam pengembangan sistem inventory berbasis PHP, CodeIgniter 3, dan MySQL,
          mencakup pengembangan front-end dan back-end, pengelolaan database, serta
          penyajian informasi untuk monitoring persediaan. Memiliki pemahaman mengenai
          database management, analisis kebutuhan sistem, pengolahan data, dan
          visualisasi data. Mampu bekerja secara individu maupun dalam tim, memiliki
          kemampuan analitis dan problem solving yang baik, serta cepat beradaptasi
          dengan perkembangan teknologi untuk menghasilkan solusi yang efektif dan inovatif.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-8">
          {[
            { value: "Fresh", label: "Graduate" },
            { value: "15+", label: "Teknologi\nDikuasai" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
              <p className="mt-1 whitespace-pre-line text-sm text-zinc-500 dark:text-zinc-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ──────────────────────────── Pendidikan ───────────────────────────── */

const EDUCATION = [
  {
    year: "2021 – Sekarang",
    title: "S1 Teknik Informatika",
    institution: "Telkom University",
    description: "IPK 3.53 / 4.00 — Fokus pada Pemprosesan data, pengembangan web dan rekayasa perangkat lunak.",
  },
  {
    year: "2019 – 2022",
    title: "SMA Jurusan IPA",
    institution: "SMA Muhammadiyah 6 Al-Furqon",
    description: "Aktif di organisasi kesiswaan dan olimpiade sains.",
  },
];

function Pendidikan() {
  return (
    <Section id="pendidikan" title="Pendidikan" className="bg-zinc-50 dark:bg-zinc-900">
      <div className="mx-auto max-w-3xl">
        <div className="relative border-l-2 border-blue-200 pl-8 dark:border-blue-900">
          {EDUCATION.map((edu, i) => (
            <div key={i} className="relative mb-12 last:mb-0">
              {/* Timeline dot */}
              <span className="absolute -left-[2.5625rem] top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-blue-600 bg-white dark:bg-zinc-900">
                <span className="h-2 w-2 rounded-full bg-blue-600" />
              </span>

              <span className="mb-1 inline-block rounded-full bg-blue-100 px-3 py-0.5 text-xs font-semibold text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
                {edu.year}
              </span>
              <h3 className="mt-2 text-lg font-bold text-zinc-900 dark:text-zinc-50">
                {edu.title}
              </h3>
              <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                {edu.institution}
              </p>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ──────────────────────────── Pengalaman ───────────────────────────── */

const EXPERIENCE = [
  {
    year: "Juli - Agustus 2025",
    title: "Full-Stack Developer",
    company: "PT C-Tech Laboratories",
    description:
      "Mengembangkan sistem inventory dan merancang database relasional menggunakan PHP, CodeIgniter 3, dan MySQL. Berkolaborasi dengan tim untuk membangun fitur kalkulasi stok masif dan modul laporan yang memudahkan monitoring operasional.",
  },
  {
    year: "Mei - Desember 2025",
    title: "Himpunan Mahasiswa Informatika",
    company: "Divisi Kajian dan Advokasi",
    description:
      "Menjembatani komunikasi antara mahasiswa dan pihak fakultas terkait isu akademik, finansial, dan fasilitas. Bertanggung jawab mengadvokasikan aspirasi mahasiswa dan menyelenggarakan forum diskusi untuk mencari solusi bersama.",
  },
];

function Pengalaman() {
  return (
    <Section id="pengalaman" title="Pengalaman" className="bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-3xl">
        <div className="relative border-l-2 border-blue-200 pl-8 dark:border-blue-900">
          {EXPERIENCE.map((exp, i) => (
            <div key={i} className="relative mb-12 last:mb-0">
              <span className="absolute -left-[2.5625rem] top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-blue-600 bg-white dark:bg-zinc-950">
                <span className="h-2 w-2 rounded-full bg-blue-600" />
              </span>

              <span className="mb-1 inline-block rounded-full bg-blue-100 px-3 py-0.5 text-xs font-semibold text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
                {exp.year}
              </span>
              <h3 className="mt-2 text-lg font-bold text-zinc-900 dark:text-zinc-50">
                {exp.title}
              </h3>
              <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                {exp.company}
              </p>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ──────────────────────────── Proyek ───────────────────────────────── */

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image?: string; // Tambahkan opsional image
}

const PROJECTS: Project[] = [
  {
    title: "Full-Stack -  C-TECH Inventory System",
    description:
      "Mengembangkan aplikasi web inventory end-to-end beserta rancangan database-nya menggunakan PHP, CodeIgniter 3, dan MySQL. Menciptakan fitur-fitur manajemen stok harian dan modul pelaporan otomatis.",
    tags: ["PHP", "CodeIgniter", "MySQL", "JavaScript", "AJAX", "Tailwind CSS"],
    link: "https://github.com/LoOhEx/inv_system",
    image: "/projects/C-Tech (1).png",
  },
  {
    title: "Machine Learning - Network Anomaly Detection System",
    description:
      "Membangun model deteksi anomali jaringan menggunakan arsitektur AutoEncoder-Random Forest dengan Python dan TensorFlow/Keras. Melakukan pembersihan data, penanganan class imbalance, dan evaluasi model terhadap serangan zero-day.",
    tags: ["Python", "TensorFlow", "Keras", "Scikit-learn", "Pandas", "NumPy"],
    link: "https://www.kaggle.com/code/dhafimf/ae-rf-final",
    image: "/projects/Machine Learning.png",
  },
  {
    title: "Back-End - Bantu.In — Fundraising Platform",
    description:
      "Mengembangkan sistem back-end aplikasi fundraising beserta alur pembayarannya menggunakan PHP dan Laravel. Merancang skema database pada Firebase Firestore untuk mengelola data transaksi, pengguna, dan kampanye donasi secara terintegrasi.",
    tags: ["PHP", "Laravel", "Firebase", "REST API", "Git", "Blade"],
    link: "https://github.com/LoOhEx/laravel-fundraising",
    image: "/projects/Bantu (1).png",
  },
  {
    title: "Back-End - Glucose Diary — Backend API",
    description:
      "Membangun backend API menggunakan Spring Boot dan merancang database MySQL untuk manajemen data pengguna, catatan konsumsi, serta jadwal dokter. Mengimplementasikan Spring Security dan lapisan data yang tangguh untuk memastikan kelancaran aplikasi.",
    tags: ["Java", "Spring Boot", "Spring Security", "Hibernate", "MySQL", "Maven"],
    link: "#",
    image: "",
  },
  {
    title: "Data Analytics - COVID-19 Monitoring Dashboard",
    description:
      "Membangun dan mempublikasikan dashboard analitik interaktif menggunakan Power BI Service untuk memonitor data kasus COVID-19 di Indonesia. Mengolah dataset dengan pemodelan data yang terstruktur (Report & Model View) guna menyajikan Key Performance Indicators (KPI) dan visualisasi demografi yang informatif.",
    tags: ["Power BI", "Power BI Service", "Data Analytics", "Data Modeling", "Dashboard", "DAX"],
    link: "#",
    image: "",
  },
];

function Proyek() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <Section id="proyek" title="Proyek" className="bg-zinc-50 dark:bg-zinc-900">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <div
            key={project.title}
            onClick={() => setSelectedProject(project)}
            className="group cursor-pointer overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950"
          >
            {/* Image Preview Area */}
            <div className="relative h-48 w-full overflow-hidden bg-zinc-200 dark:bg-zinc-800">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-blue-50 text-blue-600 dark:bg-blue-900/20">
                   <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                  </svg>
                </div>
              )}
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100 flex items-center justify-center">
                <span className="text-white font-medium text-sm">Lihat Detail</span>
              </div>
            </div>

            <div className="p-5">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Modal / Detail Card */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-zinc-950/60 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          />
          
          {/* Modal Content */}
          <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl dark:bg-zinc-900 animate-in fade-in zoom-in duration-300">
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white backdrop-blur-md hover:bg-white/20 transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image in Modal */}
            <div className="h-64 w-full bg-zinc-200 dark:bg-zinc-800">
              {selectedProject.image ? (
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-blue-600 text-white">
                   <svg className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                  </svg>
                </div>
              )}
            </div>

            <div className="p-8">
              <h3 className="mb-4 text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                {selectedProject.title}
              </h3>
              <p className="mb-6 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="mb-8">
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Teknologi & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600 dark:bg-blue-900/30 dark:text-blue-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                >
                  Kunjungi Proyek
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="inline-flex h-11 items-center justify-center rounded-xl border border-zinc-200 px-6 text-sm font-semibold text-zinc-600 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}

/* ──────────────────────────── Keahlian ─────────────────────────────── */

const SKILLS = [
  "HTML / CSS",
  "JavaScript / TypeScript",
  "React / Next.js",
  "Tailwind CSS",
  "Node.js",
  "MySQL",
  "Git / GitHub",
  "UI/UX Design",
  "Python",
  "C++",
];

function Keahlian() {
  return (
    <Section id="keahlian" title="Keahlian" className="bg-white dark:bg-zinc-950">
      <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-3">
        {SKILLS.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm font-medium text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </Section>
  );
}

/* ──────────────────────────── Kontak ───────────────────────────────── */

function Kontak() {
  return (
    <Section id="kontak" title="Kontak" className="bg-zinc-50 dark:bg-zinc-900">
      <div className="mx-auto max-w-4xl">
        <p className="mb-10 text-center text-lg text-zinc-600 dark:text-zinc-400">
          Tertarik untuk bekerja sama? Silakan hubungi saya melalui informasi di
          bawah ini atau kirimkan pesan langsung.
        </p>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact info */}
          <div className="flex flex-col gap-6">
            {[
              {
                icon: (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                ),
                label: "Email",
                value: "dhafimfirdaus@gmail.com",
              },
              {
                icon: (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                ),
                label: "Telepon",
                value: "+62 82116476066",
              },
              {
                icon: (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                ),
                label: "Lokasi",
                value: "Bandung, Indonesia",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-900/30">
                  {item.icon}
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    {item.label}
                  </p>
                  <p className="mt-0.5 font-medium text-zinc-800 dark:text-zinc-200">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact form */}
          <form
            className="flex flex-col gap-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
              >
                Nama
              </label>
              <input
                id="name"
                type="text"
                placeholder="Nama Anda"
                className="w-full rounded-lg border border-zinc-300 bg-zinc-50 px-4 py-2.5 text-sm text-zinc-900 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="email@contoh.com"
                className="w-full rounded-lg border border-zinc-300 bg-zinc-50 px-4 py-2.5 text-sm text-zinc-900 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
              >
                Pesan
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tulis pesan Anda..."
                className="w-full resize-none rounded-lg border border-zinc-300 bg-zinc-50 px-4 py-2.5 text-sm text-zinc-900 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
              />
            </div>
            <button
              type="submit"
              className="mt-2 inline-flex h-11 items-center justify-center rounded-lg bg-blue-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
}

/* ──────────────────────────── Footer ───────────────────────────────── */

function Footer() {
  const [year, setYear] = useState("2026");

  useEffect(() => {
    setYear(String(new Date().getFullYear()));
  }, []);

  return (
    <footer className="border-t border-zinc-200 bg-white py-8 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          &copy; {year} Dhafi.
        </p>
        <div className="flex gap-5">
          {/* GitHub */}
          <a
            href="https://github.com/LoOhEx "
            className="text-zinc-400 transition-colors hover:text-zinc-600 dark:hover:text-zinc-300"
            aria-label="GitHub"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/dhafimfirdaus/"
            className="text-zinc-400 transition-colors hover:text-zinc-600 dark:hover:text-zinc-300"
            aria-label="LinkedIn"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ───────────────────────── Main Page ─────────────────────────────── */

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Tentang />
      <Pendidikan />
      <Pengalaman />
      <Proyek />
      <Keahlian />
      <Kontak />
      <Footer />
    </>
  );
}
