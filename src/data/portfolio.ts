// ============================================================
// portfolio.ts — Single Source of Truth for all portfolio content
// Includes full bilingual (English & Persian) support.
// ============================================================

export type ProjectFilter = 'all' | 'fintech' | 'sdk' | 'apps' | 'web';

export interface StarCaseStudy {
  situation: string;
  task: string;
  action: string[];
  result: string[];
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  period: string;
  categories: string[];
  filter: ProjectFilter[];
  impact?: string;
  keyMetric?: string;
  star?: StarCaseStudy;
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

export interface RecruiterQuickViewContent {
  badge: string;
  title: string;
  subtitle: string;
  availability: {
    status: string;
    noticePeriod: string;
    workPreference: string;
    location: string;
  };
  targetRoles: string[];
  highlights: {
    label: string;
    metric: string;
    description: string;
  }[];
  actions: {
    downloadResume: string;
    copyEmail: string;
    copyPhone?: string;
    copied: string;
    viewLinkedin: string;
    viewGithub: string;
  };
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
    phone?: string;
    linkedin: string;
    github: string;
    resumePdf: string;
    summary: string;
  };
  recruiterQuickView: RecruiterQuickViewContent;
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
    starLabels: {
      situation: string;
      task: string;
      action: string;
      result: string;
    };
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
      title: 'Senior Android & Mobile Systems Engineer',
      tagline:
        '10+ years architecting mission-critical mobile systems — from biometric eKYC SDKs powering 2.5M+ users to low-level POS hardware, ISO 8583 banking protocols, and modern Jetpack Compose applications.',
      badge: 'Available for Senior & Lead Roles',
      downloadResume: 'Download Resume',
      viewProjects: 'View Projects',
      years: 'Years',
      users: 'Users',
      platforms: 'POS Platforms',
      crashFree: 'Crash-Free',
      location: 'Tehran, Iran',
      email: 'salar.taheri.mirani@gmail.com',
      linkedin: 'https://www.linkedin.com/in/salar-taheri',
      github: 'https://github.com/salartaheri',
      resumePdf: '/resume.pdf',
      summary:
        'Senior Android Developer with over 10 years of software engineering experience specializing in Fintech, Android POS hardware integration, and high-scale enterprise applications. Demonstrated track record in developing secure payment SDKs, biometric eKYC pipelines serving 2.5M+ users, and real-time transaction processing compliant with national central banking standards (ISO 8583, Shaparak Kehroba contactless NFC). Proven mastery of modern Android architectures (Jetpack Compose, Kotlin Coroutines & Flow, Clean Architecture, Domain-Driven Design) combined with low-level peripheral communication (AIDL, serial/thermal printers, smart card readers, Java Card applets).',
    },
    recruiterQuickView: {
      badge: 'Recruiter Quick-View',
      title: 'Executive Summary for Hiring Teams',
      subtitle: 'Key career highlights, core stack, and direct availability at a glance.',
      availability: {
        status: 'Open to Remote / Hybrid / Relocation',
        noticePeriod: 'Immediate / Short Notice',
        workPreference: 'Full-Time / Senior & Lead Roles',
        location: 'Tehran, Iran (Global Mobility Ready)',
      },
      targetRoles: [
        'Senior Android Engineer',
        'Mobile Systems Architect',
        'Fintech & Payment Systems Lead',
        'Staff Mobile Engineer',
      ],
      highlights: [
        {
          label: 'High-Scale Biometrics',
          metric: '2.5M+ Users',
          description: 'Production eKYC SDK serving national financial exchanges & banks.',
        },
        {
          label: 'Mission-Critical Fintech',
          metric: 'ISO 8583 & NFC',
          description: 'Engineered banking switches, Kehroba contactless & POS smart card engines.',
        },
        {
          label: 'Enterprise Reliability',
          metric: '99.8% Crash-Free',
          description: 'Sustained across fragmented POS vendor devices (Pax, Amp, Bixolon).',
        },
      ],
      actions: {
        downloadResume: 'Download ATS Resume (PDF)',
        copyEmail: 'Copy Email',
        copied: 'Copied to clipboard!',
        viewLinkedin: 'LinkedIn Profile',
        viewGithub: 'GitHub Profile',
      },
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
      starLabels: {
        situation: 'Situation & Context',
        task: 'Engineering Mission',
        action: 'Architectural Implementation',
        result: 'Measurable Impact',
      },
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
          impact: 'Sub-200ms transaction latency & 100% compliance with central banking security audits.',
          keyMetric: '<200ms latency & ISO 8583 switch',
          star: {
            situation:
              'Smart POS devices required a standalone, secure banking client compliant with strict central banking regulations (Shaparak) to process financial transactions over low-latency cellular and Wi-Fi networks.',
            task:
              'Architect and build an independent banking client from scratch, implementing raw ISO 8583 protocol communication, EMV chip/magnetic processing, and Shaparak Kehroba contactless NFC payments.',
            action: [
              'Engineered custom ISO 8583 binary packet encoders and decoders over raw TCP sockets with bitwise validation.',
              'Integrated Shaparak Kehroba protocol leveraging Android Host Card Emulation (HCE) and NFC contactless interfaces.',
              'Interfaced with vendor hardware layers (Pax, Amp) using AIDL services for secure PIN-pad input and magnetic/IC card reading.',
              'Developed Java Card applets and APDU command pipelines for EMV card lifecycle and cryptographic authorization.',
              'Designed asynchronous reactive architecture using Kotlin Coroutines and Flows for non-blocking hardware I/O.',
            ],
            result: [
              'Achieved sub-200ms average transaction response times through persistent socket connection pooling.',
              'Passed 100% of national central banking compliance and cybersecurity audits with zero security flaws.',
              'Zero-latency hardware peripheral orchestration across diverse POS hardware vendors.',
            ],
          },
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
          keyMetric: '2.5M+ users & -35% APK size',
          star: {
            situation:
              "Iran's National Stock Exchange (Sejam) and tier-1 banking institutions required an automated, fraud-proof digital identity verification and liveness detection platform for millions of citizens on fragmented Android devices.",
            task:
              'Design and build the core client-side Android eKYC SDK responsible for camera management, anti-spoofing verification, real-time video streaming, and tamper-resistant cryptographic telemetry.',
            action: [
              'Engineered a zero-overhead camera pipeline using CameraX, streaming low-latency video frames over persistent WebSockets directly to AI microservices.',
              'Refactored legacy codebase from Java/MVP to Kotlin/MVVM, slashing runtime memory usage and reducing binary APK footprint by 35%.',
              'Hardened client security using ProGuard/R8 obfuscation, emulator detection, root cloaking bypass detection, and Android Keystore payload encryption.',
              'Authored modular public APIs enabling seamless drop-in integration into 20+ banking and financial client apps.',
            ],
            result: [
              'Successfully authenticated 2.5M+ active users across national banks and brokerage firms.',
              'Reduced client-side video streaming drop rate by 42% on low-bandwidth 3G connections.',
              'Maintained a 99.9% crash-free stability rate across 1,000+ distinct Android device models.',
            ],
          },
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
          keyMetric: '100k+ daily transactions & Zero data loss',
          star: {
            situation:
              'The national smart bakery flour subsidy program required continuous, fault-tolerant point-of-sale transactions across thousands of bakeries with volatile internet and harsh physical retail conditions.',
            task:
              'Lead client-side POS engineering for Pax A920Pro and Amp8000 terminals to ensure high-throughput bread purchase transactions with zero data loss during power outages or offline periods.',
            action: [
              'Implemented an offline-first transactional engine using Room Database with write-ahead logging (WAL) and idempotent batch synchronization.',
              'Integrated low-level JPOS drivers and TCP socket streaming for secure interbank transaction switching.',
              'Hardened terminal security against physical tampering and reverse engineering, passing rigorous national cyber audits (AFTA).',
              'Built resilient peripheral drivers for thermal receipt printing and barcode scanning via AIDL.',
            ],
            result: [
              'Scaled across tens of thousands of bakeries nationwide, processing hundreds of thousands of daily transactions.',
              '100% data integrity with zero recorded transaction losses during network outages or terminal shutdowns.',
              'Successfully certified under national AFTA cybersecurity standards.',
            ],
          },
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
          impact: '50,000+ legal invoices submitted with 100% digital signature compliance.',
          keyMetric: '50k+ invoices & 100% tax acceptance',
          star: {
            situation:
              'New corporate tax regulations mandated all merchants and enterprises to submit cryptographically signed digital invoices directly to the national tax portal, yet small businesses lacked dedicated hardware.',
            task:
              'Architect a cross-platform tax compliance mobile application in Flutter deployable on both commodity Android smartphones and dedicated smart POS terminals.',
            action: [
              'Designed clean multi-layer BLoC state management ensuring predictable state handling across complex multi-step tax invoice forms.',
              'Implemented client-side asymmetric cryptography (RSA/ECC key generation and digital signing) conforming to national tax authority specs.',
              'Constructed offline draft caching and automatic background retry queuing via SQLite.',
              'Integrated thermal printer bitmap generators for instant invoice receipts on POS terminals.',
            ],
            result: [
              'Over 50,000 legal invoices transmitted successfully with 100% digital signature acceptance by the tax authority.',
              'Unified single-codebase deployment across standard consumer Android phones and commercial POS devices.',
              'Saved clients thousands of dollars in specialized tax-hardware costs.',
            ],
          },
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
          impact: '50k+ downloads with 4.7/5 rating and consistent 60 FPS on low-end hardware.',
          keyMetric: '60 FPS Canvas & <10MB APK',
          star: {
            situation:
              'Most mobile games on Android rely on heavy engines (Unity, Unreal) that inflate APK size (50MB+) and cause long startup delays and battery drain on low-end devices.',
            task:
              'Engineer an engaging, native Persian word puzzle game with zero external game engine dependencies, achieving silky smooth 60 FPS on low-spec hardware.',
            action: [
              'Developed a custom game loop and touch collision matrix from scratch using Android 2D Canvas and custom Views.',
              'Applied aggressive object pooling and in-memory bitmap recycling to eliminate Garbage Collection pauses.',
              'Choreographed interactive particle effects and fluid typography transitions using native ValueAnimators.',
            ],
            result: [
              'Published on CafeBazaar with a lightweight APK under 10MB.',
              'Consistent 60 FPS rendering with zero frame drops, even on low-end Android 5.0+ devices.',
              'Achieved 4.7/5 user rating with over 50,000 downloads.',
            ],
          },
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
          impact: '100% adoption across field inspection units with <800ms print latency.',
          keyMetric: '<800ms print latency & 100% uptime',
          star: {
            situation:
              'Municipal traffic officers in Tonekabon needed a field inspection tool to issue violation tickets and immediately print physical receipts via portable Bluetooth thermal printers in variable weather.',
            task:
              'Build a robust mobile client that accurately formats violation notices and streams them at high speed to battery-powered Bixolon ESC/POS printers.',
            action: [
              'Engineered an in-memory Canvas rendering engine that generates pixel-perfect 1-bit monochrome bitmaps tailored to Bixolon print heads.',
              'Implemented asynchronous Bluetooth SPP and Serial socket communication with automated connection recovery.',
              'Created dynamic templating for violation codes, officer credentials, and barcode generation.',
            ],
            result: [
              'Eliminated print layout distortions and font-mismatch issues across different printer firmware revisions.',
              'Reduced print latency from 4s to under 800ms per violation ticket.',
              'Deployed to 100% of municipal field inspection units with zero downtime.',
            ],
          },
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
          impact: '100/100 Lighthouse score with thousands of active DevOps monthly visitors.',
          keyMetric: '100/100 Lighthouse & Sub-100ms edge',
          star: {
            situation:
              'Sysadmins, DevOps engineers, and network operators frequently struggle with manual configuration of complex Linux kernel parameters (sysctl), WireGuard VPN tunnels, and Nginx reverse proxies.',
            task:
              'Design and ship a fast, bilingual web-based visual generator for kernel performance tuning and network configuration.',
            action: [
              'Built a high-performance React SPA with Vite, TypeScript, Tailwind CSS, and Framer Motion with full RTL/LTR support.',
              'Engineered automated script generators for sysctl BBR congestion control, TCP window buffer sizing, and security hardening.',
              'Created interactive WireGuard and CIDR calculators with real-time bitmask computations.',
              'Deployed globally via Cloudflare Pages for instant sub-100ms global edge delivery.',
            ],
            result: [
              'Thousands of monthly active visits from DevOps engineers and Linux administrators.',
              '100% client-side execution guaranteeing privacy — zero configuration data leaves the user browser.',
              'Sub-1 second page load with 100/100 Lighthouse performance score.',
            ],
          },
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
          impact: '20,000+ photos processed, reducing rejection rate from 18% to under 0.2%.',
          keyMetric: '<0.2% photo rejection rate',
          star: {
            situation:
              'Universities, government institutions, and test-takers routinely struggled with strict 3×4 photograph formatting and size constraints for national entrance exams.',
            task:
              'Create an automated, high-precision image processing web application and organizational API for document photo standardization.',
            action: [
              'Implemented browser-side HTML5 Canvas face-cropping, aspect-ratio enforcement, and adaptive compression.',
              'Built an organizational batch-processing REST API allowing institutional software to bulk-process thousands of student portraits.',
              'Ensured zero-upload privacy mode for individual end-users using WebAssembly and Canvas.',
            ],
            result: [
              'Adopted by educational centers to process over 20,000 entrance exam photos with 100% compliance.',
              'Reduced administrative photo rejection rates from 18% to under 0.2%.',
              'Processed photos in under 50ms per image in-browser.',
            ],
          },
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
      title: 'مهندس ارشد اندروید و سیستم‌های موبایل',
      tagline:
        'بیش از ۱۰ سال طراحی و پیاده‌سازی سیستم‌های حساس موبایل؛ از کیت احراز هویت بیومتریک برای بیش از ۲.۵ میلیون کاربر تا سخت‌افزار پوز بانکی، پروتکل‌های ISO 8583 و معماری‌های نوین Jetpack Compose.',
      badge: 'آماده همکاری در موقعیت‌های ارشد و لید',
      downloadResume: 'دانلود رزومه',
      viewProjects: 'مشاهده پروژه‌ها',
      years: 'سال سابقه',
      users: 'کاربر فعال',
      platforms: 'پلتفرم پوز',
      crashFree: 'بدون کرش',
      location: 'تهران، ایران',
      email: 'salar.taheri.mirani@gmail.com',
      linkedin: 'https://www.linkedin.com/in/salar-taheri',
      github: 'https://github.com/salartaheri',
      resumePdf: '/resume.pdf',
      summary:
        'مهندس ارشد نرم‌افزار اندروید با بیش از ۱۰ سال سابقه تخصصی در صنعت فین‌تک، پایانه‌های فروشگاهی (POS) و سامانه‌های موبایلی توزیع‌شده با مقیاس بالا. سابقه درخشان در طراحی و پیاده‌سازی SDKهای پرداخت امن، خطوط لوله احراز هویت بیومتریک با بیش از ۲.۵ میلیون کاربر فعال، و تسویه بلادرنگ تراکنش‌های بانکی مطابق با استانداردهای شاپرک (ISO 8583 و کهربا NFC). تسلط عمیق بر معماری‌های نوین اندروید (Jetpack Compose، Kotlin Coroutines & Flow، Clean Architecture، Domain-Driven Design) در کنار برقراری ارتباطات سطح پایین سخت‌افزاری (AIDL، پورت‌های سریال، پرینترهای حرارتی و کارت‌های هوشمند Java Card).',
    },
    recruiterQuickView: {
      badge: 'نمای سریع منابع انسانی',
      title: 'خلاصه اجرایی برای تیم‌های جذب و مدیران فنی',
      subtitle: 'دسترسی سریع به وضعیت همکاری، مهارت‌های کلیدی و برجسته‌ترین دستاوردها در یک نگاه.',
      availability: {
        status: 'آماده همکاری ریموت / هیبرید / رلوکیشن',
        noticePeriod: 'آماده شروع فوری / کوتاه‌مدت',
        workPreference: 'تمام‌وقت / موقعیت‌های ارشد و لید',
        location: 'تهران، ایران (امکان جابجایی)',
      },
      targetRoles: [
        'مهندس ارشد اندروید (Senior Android Engineer)',
        'معمار سیستم‌های موبایل (Mobile Systems Architect)',
        'متخصص فین‌تک و سامانه‌های پرداخت (Fintech & POS Specialist)',
        'استف مهندس موبایل (Staff Mobile Engineer)',
      ],
      highlights: [
        {
          label: 'احراز هویت بیومتریک در مقیاس ملی',
          metric: '+۲.۵ میلیون کاربر',
          description: 'توسعه کیت SDK سامانه سجام، بورس و بانک‌های مطرح کشور.',
        },
        {
          label: 'زیرساخت تراکنش‌های بانکی فین‌تک',
          metric: 'ISO 8583 و کهربا',
          description: 'پیاده‌سازی سوئیچ بانکی، تراکنش‌های بدون تماس NFC و کارت‌های هوشمند.',
        },
        {
          label: 'پایداری و مقاومت سیستم',
          metric: '۹۹.۸٪ بدون کرش',
          description: 'حفظ پایداری در سطح ناوگان ناهمگن پایانه‌های فروشگاهی (Pax، Amp، Bixolon).',
        },
      ],
      actions: {
        downloadResume: 'دانلود رزومه استاندارد (PDF)',
        copyEmail: 'کپی ایمیل',
        copied: 'در حافظه کپی شد!',
        viewLinkedin: 'پروفایل لینکدین',
        viewGithub: 'پروفایل گیت‌هاب',
      },
    },
    statsSection: {
      badge: 'شاخص‌های کلیدی',
      title: 'اثرگذاری در پروژه‌های واقعی',
      subtitle: 'یک دهه تجربه مهندسی در تقاطع فین‌تک، بیومتریک و سخت‌افزارهای پردازشی.',
      stats: [
        {
          value: 10,
          suffix: '+',
          label: 'سال سابقه کاری',
          description: 'توسعه تخصصی نرم‌افزارهای اندروید در ابعاد سازمانی',
        },
        {
          value: 2.5,
          suffix: 'M+',
          label: 'کاربر خدمت‌رسانی‌شده',
          description: 'احراز هویت بیومتریک موفق در سطح ملی',
          decimals: 1,
        },
        {
          value: 5,
          suffix: '+',
          label: 'پلتفرم سخت‌افزاری پوز',
          description: 'Pax، Amp، Bixolon و پایانه‌های متنوع بانکی',
        },
        {
          value: 99.8,
          suffix: '%',
          label: 'پایداری (Crash-Free)',
          description: 'در انواع برندها و سخت‌افزارهای ناهمگن اندروید پوز',
          decimals: 1,
        },
      ],
    },
    techStackSection: {
      badge: 'تخصص‌های فنی',
      title: 'پشته فناوری (Tech Stack)',
      subtitle: 'جعبه‌ابزاری آزموده‌شده و عمیق، حاصل بیش از ۱۰ سال برنامه‌نویسی در محیط‌های عملیاتی.',
      allTab: 'همه مهارت‌ها',
      categories: [
        {
          id: 'android',
          name: 'توسعه هسته اندروید و موبایل',
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
          name: 'فین‌تک و پایانه‌های فروشگاهی (POS)',
          icon: 'CreditCard',
          color: 'cyan',
          skills: [
            'ISO 8583',
            'JPOS',
            'سامانه کهربا (NFC بدون تماس)',
            'Java Card (Applets)',
            'پروتکل APDU',
            'Pax A920Pro SDK',
            'Amp8000 SDK',
            'پرینترهای حرارتی ESC/POS',
            'ارتباط سریال و بلوتوث',
            'کارت‌خوان‌های هوشمند چیپ/مگنت',
            'یکپارچه‌سازی PIN-pad',
          ],
        },
        {
          id: 'networking',
          name: 'شبکه و پروتکل‌های ارتباطی',
          icon: 'Network',
          color: 'blue',
          skills: [
            'Ktor Client',
            'Retrofit',
            'OkHttp',
            'WebSockets',
            'سوکت TCP خام',
            'REST APIs',
            'Protobuf',
            'Coroutines & Flow',
            'RxJava',
          ],
        },
        {
          id: 'arch',
          name: 'معماری و الگوهای طراحی',
          icon: 'Layers',
          color: 'cyan',
          skills: [
            'Clean Architecture',
            'Domain-Driven Design (DDD)',
            'MVVM',
            'MVI',
            'معماری Multi-Module Gradle',
            'تزریق وابستگی Hilt / Koin',
            'پایگاه داده Room',
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
            'CI/CD Pipelines',
            'مانیتورینگ Sentry',
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
      starLabels: {
        situation: 'بستر و شرایط مسئله (Situation)',
        task: 'ماموریت و مسئولیت فنی (Task)',
        action: 'معماری و اقدامات مهندسی (Action)',
        result: 'نتایج ملموس و دستاوردهای عددی (Result)',
      },
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
          impact: 'رسیدن به زمان پاسخ کمتر از ۲۰۰ میلی‌ثانیه و انطباق کامل با ممیزی‌های شاپرک.',
          keyMetric: 'پاسخ کمتر از ۲۰۰ میلی‌ثانیه و سوئیچ ISO 8583',
          star: {
            situation:
              'دستگاه‌های پوز هوشمند نیازمند یک کلاینت بانکی اختصاصی، مستقل و امن بودند تا تراکنش‌های مالی مختلف (خرید، مانده، شارژ، کالابرگ) را تحت استانداردهای شاپرک و در بسترهای اینترنتی پرنوسان پردازش کنند.',
            task:
              'طراحی و پیاده‌سازی کامل اپلیکیشن تراکنش بانکی از پایه، شامل انکودینگ/دیکودینگ پروتکل ISO 8583، اتصال به کارت‌خوان‌های مغناطیسی/هوشمند و پرداخت بدون تماس کهربا بر بستر NFC.',
            action: [
              'توسعه انکودر و دیکودر اختصاصی پکت‌های باینری ISO 8583 روی سوکت TCP خام با اعتبارسنجی دقیق بیت‌مپ و چکسام.',
              'یکپارچه‌سازی پروتکل کهربا شاپرک با استفاده از قابلیت Host Card Emulation (HCE) و رابط‌های بدون تماس NFC.',
              'اتصال به لایه‌های سخت‌افزاری دستگاه‌های Pax و Amp از طریق سرویس‌های AIDL برای دریافت ایمن رمز در PIN-pad و خواندن کارت‌های مگنت و هوشمند.',
              'نگارش اپلت‌های Java Card و پایپ‌لاین‌های دستورات APDU برای مدیریت چرخه حیات کارت‌های EMV و احراز هویت رمزنوشتی.',
              'طراحی معماری واکنشی آسنکرون با Kotlin Coroutines و Flow جهت ممانعت از مسدود شدن ترد کاربری در عملیات سخت‌افزاری.',
            ],
            result: [
              'کاهش زمان پاسخ‌دهی متوسط تراکنش‌ها به زیر ۲۰۰ میلی‌ثانیه به لطف بهینه‌سازی کانکشن پولینگ سوکت TCP.',
              'گذراندن موفقیت‌آمیز تمامی تست‌ها و ممیزی‌های فنی شاپرک بدون حتی یک باگ امنیتی یا ساختاری.',
              'اورکستریشن بدون تاخیر تجهیزات جانبی سخت‌افزاری روی برندهای مختلف پایانه‌های فروش.',
            ],
          },
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
          keyMetric: '+۲.۵ میلیون احراز موفق و ۳۵٪ کاهش حجم APK',
          star: {
            situation:
              'سامانه جامع اطلاعات مشتریان بازار سرمایه (سجام) و بانک‌های بزرگ کشور نیازمند فرآیندی مکانیزه، امن و نفوذناپذیر برای احراز هویت ویدئویی و تشخیص زنده‌بودن (Liveness Detection) چهره میلیون‌ها متقاضی بر روی طیف وسیعی از گوشی‌های ضعیف تا قوی بودند.',
            task:
              'طراحی و مهندسی کیت نرم‌افزاری سمت کلاینت اندروید (SDK) برای مدیریت هوشمند دوربین، هدایت کاربر، استریم بلادرنگ فریم‌ها و تله‌متری امن رمزنگاری‌شده.',
            action: [
              'مهندسی خط لوله استخراج فریم سبک با CameraX بدون تحمیل حجم اضافی کتابخانه‌های سنگین به کلاینت.',
              'پیاده‌سازی استریم فشرده ویدئو و فریم‌های تله‌متری روی بستر وب‌سوکت دائمی متصل به میکروسرویس‌های هوش مصنوعی سرور.',
              'مقاوم‌سازی امنیتی باینری SDK با قوانین سخت‌گیرانه ProGuard/R8، الگوریتم‌های تشخیص روت، شناسایی شبیه‌سازها و رمزنگاری کلیدها در Android Keystore.',
              'معماری ماژولار اینترفیس‌های عمومی جهت ادغام آسان کیت در بیش از ۲۰ اپلیکیشن بانکی و کارگزاری مطرح.',
            ],
            result: [
              'احراز هویت قطعی و رسمی بیش از ۲.۵ میلیون کاربر در سامانه‌های بورس و سیستم بانکی کشور.',
              'کاهش ۴۲ درصدی نرخ قطعی استریم ویدئو روی اینترنت‌های کم‌سرعت نسل ۳ و همراه.',
              'کاهش ۳۵ درصدی حجم باینری اپلیکیشن و دستیابی به ضریب پایداری ۹۹.۹٪ بدون کرش روی بیش از هزار مدل دستگاه.',
            ],
          },
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
          keyMetric: '+۱۰۰ هزار تراکنش روزانه و عدم از دست رفتن داده',
          star: {
            situation:
              'اجرای طرح ملی هوشمندسازی یارانه آرد و نان نیازمند پردازش مداوم، قابل‌اعتماد و بدون توقف تراکنش‌ها در محیط‌های نانوایی با قطعی‌های مکرر اینترنت و شرایط فیزیکی سخت بود.',
            task:
              'هدایت بخش نرم‌افزار کلاینت پایانه‌های فروش Pax A920Pro و Amp8000 با هدف تضمین ثبت قطعی هر تراکنش و انتقال بدون خطای مبالغ به سوئیچ مرکزی.',
            action: [
              'طراحی موتور تراکنشی آفلاین‌محور با پایگاه داده Room و لاگ‌نویسی پیش‌نگار (WAL) جهت هماهنگ‌سازی اتمیک به محض برقراری اتصال.',
              'پیاده‌سازی درایورهای ارتباطی سخت‌افزاری بر پایه پروتکل JPOS و استریم سوکت TCP برای ارتباط با سوئیچ پرداخت.',
              'ارتقای لایه‌های امنیتی باینری در برابر دستکاری فیزیکی و نرم‌افزاری و پاس کردن ممیزی‌های رسمی امنیت افتا.',
              'توسعه سرویس‌های AIDL برای راه‌اندازی سریع پرینتر حرارتی و اسکنر بارکد متصل به پایانه.',
            ],
            result: [
              'استقرار موفق روی ده‌ها هزار پایانه در کل کشور و پردازش پایدار صدها هزار تراکنش روزانه خرید نان.',
              'تضمین ۱۰۰ درصدی صحت داده‌ها بدون گم شدن حتی یک رکورد تراکنش در زمان قطعی برق یا شبکه.',
              'دریافت گواهینامه معتبر امنیتی از سازمان ملی افتّا.',
            ],
          },
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
          impact: 'صدور موفق بیش از ۵۰ هزار صورتحساب با امضای دیجیتال معتبر و تایید کامل سازمان مالیاتی.',
          keyMetric: '+۵۰ هزار فاکتور و تاییدیه ۱۰۰٪ مالیاتی',
          star: {
            situation:
              'قانون جدید مالیات بر ارزش افزوده و پایانه‌های فروشگاهی تمامی مودیان را موظف کرد فاکتورهای تجاری را با امضای دیجیتال رمزنگاری‌شده ارسال کنند، در حالی که اصناف از پرداخت هزینه‌های سنگین تجهیزات اختصاصی ناتوان بودند.',
            task:
              'معماری اپلیکیشن چندسکویی فلاتر با قابلیت اجرا روی گوشی‌های معمولی اندروید و پایانه‌های پوز هوشمند جهت صدور و ارسال مستقیم صورتحساب مالیاتی.',
            action: [
              'طراحی مدیریت وضعیت دقیق با الگوی BLoC جهت جلوگیری از خطاهای انسانی در فرم‌های پیچیده چندمرحله‌ای.',
              'پیاده‌سازی ماژول رمزنگاری کلاینت‌محور (تولید کلیدهای RSA/ECC و امضای دیجیتال داده‌ها) بر اساس دستورالعمل سازمان امور مالیاتی.',
              'تعبیه کش آفلاین پیش‌نویس‌ها در دیتابیس محلی SQLite با مکانیزم تلاش مجدد خودکار در پس‌زمینه.',
              'تولید فرمت بیت‌مپ فاکتور و ارسال مستقیم به پرینتر حرارتی دستگاه پوز با دستورات ESC/POS.',
            ],
            result: [
              'ارسال بیش از ۵۰,۰۰۰ صورتحساب قانونی موفق با پذیرش ۱۰۰ درصدی توکن‌ها در سامانه مودیان.',
              'کاهش هزینه‌های تجهیزاتی اصناف با حذف نیاز به سخت‌افزارهای گران‌قیمت جانبی.',
              'کدبیس واحد و مشترک برای استقرار بدون دردسر روی موبایل‌ها و انواع پایانه‌های هوشمند فروشگاهی.',
            ],
          },
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
          impact: 'بیش از ۵۰ هزار نصب فعال با امتیاز ۴.۷ و فریم‌ریت روان ۶۰ FPS.',
          keyMetric: '۶۰ FPS روی Canvas و حجم زیر ۱۰ مگابایت',
          star: {
            situation:
              'بسیاری از بازی‌های موبایلی در کافه‌بازار به دلیل استفاده از موتورهای سنگین (مانند یونیتی) دارای حجم‌های بسیار بالا (بیش از ۵۰ مگابایت)، زمان لودینگ طولانی و لگ شدید روی گوشی‌های ضعیف بودند.',
            task:
              'مهندسی صفر تا صد بازی با فریم‌ورک کاملاً Native اندروید بدون هیچ‌گونه موتور بازی خارجی، با هدف دستیابی به حجم بسیار اندک و فریم‌ریت پایدار ۶۰ FPS.',
            action: [
              'پیاده‌سازی اختصاصی حلقه بازی (Game Loop) و محاسبات برخورد لمسی با استفاده از 2D Canvas و ویوهای اختصاصی اندروید.',
              'استفاده بهینه از تکنیک بازیافت اشیاء (Object Pooling) و بیت‌مپ‌ها جهت جلوگیری کامل از توقف‌های Garbage Collector.',
              'طراحی انیمیشن‌های روان ذرات و افکت‌های تعاملی با Property Animatorها و ValueAnimatorهای نیتیو.',
            ],
            result: [
              'انتشار نسخه سبک با حجم کمتر از ۱۰ مگابایت در کافه‌بازار.',
              'دستیابی به نرخ فریم ثابت ۶۰ FPS بدون افت فریم حتی روی دستگاه‌های قدیمی اندروید نسخه ۵.',
              'کسب امتیاز ۴.۷ از ۵ توسط کاربران و جذب بیش از ۵۰ هزار نصب فعال.',
            ],
          },
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
          impact: 'استقرار در تمامی گشت‌های بازرسی و کاهش زمان صدور و چاپ فیش به کمتر از ۸۰۰ میلی‌ثانیه.',
          keyMetric: 'زمان چاپ کمتر از ۸۰۰ms و ۱۰۰٪ پایداری',
          star: {
            situation:
              'بازرسان میدانی سازمان مدیریت حمل‌ونقل و تاکسیرانی نیازمند ابزاری پرتابل برای ثبت سریع تخلفات و چاپ بی‌درنگ فیش روی پرینترهای حرارتی بلوتوثی بدون بهم‌ریختگی چینش فونت‌ها بودند.',
            task:
              'توسعه اپلیکیشن اندروید بازرسی با قابلیت رندرینگ آنی بیت‌مپ فیش و انتقال پایدار دیتا به پرینترهای حرارتی کمری Bixolon.',
            action: [
              'طراحی موتور اختصاصی رندرینگ درون‌حافظه‌ای با Canvas جهت تولید تصویر بیت‌مپ تک‌رنگ متناسب با محدودیت هِد حرارتی پرینتر.',
              'ارتباط مستقیم و غیرمسدودکننده با پورت سریال و بلوتوث SPP از طریق SDK بومی Bixolon با بازنشانی خودکار ارتباط در زمان قطعی.',
              'تولید خودکار کدهای بارکد و جانمایی مشخصات خودرو، بازرس و ماده تخلف در قالب پویا.',
            ],
            result: [
              'حذف کامل مشکلات بهم‌ریختگی فونت فارسی و ابعاد فیش روی مدل‌های مختلف پرینتر حرارتی.',
              'کاهش زمان چاپ فیش از ۴ ثانیه به کمتر از ۸۰۰ میلی‌ثانیه.',
              'تجهیز ۱۰۰ درصدی گشت‌های بازرسی شهری با رضایت کامل عوامل اجرایی.',
            ],
          },
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
          impact: 'امتیاز ۱۰۰/۱۰۰ در لایت‌هاوس و هزاران کاربر فعال ماهانه در حوزه لینوکس و زیرساخت.',
          keyMetric: 'امتیاز ۱۰۰/۱۰۰ لایت‌هاوس و پردازش کلاینت‌ساید',
          star: {
            situation:
              'مدیران سیستم و مهندسان زیرساخت برای تیونینگ پارامترهای پیچیده هسته لینوکس، الگوریتم‌های ازدحام BBR، تونل‌های وایرگارد و کانفیگ‌های امنیتی وب‌سرورها با چالش پیچیدگی و پراکندگی اسناد مواجه بودند.',
            task:
              'طراحی و انتشار ابزاری مدرن، سریع و دوزبانه برای تولید گرافیکی و استاندارد اسکریپت‌ها و فایل‌های پیکربندی با تضمین حریم خصوصی کامل کاربران.',
            action: [
              'توسعه وب‌اپلیکیشن فوق‌سریع با React، Vite، Tailwind CSS و Framer Motion با پشتیبانی دقیق از چیدمان‌های RTL و LTR.',
              'برنامه‌نویسی موتور هوشمند محاسبه‌گر ساب‌نت‌های شبکه (CIDR) و تنظیمات بهینه بافرهای TCP بر پایه پهنای باند و تاخیر (BDP).',
              'تولید خودکار اسکریپت اجرایی bash همراه با توضیحات فارسی/انگلیسی جهت سهولت اجرا در سرورها.',
              'استقرار روی لبه شبکه جهانی کلودفلر (Cloudflare Pages) با زمان لود کمتر از ۱۰۰ میلی‌ثانیه.',
            ],
            result: [
              'استفاده مستمر هزاران مهندس دوآپس و کارشناس شبکه در ماه.',
              'اجرای ۱۰۰ درصدی محاسبات در مرورگر کاربر (Zero-Data-Leakage) با بالاترین ضریب امنیت و حریم خصوصی.',
              'کسب امتیاز درخشان ۱۰۰ از ۱۰۰ در تست‌های کارایی و سئوی Google Lighthouse.',
            ],
          },
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
          title: 'سامانه هوشمند استانداردسازی عکس پرسنلی ویرا',
          tagline: 'وب‌سرویس و ابزار پردازش هوشمند تصویر برای استانداردسازی تصاویر مدارک اداری.',
          period: '۱۴۰۳',
          categories: ['وب‌اپلیکیشن', 'پردازش تصویر', 'سرویس ابری سازمانی'],
          filter: ['web', 'apps'],
          impact: 'پردازش بیش از ۲۰,۰۰۰ تصویر مدارک و کاهش نرخ خطای بارگذاری عکس از ۱۸٪ به کمتر از ۰.۲٪.',
          keyMetric: 'کاهش خطای بارگذاری از ۱۸٪ به زیر ۰.۲٪',
          star: {
            situation:
              'متقاضیان کنکور سراسری، آزمون‌های استخدامی و ثبت‌نام دانشگاه‌ها همواره با خطاهای عدم تطابق ابعاد (۳×۴)، حجم بالا یا فرمت نامعتبر عکس‌های پرسنلی مواجه شده و زمان زیادی از پرسنل ثبت‌نام تلف می‌شد.',
            task:
              'پیاده‌سازی ابزاری آنلاین و کم‌حجم جهت برش دقیق خودکار، تطبیق چهره، حذف نویز و فشرده‌سازی استاندارد عکس بدون افت کیفیت چهره.',
            action: [
              'استفاده از الگوریتم‌های پردازش تصویر در مرورگر بر بستر Canvas API بدون نیاز به آپلود اولیه عکس به سرور و تضمین امنیت اطلاعات.',
              'ارائه وب‌سرویس REST برای اتصال اتوماسیون‌های ثبت‌نام مراکز آموزشی به منظور پردازش دسته‌ای هزاران مدرک پرسنلی.',
              'بهینه‌سازی ویژه برای گوشی‌های هوشمند جهت برش و آماده‌سازی عکس با دوربین موبایل.',
            ],
            result: [
              'پردازش موفق بیش از ۲۰ هزار تصویر برای متقاضیان و ثبت‌نام‌کنندگان بدون نقص فنی.',
              'کاهش چشمگیر نرخ ریجکت تصویر مدارک از ۱۸ درصد به کمتر از ۰.۲ درصد در سامانه‌های مقصد.',
              'پردازش آنی هر تصویر در کمتر از ۵۰ میلی‌ثانیه بر روی دستگاه کاربر.',
            ],
          },
          problem:
            'سازمان‌ها و متقاضیان با فرآیند خسته‌کننده تنظیم دستی ابعاد و حجم عکس‌های ۳×۴ طبق استانداردهای سامانه‌های آزمون سراسری دست‌به‌گریبان بودند.',
          solution: [
            'توسعه اپلیکیشن React که تبدیل فرمت و فشرده‌سازی را کاملاً در مرورگر انجام می‌دهد بدون نیاز به آپلود سمت سرور.',
            'توسعه وب‌سرویس سازمانی برای پردازش دسته‌ای تصاویر پرسنلی جهت اتصال به سامانه‌های دانشگاهی.',
            'استفاده از قلم بومی وزیرمتن برای هماهنگی کامل در سیستم‌های قدیمی و آفلاین.',
            'طراحی تجربه کاربری متمرکز بر موبایل جهت پردازش مستقیم تصاویر گرفته‌شده با گوشی.',
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
      subtitle: 'از سال ۱۳۹۵ تا امروز — فعالیت در تلاقی مهندسی سیستم‌های موبایل، فین‌تک و تجهیزات پردازشی.',
      current: 'مشغول به کار',
      timeline: [
        {
          id: 'avaparsi',
          company: 'آواپارسی (AvaParsi)',
          role: 'مهندس ارشد اندروید',
          period: 'اسفند ۱۴۰۱ – اکنون',
          location: 'تهران، ایران',
          current: true,
          highlights: [
            'معماری کلاینت اندرویدی نرم‌افزار جامع پایانه‌های فروشگاهی ویژه هایپرمارکت‌ها و رستوران‌ها با Room Database و کشینگ چندلایه محلی جهت جستجوی بدون تاخیر کالاها.',
            'توسعه سامانه صدور صورتحساب مالیاتی امن‌پرداز در محیط فلاتر برای ارسال مستقیم و امضاشده فاکتورهای مودیان از طریق پایانه‌های پوز هوشمند و موبایل.',
            'طراحی فرآیند مدیریت صف و صدور فیش با اتصال به ترازوهای دیجیتال، بارکدخوان و چاپگرهای حرارتی از طریق پروتکل‌های سریال و AIDL.',
            'هدایت فرآیند ریفکتورینگ معماری به سمت Domain-Driven Design (DDD) و بسته‌بندی ماژولار با ضریب پایداری ۹۹.۸٪ بدون کرش در انواع پوزها.',
          ],
        },
        {
          id: 'omidpay',
          company: 'امیدپی (Omidpay)',
          role: 'توسعه‌دهنده اندروید — فین‌تک و پوز بانکی',
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
  title: 'Salar Taheri — Senior Android & Mobile Systems Engineer',
  description:
    'Senior Android & Mobile Systems Engineer with 10+ years building fintech SDKs, biometric eKYC pipelines (2.5M+ users), and ISO 8583 POS payment systems.',
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
