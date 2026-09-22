// ============================================================
// portfolio.ts — Single Source of Truth for all portfolio content
// Includes full bilingual (English & Persian) support.
// ============================================================

export type ProjectFilter = 'all' | 'fintech' | 'sdk' | 'apps' | 'web';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  period: string;
  categories: string[];
  filter: ProjectFilter[];
  impact?: string;
  problem: string;
  solution: string[];
  stack: string[];
  accentColor: 'blue' | 'cyan';
  url?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  color: 'blue' | 'cyan';
  skills: string[];
}

export interface TimelineEntry {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  current: boolean;
  highlights: string[];
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  description: string;
  decimals?: number;
}

export interface PortfolioContent {
  nav: {
    projects: string;
    experience: string;
    stack: string;
    contact: string;
    downloadCv: string;
  };
  profile: {
    name: string;
    title: string;
    tagline: string;
    badge: string;
    downloadResume: string;
    viewProjects: string;
    years: string;
    users: string;
    platforms: string;
    crashFree: string;
    location: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    resumePdf: string;
    summary: string;
  };
  statsSection: {
    badge: string;
    title: string;
    subtitle: string;
    stats: StatItem[];
  };
  techStackSection: {
    badge: string;
    title: string;
    subtitle: string;
    allTab: string;
    categories: SkillCategory[];
  };
  projectsSection: {
    badge: string;
    title: string;
    subtitle: string;
    filters: { id: ProjectFilter; label: string }[];
    viewCaseStudy: string;
    liveSite: string;
    theProblem: string;
    engineeringSolution: string;
    techStack: string;
    visitLiveSite: string;
    projects: Project[];
  };
  timelineSection: {
    badge: string;
    title: string;
    subtitle: string;
    current: string;
    timeline: TimelineEntry[];
  };
  resumeSection: {
    badge: string;
    title: string;
    subtitle: string;
    fileName: string;
    fileDesc: string;
    openInTab: string;
    downloadPdf: string;
  };
  contactSection: {
    badge: string;
    title: string;
    subtitle: string;
    emailLabel: string;
    linkedinLabel: string;
    githubLabel: string;
    location: string;
    degree: string;
    status: string;
    copyright: string;
    builtWith: string;
  };
}

