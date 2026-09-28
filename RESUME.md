# Salar Taheri
**Senior Android & Mobile Systems Engineer**

- **Location:** Tehran, Iran *(Open to Relocation / Remote / Hybrid)*
- **Email:** [salar.taheri.mirani@gmail.com](mailto:salar.taheri.mirani@gmail.com)
- **LinkedIn:** [linkedin.com/in/salar-taheri](https://www.linkedin.com/in/salar-taheri)
- **GitHub:** [github.com/salartaheri](https://github.com/salartaheri)
- **Portfolio:** [salartaheri.dev](https://salartaheri.dev)

---

## Executive Summary

Senior Android & Mobile Systems Engineer with over **10 years** of production engineering experience specializing in **Fintech**, **Android POS hardware integration**, and high-scale enterprise applications. Demonstrated track record in developing secure payment SDKs, biometric eKYC pipelines serving **2.5M+ active users**, and real-time transaction processing compliant with national central banking standards (**ISO 8583**, **Shaparak Kehroba** contactless NFC). Proven mastery of modern Android architectures (**Jetpack Compose**, **Kotlin Coroutines & Flow**, **Clean Architecture**, **Domain-Driven Design**) combined with low-level peripheral communication (**AIDL**, serial/thermal printers, smart card readers, **Java Card** applets).

---

## Key Impact Highlights

| Metric | Area / Achievement |
| :--- | :--- |
| **10+ Years** | Engineering experience in production mobile & embedded systems |
| **2.5M+ Users** | Biometric eKYC SDK powered across national banks and brokerage firms (Sejam) |
| **5+ Hardware Platforms** | Smart POS platforms integrated (Pax A920Pro, Amp8000, Bixolon, etc.) |
| **99.8%** | Crash-free stability rate sustained across fragmented POS device ecosystems |
| **< 200ms** | Interbank transaction response latency achieved via socket pooling |
| **50k+ Invoices** | Digitally signed tax invoices processed with 100% legal acceptance |

---

## Technical Skills Matrix

- **Languages:** Kotlin, Java, Dart, SQL, Bash
- **Android Core & UI:** Jetpack Compose, Android SDK, View System, Custom Views & 2D Canvas, AIDL, Navigation Component, Material Design 3, CameraX, Host Card Emulation (HCE)
- **Architecture & Concurrency:** Clean Architecture, Domain-Driven Design (DDD), MVVM, MVI, Multi-Module Gradle Architecture, Kotlin Coroutines, Kotlin Flows, RxJava, Thread Pooling
- **Fintech & Hardware Integration:** ISO 8583, JPOS, Shaparak Kehroba (NFC Contactless), Java Card (Applets), APDU Protocol, Pax & Amp POS SDKs, ESC/POS Thermal Printers, Serial/Bluetooth SPP, Smart Card Readers, PIN-pad Integration
- **Networking & Data:** Ktor Client, Retrofit, OkHttp, WebSockets, TCP Sockets, REST APIs, Protobuf, Room Database, SQLite, DataStore, Hilt, Koin
- **Security, DevOps & Tools:** ProGuard/R8, Android Keystore, Anti-Tamper & Root Detection, Git, Linux Environment, Docker, CI/CD, Sentry

---

## Professional Work Experience

### **Senior Android Developer** — AvaParsi
*March 2023 – Present | Tehran, Iran*

- **Retail & POS Cashier Ecosystem:** Architected and scaled an offline-first Android POS application for supermarkets and restaurants, utilizing **Room Persistence** and multi-tier local caching to manage large product catalogs with zero-latency lookups.
- **AmnPardaz Electronic Invoicing System:** Engineered a comprehensive tax reporting application in **Flutter**, enabling corporate merchants to submit cryptographically signed tax invoices directly to the national tax authority via smart POS terminals and Android smartphones (**50,000+ invoices** submitted with 100% acceptance).
- **Hardware & Peripherals Orchestration:** Designed queue management and ticketing workflows by interfacing with weight scales, barcode scanners, and thermal receipt printers via **AIDL** and serial communication protocols.
- **Stability & Architecture:** Led the architectural refactoring toward **Domain-Driven Design (DDD)** and modular packaging, sustaining a **99.8% crash-free rate** across fragmented Android POS device vendors.

---

### **Android Developer (Fintech & POS)** — Omidpay
*September 2022 – March 2023 | Tehran, Iran*

- **Core Payment SDK:** Developed low-level banking transaction SDKs for Android smart POS terminals (Pax A920Pro, Amp8000), supporting magnetic stripe cards, smart IC cards, and secure PIN-pad interaction.
- **Java Card & APDU Protocol:** Authored Java Card applets for EMV smart card operations — implementing APDU command handlers for secure key derivation, PIN verification, and cryptogram generation on-card.
- **Banking Switch Protocols:** Implemented strict **ISO 8583** protocol decoders/encoders, JPOS standards, and asynchronous **TCP Socket** streaming, achieving **sub-200ms latency** for high-reliability interbank transaction clearance.
- **Nationwide Subsidies (Nanino Platform):** Delivered the Android POS client for the **Nanino Smart Bakery Platform**, empowering thousands of bakeries across the country to execute government-subsidized transactions at massive scale (**100k+ daily transactions**, zero data loss).
- **Cybersecurity Compliance:** Hardened payment applications against tampering, reverse-engineering, and cryptographic injection, successfully passing national cybersecurity audits (**AFTA**).

---

### **Android Developer** — UID
*September 2018 – September 2022 | Tehran, Iran*

- **eKYC Biometric SDK:** Engineered the core client SDK for Iran's premier digital identity verification platform, enabling automated liveness detection, AI-driven facial verification, and real-time video streaming over **WebSockets** for **2.5M+ active users** across major banks and brokerage firms (Sejam).
- **System Modernization:** Spearheaded legacy refactoring from Java/MVP to **Kotlin/MVVM**, reducing APK footprint by **35%** and drastically reducing external runtime dependencies.
- **Security Hardening:** Configured custom **ProGuard/R8** obfuscation rules, anti-hooking detection, and Android Keystore payload encryption to protect biometric payloads in transit and at rest.
- **Camera & Streaming Optimization:** Built a zero-overhead camera pipeline with **CameraX**, cutting frame drop rates by 42% on low-bandwidth 3G connections and sustaining a 99.9% crash-free rate across 1,000+ Android device models.

---

### **Android Developer** — Freelance & Early Projects (Softwaria / Varna Marlik)
*2016 – 2018 | Iran*

- **Tonekabon Municipal Taxi Receipt System (Softwaria):** Developed a violation management mobile client; built an in-memory Canvas rendering engine to draw dynamic receipts and stream them as high-speed bitmaps over Bluetooth/Serial to **Bixolon thermal printers** (<800ms print latency, 100% field adoption).
- **Dolme Native Word Puzzle Game:** Designed and shipped a native Persian puzzle game on CafeBazaar; achieved smooth **60 FPS** gameplay by engineering custom Canvas Views and animation loops completely natively without external game engines (50k+ downloads, 4.7/5 rating, <10MB APK).
- **Consumer Applications (Varna Marlik):** Designed, built, and deployed on-demand food ordering (**Kababe Nab**), classifieds and e-commerce (**Taj**), and developer utility applications.

---

## Featured Projects & Case Studies

### 1. Android POS Banking & Kehroba Contactless System
- **Period:** Sep 2024 – Mar 2025
- **Category:** Fintech | Embedded Android | NFC | Smart Card
- **Overview:** Independent full-featured banking transaction app for smart POS terminals (Purchase, Balance Inquiry, Mobile Top-Up, Kala Barg vouchers).
- **Key Solutions:** Implemented ISO 8583 binary packet packaging over raw TCP sockets; integrated Shaparak Kehroba protocol using Host Card Emulation (HCE) & NFC; built Java Card APDU communication and vendor AIDL hardware drivers.
- **Tech Stack:** Kotlin, ISO 8583, NFC, AIDL, Java Card, APDU, Coroutines, Jetpack Compose

### 2. UID Biometric eKYC SDK
- **Period:** 2018 – 2022
- **Category:** SDK Development | Biometrics | High Scale
- **Impact:** 2.5M+ active users authenticated across banking and national financial markets (Sejam).
- **Key Solutions:** Low-latency video frame streaming via persistent WebSockets; CameraX pipeline; hardened client binaries with ProGuard/R8 and Android Keystore encryption.
- **Tech Stack:** Kotlin, CameraX, WebSockets, REST APIs, ProGuard/R8, Android Keystore

### 3. Nanino Nationwide Smart Bakery POS Platform
- **Period:** 2022 – 2023
- **Category:** Fintech | Gov-Tech | Large-Scale POS
- **Impact:** Deployed across thousands of bakeries nationally; 100k+ daily transactions with zero data loss.
- **Key Solutions:** Offline-first architecture with Room DB and write-ahead logging; JPOS drivers; Pax A920Pro and Amp8000 terminal hardware integrations.
- **Tech Stack:** Java, Kotlin, JPOS, TCP Sockets, Room Database, Smart POS SDKs

### 4. AmnPardaz Electronic Invoicing System
- **Period:** 2023 – Present
- **Category:** Cross-Platform | Enterprise | POS | Tax Systems
- **Impact:** 50,000+ legal invoices submitted with 100% digital signature compliance.
- **Key Solutions:** Cross-platform Flutter application for smart POS and mobile devices; client-side asymmetric cryptography (RSA/ECC) for tax compliance; offline caching with SQLite and BLoC state management.
- **Tech Stack:** Flutter, Dart, BLoC, REST API, SQLite, Cryptography

### 5. LinuxNetwork.ir — Linux Network & Kernel Tuning Toolbox
- **Period:** 2025
- **Category:** Web Application | DevOps | Open Source
- **Live URL:** [https://linuxnetwork.ir](https://linuxnetwork.ir)
- **Impact:** 100/100 Lighthouse performance score; thousands of monthly DevOps visitors; sub-100ms global edge delivery.
- **Key Solutions:** Bilingual (Persian/English) web toolbox for sysctl kernel tuning (BBR congestion control), WireGuard VPN configuration, and CIDR subnet calculation.
- **Tech Stack:** React, TypeScript, Tailwind CSS, Framer Motion, Vite, Cloudflare Pages

### 6. Vira — Smart Document Image Processing Service
- **Period:** 2025
- **Category:** Web Application | Image Processing | SaaS API
- **Live URL:** [https://vira.linuxnetwork.ir](https://vira.linuxnetwork.ir)
- **Impact:** Processed 20,000+ applicant photos for national entrance exams, reducing photo rejection rates from 18% to <0.2%.
- **Key Solutions:** In-browser automated 3×4 document photo cropping and adaptive compression via HTML5 Canvas (<50ms processing, zero server upload privacy mode), alongside an organizational batch REST API.
- **Tech Stack:** React, TypeScript, Tailwind CSS, HTML5 Canvas API, REST API, Cloudflare Pages

### 7. Dolme Native Word Puzzle Game
- **Period:** 2016 – 2018
- **Category:** Mobile Game | Native Android Performance
- **Impact:** 50k+ downloads on CafeBazaar, 4.7/5 user rating, under 10MB APK size.
- **Key Solutions:** Handcrafted game loop, collision detection, and particle animations directly on 2D Canvas without third-party game engines; optimized memory recycling to eliminate GC stutter.
- **Tech Stack:** Kotlin, Java, Custom Android Views, Canvas 2D, ValueAnimators

### 8. Tonekabon Municipal Taxi Ticketing System
- **Period:** 2016 – 2017
- **Category:** IoT | Embedded Hardware | Field Operations
- **Impact:** 100% field adoption across traffic inspectors with <800ms print latency.
- **Key Solutions:** Dynamic rasterized monochrome bitmap generation in-memory via Canvas; high-speed streaming over Bluetooth SPP and Serial to Bixolon ESC/POS portable thermal printers.
- **Tech Stack:** Android SDK, Canvas Bitmap Rendering, Bluetooth/Serial API, Bixolon SDK

---

## Education

**Bachelor of Science in Software Engineering**  
*University of Guilan, Iran (2013 – 2018)*

---

## Certifications & Regulatory Compliance

- **National Cybersecurity Compliance (AFTA):** Certified secure payment application development and anti-tamper hardening for banking POS terminals.
- **Central Banking Payment Standards (Shaparak):** Verified implementation of Shaparak Kehroba contactless NFC payment protocol and ISO 8583 banking switch integrations.

---

## Languages

- **Persian:** Native
- **English:** Professional Working Proficiency
