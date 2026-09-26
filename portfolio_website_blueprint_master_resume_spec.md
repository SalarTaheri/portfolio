# Project Specification: Personal Developer Portfolio & Master Resume
**Target Role:** Senior Android & Embedded POS Engineer  
**Candidate Name:** Salar Taheri  
**Primary Goal:** Build a high-performance, modern developer portfolio website showcasing 10+ years of engineering experience, fintech/hardware integrations, and enterprise mobile solutions, with a streamlined resume preview and download pipeline.

---

## 1. Executive Identity & Core Brand

* **Full Name:** Salar Taheri
* **Professional Headline:** Senior Android & Embedded POS Engineer
* **Location:** Tehran, Iran
* **Contact:**
  * Email: `salar.taheri.mirani@gmail.com`
  * LinkedIn: `https://www.linkedin.com/in/salar-taheri`
  * GitHub: `https://github.com/salartaheri`
* **Value Proposition:** 10+ years building mission-critical Android solutions, low-level POS hardware architectures (ISO 8583, Shaparak Kehroba NFC), biometric eKYC SDKs powering 2.5M+ active users, and high-performance cross-platform enterprise tools.

---

## 2. Master Clean Resume Data (Single Source of Truth)

### Professional Summary
> Senior Android Developer with over 10 years of software engineering experience specializing in Fintech, Android POS hardware integration, and high-scale enterprise applications. Demonstrated track record in developing secure payment SDKs, biometric eKYC pipelines serving 2.5M+ users, and real-time transaction processing compliant with national central banking standards (ISO 8583, Shaparak Kehroba contactless NFC). Proven mastery of modern Android architectures (Jetpack Compose, Kotlin Coroutines & Flow, Clean Architecture, Domain-Driven Design) combined with low-level peripheral communication (AIDL, serial/thermal printers, smart card readers).

---

### Work Experience

#### 1. Senior Android Developer — AvaParsi
* **Duration:** March 2023 – Present
* **Location:** Tehran, Iran
* **Key Achievements & Impact:**
  * **Retail & POS Cashier Ecosystem:** Architected and scaled an offline-first Android POS application for supermarkets and restaurants, utilizing **Room Persistence** and multi-tier local caching to manage large product catalogs with zero-latency lookups.
  * **AmnPardaz Electronic Invoicing System:** Engineered a comprehensive tax reporting application in **Flutter** enabling corporate merchants to submit digital invoices directly to the national tax authority via smart POS terminals and Android smartphones.
  * **Hardware & Peripherals Orchestration:** Designed queue management and ticketing workflows by interfacing with weight scales, barcode scanners, and thermal receipt printers via **AIDL** and serial protocols.
  * **Stability & Architecture:** Led the architectural refactoring toward **Domain-Driven Design (DDD)** and modular packaging, sustaining a 99.8% crash-free rate across fragmented Android POS device vendors.

#### 2. Android Developer (Fintech & POS) — Omidpay
* **Duration:** September 2022 – March 2023
* **Location:** Tehran, Iran
* **Key Achievements & Impact:**
  * **Core Payment SDK:** Developed low-level banking transaction SDKs for Android smart POS terminals (Pax A920Pro, Amp8000), supporting magnetic stripe cards, smart IC cards, and secure PIN-pad interaction.
  * **Banking Switch Protocols:** Implemented strict **ISO 8583** protocol decoders/encoders, JPOS standards, and low-level asynchronous **TCP Socket** streaming for high-reliability interbank transaction clearance.
  * **Nationwide Subsidies (Nanino Platform):** Delivered the Android POS client for the **Nanino Smart Bakery Platform**, empowering thousands of bakeries across the country to execute government-subsidized bread transactions at massive scale.
  * **Cybersecurity Compliance:** Hardened payment applications against tampering, reverse-engineering, and cryptographic injection, successfully passing national cybersecurity audits (AFTA).