export const content: Record<'en' | 'fa', PortfolioContent> = {
  en: {
    nav: {
      projects: 'Projects',
      experience: 'Experience',
      stack: 'Stack',
      contact: 'Contact',
      downloadCv: 'Download CV',
    },
    profile: {
      name: 'Salar Taheri',
      title: 'Senior Android & Embedded POS Engineer',
      tagline:
        '10+ years building mission-critical Android solutions — from biometric eKYC SDKs powering 2.5M+ users to low-level POS hardware & fintech infrastructure.',
      badge: 'Available for senior roles',
      downloadResume: 'Download Resume',
      viewProjects: 'View Projects',
      years: 'Years',
      users: 'Users',
      platforms: 'POS Platforms',
      crashFree: 'Crash-Free',
      location: 'Tehran, Iran',
      email: 'salar.taheri.mirani@gmail.com',
      phone: '+98-937-698-9151',
      linkedin: 'https://www.linkedin.com/in/salar-taheri',
      github: 'https://github.com/salartaheri',
      resumePdf: '/resume.pdf',
      summary:
        'Senior Android Developer with over 10 years of software engineering experience specializing in Fintech, Android POS hardware integration, and high-scale enterprise applications. Demonstrated track record in developing secure payment SDKs, biometric eKYC pipelines serving 2.5M+ users, and real-time transaction processing compliant with national central banking standards (ISO 8583, Shaparak Kehroba contactless NFC). Proven mastery of modern Android architectures (Jetpack Compose, Kotlin Coroutines & Flow, Clean Architecture, Domain-Driven Design) combined with low-level peripheral communication (AIDL, serial/thermal printers, smart card readers, Java Card applets).',
    },
    statsSection: {
      badge: 'By The Numbers',
      title: 'Real-World Impact',
      subtitle: 'A decade of engineering across fintech, biometrics, and embedded hardware.',
      stats: [
        {
          value: 10,
          suffix: '+',
          label: 'Years Experience',
          description: 'Building production Android at enterprise scale',
        },
        {
          value: 2.5,
          suffix: 'M+',
          label: 'Users Impacted',
          description: 'eKYC biometric verifications powered',
          decimals: 1,
        },
        {
          value: 5,
          suffix: '+',
          label: 'POS Hardware Platforms',
          description: 'Pax, Amp, Bixolon & more',
        },
        {
          value: 99.8,
          suffix: '%',
          label: 'Crash-Free Rate',
          description: 'Across fragmented Android POS vendors',
          decimals: 1,
        },
      ],
    },
    techStackSection: {
      badge: 'Technical Expertise',
      title: 'Tech Stack',
      subtitle: 'A deep, battle-tested toolkit built across 10+ years of production engineering.',
      allTab: 'All',
      categories: [
        {
          id: 'android',
          name: 'Android & Mobile Core',
          icon: 'Smartphone',
          color: 'blue',
          skills: [
            'Kotlin',
            'Java',
            'Dart / Flutter',
            'Jetpack Compose',
            'Android SDK',
            'View System & Canvas',
            'AIDL',
            'Navigation Component',
            'Material Design 3',
            'CameraX',
          ],
        },
        {
          id: 'fintech',
          name: 'Fintech & Embedded POS',
          icon: 'CreditCard',
          color: 'cyan',
          skills: [
            'ISO 8583',
            'JPOS',
            'Shaparak Kehroba (NFC)',
            'Java Card (Applets)',
            'APDU Protocol',
            'Pax A920Pro SDK',
            'Amp8000 SDK',
            'ESC/POS Thermal Printers',
            'Bluetooth Serial',
            'Smart Card Readers',
            'PIN-pad Integration',
          ],
        },
        {
          id: 'networking',
          name: 'Networking & Protocols',
          icon: 'Network',
          color: 'blue',
          skills: [
            'Ktor Client',
            'Retrofit',
            'OkHttp',
            'WebSockets',
            'TCP Sockets',
            'REST APIs',
            'Protobuf',
            'Coroutines & Flow',
            'RxJava',
          ],
        },
        {
          id: 'arch',
          name: 'Architecture & Patterns',
          icon: 'Layers',
          color: 'cyan',
          skills: [
            'Clean Architecture',
            'Domain-Driven Design',
            'MVVM',
            'MVI',
            'Multi-Module Gradle',
            'Hilt / Koin',
            'Room Database',
            'DataStore',
          ],
        },
        {
          id: 'tools',
          name: 'Security, DevOps & Tools',
          icon: 'Shield',
          color: 'blue',
          skills: [
            'ProGuard / R8',
            'Android Keystore',
            'Git',
            'Linux',
            'Docker',
            'CI/CD',
            'Sentry',
            'SQL / SQLite',
            'Bash',
          ],
        },
      ],
    },
    projectsSection: {
      badge: 'Portfolio',
      title: 'Featured Projects',
      subtitle:
        'Production systems spanning fintech infrastructure, biometric SDKs, POS hardware, and web platforms.',
      filters: [
        { id: 'all', label: 'All Projects' },
        { id: 'fintech', label: 'Fintech & POS' },
        { id: 'sdk', label: 'SDKs' },
        { id: 'apps', label: 'Apps' },
        { id: 'web', label: 'Web' },
      ],
      viewCaseStudy: 'View Case Study',
      liveSite: 'Live Site',
      theProblem: 'The Problem',
      engineeringSolution: 'Engineering Solution',
      techStack: 'Tech Stack',
      visitLiveSite: 'Visit Live Site',
      projects: [
        {
          id: 'pos-banking',
          title: 'Android POS Banking & Kehroba Contactless System',
          tagline: 'Independent full-featured banking transaction app for smart POS terminals.',
          period: 'Sep 2024 – Mar 2025',
          categories: ['Fintech', 'Embedded Android', 'NFC'],
          filter: ['fintech'],
          problem:
            'Implementing low-latency, tamper-proof banking operations (purchase, balance inquiry, mobile recharge, food vouchers/Kala Barg) while conforming to stringent central banking protocols.',
          solution: [
            'Implemented ISO 8583 message packing/unpacking over raw TCP sockets with strict checksum validation.',
            'Integrated Kehroba protocol enabling contactless mobile NFC payments conforming to Shaparak standards.',
            'Communicated with hardware magnetic and IC chip readers through vendor AIDL services.',
            'Developed Java Card applets for smart IC card operations — handling APDU command/response pairs for secure transaction authorization on EMV-compliant cards.',
            'Achieved sub-200ms average transaction response times through optimized socket pooling.',
          ],
          stack: ['Kotlin', 'ISO 8583', 'NFC', 'AIDL', 'Java Card', 'APDU', 'Coroutines', 'Jetpack Compose'],
          accentColor: 'blue',
        },
        {
          id: 'ekyc-sdk',
          title: 'UID Biometric eKYC SDK',
          tagline: 'First-of-its-kind digital identity authentication pipeline in Iran.',
          period: '2018 – 2022',
          categories: ['SDK Development', 'Biometrics', 'High Scale'],
          filter: ['sdk'],
          impact: '2.5M+ active users verified across National Stock Exchange (Sejam) & major banks.',
          problem:
            'Capturing high-reliability biometric video streams on diverse low-end to high-end Android hardware while preventing spoofing and man-in-the-middle attacks.',
          solution: [
            'Engineered a lightweight SDK using CameraX with minimal binary overhead (no heavy ML runtime bundled).',
            'Built real-time video and telemetry frame streaming over persistent WebSockets to backend AI services.',
            'Hardened client binaries using ProGuard/R8 and runtime environment integrity checks (root/emulator/hook detection).',
            'Reduced APK footprint by 35% through legacy Java/MVP → Kotlin/MVVM migration.',
          ],
          stack: ['Kotlin', 'CameraX', 'WebSockets', 'REST', 'ProGuard/R8', 'Keystore API'],
          accentColor: 'cyan',
        },
        {
          id: 'nanino',
          title: 'Nanino Nationwide Smart Bakery POS Platform',
          tagline: 'Core client POS infrastructure for government flour subsidy distribution.',
          period: '2022 – 2023',
          categories: ['Fintech', 'Gov-Tech', 'Large-Scale POS'],
          filter: ['fintech'],
          impact:
            'Active across thousands of bakeries nationally — hundreds of thousands of daily subsidy transactions.',
          problem:
            'Ensuring high transaction throughput in harsh retail environments with intermittent or zero connectivity.',
          solution: [
            'Implemented resilient offline/online synchronization with atomic transaction logging and conflict resolution.',
            'Integrated payment switch drivers (Pax A920Pro / Amp8000) using JPOS and TCP Sockets.',
            'Passed national cybersecurity audits (AFTA) with hardened anti-tampering measures.',
            'Designed for zero-data-loss on power interruption using Room DB journaling.',
          ],
          stack: ['Java', 'Kotlin', 'JPOS', 'TCP Sockets', 'Room Database', 'POS Terminal SDKs'],
          accentColor: 'blue',
        },
        {
          id: 'amnpardaz',
          title: 'AmnPardaz Electronic Invoicing System',
          tagline: 'Cross-platform tax compliance tool for retail and corporate merchants.',
          period: '2023 – Present',
          categories: ['Cross-Platform', 'Enterprise', 'POS'],
          filter: ['fintech', 'apps'],
          problem:
            'Businesses needed a fast way to issue standardized invoices compliant with the national tax agency without purchasing expensive specialized hardware.',
          solution: [
            'Developed a cross-platform Flutter client deployable on standard smartphones and smart POS hardware.',
            'Implemented local cryptographic signature generation for invoice payloads per tax authority spec.',
            'Designed an offline-first BLoC state machine for multi-step invoice creation with draft persistence.',
          ],
          stack: ['Flutter', 'Dart', 'BLoC', 'REST API', 'SQLite', 'Cryptography'],
          accentColor: 'cyan',
        },
        {
          id: 'dolme',
          title: 'Dolme Native Word Game',
          tagline: 'Lightweight Persian word puzzle game published on CafeBazaar.',
          period: '2016 – 2018',
          categories: ['Mobile Game', 'Native Performance', 'Creative UI'],
          filter: ['apps'],
          problem:
            'Achieving high-performance animations and responsive touch interactions without the heavy APK size or memory footprint of game engines like Unity.',
          solution: [
            'Handcrafted game loops, touch detection, and particle animations natively using custom Android Views.',
            'Achieved consistent 60 FPS using 2D Canvas rendering and Android Property Animators — no external engines.',
            'Optimized memory allocation with object pooling to eliminate GC-induced frame drops.',
          ],
          stack: ['Kotlin', 'Java', 'Custom Canvas Views', 'Property Animators', 'CafeBazaar'],
          accentColor: 'blue',
        },
        {
          id: 'taxi',
          title: 'Tonekabon Municipal Taxi Ticketing System',
          tagline: 'Field inspection and instant thermal receipt printing suite.',
          period: '2016 – 2017',
          categories: ['IoT', 'Embedded Hardware', 'Field Operations'],
          filter: ['apps', 'fintech'],
          problem:
            'Field inspectors required immediate violation receipt printing onto portable battery-operated thermal printers without layout distortions across different printer models.',
          solution: [
            'Built a dynamic Canvas renderer generating crisp rasterized bitmaps matching Bixolon ESC/POS print-head constraints.',
            'Streamed high-speed bitmap data over Bluetooth and Serial connections using Bixolon SDK.',
            'Implemented a template engine for dynamic receipt fields (officer ID, date, violation code, signature line).',
          ],
          stack: ['Android SDK', 'Canvas Bitmap', 'Bluetooth API', 'Serial API', 'Bixolon SDK'],
          accentColor: 'cyan',
        },
        {
          id: 'linuxnetwork',
          title: 'LinuxNetwork.ir — Linux Network & Kernel Tuning Toolbox',
          tagline: 'Bilingual web toolbox for Linux network optimization, kernel tuning, and DevOps automation.',
          period: '2025',
          categories: ['Web App', 'DevOps', 'Open Source'],
          filter: ['web', 'apps'],
          problem:
            'Linux administrators and DevOps engineers needed a fast, visual interface to generate optimized sysctl configs, WireGuard VPN setups, and Nginx reverse proxy blocks — without memorizing hundreds of parameters.',
          solution: [
            'Built a fully bilingual (Farsi/English) RTL+LTR React SPA with Tailwind CSS and Framer Motion, deployed as a static site on Cloudflare Pages.',
            'Implemented an automated setup.sh generator that produces ready-to-run shell scripts for BBR TCP, kernel tuning, and network stack optimization.',
            'Built a WireGuard Configurator and CIDR Subnet Calculator with real-time computation and one-click copy.',
            'Integrated Nginx Reverse Proxy config builder with TLS/SSL and upstream options, reducing manual config time.',
          ],
          stack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Cloudflare Pages', 'Vite'],
          accentColor: 'blue',
          url: 'https://linuxnetwork.ir',
        },
        {
          id: 'vira',
          title: 'Vira — Smart Document Image Processing Service',
          tagline: 'Intelligent web service for automated document photo standardization and optimization.',
          period: '2025',
          categories: ['Web App', 'Image Processing', 'SaaS API'],
          filter: ['web', 'apps'],
          impact: 'Serving organizations, universities & national exam systems.',
          problem:
            'Organizations and universities wasted hours manually resizing, cropping, and compressing applicant photos to meet strict 3×4 format and file-size requirements for national exams and enrollment systems.',
          solution: [
            'Developed a client-side React SPA that performs automated 3×4 portrait crop, compression, and format conversion entirely in the browser — zero server upload required.',
            'Exposed an organizational REST API for batch document processing, enabling system-to-system integrations for universities and exam bodies.',
            'Implemented Vazirmatn self-hosted font stack for 100% offline and legacy OS compatibility — no CDN dependency.',
            'Optimized for mobile-first usage so applicants can process documents directly from their phones.',
          ],
          stack: ['React', 'TypeScript', 'Tailwind CSS', 'Canvas API', 'REST API', 'Cloudflare Pages'],
          accentColor: 'cyan',
          url: 'https://vira.linuxnetwork.ir',
        },
      ],
    },
    timelineSection: {
      badge: 'Career',
      title: 'Professional Journey',
      subtitle: '2016 to present — building at the intersection of mobile, fintech, and hardware.',
      current: 'Current',
      timeline: [
        {
          id: 'avaparsi',
          company: 'AvaParsi',
          role: 'Senior Android Developer',
          period: 'Mar 2023 – Present',
          location: 'Tehran, Iran',
          current: true,
          highlights: [
            'Architected offline-first Android POS app for supermarkets & restaurants using Room Persistence and multi-tier local caching for zero-latency product lookups.',
            'Engineered AmnPardaz: a Flutter-based tax invoicing system enabling merchants to submit digital invoices to the national tax authority via smart POS terminals.',
            'Designed queue management & ticketing workflows interfacing with weight scales, barcode scanners, and thermal printers via AIDL and serial protocols.',
            'Led architectural refactoring toward Domain-Driven Design (DDD) and modular packaging, sustaining a 99.8% crash-free rate across fragmented Android POS vendors.',
          ],
        },
        {
          id: 'omidpay',
          company: 'Omidpay',
          role: 'Android Developer — Fintech & POS',
          period: 'Sep 2022 – Mar 2023',
          location: 'Tehran, Iran',
          current: false,
          highlights: [
            'Developed low-level banking transaction SDKs for Android smart POS terminals (Pax A920Pro, Amp8000), supporting magnetic stripe, IC chip, and secure PIN-pad.',
            'Wrote Java Card applets for EMV smart card operations — implementing APDU command handlers for secure key derivation, PIN verification, and cryptogram generation on-card.',
            'Implemented strict ISO 8583 protocol decoders/encoders, JPOS standards, and async TCP Socket streaming for high-reliability interbank transaction clearance.',
            'Delivered the Android POS client for Nanino Smart Bakery Platform, empowering thousands of bakeries to execute government-subsidized bread transactions at scale.',
            'Passed national cybersecurity audits (AFTA) through hardened anti-tamper, anti-reverse-engineering, and cryptographic injection resistance.',
          ],
        },
        {
          id: 'uid',
          company: 'UID',
          role: 'Android Developer',
          period: 'Sep 2018 – Sep 2022',
          location: 'Tehran, Iran',
          current: false,
          highlights: [
            'Engineered the core client SDK for Iran’s premier digital identity platform — liveness detection, AI-driven facial verification, and real-time WebSocket video streaming for 2.5M+ active users.',
            'Spearheaded legacy migration from Java/MVP to Kotlin/MVVM, reducing APK footprint by 35% and cutting external runtime dependencies dramatically.',
            'Configured ProGuard/R8 obfuscation, anti-hooking detection, and secure keystore operations to protect biometric payloads in transit and at rest.',
          ],
        },
        {
          id: 'freelance',
          company: 'Freelance & Early Projects',
          role: 'Android Developer (Softwaria / Varna Marlik)',
          period: '2016 – 2018',
          location: 'Iran',
          current: false,
          highlights: [
            'Built Tonekabon Municipal Taxi Receipt System: in-memory Canvas rendering engine streaming dynamic receipts as bitmaps over Bluetooth/Serial to Bixolon thermal printers.',
            'Designed and shipped Dolme — a native Persian puzzle game on CafeBazaar with consistent 60 FPS via custom Canvas Views and animation loops without game engines.',
            'Built and deployed on-demand food ordering (Kababe Nab), classifieds (Taj), and developer utility applications for Varna Marlik clients.',
          ],
        },
      ],
    },
    resumeSection: {
      badge: 'Resume',
      title: 'Download My CV',
      subtitle: 'Full details of my experience, education, and technical skills in PDF format.',
      fileName: 'Salar_Taheri_Resume.pdf',
      fileDesc: 'Senior Android & Embedded POS Engineer',
      openInTab: 'Open in Tab',
      downloadPdf: 'Download PDF',
    },
    contactSection: {
      badge: 'Get In Touch',
      title: "Let's Connect",
      subtitle:
        'Open to senior Android, fintech, and embedded engineering opportunities. Drop me a message — I typically reply within 24 hours.',
      emailLabel: 'Email',
      linkedinLabel: 'LinkedIn',
      githubLabel: 'GitHub',
      location: 'Tehran, Iran',
      degree: 'B.Sc. Software Engineering — University of Guilan',
      status: 'Available for opportunities',
      copyright: 'All rights reserved.',
      builtWith: 'Built with Next.js · Tailwind CSS · Framer Motion · Deployed on Cloudflare Pages',
    },
  },

  fa: {
    nav: {
      projects: 'پروژه‌ها',
      experience: 'سوابق کاری',
      stack: 'مهارت‌ها',
      contact: 'تماس',
      downloadCv: 'دانلود رزومه',
    },
    profile: {
      name: 'سالار طاهری',
      title: 'مهندس ارشد اندروید و پوز بانکی',
      tagline:
        'بیش از ۱۰ سال تجربه در توسعه راهکارهای حساس اندروید؛ از SDK احراز هویت بیومتریک برای بیش از ۲.۵ میلیون کاربر تا معماری سخت‌افزار پوز و زیرساخت‌های فین‌تک.',
      badge: 'آماده همکاری در جایگاه‌های ارشد',
      downloadResume: 'دانلود رزومه',
      viewProjects: 'مشاهده پروژه‌ها',
      years: 'سال تجربه',
      users: 'کاربر فعال',
      platforms: 'سخت‌افزار پوز',
      crashFree: 'پایداری بدون کرش',
      location: 'تهران، ایران',
      email: 'salar.taheri.mirani@gmail.com',
      phone: '+98-937-698-9151',
      linkedin: 'https://www.linkedin.com/in/salar-taheri',
      github: 'https://github.com/salartaheri',
      resumePdf: '/resume.pdf',
      summary:
        'توسعه‌دهنده ارشد اندروید با بیش از ۱۰ سال سابقه مهندسی نرم‌افزار در حوزه‌های فین‌تک، یکپارچه‌سازی سخت‌افزارهای پوز اندرویدی و سیستم‌های مقیاس‌بالای سازمانی. سابقه اثبات‌شده در توسعه SDKهای امن بانکی، خطوط احراز هویت بیومتریک (eKYC) برای بیش از ۲.۵ میلیون کاربر، و پردازش بلادرنگ تراکنش‌ها منطبق بر استانداردهای شاپرک و بانک مرکزی (ISO 8583 و کهربا NFC). تسلط بر معماری‌های نوین اندروید (Jetpack Compose، Coroutines & Flow، Clean Architecture، DDD) همراه با ارتباطات سطح پایین سخت‌افزاری (AIDL، کارت‌خوان‌ها، پرینترهای حرارتی و اپلت‌های Java Card).',
    },
    statsSection: {
      badge: 'آمار و ارقام',
      title: 'اثرگذاری واقعی و صنعتی',
      subtitle: 'یک دهه تجربه مهندسی در تقاطع فین‌تک، بیومتریک و سخت‌افزارهای امبدد.',
      stats: [
        {
          value: 10,
          suffix: '+',
          label: 'سال سابقه تخصصی',
          description: 'توسعه اندروید در مقیاس سازمانی و صنعتی',
        },
        {
          value: 2.5,
          suffix: 'M+',
          label: 'کاربر احراز هویت شده',
          description: 'احراز هویت دیجیتال و بیومتریک در سامانه سجام و بانک‌ها',
          decimals: 1,
        },
        {
          value: 5,
          suffix: '+',
          label: 'پلتفرم سخت‌افزاری پوز',
          description: 'دستگاه‌های Pax ،Amp ،Bixolon و پایانه‌های اندرویدی',
        },
        {
          value: 99.8,
          suffix: '%',
          label: 'نرخ پایداری بدون کرش',
          description: 'پایداری مداوم روی انواع سخت‌افزارهای ناهمگون پوز',
          decimals: 1,
        },
      ],
    },
    techStackSection: {
      badge: 'تخصص‌های فنی',
      title: 'استک فناوری و ابزارها',
      subtitle: 'مجموعه‌ای عمیق و آزموده‌شده طی یک دهه مهندسی در سیستم‌های عملیاتی.',
      allTab: 'همه',
      categories: [
        {
          id: 'android',
          name: 'هسته اندروید و موبایل',
          icon: 'Smartphone',
          color: 'blue',
          skills: [
            'Kotlin',
            'Java',
            'Dart / Flutter',
            'Jetpack Compose',
            'Android SDK',
            'View System & Canvas',
            'AIDL',
            'Navigation Component',
            'Material Design 3',
            'CameraX',
          ],
        },
        {
          id: 'fintech',
          name: 'فین‌تک و پوز امبدد',
          icon: 'CreditCard',
          color: 'cyan',
          skills: [
            'ISO 8583',
            'JPOS',
            'شاپرک کهربا (NFC)',
            'Java Card (اپلت)',
            'پروتکل APDU',
            'Pax A920Pro SDK',
            'Amp8000 SDK',
            'پرینترهای حرارتی ESC/POS',
            'Bluetooth Serial',
            'کارت‌خوان‌های هوشمند',
            'یکپارچه‌سازی PIN-pad',
          ],
        },
        {
          id: 'networking',
          name: 'شبکه و پروتکل‌ها',
          icon: 'Network',
          color: 'blue',
          skills: [
            'Ktor Client',
            'Retrofit',
            'OkHttp',
            'WebSockets',
            'TCP Sockets',
            'REST APIs',
            'Protobuf',
            'Coroutines & Flow',
            'RxJava',
          ],
        },
        {
          id: 'arch',
          name: 'معماری و الگوها',
          icon: 'Layers',
          color: 'cyan',
          skills: [
            'Clean Architecture',
            'Domain-Driven Design',
            'MVVM',
            'MVI',
            'Multi-Module Gradle',
            'Hilt / Koin',
            'Room Database',
            'DataStore',
          ],
        },
        {
          id: 'tools',
          name: 'امنیت، دوآپس و ابزارها',
          icon: 'Shield',
          color: 'blue',
          skills: [
            'ProGuard / R8',
            'Android Keystore',
            'Git',
            'Linux',
            'Docker',
            'CI/CD',
            'Sentry',
            'SQL / SQLite',
            'Bash',
          ],
        },
      ],
    },
    projectsSection: {
      badge: 'نمونه‌کارها',
      title: 'پروژه‌های شاخص',
      subtitle:
        'سیستم‌های عملیاتی در حوزه زیرساخت‌های فین‌تک، کیت‌های توسعه احراز هویت، سخت‌افزار پوز و وب‌اپلیکیشن‌ها.',
      filters: [
        { id: 'all', label: 'همه پروژه‌ها' },
        { id: 'fintech', label: 'فین‌تک و پوز' },
        { id: 'sdk', label: 'کیت توسعه (SDK)' },
        { id: 'apps', label: 'اپلیکیشن‌ها' },
        { id: 'web', label: 'وب' },
      ],
      viewCaseStudy: 'مشاهده جزئیات پروژه',
      liveSite: 'سایت زنده',
      theProblem: 'صورت مسئله و چالش',
      engineeringSolution: 'راهکار مهندسی و پیاده‌سازی',
      techStack: 'فناوری‌های به‌کاررفته',
      visitLiveSite: 'مشاهده آنلاین وب‌سایت',
      projects: [
        {
          id: 'pos-banking',
          title: 'سامانه بانکی پوز اندروید و پرداخت بدون تماس کهربا',
          tagline: 'اپلیکیشن کامل و مستقل تراکنش‌های بانکی ویژه پایانه‌های فروش هوشمند.',
          period: 'شهریور ۱۴۰۳ – اسفند ۱۴۰۳',
          categories: ['فین‌تک', 'اندروید امبدد', 'پرداخت NFC'],
          filter: ['fintech'],
          problem:
            'پیاده‌سازی تراکنش‌های بانکی کم‌تاخیر و ضد دستکاری (خرید، مانده‌گیری، شارژ، کالابرگ الکترونیکی) مطابق با پروتکل‌های سخت‌گیرانه شاپرک و شبکه بانکی کشور.',
          solution: [
            'پیاده‌سازی پک/آنپک پیام‌های استاندارد ISO 8583 روی سوکت خام TCP با صحت‌سنجی دقیق چکسام.',
            'یکپارچه‌سازی پروتکل کهربا جهت پرداخت بدون تماس موبایلی مبتنی بر NFC مطابق استاندارد شاپرک.',
            'برقراری ارتباط پایدار با کارت‌خوان مغناطیسی و چیپ هوشمند از طریق سرویس‌های سخت‌افزاری AIDL.',
            'توسعه اپلت‌های Java Card برای پردازش کارت‌های هوشمند — پیاده‌سازی جفت‌دستورهای APDU برای احراز هویت و صدور مجوز تراکنش‌های منطبق بر EMV.',
            'کاهش زمان پاسخ‌دهی تراکنش به زیر ۲۰۰ میلی‌ثانیه با بهینه‌سازی کانکشن پولینگ سوکت.',
          ],
          stack: ['Kotlin', 'ISO 8583', 'NFC', 'AIDL', 'Java Card', 'APDU', 'Coroutines', 'Jetpack Compose'],
          accentColor: 'blue',
        },
        {
          id: 'ekyc-sdk',
          title: 'کیت توسعه احراز هویت بیومتریک UID',
          tagline: 'نخستین پایپ‌لاین تشخیص زنده بودن چهره و احراز هویت دیجیتال در ایران.',
          period: '۱۳۹۷ – ۱۴۰۱',
          categories: ['توسعه SDK', 'بیومتریک', 'مقیاس بالا'],
          filter: ['sdk'],
          impact: 'بیش از ۲.۵ میلیون احراز هویت موفق در سامانه سجام، بورس و بانک‌های کشور.',
          problem:
            'دریافت تصویر و فریم‌های ویدئویی با کیفیت بالا روی انواع دستگاه‌های ضعیف تا پرچمدار اندرویدی همراه با جلوگیری از تقلب (Spoofing) و حملات مرد میانی.',
          solution: [
            'مهندسی SDK سبک بر پایه CameraX با حداقل حجم باینری بدون افزودن مدل‌های سنگین به کلاینت.',
            'ارسال بلادرنگ استریم فریم‌ها و تله‌متری روی بستر وب‌سوکت پایدار به سمت موتور هوش مصنوعی سرور.',
            'مقاوم‌سازی باینری با پیکربندی پیشرفته ProGuard/R8 و الگوریتم‌های تشخیص روت، امولاتور و هوکینگ.',
            'کاهش ۳۵ درصدی حجم فایل APK از طریق بازنویسی ساختار از Java/MVP به معماری نوین Kotlin/MVVM.',
          ],
          stack: ['Kotlin', 'CameraX', 'WebSockets', 'REST', 'ProGuard/R8', 'Keystore API'],
          accentColor: 'cyan',
        },
        {
          id: 'nanino',
          title: 'پلتفرم سراسری پوز نانوایی‌های هوشمند نانینو',
          tagline: 'زیرساخت نرم‌افزاری کلاینت پوز برای طرح هدفمندی و یارانه هوشمند نان.',
          period: '۱۴۰۱ – ۱۴۰۲',
          categories: ['فین‌تک', 'سامانه‌های دولتی', 'پوز پرتراکنش'],
          filter: ['fintech'],
          impact: 'فعال در ده‌ها هزار نانوایی در سراسر کشور با صدها هزار تراکنش روزانه.',
          problem:
            'تضمین انجام سریع و قطعی تراکنش‌ها در محیط‌های خشن نانوایی با اینترنت پرنوسان و شرایط آفلاین.',
          solution: [
            'پیاده‌سازی مکانیزم هماهنگ‌سازی منعطف آفلاین/آنلاین با ثبت اتمیک تراکنش‌ها و رفع تداخل داده‌ای.',
            'درایورهای ارتباط با سوئیچ پرداخت پایانه‌های Pax A920Pro و Amp8000 با استاندارد JPOS و سوکت TCP.',
            'اخذ تأییدیه‌های امنیتی سامانه‌های پرداخت کشور (افتا) با پیاده‌سازی لایه‌های حفاظتی ضد دستکاری.',
            'طراحی مکانیزم پیشگیری از دست رفتن داده در اثر قطعی ناگهانی برق با ژورنالینگ دیتابیس Room.',
          ],
          stack: ['Java', 'Kotlin', 'JPOS', 'TCP Sockets', 'Room Database', 'POS Terminal SDKs'],
          accentColor: 'blue',
        },
        {
          id: 'amnpardaz',
          title: 'سامانه صدور صورتحساب الکترونیکی امن‌پرداز',
          tagline: 'ابزار چندسکویی اتصال به سامانه مودیان مالیاتی برای اصناف و شرکت‌ها.',
          period: '۱۴۰۲ – اکنون',
          categories: ['چندسکویی', 'سازمانی', 'پایانه فروش'],
          filter: ['fintech', 'apps'],
          problem:
            'نیاز مبرم کسب‌وکارها به صدور سریع و استاندارد فاکتورهای مالیاتی معتبر بدون نیاز به خرید تجهیزات گران‌قیمت اختصاصی.',
          solution: [
            'توسعه کلاینت چندسکویی با فریم‌ورک Flutter با قابلیت اجرا روی گوشی‌های معمولی و پوزهای هوشمند.',
            'پیاده‌سازی تولید امضای دیجیتال و توکن‌های رمزنگاری محلی روی محتوای فاکتورها طبق الزامات سازمان امور مالیاتی.',
            'طراحی ماشین وضعیت آفلاین‌محور با BLoC برای ایجاد چندمرحله‌ای پیش‌نویس صورتحساب.',
          ],
          stack: ['Flutter', 'Dart', 'BLoC', 'REST API', 'SQLite', 'Cryptography'],
          accentColor: 'cyan',
        },
        {
          id: 'dolme',
          title: 'بازی معمایی کلمات دلمه',
          tagline: 'بازی سبک و جذاب بومی کلمات منتشر شده در کافه‌بازار.',
          period: '۱۳۹۵ – ۱۳۹۷',
          categories: ['بازی موبایل', 'کارایی بومی', 'طراحی نوآورانه'],
          filter: ['apps'],
          problem:
            'دستیابی به انیمیشن‌های روان و پاسخ‌دهی فوق‌العاده سریع لمسی بدون حجم سنگین و مصرف حافظه موتورهای بازی مانند یونیتی.',
          solution: [
            'برنامه‌نویسی اختصاصی حلقه‌های بازی (Game Loops)، تشخیص تاچ و انیمیشن‌های ذرات به صورت Native با ویوهای سفارشی.',
            'رسیدن به نرخ فریم پایدار ۶۰ FPS با رندرینگ ۲ بعدی Canvas و موتور Property Animators اندروید.',
            'بهینه‌سازی تخصیص حافظه و مدیریت آبجکت‌پولینگ برای حذف توقف‌های ناشی از Garbage Collector.',
          ],
          stack: ['Kotlin', 'Java', 'Custom Canvas Views', 'Property Animators', 'CafeBazaar'],
          accentColor: 'blue',
        },
        {
          id: 'taxi',
          title: 'سامانه صدور قبض تاکسیرانی شهرداری تنکابن',
          tagline: 'نرم‌افزار بازرسی میدانی و چاپ آنی فیش جریمه روی پرینتر حرارتی کمری.',
          period: '۱۳۹۵ – ۱۳۹۶',
          categories: ['اینترنت اشیاء', 'سخت‌افزار امبدد', 'عملیات میدانی'],
          filter: ['apps', 'fintech'],
          problem:
            'نیاز بازرسان به چاپ آنی فیش روی پرینترهای حرارتی قابل‌حمل بلوتوثی بدون بهم‌ریختگی چیدمان روی برندهای متنوع پرینتر.',
          solution: [
            'توسعه موتور رندرینگ درون‌حافظه‌ای Canvas برای ترسیم بیت‌مپ‌های دقیق مطابق با مشخصات هِد پرینتر Bixolon.',
            'انتقال پرسرعت بیت‌مپ‌ها روی پروتکل سریال و بلوتوث از طریق SDK بومی بیکسلون.',
            'طراحی موتور قالب فیش داینامیک برای جایگذاری فیلدهای کد بازرس، ساعت، نوع تخلف و امضا.',
          ],
          stack: ['Android SDK', 'Canvas Bitmap', 'Bluetooth API', 'Serial API', 'Bixolon SDK'],
          accentColor: 'cyan',
        },
        {
          id: 'linuxnetwork',
          title: 'LinuxNetwork.ir — جعبه‌ابزار شبکه و تیونینگ کرنل لینوکس',
          tagline: 'ابزار وب دوزبانه برای بهینه‌سازی شبکه لینوکس، تیونینگ کرنل و اتوماسیون دوآپس.',
          period: '۱۴۰۳',
          categories: ['وب‌اپلیکیشن', 'دوآپس', 'متن‌باز'],
          filter: ['web', 'apps'],
          problem:
            'مدیران سیستم و مهندسان زیرساخت برای تولید فایل‌های پیکربندی sysctl، وایرگارد و Nginx نیاز به ابزاری بصری و هوشمند داشتند تا از سردرگمی میان صدها پارامتر جلوگیری شود.',
          solution: [
            'ساخت وب‌اپلیکیشن دوزبانه (فارسی/انگلیسی) با پشتیبانی کامل از RTL/LTR با React، Tailwind CSS و Framer Motion.',
            'تولید خودکار اسکریپت اجرایی setup.sh با یک کلیک برای فعال‌سازی BBR، بافرهای TCP و تیونینگ پشته شبکه.',
            'پیاده‌سازی ماژول ساخت کانفیگ WireGuard و محاسبه‌گر ساب‌نت CIDR با پردازش بلادرنگ.',
            'سازنده کانفیگ Nginx Reverse Proxy با پشتیبانی از SSL/TLS و لودبالانسینگ.',
          ],
          stack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Cloudflare Pages', 'Vite'],
          accentColor: 'blue',
          url: 'https://linuxnetwork.ir',
        },
        {
          id: 'vira',
          title: 'سامانه هوشمند ویرا (Vira) — استانداردسازی مدارک و وب‌سرویس سازمانی',
          tagline: 'سامانه هوشمند پردازش و استانداردسازی خودکار عکس پرسنلی و مدارک هویتی.',
          period: '۱۴۰۳',
          categories: ['وب‌اپلیکیشن', 'پردازش تصویر', 'وب‌سرویس سازمانی'],
          filter: ['web', 'apps'],
          impact: 'مورد استفاده دانشگاه‌ها، آزمون‌های سراسری و سازمان‌های اداری.',
          problem:
            'اتلاف وقت فراوان داوطلبان و سازمان‌ها برای برش دقیق ۳×۴، تنظیم فرمت و کاهش حجم عکس مدارک طبق الزامات سامانه‌های سنجش و دانشگاه‌ها.',
          solution: [
            'توسعه وب‌اپلیکیشن کلاینت‌محور برای برش هوشمند ۳×۴، فشرده‌سازی و تبدیل فرمت به صورت ۱۰۰٪ آفلاین و بدون آپلود تصویر به سرور.',
            'طراحی وب‌سرویس REST سازمانی جهت پردازش دسته‌ای مدارک متصل به اتوماسیون‌های آموزشی.',
            'میزبانی محلی فونت وزیرمتن جهت سازگاری کامل بدون نیاز به اینترنت و بدون وابستگی به CDNهای خارجی.',
            'طراحی کاملاً واکنش‌گرا با رویکرد موبایل‌فرست جهت پردازش مدارک با دوربین گوشی.',
          ],
          stack: ['React', 'TypeScript', 'Tailwind CSS', 'Canvas API', 'REST API', 'Cloudflare Pages'],
          accentColor: 'cyan',
          url: 'https://vira.linuxnetwork.ir',
        },
      ],
    },
    timelineSection: {
      badge: 'مسیر حرفه‌ای',
      title: 'سوابق کاری و شغلی',
      subtitle: 'از سال ۱۳۹۵ تا کنون — توسعه تخصصی در پیوند موبایل، فین‌تک و تجهیزات سخت‌افزاری.',
      current: 'مشغول به کار',
      timeline: [
        {
          id: 'avaparsi',
          company: 'آواپارسی (AvaParsi)',
          role: 'توسعه‌دهنده ارشد اندروید',
          period: 'اسفند ۱۴۰۱ – اکنون',
          location: 'تهران، ایران',
          current: true,
          highlights: [
            'معماری و توسعه اپلیکیشن صندوق پوز اندرویدی برای سوپرمارکت‌ها و رستوران‌ها با Room Persistence و کش چندلایه جهت جستجوی آنی در کاتالوگ‌های حجیم کالا.',
            'مهندسی سامانه مالیاتی امن‌پرداز با فریم‌ورک Flutter برای ارسال دیجیتال صورتحساب‌ها به سامانه مودیان از طریق پایانه‌های پوز هوشمند و گوشی‌های همراه.',
            'طراحی پایپ‌لاین‌های مدیریت نوبت و ارتباط با تجهیزات جانبی شامل ترازوهای دیجیتال، بارکدخوان و پرینترهای حرارتی با پروتکل‌های AIDL و Serial.',
            'هدایت بازطراحی معماری نرم‌افزار به سمت Domain-Driven Design (DDD) و ماژولار، و ثبت نرخ پایداری ۹۹.۸٪ بدون کرش روی انواع پوزهای ناهمگون.',
          ],
        },
        {
          id: 'omidpay',
          company: 'امیدپی (Omidpay)',
          role: 'توسعه‌دهنده اندروید (فین‌تک و پوز)',
          period: 'شهریور ۱۴۰۱ – اسفند ۱۴۰۱',
          location: 'تهران، ایران',
          current: false,
          highlights: [
            'توسعه SDKهای سطح پایین تراکنش‌های بانکی برای دستگاه‌های پوز Pax A920Pro و Amp8000 با پشتیبانی از کارت‌های مگنت، چیپ هوشمند و PIN-pad امن.',
            'نگارش اپلت‌های Java Card برای پردازش کارت‌های هوشمند EMV — شامل پیاده‌سازی دستورات APDU برای اشتقاق کلید، اعتبارسنجی پین و تولید کریپتوگرام.',
            'پیاده‌سازی انکودر و دیکودر دقیق پروتکل‌های بانکی ISO 8583، استانداردهای JPOS و استریم آسنکرون سوکت TCP برای تسویه پایدار بین‌بانکی.',
            'توسعه کلاینت اندرویدی پوز برای سامانه هوشمند نانینو جهت توزیع یارانه آرد در هزاران نانوایی در سطح کشور با حجم تراکنش بسیار بالا.',
            'مقاوم‌سازی امنیتی اپلیکیشن در برابر حملات تزریق و مهندسی معکوس، و گذراندن موفقیت‌آمیز ممیزی‌های امنیتی افتا.',
          ],
        },
        {
          id: 'uid',
          company: 'یوآیدی (UID)',
          role: 'توسعه‌دهنده اندروید',
          period: 'شهریور ۱۳۹۷ – شهریور ۱۴۰۱',
          location: 'تهران، ایران',
          current: false,
          highlights: [
            'توسعه SDK کلاینت پلتفرم پیشرو احراز هویت دیجیتال در ایران؛ پیاده‌سازی الگوریتم‌های تشخیص زنده‌بودن، احراز تصویر و استریم بلادرنگ ویدئو روی وب‌سوکت برای ۲.۵ میلیون کاربر فعال در بورس و بانک‌ها.',
            'هدایت پروژه مهاجرت کدبیس از Java/MVP به Kotlin/MVVM، کاهش ۳۵ درصدی حجم فایل APK و حذف وابستگی‌های زائد در زمان اجرا.',
            'تنظیم قوانین امنیتی ProGuard/R8، مکانیزم‌های ضدهوکینگ و ذخیره‌سازی امن در Android Keystore جهت محافظت از محموله‌های بیومتریک.',
          ],
        },
        {
          id: 'freelance',
          company: 'فریلنس و پروژه‌های اولیه',
          role: 'توسعه‌دهنده اندروید (سافت‌واریا / وارنا مارلیک)',
          period: '۱۳۹۵ – ۱۳۹۷',
          location: 'ایران',
          current: false,
          highlights: [
            'ساخت سامانه جریمه تاکسیرانی شهرداری تنکابن: موتور رندرینگ درون‌حافظه‌ای Canvas برای چاپ مستقیم بیت‌مپ روی پرینترهای حرارتی Bixolon.',
            'طراحی و انتشار بازی کلمات دلمه در کافه‌بازار با فریم‌ریت پایدار ۶۰ FPS با ویوهای سفارشی و انیمیشن‌های روان بدون موتورهای بازی سنگین.',
            'توسعه و استقرار سامانه‌های سفارش غذای آنلاین (کباب ناب)، نیازمندی‌ها (تاج) و ابزارهای کاربردی برای مشتریان شرکت وارنا مارلیک.',
          ],
        },
      ],
    },
    resumeSection: {
      badge: 'رزومه',
      title: 'دانلود فایل رزومه',
      subtitle: 'مشاهده و دریافت فایل پی‌دی‌اف کامل سوابق تحصیلی، شغلی و مهارت‌های فنی.',
      fileName: 'Salar_Taheri_Resume.pdf',
      fileDesc: 'مهندس ارشد اندروید و پوز بانکی',
      openInTab: 'مشاهده در تب جدید',
      downloadPdf: 'دانلود نسخه PDF',
    },
    contactSection: {
      badge: 'ارتباط مستقیم',
      title: 'راه‌های ارتباطی',
      subtitle:
        'علاقه‌مند به همکاری در پروژه‌ها و موقعیت‌های ارشد اندروید، فین‌تک و تجهیزات امبدد. پیام بگذارید؛ معمولاً ظرف کمتر از ۲۴ ساعت پاسخ می‌دهم.',
      emailLabel: 'ایمیل',
      linkedinLabel: 'لینکدین',
      githubLabel: 'گیت‌هاب',
      location: 'تهران، ایران',
      degree: 'کارشناسی مهندسی نرم‌افزار — دانشگاه گیلان',
      status: 'آماده شروع همکاری',
      copyright: 'تمامی حقوق محفوظ است.',
      builtWith: 'طراحی شده با Next.js · Tailwind CSS · Framer Motion · مستقر روی Cloudflare Pages',
    },
  },
};

// Legacy exports for backward compatibility
export const profile = content.en.profile;
export const stats = content.en.statsSection.stats;
export const skillCategories = content.en.techStackSection.categories;
export const projects = content.en.projectsSection.projects;
export const projectFilters = content.en.projectsSection.filters;
export const timeline = content.en.timelineSection.timeline;

export const education = {
  degree: 'Bachelor of Science in Software Engineering',
  university: 'University of Guilan',
  location: 'Iran',
  period: '2013 – 2018',
};

export const languages = [
  { name: 'Persian', level: 'Native' },
  { name: 'English', level: 'Professional Working Proficiency' },
];

export const seoMeta = {
  title: 'Salar Taheri — Senior Android & Embedded POS Engineer',
  description:
    'Senior Android & Embedded POS Engineer with 10+ years building fintech SDKs, biometric eKYC pipelines (2.5M+ users), and ISO 8583 POS payment systems.',
  url: 'https://salartaheri.dev',
  ogImage: '/og-image.png',
  keywords: [
    'Android Developer',
    'POS Engineer',
    'Fintech',
    'Kotlin',
    'Jetpack Compose',
    'ISO 8583',
    'eKYC',
    'Biometrics',
    'Java Card',
    'Tehran',
    'Iran',
  ],
};
