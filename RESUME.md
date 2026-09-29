# Salar Taheri
**Senior Android & Mobile Systems Engineer**

- **Email:** [salar.taheri.mirani@gmail.com](mailto:salar.taheri.mirani@gmail.com)
- **LinkedIn:** [linkedin.com/in/salar-taheri](https://linkedin.com/in/salar-taheri)
- **GitHub:** [github.com/salartaheri](https://github.com/salartaheri)
- **Location:** Tehran, Iran (Open to Relocation / Remote)

---

## Professional Summary

Senior Android & Mobile Systems Engineer with over **10 years of production engineering experience** specializing in Fintech architectures, Android POS hardware integration, low-level systems communication, and high-scale enterprise ecosystems. Proven track record architecting mission-critical biometric eKYC pipelines serving **2.5M+ active users**, secure payment SDKs processing **100k+ daily transactions**, and real-time transaction processing strictly compliant with central banking standards (ISO 8583, Shaparak Kehroba contactless NFC — EMV / Apple Pay equivalent protocol). Deep expertise spanning modern Android engineering (Jetpack Compose, Kotlin Coroutines & Flow, Clean Architecture, Domain-Driven Design) and low-level peripheral systems (C/C++ via JNI/NDK, AIDL, serial/RS232/USB SPP protocols, APDU, Java Card applets). Proven technical leader adept at establishing CI/CD automation, setting code review standards, mentoring engineers, and leveraging AI-assisted engineering workflows (Cursor, Copilot, LLM tooling) to accelerate prototyping, automate unit testing, and eliminate boilerplate.

### Key Impact Metrics
- **10+ Years** Production Engineering Experience
- **2.5M+ Active Users** Authenticated via Biometric eKYC SDK
- **99.8% Crash-Free Rate** Sustained across 1,000+ Fragmented POS Device Models
- **<200ms Transaction Latency** Achieved via ISO 8583 Asynchronous TCP Socket Pooling
- **100k+ Daily Transactions** Handled on National Retail Infrastructure (Nanino Platform)
- **50k+ Tax Invoices** Submitted to National Tax Authority with 100% Acceptance

---

## Technical Skills

- **Languages:** Kotlin, Java, C/C++ (JNI / NDK), Dart, SQL, Bash
- **Android Core & Systems:** Android SDK, Jetpack Compose, View System & 2D Canvas, AIDL, Host Card Emulation (HCE), CameraX, Navigation Component, Material Design 3, Linux Kernel Tuning, In-Memory Bitmap Rendering
- **Architecture & Concurrency:** Clean Architecture, Domain-Driven Design (DDD), MVVM, Multi-Module Gradle, Kotlin Coroutines, Kotlin Flow, RxJava, Asynchronous Thread Pooling, Memory & GC Pause Optimization
- **Fintech & Hardware Protocols:** ISO 8583, JPOS, Shaparak Kehroba (NFC Contactless / EMV Equivalent), Java Card (Applets), APDU Protocol, Pax & Amp POS SDKs, ESC/POS Thermal Printers, Serial / RS232 / USB / Bluetooth SPP, Smart Card (IC) Readers, PIN-pad Integration
- **Networking & Data:** Asynchronous TCP Sockets, WebSockets, Ktor Client, Retrofit, OkHttp, REST APIs, Protocol Buffers (Protobuf), Room Database, SQLite, DataStore, Hilt, Koin
- **Testing, QA & Mocking:** JUnit 5, MockK, Robolectric, Turbine, Hardware-in-the-Loop (HIL) Emulation, Mock TCP & APDU Sockets, Simulated Peripheral Drivers, End-to-End Payment Integration Testing
- **Security, DevOps & AI Tooling:** Android Keystore, Anti-Tamper / Root & Hook Detection, ProGuard / R8 Obfuscation, CI/CD (GitHub Actions), Docker, Git, Linux, Sentry, AI-Assisted Development (Cursor, GitHub Copilot, Claude/Gemini API Tooling), Prompt Engineering for Automated Testing & Scaffolding, AI Agent Workflows

---

## Professional Experience

### Senior Android Developer | AvaParsi
*Mar 2023 – Present · Tehran, Iran*
*(Enterprise Retail & Smart POS Solutions)*

- **Offline-First POS Architecture & Memory Tuning:** Architected and scaled an offline-first Android POS application for enterprise supermarkets and restaurants, utilizing Room Persistence, multi-tier in-memory caching, and GC pause optimization to handle 50k+ product catalogs with zero-latency lookups.
- **Cryptographic Tax Compliance System:** Engineered the AmnPardaz Electronic Invoicing System in Flutter/Android, enabling corporate merchants to submit cryptographically signed tax invoices to the national tax authority via smart POS terminals and smartphones (**50k+ invoices submitted with 100% acceptance**).
- **Hardware Integration & AIDL:** Designed robust queue management and ticketing workflows by interfacing directly with digital weight scales, barcode scanners, and ESC/POS thermal receipt printers via AIDL, USB SPP, and RS232 serial protocols.
- **Hardware-in-the-Loop (HIL) Emulation & Mock Sockets:** Built simulated serial drivers and mock APDU/TCP server environments, enabling engineers to test peripheral responses and transaction sequences in CI/CD without physical POS devices, increasing automated test coverage by 40%.
- **DDD Architecture & Cross-Vendor Stability:** Led architectural refactoring toward Domain-Driven Design (DDD) and modular multi-module Gradle packaging, sustaining a **99.8% crash-free rate** across fragmented Android POS device vendors (Pax, Amp, Newpos, Centerm).
- **Engineering Leadership & AI Workflows:** Mentored junior and mid-level engineers on Kotlin Coroutines, reactive Flow pipelines, and Clean Architecture standards; integrated AI-assisted workflows (Cursor, Copilot) to accelerate unit test scaffolding and boilerplate elimination.

---

### Android Developer (Fintech & POS) | Omidpay
*Sep 2022 – Mar 2023 · Tehran, Iran*
*(Major Banking Payment Service Provider - PSP)*

- **Low-Level Banking Transaction SDKs:** Engineered low-level banking SDKs for Android smart POS terminals (Pax A920Pro, Amp8000), implementing direct communication layers for magnetic stripe cards, EMV smart IC cards, and hardware-secured PIN-pads.
- **ISO 8583 Protocol & Sub-200ms Clearance:** Implemented strict ISO 8583 message encoders/decoders, JPOS standards, and asynchronous TCP socket streaming, optimizing network buffers and thread pools to achieve **sub-200ms latency** for interbank transaction clearance.
- **Nanino Smart Bakery Platform:** Shipped the Android POS client for the Nanino platform—a nationwide smart bakery retail transaction infrastructure—powering thousands of merchants to process **100k+ daily transactions** with zero data loss.
- **Automated Socket & APDU Mock Testing:** Built automated mock TCP socket suites and APDU response emulators with JUnit 5 and Robolectric to validate ISO financial messaging and edge-case network dropouts in CI pipelines without physical POS hardware.
- **Cybersecurity Hardening & Certification:** Hardened payment binaries with anti-hooking/anti-tamper detection, native C/C++ checks, and Android Keystore encryption, successfully passing rigorous banking security audits by the National Cybersecurity Certification Body (AFTA).
- **OEM & Cross-Functional Collaboration:** Partnered closely with hardware OEMs (Pax, Amp) to resolve low-level firmware quirks and collaborated with backend architects to streamline financial switch payloads.

---

### Android Developer | UID
*Sep 2018 – Sep 2022 · Tehran, Iran*
*(National eKYC & Biometric Identity Verification Platform)*

- **National-Scale Biometric eKYC SDK:** Engineered the core client SDK for Iran's premier digital identity verification platform, enabling automated liveness detection, AI-driven facial verification, and real-time video streaming over WebSockets for **2.5M+ active users** across major banks and national capital market onboarding (Sejam).
- **Architecture Modernization & Performance:** Spearheaded legacy codebase refactoring from Java/MVP to Kotlin/MVVM and Coroutines, reducing APK footprint by **35%**, optimizing memory allocation, and drastically cutting external runtime dependencies.
- **Biometric Security & Obfuscation:** Configured custom ProGuard/R8 bytecode obfuscation rules, anti-hooking detection, and Android Keystore payload encryption to protect biometric telemetry in transit and at rest.
- **Developer Integration Experience:** Authored developer documentation, integration SDK samples, and sandbox harnesses, accelerating enterprise client integration across 30+ financial institutions.

---

### Android Developer | Freelance (Softwaria / Varna Marlik)
*2016 – 2018 · Iran*

- **Municipal Fleet Dispatch & Printing Engine:** Built the Tonekabon Municipal Taxi System featuring an in-memory 2D Canvas rendering engine streaming dynamic receipts as bitmaps over Bluetooth/Serial SPP to Bixolon thermal printers (**<800ms print latency, 100% field adoption**).
- **Native 2D Canvas Game Engine:** Designed and shipped *Dolme* — a native Persian puzzle game on CafeBazaar (regional Android marketplace with 40M+ active users) with 60 FPS gameplay via custom Canvas Views and animation loops without third-party game engines (**50k+ downloads, 4.7/5 rating**).
- **Commercial Mobile Solutions:** Built and deployed on-demand food ordering, classifieds, and developer utility applications for regional commercial clients.

---

## Featured Projects

### Android POS Banking & Kehroba Contactless System
*Sep 2024 – Mar 2025*
- Independently architected and implemented a complete banking application for smart POS terminals.
- Implemented ISO 8583 binary protocol over raw TCP sockets, Java Card APDU smart card authorization, and contactless NFC transactions via Host Card Emulation (HCE) compliant with Shaparak Kehroba (*National Central Bank contactless payment scheme, EMV / Apple Pay equivalent protocol*).
- Achieved sub-200ms transaction clearance latency and 100% central banking certification compliance.

### LinuxNetwork.ir — Linux Network & Kernel Tuning Toolbox
*2025*
- High-performance bilingual web engineering toolbox (React, TypeScript, Tailwind CSS) for Linux kernel tuning (`sysctl`, BBR TCP congestion control), WireGuard VPN configuration, and CIDR subnet calculation.
- 100/100 Google Lighthouse score, sub-100ms edge delivery via Cloudflare Pages, serving thousands of monthly DevOps and systems engineers.

### Vira — Smart Document Image Processing Service
*2025*
- Intelligent client-side document photo normalization platform built with HTML5 Canvas and Web Workers.
- Processed 20,000+ applicant photos for institutional admission portals, dropping application rejection rates from 18% to <0.2% (<50ms in-browser latency, zero server upload privacy guarantee).

---

## Education

**Bachelor of Science (B.Sc.) in Software Engineering**  
University of Guilan, Iran · *2013 – 2018*

---

## Certifications & Compliance

- **National Cybersecurity Compliance (AFTA):** Certified secure payment application development, cryptographic key management, and anti-tamper hardening for banking POS terminals.
- **Central Banking Payment Standards:** Verified implementation of Shaparak Kehroba contactless NFC payment protocol and ISO 8583 banking switch integrations.

---

## Languages

- **English:** Professional Working Proficiency (Technical Documentation, Team Collaboration)
- **Persian:** Native