#### 3. Android Developer — UID
* **Duration:** September 2018 – September 2022
* **Location:** Tehran, Iran
* **Key Achievements & Impact:**
  * **eKYC Biometric SDK:** Engineered the core client SDK for Iran's premier digital identity verification platform, enabling automated liveness detection, AI-driven facial verification, and real-time video streaming over **WebSockets** and REST APIs for **2.5M+ active users** across major banks and brokerage firms (Sejam).
  * **System Modernization:** Spearheaded legacy refactoring from Java/MVP to **Kotlin/MVVM**, reducing APK footprint by 35% and drastically reducing external runtime dependencies.
  * **Security Hardening:** Configured custom **ProGuard/R8** obfuscation rules, anti-hooking detection, and secure keystore operations to protect biometric payloads in transit and at rest.

#### 4. Android Developer — Freelance & Early Projects (Softwaria / Varna Marlik)
* **Duration:** 2016 – 2018
* **Key Achievements & Impact:**
  * **Tonekabon Municipal Taxi Receipt System (Softwaria):** Developed a violation management mobile client; built an in-memory Canvas rendering engine to draw dynamic receipts and stream them as high-speed bitmaps over Bluetooth/Serial to **Bixolon thermal printers**.
  * **Dolme Word Puzzle Game:** Designed and shipped a native Persian puzzle game on CafeBazaar; achieved smooth 60 FPS gameplay by engineering custom Canvas Views and animation loops completely natively without external game engines.
  * **Consumer Applications (Varna Marlik):** Designed, built, and deployed on-demand food ordering (**Kababe Nab**), classifieds and e-commerce (**Taj**), and developer utility applications.

---

### Technical Skills Matrix

| Category | Skills & Technologies |
| :--- | :--- |
| **Languages** | Kotlin, Java, Dart, SQL, Bash |
| **Android Core & UI** | Jetpack Compose, Android SDK, View System, Custom Views & 2D Canvas, AIDL, Navigation Component, Material Design 3 |
| **Architecture** | Clean Architecture, Domain-Driven Design (DDD), MVVM, MVI, Multi-Module Gradle Architecture |
| **Concurrency & Async** | Kotlin Coroutines, Kotlin Flows, RxJava, Thread Pooling |
| **Networking & Protocols** | Ktor Client, Retrofit, OkHttp, WebSockets, TCP Sockets, REST APIs, Protobuf |
| **Fintech & Hardware** | ISO 8583, JPOS, Shaparak Kehroba (NFC Contactless), Android POS SDKs (Pax, Amp), ESC/POS Thermal Printers, CameraX / Camera API |
| **Data & Dependency Injection** | Room Database, SQLite, DataStore, Hilt, Koin |
| **DevOps, Security & Tools** | Git, ProGuard/R8, Sentry, Linux Environment, Docker, CI/CD Basics |

---

### Education
* **Bachelor of Science in Software Engineering**  
  * University of Guilan, Iran (2013 – 2018)

### Languages
* **Persian:** Native  
* **English:** Professional Working Proficiency  

---

## 3. Portfolio Case Studies (Structured for Web Display)

Use these rich case study blocks to populate project cards or dedicated modal pages on the portfolio website:

### Project 1: Android POS Banking & Kehroba Contactless System
* **Tagline:** Independent full-featured banking transaction app for smart POS terminals.
* **Category:** `Fintech` | `Embedded Android` | `NFC`
* **Period:** Sep 2024 – Mar 2025
* **Problem:** Implementing low-latency, tamper-proof banking operations (purchase, balance inquiry, mobile recharge, food vouchers/Kala Barg) while conforming to stringent central banking protocols.
* **Engineering Solution:**
  * Implemented ISO 8583 message packing/unpacking over raw TCP sockets.
  * Integrated **Kehroba protocol** enabling contactless payment via mobile NFC conforming to Shaparak standards.
  * Communicated with hardware magnetic and IC chip readers through vendor AIDL services.
