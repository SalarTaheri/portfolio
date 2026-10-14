# Salar Taheri
**Senior Android & Mobile Systems Engineer**

- **Email:** [salar.taheri.mirani@gmail.com](mailto:salar.taheri.mirani@gmail.com)
- **Website:** [salar.miranmahaleh.ir](https://salar.miranmahaleh.ir)
- **LinkedIn:** [linkedin.com/in/salar-taheri](https://linkedin.com/in/salar-taheri)
- **GitHub:** [github.com/SalarTaheri](https://github.com/SalarTaheri)
- **Location:** Tehran, Iran (Open to International Remote & Relocation)

---

## Professional Summary

Senior Android & Mobile Systems Engineer with **10+ years** of production experience architecting high-throughput fintech applications, embedded Smart POS systems, and national-scale mobile SDKs. Proven track record delivering biometric eKYC pipelines serving **2.5M+ active users**, payment SDKs processing **100,000+ daily transactions** at **<200ms latency** (ISO 8583, EMV Contactless / NFC HCE), and sovereign MQTT/ActiveMQ telemetry managing **10,000+ payment terminals** without Google Play Services. Deep expertise across modern Android (**Kotlin, Jetpack Compose, Coroutines/Flow, Clean Architecture, DDD**) and low-level hardware drivers (**C/C++ NDK, AIDL, Java Card APDU, RS232/USB SPP**), paired with Dockerized hardware-in-the-loop (HIL) CI/CD automation and technical mentorship.

### Key Impact Metrics
- **10+ Years** Production Engineering Experience across Android, Fintech & Embedded POS Systems
- **2.5M+ Active Users** Authenticated via National Biometric eKYC SDK
- **10,000+ Active POS Terminals** Monitored in Real Time via GMS-Free ActiveMQ Telemetry
- **99.8% Crash-Free Stability** Sustained across 1,000+ Mobile & Multi-Vendor POS Models
- **<200ms Latency** Interbank Transaction Clearance over Pooled ISO 8583 TCP Sockets
- **100,000+ Daily Transactions** Processed Nationwide on Subsidized Bakery POS Infrastructure (Zero Data Loss)

---

## Technical Skills

- **Languages & Core Mobile:** Kotlin, Java, C/C++ (JNI / NDK), Dart (Flutter), SQL, Bash, Jetpack Compose, Android SDK, Custom 2D Canvas & Bitmap Rendering, Material Design 3, CameraX
- **Architecture & Concurrency:** Clean Architecture, Domain-Driven Design (DDD), MVVM / MVI, Multi-Module Gradle, Kotlin Coroutines & Flow, RxJava, Hilt / Koin DI, Memory & GC Pause Tuning
- **Fintech, POS & Hardware Protocols:** ISO 8583 Binary Protocol, EMV Contactless & NFC HCE (Shaparak Kehroba), JPOS, Java Card (APDU / ARQC), AIDL Drivers, Smart POS SDKs (Pax, Amp, Newpos), ESC/POS Thermal Printers, Serial (RS232 / USB / Bluetooth SPP)
- **Networking, Messaging & Data:** Raw Async TCP Socket Pooling, Apache ActiveMQ (MQTT / STOMP), Full-Duplex WebSockets, Ktor, Retrofit/OkHttp, Protobuf, Room DB (SQLite WAL), DataStore, Offline-First Sync
- **Security, Testing & DevOps:** Android Keystore (TEE), ProGuard/R8 Obfuscation, Anti-Tamper & Root/Frida Detection, AFTA (PCI-PTS Equivalent) Hardening, JUnit 5, MockK, Robolectric, Turbine, Docker HIL Socket Mocking, GitHub Actions CI/CD, Linux Kernel Tuning (TCP BBR)

---

## Professional Experience

### Senior Android Engineer | AvaParsi
*Mar 2023 – Present · Tehran, Iran (Full-Time)*  
*(Enterprise Retail & Smart POS Solutions)*

- **Offline-First Retail POS Architecture:** Architected an offline-first Android POS platform for enterprise supermarkets and restaurants using Kotlin, Jetpack Compose, and Room (SQLite WAL) with multi-tier in-memory caching and GC pause tuning, delivering **sub-10ms catalog lookups** across **50,000+ SKUs**.
- **Multi-Vendor DDD Modularization:** Led the architectural migration from a monolithic codebase to Domain-Driven Design (DDD) across multi-module Gradle packages, sustaining a **99.8% crash-free rate** across fragmented Android POS vendors (Pax, Amp, Newpos, Centerm).
- **Hardware-in-the-Loop (HIL) CI Automation:** Containerized mock TCP/APDU socket servers and simulated serial peripheral drivers in Docker, enabling automated end-to-end payment and hardware testing in CI/CD without physical POS devices and expanding test coverage by **40%**.
- **Peripheral Driver Orchestration:** Engineered fault-tolerant AIDL, USB SPP, and RS232 serial bridges interfacing with digital weight scales, barcode scanners, and ESC/POS thermal receipt printers.
- **Cryptographic Tax Compliance (AmnPardaz):** Built a cross-platform e-invoicing client in Flutter/Android featuring client-side RSA/ECDSA cryptographic payload signing, processing **50,000+ corporate tax invoices** with a **100% regulatory acceptance rate**.
- **Technical Mentorship & Velocity:** Mentored engineers on reactive Kotlin Flow pipelines, strict code review standards, and AI-assisted test generation workflows, cutting boilerplate and unit test authoring time by **30%**.

---

### Principal Android Systems Consultant | GSS International
*Oct 2023 – Present · Tehran, Iran (Part-Time Advisory)*  
*(Banking Hardware & Payment Automation Ecosystem)*

- **Sovereign GMS-Free Push & Telemetry Engine:** Architected a Google-independent real-time command and supervision layer on Android POS terminals using a custom STOMP/MQTT client over Apache ActiveMQ, eliminating **100% of Google Play Services (FCM) dependencies** across air-gapped banking networks.
- **High-Uptime Background Service Engineering:** Designed an always-on Android Foreground Service with adaptive Partial WakeLock scheduling, thread-pool isolation, and exponential-backoff socket recovery, sustaining **99.9% connection uptime** over volatile cellular networks with minimal battery drain.
- **Nationwide Fleet Telemetry & Silent OTA:** Streamed real-time hardware health metrics (battery, thermal sensors, 4G/Wi-Fi RSSI, IC card reader diagnostics) and chunked binary file transfers (automated crash log harvesting and silent OTA APK rollouts) across **10,000+ deployed POS terminals** with sub-second command dispatch.

---

### Senior Android Engineer (Fintech & Payment Systems) | Omidpay
*Sep 2022 – Mar 2023 · Tehran, Iran*  
*(Major Banking Payment Service Provider - PSP)*

- **Sub-200ms ISO 8583 Payment Switch Engine:** Engineered custom binary ISO 8583 message encoders/decoders, JPOS financial workflows, and pooled asynchronous TCP socket channels, cutting interbank transaction clearance latency to **<200ms**.
- **National Smart Bakery POS Infrastructure (Nanino):** Delivered the mission-critical Android POS client powering nationwide subsidized retail transactions, reliably processing **100,000+ daily transactions** with offline-first atomic journaling and **zero data loss**.
- **Low-Level EMV & PIN-Pad SDKs:** Built hardware abstraction SDKs for Pax A920Pro and Amp8000 terminals, interfacing directly with magnetic stripe readers, EMV smart IC chips (APDU), and hardware-encrypted PIN-pads.
- **Automated Socket & APDU CI Testing:** Created mock TCP socket test suites and APDU response emulators using JUnit 5 and Robolectric to validate financial switch messaging and network drop recovery in CI without physical POS terminals.
- **Banking Cybersecurity Certification:** Hardened payment binaries with native C/C++ (JNI) integrity checks, anti-Frida/anti-tamper guards, and Android Keystore hardware encryption, passing national banking security audits (**AFTA / PCI-PTS equivalent**).

---

### Android Engineer (Biometric Identity & eKYC Platform) | UID
*Sep 2018 – Sep 2022 · Tehran, Iran*  
*(National eKYC & Digital Identity Verification Platform)*

- **National Biometric eKYC SDK (2.5M+ Users):** Architected and scaled Iran's primary biometric onboarding SDK, powering AI liveness detection and real-time facial video verification for **2.5M+ active users** across **30+ major banks** and the National Capital Markets Registry (Sejam).
- **Low-Bandwidth CameraX & WebSocket Streaming:** Engineered an adaptive CameraX frame compression and full-duplex WebSocket streaming pipeline, reducing video frame drops by **42% on constrained 3G networks** and maintaining a **99.9% crash-free rate** across **1,000+ Android device models**.
- **Legacy-to-Kotlin Modernization:** Led the architectural migration from Java/MVP to Kotlin/MVVM and Coroutines, shrinking the SDK binary footprint by **35%** and eliminating third-party transitive dependency conflicts for host banking apps.
- **SDK Security & Developer Experience (DX):** Configured custom ProGuard/R8 consumer rules, TLS certificate pinning, and hardware-backed Android Keystore encryption, alongside sandbox sample apps and integration docs that cut enterprise client onboarding time by **50%**.

---

### Android Developer | Softwaria & Varna Marlik
*2016 – 2018 · Iran*

- **In-Memory Bitmap Thermal Printing Engine:** Built a municipal fleet dispatch and ticketing client featuring a custom 2D Canvas rasterizer that streamed dynamic Persian receipts over Bluetooth SPP to portable Bixolon thermal printers in **<800ms** (100% field inspector adoption).
- **Custom 60 FPS Native 2D Game Engine (Dolme):** Engineered a dependency-free 2D game loop and particle animation engine using native Android Canvas Views without external game engines, achieving **50,000+ downloads**, a **4.7/5 rating**, and a <10MB APK on CafeBazaar.

---

## Selected Architectural Projects

### Android Smart POS Banking & EMV Contactless (Kehroba) Client
*Sep 2024 – Mar 2025*
- Architected a standalone banking payment application for smart POS terminals supporting ISO 8583 binary messaging over pooled TCP sockets, Java Card APDU smart-card authorization (ARQC), and NFC Host Card Emulation (HCE) compliant with Shaparak Kehroba (EMV contactless standard), achieving **<200ms clearance latency** and **100% banking certification**.

### [LinuxNetwork.ir](https://linuxnetwork.ir) — Linux Kernel & Network Tuning Toolbox
*2025*
- Bilingual web engineering suite (React, TypeScript, Tailwind CSS) for Linux `sysctl` kernel tuning (TCP BBR congestion control), WireGuard VPN mesh configuration, and CIDR subnetting (**100/100 Lighthouse score**, sub-100ms Cloudflare Edge delivery).

### [Vira](https://vira.linuxnetwork.ir) — Privacy-First Client-Side Document Image Processor
*2025*
- Off-main-thread browser image normalization engine built with HTML5 Canvas and Web Workers; processed **20,000+ applicant photos** in **<50ms** with zero server uploads, reducing institutional portal rejection rates from 18% to **<0.2%**.

---

## Education

**Bachelor of Science (B.Sc.) in Software Engineering**  
University of Guilan, Iran · *2013 – 2018*

---

## Certifications & Compliance

- **National Cybersecurity Compliance (AFTA):** Certified secure payment application development, cryptographic key management, and anti-tamper hardening for banking POS terminals (PCI-PTS equivalent).
- **Central Banking Payment Standards:** Verified implementation of Shaparak Kehroba contactless NFC payment protocol and ISO 8583 banking switch integrations.

---

## Languages

- **English:** Professional Working Proficiency (Technical Documentation, Team Collaboration)
- **Persian:** Native