* **Stack:** Kotlin, ISO 8583, NFC, AIDL, Coroutines, Jetpack Compose.

### Project 2: UID Biometric eKYC SDK
* **Tagline:** First-of-its-kind digital identity authentication pipeline in Iran.
* **Category:** `SDK Development` | `Biometrics` | `High Scale`
* **Impact:** 2.5M+ active users verified (National Stock Exchange/Sejam & Banking).
* **Problem:** Capturing high-reliability biometric video streams on diverse low-end to high-end Android hardware while preventing spoofing and man-in-the-middle attacks.
* **Engineering Solution:**
  * Engineered a lightweight SDK using CameraX with minimal binary overhead.
  * Built real-time video and telemetry frame streaming over persistent WebSockets.
  * Hardened client binaries using ProGuard/R8 and runtime environment integrity checks.
* **Stack:** Kotlin, CameraX, WebSockets, REST, ProGuard, Keystore API.

### Project 3: Nanino Nationwide Smart Bakery POS Platform
* **Tagline:** Core client POS infrastructure for government flour subsidy distribution.
* **Category:** `Fintech` | `Gov-Tech` | `Large-Scale POS`
* **Impact:** Active across thousands of bakeries nationally, managing hundreds of thousands of daily transactions.
* **Problem:** Ensuring high transaction throughput in harsh retail environments with intermittent connectivity.
* **Engineering Solution:**
  * Implemented resilient offline/online synchronization with atomic transaction logging.
  * Integrated payment switch drivers (Pax A920Pro / Amp8000) using JPOS and TCP Sockets.
* **Stack:** Java/Kotlin, JPOS, TCP Sockets, Room Database, POS Terminal SDKs.

### Project 4: AmnPardaz Electronic Invoicing System
* **Tagline:** Cross-platform tax compliance tool for retail and corporate merchants.
* **Category:** `Cross-Platform` | `Enterprise` | `POS`
* **Problem:** Businesses needed a fast way to issue standardized invoices compliant with the national tax agency without purchasing expensive specialized hardware.
* **Engineering Solution:**
  * Developed a cross-platform client with Flutter deployed on both standard smartphones and smart POS hardware.
  * Implemented local cryptographic signature generation for invoice payloads.
* **Stack:** Flutter, Dart, BLoC, REST API, SQLite.

### Project 5: Dolme Native Word Game
* **Tagline:** Lightweight Persian word puzzle game published on CafeBazaar.
* **Category:** `Mobile Game` | `Native Performance` | `Creative UI`
* **Problem:** Achieving high-performance animations and responsive touch interactions without the heavy APK size or memory footprint of game engines like Unity.
* **Engineering Solution:**
  * Handcrafted game loops, touch detection, and particle animations natively using custom Android Views and 2D Canvas rendering at consistent 60 FPS.
* **Stack:** Native Kotlin/Java, Custom Canvas Views, Android Property Animators.

### Project 6: Tonekabon Municipal Taxi Ticketing System
* **Tagline:** Field inspection and instant thermal receipt printing suite.
* **Category:** `IoT` | `Embedded Hardware` | `Field Operations`
* **Problem:** Field inspectors required immediate violation receipt printing onto portable battery-operated thermal printers without layout distortions.
* **Engineering Solution:**
  * Built a dynamic Canvas renderer generating crisp custom rasterized bitmaps matching Bixolon ESC/POS printer print-head constraints.
* **Stack:** Android SDK, Canvas Bitmap Rendering, Bluetooth/Serial API, Bixolon SDK.

---

## 4. Website Architecture & UX Blueprint

### Recommended Tech Stack for the Website
* **Framework:** Next.js (App Router) OR Astro (Static Site Generation for hyper-speed)
* **Styling:** Tailwind CSS (Modern Dark Mode with subtle glowing gradients)
* **Animation:** Framer Motion (smooth scroll reveals, interactive cards)
* **Icons:** Lucide React / FontAwesome 6
* **Hosting:** Cloudflare Pages, Vercel, or GitHub Pages
* **SEO & Metadata:** OpenGraph tags, JSON-LD Schema (Person & SoftwareSourceCode), downloadable PDF linked in `/public/resume.pdf`.

### Visual Theme & Aesthetics
* **Background:** Deep dark slate / carbon `#0B0F19` with subtle mesh grid patterns.
* **Accent Colors:** Electric Blue (`#2563EB` / `#3B82F6`) and Cyan (`#06B6D4`) representing engineering precision and fintech trustworthiness.
* **Typography:** Clean sans-serif (Inter, Geist, or Plus Jakarta Sans) paired with a monospace font (JetBrains Mono or Fira Code) for technical tags and code snippets.

### Page Sections Flow (Single-Page Layout)

```
[ Navbar: Logo/Name | Projects | Experience | Stack | Contact | "Download CV" CTA ]
                                  ↓
[ Hero Section: Headline + Value Proposition + Quick Stats + Action Buttons ]
                                  ↓
[ Impact Highlights: Counter cards (+10 Yrs, 2.5M+ Users, 5+ POS Hardware Architectures) ]
                                  ↓
[ Interactive Tech Stack: Grouped by Domain (Mobile, Fintech, Network, Tools) ]
                                  ↓
[ Featured Projects Grid: Filterable (All, Fintech & POS, SDKs, Apps) with modal case studies ]
                                  ↓
[ Interactive Career Journey: Timeline from 2016 to Present ]
                                  ↓
[ Resume Preview / PDF Download Card: Instant preview and direct download ]
                                  ↓
[ Contact Section & Footer: Direct Email, LinkedIn, GitHub, Location ]
```

---

## 5. Structured Data & Code Blueprint for Antigravity

Antigravity can ingest the following JSON structure directly to generate the portfolio data layers:

```json
{
  "profile": {
    "name": "Salar Taheri",
    "title": "Senior Android & Embedded POS Engineer",
    "yearsOfExperience": "10+",
    "location": "Tehran, Iran",
    "email": "salar.taheri.mirani@gmail.com",
    "linkedin": "https://www.linkedin.com/in/salar-taheri",
    "github": "https://github.com/",
    "stats": [
      { "label": "Years Experience", "value": "10+" },
      { "label": "Users Impacted", "value": "2.5M+" },
      { "label": "Supported POS Platforms", "value": "5+" },
      { "label": "Crash-Free Rate", "value": "99.8%" }
    ]
  },
  "skillCategories": [
    {
      "name": "Android & Mobile Core",
      "skills": ["Jetpack Compose", "Kotlin", "Java", "Coroutines & Flow", "Clean Architecture", "DDD", "Flutter"]
    },
    {
      "name": "Fintech & Embedded POS",
      "skills": ["ISO 8583", "Shaparak Kehroba (NFC)", "JPOS", "AIDL", "Pax/Amp SDKs", "Thermal Printers (ESC/POS)"]
    },
    {
      "name": "Networking & Protocols",
      "skills": ["Ktor", "Retrofit", "WebSockets", "TCP Sockets", "Protobuf", "REST APIs"]
    },
    {
      "name": "Data, Security & Tools",
      "skills": ["Room DB", "Hilt / Koin", "ProGuard / R8", "Docker", "Linux", "Git", "Sentry"]
    }
  ]
}
```

---

## 6. Antigravity Prompt / Execution Command

To instruct Antigravity to build this website, feed it this specification file alongside your resume with the following command:

> *"Please use `portfolio_and_resume_spec.md` as the complete technical specification to build my personal portfolio website. Implement a clean, modern dark-themed web app using Tailwind CSS and responsive design. Ensure the Featured Projects, Career Timeline, and Tech Stack accurately reflect my Senior Android & POS specialization, and wire up a functional 'Download Resume' button linking directly to my updated CV PDF."*