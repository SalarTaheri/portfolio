// ============================================================
// portfolio.ts — Single Source of Truth for all portfolio content
// Full bilingual (Persian & English) support with global Fintech/Systems context.
// ============================================================

export type ProjectFilter = 'all' | 'fintech' | 'sdk' | 'apps' | 'web';
export type SkillFilter = 'all' | 'android' | 'fintech' | 'hardware' | 'network' | 'security';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  period: string;
  badge: string;
  badgeType: 'fintech' | 'biometrics' | 'web';
  impact: string;
  desc: string;
  problem?: string;
  architecture?: string;
  isBentoLarge?: boolean;
  tech: { name: string; featured?: boolean }[];
  footerMeta: string;
  linkText?: string;
  url?: string;
  filter: ProjectFilter[];
}

export interface SkillCategory {
  id: string;
  category: 'android' | 'fintech' | 'hardware' | 'network' | 'security';
  title: string;
  icon: string;
  colorBg: string;
  colorFg: string;
  tags: { name: string; featured?: boolean }[];
}

export interface TimelineEntry {
  id: string;
  role: string;
  company: string;
  period: string;
  bullets: string[];
  chips: { name: string; featured?: boolean }[];
}

export interface StatItem {
  value: string;
  numericValue: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

export interface PortfolioContent {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    skills: string;
    experience: string;
    projects: string;
    contact: string;
    collaborate: string;
    downloadCv: string;
  };
  hero: {
    status: string;
    greeting: string;
    name: string;
    titleSuffix: string;
    role: string;
    bio: string;
    btnProjects: string;
    btnEmail: string;
    downloadCv: string;
    copyEmail: string;
    emailCopied: string;
    badgeUsers: string;
    badgeUsersSub: string;
    badgeStability: string;
    badgeStabilitySub: string;
    studioTab: string;
    studioStatus: string;
  };
  stats: StatItem[];
  skillsSection: {
    eyebrow: string;
    title: string;
    subtitle: string;
    tabs: { id: SkillFilter; label: string }[];
    categories: SkillCategory[];
  };
  experienceSection: {
    eyebrow: string;
    title: string;
    subtitle: string;
    timeline: TimelineEntry[];
  };
  projectsSection: {
    eyebrow: string;
    title: string;
    subtitle: string;
    tabs?: { id: ProjectFilter; label: string }[];
    projects: Project[];
  };
  contactSection: {
    eyebrow: string;
    title: string;
    desc: string;
    directMsgBtn: string;
    email: string;
    linkedinUrl: string;
    linkedinDisplay: string;
    githubUrl: string;
    githubDisplay: string;
    websiteUrl?: string;
    websiteDisplay?: string;
  };
  footer: {
    name: string;
    copyright: string;
    location: string;
    status: string;
  };
}

export const content: Record<'fa' | 'en', PortfolioContent> = {
  fa: {
    meta: {
      title: 'سالار طاهری · مهندس ارشد اندروید و معمار سیستم‌های موبایل | Salar Taheri',
      description:
        'بیش از ۱۰ سال سابقه مهندسی در معماری سیستم‌های فین‌تک، پایانه‌های هوشمند POS اندروید، پروتکل بانکی ISO 8583، کیت بیومتریک eKYC (۲.۵ میلیون کاربر) و زیرساخت‌های تله‌متری مقیاس بالا.',
    },
    nav: {
      about: 'درباره',
      skills: 'مهارت‌ها',
      experience: 'تجربه کاری',
      projects: 'پروژه‌های شاخص',
      contact: 'تماس',
      collaborate: 'همکاری',
      downloadCv: 'دانلود رزومه',
    },
    hero: {
      status: 'آماده همکاری در موقعیت‌های Senior / Lead (Remote · Hybrid · Relocation)',
      greeting: 'سلام، من',
      name: 'سالار طاهری',
      titleSuffix: 'هستم.',
      role: 'مهندس ارشد اندروید و معمار سیستم‌های موبایل و فین‌تک',
      bio: 'بیش از ۱۰ سال تجربه مهندسی در طراحی و مقیاس‌پذیری زیرساخت‌های فین‌تک، سیستم‌های Embedded POS اندروید و SDKهای حیاتی موبایل؛ شامل معماری پایپ‌لاین احراز هویت بیومتریک (eKYC) برای ۲.۵ میلیون کاربر فعال، پیاده‌سازی سوئیچ‌های پرداخت ISO 8583 با تأخیر زیر ۲۰۰ میلی‌ثانیه (۱۰۰ هزار تراکنش روزانه) و موتور تله‌متری مستقل از گوگل (GMS-Free) روی بیش از ۱۰,۰۰۰ پایانه فروش با پایداری ۹۹.۸٪.',
      btnProjects: 'مشاهده پروژه‌ها',
      btnEmail: 'ارسال ایمیل',
      downloadCv: 'دریافت رزومه (PDF)',
      copyEmail: 'کپی ایمیل',
      emailCopied: 'ایمیل کپی شد!',
      badgeUsers: '۲.۵M+ کاربر فعال',
      badgeUsersSub: 'احراز هویت بیومتریک در مقیاس ملی',
      badgeStability: '۹۹.۸% پایداری بدون کرش',
      badgeStabilitySub: 'در بیش از ۱,۰۰۰ مدل تلفن همراه و پایانه پوز',
      studioTab: 'MobileArchitecture.kt',
      studioStatus: 'BUILD SUCCESSFUL',
    },
    stats: [
      {
        value: '۱۰+',
        numericValue: 10,
        suffix: '+',
        label: 'سال تجربه مهندسی در سیستم‌های موبایل، فین‌تک و لایه‌های سخت‌افزاری',
      },
      {
        value: '۲.۵M+',
        numericValue: 2.5,
        suffix: 'M+',
        label: 'کاربر فعال احراز هویت بیومتریک (eKYC) در شبکه بانکی و بازار سرمایه (سجام)',
      },
      {
        value: '۱۰K+',
        numericValue: 10,
        suffix: 'K+',
        label: 'پایانه هوشمند پوز تحت پایش بلادرنگ با معماری مستقل از گوگل (GMS-Free)',
      },
      {
        value: '۹۹.۸%',
        numericValue: 99.8,
        suffix: '%',
        label: 'نرخ پایداری بدون کرش در بیش از ۱,۰۰۰ مدل دستگاه و سخت‌افزار پوز',
      },
      {
        value: '<۲۰۰ms',
        numericValue: 200,
        prefix: '<',
        suffix: 'ms',
        label: 'تأخیر پردازش و تسویه تراکنش‌های بین‌بانکی بر بستر سوکت‌های ISO 8583',
      },
      {
        value: '۱۰۰K+',
        numericValue: 100,
        suffix: 'K+',
        label: 'تراکنش روزانه پردازش‌شده روی زیرساخت ملی پرداخت بدون افت داده',
      },
    ],
    skillsSection: {
      eyebrow: 'تخصص‌های فنی و معماری',
      title: 'تسلط عمیق بر اندروید مدرن و لایه‌های سطح پایین سخت‌افزار',
      subtitle:
        'ترکیب مهندسی مدرن کاتلین و Jetpack Compose با پروتکل‌های باینری بانکی، درایورهای سخت‌افزاری و امنیت کریپتوگرافیک.',
      tabs: [
        { id: 'all', label: 'همه مهارت‌ها' },
        { id: 'android', label: 'اندروید و معماری' },
        { id: 'fintech', label: 'فین‌تک و سوئیچ بانکی' },
        { id: 'hardware', label: 'سخت‌افزار پوز و NFC' },
        { id: 'network', label: 'شبکه، پیام‌رسان و داده' },
        { id: 'security', label: 'امنیت، تست و دواپس' },
      ],
      categories: [
        {
          id: 'android-core',
          category: 'android',
          title: 'زبان‌ها و هسته اندروید مدرن',
          icon: '📱',
          colorBg: 'rgba(16, 185, 129, 0.15)',
          colorFg: '#10b981',
          tags: [
            { name: 'Kotlin & Coroutines / Flow', featured: true },
            { name: 'Jetpack Compose', featured: true },
            { name: 'C/C++ (JNI / NDK)', featured: true },
            { name: 'Java & Android SDK' },
            { name: 'Dart & Flutter' },
            { name: 'CameraX Frame Pipeline' },
            { name: 'Custom 2D Canvas & Bitmap Rendering' },
            { name: 'Material Design 3' },
          ],
        },
        {
          id: 'arch-patterns',
          category: 'android',
          title: 'معماری نرم‌افزار و همزمانی',
          icon: '🏛️',
          colorBg: 'rgba(6, 182, 212, 0.15)',
          colorFg: '#06b6d4',
          tags: [
            { name: 'Clean Architecture', featured: true },
            { name: 'Domain-Driven Design (DDD)', featured: true },
            { name: 'MVVM / MVI State Management', featured: true },
            { name: 'Multi-Module Gradle' },
            { name: 'Hilt & Koin DI' },
            { name: 'Memory & GC Pause Tuning' },
            { name: 'Asynchronous Thread Pooling' },
          ],
        },
        {
          id: 'fintech-pos',
          category: 'fintech',
          title: 'پروتکل‌های فین‌تک و سوئیچ بانکی',
          icon: '💳',
          colorBg: 'rgba(245, 158, 11, 0.15)',
          colorFg: '#f59e0b',
          tags: [
            { name: 'ISO 8583 Binary Protocol', featured: true },
            { name: 'EMV Contactless / NFC HCE (کهربا)', featured: true },
            { name: 'JPOS Financial Switch', featured: true },
            { name: 'ARQC / ARPC Cryptograms' },
            { name: 'RSA / ECDSA Tax e-Invoicing' },
            { name: 'EMV Level 2 Smart Card Flow' },
          ],
        },
        {
          id: 'hardware-nfc',
          category: 'hardware',
          title: 'سخت‌افزارهای Embedded POS و کارت هوشمند',
          icon: '🔌',
          colorBg: 'rgba(139, 92, 246, 0.15)',
          colorFg: '#8b5cf6',
          tags: [
            { name: 'AIDL Peripheral Drivers', featured: true },
            { name: 'Java Card & APDU Commands', featured: true },
            { name: 'Hardware-in-the-Loop (HIL) Emulation', featured: true },
            { name: 'Pax (A920Pro) & Amp (8000) SDKs' },
            { name: 'ESC/POS Thermal Printers' },
            { name: 'RS232 / USB / Bluetooth SPP Serial' },
            { name: 'Hardware PIN-Pad & IC Readers' },
          ],
        },
        {
          id: 'network-data',
          category: 'network',
          title: 'شبکه، استریم بلادرنگ و پایگاه‌داده',
          icon: '🌐',
          colorBg: 'rgba(236, 72, 153, 0.15)',
          colorFg: '#ec4899',
          tags: [
            { name: 'Raw Async TCP Socket Pooling', featured: true },
            { name: 'Apache ActiveMQ (MQTT / STOMP)', featured: true },
            { name: 'Full-Duplex WebSockets', featured: true },
            { name: 'Room DB (SQLite WAL) & Offline-First', featured: true },
            { name: 'Ktor & Retrofit / OkHttp' },
            { name: 'Protocol Buffers (Protobuf)' },
            { name: 'Jetpack DataStore' },
          ],
        },
        {
          id: 'security-devops',
          category: 'security',
          title: 'امنیت سایبری، تست خودکار و دواپس',
          icon: '🛡️',
          colorBg: 'rgba(16, 185, 129, 0.15)',
          colorFg: '#10b981',
          tags: [
            { name: 'AFTA / PCI-PTS Security Hardening', featured: true },
            { name: 'JUnit 5, MockK, Robolectric & Turbine', featured: true },
            { name: 'Android Keystore (TEE) Encryption', featured: true },
            { name: 'Dockerized Mock Socket CI/CD', featured: true },
            { name: 'Anti-Tamper, Root & Frida Detection' },
            { name: 'ProGuard / R8 Bytecode Obfuscation' },
            { name: 'Linux Kernel Tuning (TCP BBR)' },
            { name: 'AI-Assisted Dev (Cursor, Copilot)' },
          ],
        },
      ],
    },
    experienceSection: {
      eyebrow: 'سوابق حرفه‌ای مهندسی',
      title: 'مسیر شغلی و دستاوردهای معماری',
      subtitle:
        'طراحی و رهبری فنی زیرساخت‌های پرداخت، سامانه‌های بیومتریک ملی و ناوگان سخت‌افزاری پوز در مقیاس کشوری.',
      timeline: [
        {
          id: 'avaparsi',
          role: 'مهندس ارشد اندروید (Senior Android Engineer)',
          company: 'آواپارسی (AvaParsi) · تهران (تمام‌وقت)',
          period: 'Mar 2023 – Present',
          bullets: [
            'معماری پوز فروشگاهی Offline-First و بهینه‌سازی حافظه: طراحی و مقیاس‌پذیری اپلیکیشن صندوق فروشگاهی اندروید برای هایپرمارکت‌ها و رستوران‌های زنجیره‌ای با استفاده از Room (SQLite WAL)، کش چندلایه در حافظه و بهینه‌سازی GC که زمان جستجوی بیش از ۵۰,۰۰۰ قلم کالا را به زیر ۱۰ میلی‌ثانیه رساند.',
            'ماژولارسازی DDD و پایداری چندسخت‌افزاری: رهبری بازطراحی معماری از ساختار یکپارچه به Domain-Driven Design (DDD) و ماژول‌های مستقل Gradle، با حفظ نرخ پایداری ۹۹.۸٪ بدون کرش روی پایانه‌های متنوع (Pax, Amp, Newpos, Centerm).',
            'شبیه‌سازی سخت‌افزار در حلقه (HIL) با داکر: کانتینرسازی سرورهای موک سوکت TCP/APDU و درایورهای سریال مجازی در Docker جهت اجرای تست‌های خودکار تراکنش و سخت‌افزار در پایپ‌لاین CI/CD بدون نیاز به پوز فیزیکی و افزایش ۴۰ درصدی پوشش تست‌ها.',
            'ارکستراسیون درایورهای سخت‌افزاری (AIDL & Serial): پیاده‌سازی لایه ارتباطی مقاوم با ترازوهای دیجیتال، بارکدخوان‌ها و چاپگرهای حرارتی ESC/POS از طریق سرویس‌های AIDL و پروتکل‌های سریال USB SPP و RS232.',
            'سامانه مودیان مالیاتی با امضای کریپتوگرافیک (امن‌پرداز): مهندسی کلاینت کراس‌پلتفرم صدور صورت‌حساب الکترونیکی با Flutter/Android مجهز به امضای دیجیتال نامتقارن (RSA/ECDSA) سمت کلاینت، با ثبت بیش از ۵۰,۰۰۰ فاکتور رسمی و نرخ پذیرش ۱۰۰٪ در سامانه مودیان.',
            'منتورینگ فنی و تسریع چرخه توسعه: هدایت فنی مهندسان تیم در الگوهای Clean Architecture و Kotlin Flow، استانداردسازی Code Review و به‌کارگیری جریان‌های مهندسی مبتنی بر هوش مصنوعی که زمان نوشتن تست‌های واحد و کدهای پایه را ۳۰٪ کاهش داد.',
          ],
          chips: [
            { name: 'Kotlin & Compose', featured: true },
            { name: 'Domain-Driven Design', featured: true },
            { name: 'Room WAL (Offline-First)' },
            { name: 'AIDL & RS232/USB' },
            { name: 'Docker HIL Testing', featured: true },
            { name: 'Flutter & RSA Crypto' },
          ],
        },
        {
          id: 'gss',
          role: 'مشاور ارشد سیستم‌های اندروید (Principal Android Systems Consultant)',
          company: 'جی‌اس‌اس اینترنشنال (GSS International) · تهران (پاره‌وقت / مشاوره تخصصی)',
          period: 'Oct 2023 – Present',
          bullets: [
            'معماری نظارت و پوش‌نوتیفیکیشن مستقل از گوگل (GMS-Free): طراحی و پیاده‌سازی موتور ارتباطی بلادرنگ روی پایانه‌های پوز اندروید با کلاینت اختصاصی STOMP/MQTT متصل به کارگزار Apache ActiveMQ، و حذف کامل وابستگی به Google Play Services (FCM) در شبکه‌های ایزوله بانکی.',
            'مهندسی Foreground Service فوق‌پایدار و کم‌مصرف: طراحی سرویس پس‌زمینه دائمی با زمان‌بندی هوشمند Partial WakeLock، ایزوله‌سازی Thread Pool و الگوریتم اتصال مجدد نمایی (Exponential Backoff)، با حفظ آپ‌تایم ۹۹.۹٪ سوکت روی شبکه‌های ناپایدار سلولار.',
            'تله‌متری بلادرنگ ۱۰,۰۰۰+ پایانه و توزیع Silent OTA: پایش لحظه‌ای شاخص‌های سلامت سخت‌افزار (باتری، سنسورهای حرارتی، کیفیت سیگنال 4G/Wi-Fi و وضعیت کارت‌خوان/چاپگر) و انتقال دوطرفه فایل به صورت تکه‌ای (Chunked Binary Streaming) برای جمع‌آوری خودکار لاگ‌های کرش و نصب بی‌صدای آپدیت‌های APK در کمتر از یک ثانیه.',
          ],
          chips: [
            { name: 'Apache ActiveMQ', featured: true },
            { name: 'MQTT / STOMP', featured: true },
            { name: 'GMS-Free Architecture', featured: true },
            { name: 'Foreground Service & WakeLocks' },
            { name: '10k+ Fleet Telemetry', featured: true },
            { name: 'Chunked OTA Streaming' },
          ],
        },
        {
          id: 'omidpay',
          role: 'مهندس ارشد اندروید — فین‌تک و سیستم‌های پرداخت (Fintech & POS)',
          company: 'شرکت پرداخت الکترونیک امیدپی (Omidpay PSP) · تهران',
          period: 'Sep 2022 – Mar 2023',
          bullets: [
            'موتور سوئیچ بانکی ISO 8583 با تأخیر زیر ۲۰۰ میلی‌ثانیه: پیاده‌سازی اینکودر/دیکودر باینری پروتکل ISO 8583، استانداردهای JPOS و مدیریت استخر سوکت‌های آسنکرون TCP (Socket Pooling) که زمان تسویه تراکنش‌های بین‌بانکی را به زیر ۲۰۰ میلی‌ثانیه رساند.',
            'زیرساخت ملی کارتخوان هوشمند نانینو (Nanino): توسعه و تحویل کلاینت اندروید پوز طرح ملی هوشمندسازی یارانه آرد و نان، با پردازش پایدار بیش از ۱۰۰,۰۰۰ تراکنش روزانه در سراسر کشور و تضمین صفر درصد افت داده از طریق ژورنالینگ اتمیک آفلاین.',
            'توسعه SDK سطح پایین کارت‌خوان و PIN-Pad: مهندسی SDKهای ارتباط مستقیم با سخت‌افزار برای پایانه‌های Pax A920Pro و Amp8000 شامل کارت‌های مغناطیسی، کارت‌های هوشمند تراشه‌دار (EMV Smart IC / APDU) و صفحه‌کلیدهای رمزنگاری‌شده سخت‌افزاری.',
            'تست خودکار پروتکل‌های بانکی در CI: ساخت مجموعه تست‌های خودکار سوکت TCP و شبیه‌ساز پاسخ‌های APDU با JUnit 5 و Robolectric جهت اعتبارسنجی پیام‌های مالی ISO و سناریوهای قطعی شبکه بدون نیاز به پایانه فیزیکی.',
            'مقاوم‌سازی امنیتی و اخذ گواهی افتا (AFTA / PCI-PTS): ایمن‌سازی باینری‌های پرداخت با بررسی‌های سطح نیتیو C/C++ (JNI)، تشخیص ابزارهای هوک و روت (Frida/Magisk) و رمزنگاری کلیدها در Android Keystore تا دریافت تاییدیه رسمی ممیزی امنیت سایبری افتا.',
          ],
          chips: [
            { name: 'ISO 8583 Binary', featured: true },
            { name: 'EMV / Java Card APDU', featured: true },
            { name: 'Async TCP Socket Pool', featured: true },
            { name: 'Pax & Amp POS SDKs' },
            { name: 'JUnit 5 & Robolectric' },
            { name: 'AFTA / PCI Hardening' },
          ],
        },
        {
          id: 'uid',
          role: 'مهندس اندروید — پلتفرم احراز هویت بیومتریک (eKYC Platform)',
          company: 'یوآیدی (UID) · تهران',
          period: 'Sep 2018 – Sep 2022',
          bullets: [
            'کیت احراز هویت بیومتریک در مقیاس ملی (۲.۵ میلیون+ کاربر): طراحی و توسعه SDK اصلی احراز هویت دیجیتال کشور مجهز به تشخیص زنده‌بودن تصویر (AI Liveness Detection) و تطبیق چهره برای بیش از ۲.۵ میلیون کاربر فعال در بیش از ۳۰ بانک و سامانه سجام بورس.',
            'بهینه‌سازی استریم ویدیو با CameraX در شبکه‌های ضعیف: مهندسی پایپ‌لاین فشرده‌سازی تطبیقی فریم‌های تصویر با CameraX و ارسال دوطرفه بر بستر WebSockets که نرخ افت فریم روی اینترنت 3G را ۴۲٪ کاهش داد و پایداری ۹۹.۹٪ را در بیش از ۱,۰۰۰ مدل گوشی اندرویدی رقم زد.',
            'مدرن‌سازی معماری از Java/MVP به Kotlin/MVVM: رهبری مهاجرت تدریجی کدبیس قدیمی به کاتلین، Coroutines و معماری MVVM که حجم نهایی SDK را ۳۵٪ کاهش داد و تداخل وابستگی‌ها (Dependency Conflicts) در اپلیکیشن‌های بانکی میزبان را به صفر رساند.',
            'امنیت بیومتریک و تجربه توسعه‌دهندگان (DX): پیاده‌سازی قوانین اختصاصی مبهم‌سازی ProGuard/R8، پینینگ گواهی SSL و رمزنگاری سخت‌افزاری Keystore به همراه نگارش مستندات فنی و اپ‌های نمونه سندباکس که زمان ادغام SDK توسط بانک‌ها را به نصف کاهش داد.',
          ],
          chips: [
            { name: 'Biometric eKYC SDK', featured: true },
            { name: 'CameraX Frame Pipeline', featured: true },
            { name: 'Duplex WebSockets', featured: true },
            { name: 'Kotlin MVVM & Coroutines' },
            { name: 'Android Keystore & R8' },
          ],
        },
        {
          id: 'freelance',
          role: 'توسعه‌دهنده اندروید (Android Developer)',
          company: 'سافت‌واریا و وارنا مارلیک (Softwaria / Varna Marlik) · ایران',
          period: '2016 – 2018',
          bullets: [
            'موتور رندر بیت‌مپ و چاپ حرارتی ناوگان تاکسیرانی: طراحی اپلیکیشن مدیریت ناوگان و صدور قبض شهرداری تنکابن مجهز به موتور ترسیم در حافظه (2D Canvas Rasterizer) و ارسال بیت‌مپ از طریق بلوتوث سریال (SPP) به چاپگرهای کمری Bixolon با تأخیر چاپ زیر ۸۰۰ میلی‌ثانیه.',
            'موتور بازی بومی ۲بعدی با نرخ ۶۰ فریم بر ثانیه (دلمه): طراحی و انتشار بازی معمایی «دلمه» در کافه‌بازار با پیاده‌سازی بومی حلقه بازی (Game Loop) و سیستم ذرات روی Custom Canvas View بدون استفاده از موتورهای سنگین خارجی (بیش از ۵۰,۰۰۰ دانلود، امتیاز ۴.۷ از ۵ و حجم زیر ۱۰ مگابایت).',
          ],
          chips: [
            { name: '2D Canvas Rasterizer', featured: true },
            { name: 'Bluetooth SPP & ESC/POS', featured: true },
            { name: 'Bixolon Thermal SDK' },
            { name: '60 FPS Custom Views' },
          ],
        },
      ],
    },
    projectsSection: {
      eyebrow: 'ویترین پروژه‌ها و مطالعات موردی',
      title: 'پروژه‌های شاخص مهندسی و معماری سیستم',
      subtitle:
        'مجموعه‌ای از سامانه‌های فین‌تک مقیاس ملی، زیرساخت‌های سخت‌افزاری پوز و جعبه ابزارهای مهندسی تحت وب.',
      tabs: [
        { id: 'all', label: 'همه پروژه‌ها' },
        { id: 'fintech', label: 'فین‌تک و پوز (POS)' },
        { id: 'sdk', label: 'کیت‌های SDK و تله‌متری' },
        { id: 'web', label: 'ابزارهای وب و دواپس' },
      ],
      projects: [
        {
          id: 'ekyc-sdk',
          title: 'کیت احراز هویت دیجیتال بیومتریک یوآیدی (UID eKYC SDK)',
          tagline: 'پایپ‌لاین استریم بلادرنگ ویدیوی چهره و تشخیص زنده‌بودن تصویر در مقیاس ملی',
          period: '2018 – 2022',
          badge: 'FLAGSHIP · BIOMETRIC IDENTITY SDK',
          badgeType: 'biometrics',
          isBentoLarge: true,
          impact: '👥 احراز هویت بیش از ۲.۵ میلیون کاربر فعال در ۳۰+ بانک و بازار سرمایه (سجام)',
          desc: 'کیت توسعه نرم‌افزار (SDK) احراز هویت بیومتریک کشور با بیش از ۲.۵ میلیون کاربر تاییدشده؛ استریم همزمان فریم‌های ویدیویی چهره، کاهش ۴۲ درصدی افت فریم روی اینترنت محدود 3G و ثبت نرخ پایداری ۹۹.۹٪ در بیش از ۱,۰۰۰ مدل دستگاه اندرویدی.',
          problem:
            'چالش مهندسی: استریم بلادرنگ فریم‌های ویدیویی با وضوح بالا روی شبکه‌های سلولار ناپایدار (3G/4G) همراه با جلوگیری از حملات جعل هویت ویدیویی (Spoofing/Replay) و خطاهای کمبود حافظه (OOM) روی گوشی‌های اقتصادی.',
          architecture:
            'طراحی پایپ‌لاین بدون سربار با CameraX و فشرده‌سازی تطبیقی فریم‌ها در حافظه، استریم دوطرفه بر بستر WebSockets، معماری ماژولار Kotlin MVVM بدون وابستگی‌های سنگین، و رمزنگاری سخت‌افزاری با Android Keystore و R8.',
          tech: [
            { name: 'Kotlin & Coroutines', featured: true },
            { name: 'CameraX Pipeline', featured: true },
            { name: 'WebSockets Stream', featured: true },
            { name: 'Android Keystore (TEE)' },
            { name: 'ProGuard / R8 Rules' },
            { name: 'AI Liveness' },
          ],
          footerMeta: 'National Scale · 2.5M+ Verified Users · 30+ Banks',
          linkText: 'Production SDK Architecture',
          filter: ['sdk', 'fintech'],
        },
        {
          id: 'pos-banking',
          title: 'اپلیکیشن جامع بانکی پوز و پرداخت بدون تماس کهربا (EMV / NFC)',
          tagline: 'کلاینت تراکنش‌های بانکی مستقیم بر بستر سوکت باینری ISO 8583 و NFC HCE',
          period: '2024 – 2025',
          badge: 'FLAGSHIP · FINTECH & SMART POS',
          badgeType: 'fintech',
          isBentoLarge: true,
          impact: '⚡ تأخیر تسویه زیر ۲۰۰ میلی‌ثانیه و انطباق ۱۰۰٪ با استاندارد شاپرک و کهربا',
          desc: 'اپلیکیشن مستقل پرداخت بانکی برای پایانه‌های هوشمند پوز (Pax A920Pro, Amp8000) شامل تراکنش‌های خرید، مانده‌گیری، شارژ و کالابرگ با پشتیبانی از تراکنش‌های بدون تماس کهربا (معادل بومی EMV Contactless / Apple Pay) و درایورهای سخت‌افزاری AIDL.',
          problem:
            'چالش مهندسی: پک و آنپک کردن بسته‌های باینری ISO 8583 و تبادل دستورات APDU با کارت هوشمند در زمان کمتر از ۲۰۰ میلی‌ثانیه، مدیریت درایورهای ناهمگون سازندگان پوز بدون مسدودسازی ترد اصلی رابط کاربری و عبور از ممیزی امنیتی افتا.',
          architecture:
            'توسعه موتور اینکودر/دیکودر بیت‌مپ ISO 8583 بر بستر استخر سوکت‌های پایدار TCP، صف‌بندی غیرمسدودکننده تراکنش‌ها با Kotlin Coroutines، لایه انتزاعی سخت‌افزار (HAL) بر پایه AIDL و تولید کریپتوگرام‌های ARQC با اپلت‌های Java Card.',
          tech: [
            { name: 'Kotlin & Compose', featured: true },
            { name: 'ISO 8583 Binary', featured: true },
            { name: 'NFC HCE (Shaparak Kehroba)', featured: true },
            { name: 'Java Card & APDU' },
            { name: 'AIDL Hardware Bridge' },
            { name: 'AFTA Security' },
          ],
          footerMeta: 'Pax & Amp Smart POS · <200ms Clearance',
          linkText: 'Banking Switch Client',
          filter: ['fintech', 'sdk'],
        },
        {
          id: 'pos-monitoring-activemq',
          title: 'موتور مانیتورینگ و تله‌متری ناوگان پوز اندروید (GMS-Free ActiveMQ Engine)',
          tagline: 'زیرساخت نظارت بلادرنگ، تله‌متری سخت‌افزار و توزیع آپدیت OTA بدون سرویس‌های گوگل',
          period: '2023 – Present',
          badge: 'FLAGSHIP · FLEET TELEMETRY & INFRASTRUCTURE',
          badgeType: 'fintech',
          isBentoLarge: true,
          impact: '📡 پایش زنده بیش از ۱۰,۰۰۰ پایانه پوز با آپ‌تایم سوکت ۹۹.۹٪ و حذف کامل وابستگی به FCM',
          desc: 'پلتفرم مدیریت و مانیتورینگ بلادرنگ برای بیش از ۱۰,۰۰۰ پایانه هوشمند پوز در شبکه‌های ایزوله بانکی؛ مجهز به کلاینت اختصاصی STOMP/MQTT بر بستر Apache ActiveMQ جهت ارسال فرامین کنترلی زیر یک ثانیه، پایش سلامت سخت‌افزار و انتقال دوطرفه فایل‌های لاگ و بسته‌های نصبی OTA.',
          problem:
            'چالش مهندسی: پایانه‌های پوز بانکی فاقد Google Play Services (GMS/FCM) هستند و در شبکه‌های خصوصی فعالیت می‌کنند. حفظ اتصال دائمی در پس‌زمینه اندروید بدون کشته‌شدن سرویس توسط مدیریت باتری سیستم‌عامل و بدون هدررفت ترافیک سیم‌کارت نیازمند مهندسی پروتکل سطح پایین بود.',
          architecture:
            'مهندسی کلاینت سبک STOMP/MQTT متصل به کلاستر Apache ActiveMQ در قالب یک Foreground Service مقاوم با زمان‌بندی هوشمند Partial WakeLock، مکانیزم Exponential Backoff و استریم باینری تکه‌ای (Chunked Streaming) برای دریافت بی‌صدای آپدیت‌های APK و ارسال لاگ‌های کرش.',
          tech: [
            { name: 'Kotlin & Coroutines', featured: true },
            { name: 'Apache ActiveMQ', featured: true },
            { name: 'MQTT / STOMP', featured: true },
            { name: 'Foreground Service & WakeLocks', featured: true },
            { name: 'Chunked Binary OTA' },
            { name: 'Hardware Telemetry' },
          ],
          footerMeta: '10,000+ Active POS Terminals · 99.9% Socket Uptime',
          linkText: 'Sovereign Telemetry Engine',
          filter: ['fintech', 'sdk'],
        },
        {
          id: 'nanino',
          title: 'پلتفرم ملی کارتخوان هوشمند نانینو (Nanino Smart POS)',
          tagline: 'زیرساخت فروشگاهی توزیع هوشمند یارانه آرد و نان در سراسر کشور',
          period: '2022 – 2023',
          badge: 'GOV-TECH · HIGH-THROUGHPUT POS',
          badgeType: 'fintech',
          impact: '🍞 پردازش بیش از ۱۰۰,۰۰۰ تراکنش روزانه در سراسر کشور با صفر درصد خطای داده',
          desc: 'کلاینت اندروید پوز طرح ملی نانینو مستقر در هزاران نانوایی کشور با معماری Offline-First، صف‌بندی اتمیک تراکنش‌ها در Room Database و اتصال پایدار به سوئیچ بانکی.',
          problem:
            'چالش مهندسی: تضمین ثبت و تسویه بدون خطای صدها هزار تراکنش روزانه در محیط‌های پرترافیک نانوایی با قطعی‌های مکرر اینترنت همراه و آنتن‌دهی ضعیف.',
          architecture:
            'پیاده‌سازی ژورنالینگ اتمیک تراکنش‌ها با SQLite Write-Ahead Logging (WAL)، همگام‌سازی خودکار پس‌زمینه و یکپارچه‌سازی درایورهای پرداخت JPOS روی پایانه‌های Pax و Amp.',
          tech: [
            { name: 'Kotlin / Java', featured: true },
            { name: 'Room DB (WAL)', featured: true },
            { name: 'JPOS & TCP Sockets' },
            { name: 'Pax A920Pro SDK' },
            { name: 'Offline-First Sync' },
          ],
          footerMeta: 'Nationwide Deployment · Zero Data Loss',
          linkText: '100k+ Daily Transactions',
          filter: ['fintech', 'apps'],
        },
        {
          id: 'amnpardaz',
          title: 'سامانه صدور صورت‌حساب الکترونیکی مالیاتی (امن‌پرداز)',
          tagline: 'کلاینت کراس‌پلتفرم سامانه مودیان با امضای نامتقارن کریپتوگرافیک سمت کاربر',
          period: '2023 – Present',
          badge: 'ENTERPRISE TAX & CRYPTOGRAPHY',
          badgeType: 'fintech',
          impact: '📑 ارسال موفق بیش از ۵۰,۰۰۰ صورت‌حساب مالیاتی با نرخ پذیرش قانونی ۱۰۰٪',
          desc: 'اپلیکیشن جامع فلاتر و اندروید قابل اجرا روی پایانه‌های فروشگاهی هوشمند و موبایل جهت صدور، امضای دیجیتال و ارسال مستقیم صورت‌حساب‌های الکترونیکی به سامانه مودیان سازمان امور مالیاتی بدون شرکت‌های واسط.',
          problem:
            'چالش مهندسی: پیاده‌سازی استانداردهای پیچیده رمزنگاری نامتقارن (RSA/ECDSA) و سریال‌سازی دقیق فاکتورها مطابق پروتکل سازمان مالیاتی روی دستگاه‌های پوز و موبایل.',
          architecture:
            'معماری ماژولار مبتنی بر الگوی BLoC، موتور امضای دیجیتال محلی برای حفاظت از کلید خصوصی حافظه مالیاتی، و ذخیره‌سازی آفلاین فاکتورها در SQLite با قابلیت ارسال گروهی.',
          tech: [
            { name: 'Flutter & Dart', featured: true },
            { name: 'RSA / ECDSA Crypto', featured: true },
            { name: 'BLoC Architecture' },
            { name: 'SQLite Offline Queue' },
            { name: 'Smart POS Printing' },
          ],
          footerMeta: 'Enterprise Tax Compliance · 100% Acceptance',
          linkText: '50,000+ Signed Invoices',
          filter: ['fintech', 'apps'],
        },
        {
          id: 'linuxnetwork',
          title: 'LinuxNetwork.ir — جعبه ابزار مهندسی شبکه و تیونینگ کرنل لینوکس',
          tagline: 'پلتفرم دوزبانه تحت وب برای بهینه‌سازی پارامترهای sysctl، شبکه و دواپس',
          period: '2025',
          badge: 'DEVOPS & SYSTEMS TOOLBOX',
          badgeType: 'web',
          impact: '🚀 کسب امتیاز ۱۰۰/۱۰۰ در Google Lighthouse و تحویل لبه (Edge) زیر ۱۰۰ میلی‌ثانیه',
          desc: 'جعبه ابزار تعاملی و دوزبانه برای مهندسان سیستم و دواپس شامل تولیدکننده تنظیمات کرنل لینوکس (sysctl و کنترل ازدحام TCP BBR)، پیکربندی خودکار تونل‌های WireGuard VPN و محاسبه‌گر پیشرفته ساب‌نت‌های CIDR.',
          problem:
            'چالش مهندسی: خطاهای رایج در پیکربندی دستی پارامترهای شبکه کرنل لینوکس و جدول‌های مسیریابی WireGuard روی سرورهای پرترافیک.',
          architecture:
            'توسعه اپلیکیشن استاتیک فوق‌سریع با React، TypeScript و Tailwind CSS، موتور اعتبارسنجی بلادرنگ سمت کلاینت بدون وابستگی به بک‌اند، و استقرار روی شبکه توزیع جهانی Cloudflare Pages.',
          tech: [
            { name: 'React & TypeScript', featured: true },
            { name: 'Linux sysctl & TCP BBR', featured: true },
            { name: 'Tailwind CSS' },
            { name: 'WireGuard & CIDR' },
            { name: 'Cloudflare Edge' },
          ],
          footerMeta: 'Live Production · 100/100 Lighthouse',
          linkText: 'linuxnetwork.ir',
          url: 'https://linuxnetwork.ir',
          filter: ['web', 'apps'],
        },
        {
          id: 'vira',
          title: 'ویرا (Vira) — سرویس هوشمند پردازش و استانداردسازی عکس مدارک',
          tagline: 'پردازش، برش ۳×۴ و فشرده‌سازی تطبیقی عکس پرسنلی در مرورگر با حفظ کامل حریم خصوصی',
          period: '2025',
          badge: 'CLIENT-SIDE VISION & SAAS',
          badgeType: 'web',
          impact: '📸 پردازش بیش از ۲۰,۰۰۰ عکس داوطلبان و کاهش نرخ رد مدارک از ۱۸٪ به زیر ۰.۲٪',
          desc: 'پلتفرم پردازش تصویر سمت کلاینت برای استانداردسازی خودکار ابعاد، نسبت تصویر و حجم عکس‌های پرسنلی و کنکور در کمتر از ۵۰ میلی‌ثانیه بدون آپلود تصویر اصلی روی سرور، همراه با REST API سازمانی.',
          problem:
            'چالش مهندسی: رد شدن ۱۸ درصد از ثبت‌نام‌های آموزشی به دلیل عدم تطابق ابعاد و حجم عکس‌های ارسالی کاربران، به همراه نگرانی‌های حریم خصوصی در بارگذاری تصاویر هویتی روی سرورهای متفرقه.',
          architecture:
            'پیاده‌سازی پایپ‌لاین پردازش تصویر در مرورگر با HTML5 Canvas API و Web Workers، الگوریتم فشرده‌سازی تطبیقی تا رسیدن به حجم دقیق هدف در زیر ۵۰ میلی‌ثانیه، و ارائه API پردازش دسته‌ای برای پورتال‌های سازمانی.',
          tech: [
            { name: 'HTML5 Canvas & Web Workers', featured: true },
            { name: 'React & TypeScript', featured: true },
            { name: 'Adaptive Compression' },
            { name: 'Zero-Upload Privacy' },
            { name: 'Batch REST API' },
          ],
          footerMeta: 'Live Production · <50ms In-Browser Processing',
          linkText: 'vira.linuxnetwork.ir',
          url: 'https://vira.linuxnetwork.ir',
          filter: ['web', 'apps'],
        },
      ],
    },
    contactSection: {
      eyebrow: 'آغاز ارتباط و همکاری',
      title: 'آماده معماری و توسعه سیستم‌های مقیاس‌پذیر بعدی شما',
      desc: 'در دسترس برای موقعیت‌های مهندس ارشد اندروید (Senior/Lead Android Engineer)، معمار سیستم‌های موبایل و زیرساخت‌های فین‌تک به صورت دورکاری بین‌المللی (Remote)، هیبرید یا جابجایی سازمانی (Relocation).',
      directMsgBtn: 'ارسال ایمیل مستقیم برای مصاحبه و همکاری',
      email: 'salar.taheri.mirani@gmail.com',
      linkedinUrl: 'https://linkedin.com/in/salar-taheri',
      linkedinDisplay: 'linkedin.com/in/salar-taheri',
      githubUrl: 'https://github.com/SalarTaheri',
      githubDisplay: 'github.com/SalarTaheri',
      websiteUrl: 'https://salar.miranmahaleh.ir',
      websiteDisplay: 'salar.miranmahaleh.ir',
    },
    footer: {
      name: 'Salar Taheri',
      copyright: 'مهندسی‌شده با تمرکز بر معماری‌های مقیاس‌پذیر فین‌تک و سیستم‌های اندروید',
      location: 'Tehran, Iran',
      status: 'Open to Remote & Relocation',
    },
  },

  en: {
    meta: {
      title: 'Salar Taheri · Senior Android & Mobile Systems Engineer | Portfolio',
      description:
        'Senior Android & Mobile Systems Engineer with 10+ years of production experience in Fintech architectures, Smart POS hardware integration, ISO 8583 banking switches, and biometric eKYC SDKs (2.5M+ users).',
    },
    nav: {
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact',
      collaborate: 'Hire / Collaborate',
      downloadCv: 'Download CV',
    },
    hero: {
      status: 'Available for Senior & Staff/Lead Roles (Remote · Hybrid · Relocation)',
      greeting: "Hi, I'm",
      name: 'Salar Taheri',
      titleSuffix: '.',
      role: 'Senior Android & Mobile Systems Engineer',
      bio: '10+ years of production engineering experience building high-throughput fintech infrastructure, embedded Smart POS systems, and national-scale mobile SDKs. Architected biometric eKYC pipelines serving 2.5M+ active users, sub-200ms ISO 8583 payment switches processing 100k+ daily transactions, and GMS-free telemetry engines managing 10,000+ POS terminals at 99.8%+ crash-free stability.',
      btnProjects: 'Explore Case Studies',
      btnEmail: 'Send Email',
      downloadCv: 'Download CV (PDF)',
      copyEmail: 'Copy Email',
      emailCopied: 'Copied to Clipboard!',
      badgeUsers: '2.5M+ Active Users',
      badgeUsersSub: 'National Biometric eKYC SDK',
      badgeStability: '99.8% Crash-Free',
      badgeStabilitySub: 'Across 1,000+ Android & POS Models',
      studioTab: 'MobileArchitecture.kt',
      studioStatus: 'BUILD SUCCESSFUL',
    },
    stats: [
      {
        value: '10+',
        numericValue: 10,
        suffix: '+',
        label: 'Years of production experience across Android, Fintech & embedded POS systems',
      },
      {
        value: '2.5M+',
        numericValue: 2.5,
        suffix: 'M+',
        label: 'Active users verified via biometric eKYC SDK across 30+ banks & capital markets',
      },
      {
        value: '10k+',
        numericValue: 10,
        suffix: 'k+',
        label: 'Smart POS terminals monitored in real time via GMS-free ActiveMQ telemetry',
      },
      {
        value: '99.8%',
        numericValue: 99.8,
        suffix: '%',
        label: 'Crash-free stability sustained across 1,000+ mobile & multi-vendor POS models',
      },
      {
        value: '<200ms',
        numericValue: 200,
        prefix: '<',
        suffix: 'ms',
        label: 'Interbank transaction clearance latency over pooled ISO 8583 TCP sockets',
      },
      {
        value: '100k+',
        numericValue: 100,
        suffix: 'k+',
        label: 'Daily retail transactions processed nationwide with offline-first zero data loss',
      },
    ],
    skillsSection: {
      eyebrow: 'Technical Architecture & Stack',
      title: 'Full-Spectrum Mobile Systems & Fintech Engineering',
      subtitle:
        'Bridging modern declarative Android UI and Domain-Driven Design with low-level hardware drivers, binary payment protocols, and cryptographic security.',
      tabs: [
        { id: 'all', label: 'All Skills' },
        { id: 'android', label: 'Android & Architecture' },
        { id: 'fintech', label: 'Fintech & Payment Switches' },
        { id: 'hardware', label: 'POS Hardware & NFC' },
        { id: 'network', label: 'Networking, Messaging & DB' },
        { id: 'security', label: 'Security, Testing & DevOps' },
      ],
      categories: [
        {
          id: 'android-core',
          category: 'android',
          title: 'Languages & Modern Mobile Core',
          icon: '📱',
          colorBg: 'rgba(16, 185, 129, 0.15)',
          colorFg: '#10b981',
          tags: [
            { name: 'Kotlin & Coroutines / Flow', featured: true },
            { name: 'Jetpack Compose', featured: true },
            { name: 'C/C++ (JNI / NDK)', featured: true },
            { name: 'Java & Android SDK' },
            { name: 'Dart & Flutter' },
            { name: 'CameraX Frame Pipeline' },
            { name: 'Custom 2D Canvas & Bitmap Rendering' },
            { name: 'Material Design 3' },
          ],
        },
        {
          id: 'arch-patterns',
          category: 'android',
          title: 'Software Architecture & Concurrency',
          icon: '🏛️',
          colorBg: 'rgba(6, 182, 212, 0.15)',
          colorFg: '#06b6d4',
          tags: [
            { name: 'Clean Architecture', featured: true },
            { name: 'Domain-Driven Design (DDD)', featured: true },
            { name: 'MVVM / MVI State Management', featured: true },
            { name: 'Multi-Module Gradle' },
            { name: 'Hilt & Koin DI' },
            { name: 'Memory & GC Pause Tuning' },
            { name: 'Asynchronous Thread Pooling' },
          ],
        },
        {
          id: 'fintech-pos',
          category: 'fintech',
          title: 'Fintech Protocols & Banking Switches',
          icon: '💳',
          colorBg: 'rgba(245, 158, 11, 0.15)',
          colorFg: '#f59e0b',
          tags: [
            { name: 'ISO 8583 Binary Protocol', featured: true },
            { name: 'EMV Contactless & NFC HCE (Kehroba)', featured: true },
            { name: 'JPOS Financial Switch', featured: true },
            { name: 'ARQC / ARPC Cryptograms' },
            { name: 'RSA / ECDSA Tax e-Invoicing' },
            { name: 'EMV Level 2 Smart Card Flow' },
          ],
        },
        {
          id: 'hardware-nfc',
          category: 'hardware',
          title: 'Embedded POS Hardware & Smart Cards',
          icon: '🔌',
          colorBg: 'rgba(139, 92, 246, 0.15)',
          colorFg: '#8b5cf6',
          tags: [
            { name: 'AIDL Peripheral Drivers', featured: true },
            { name: 'Java Card & APDU Commands', featured: true },
            { name: 'Hardware-in-the-Loop (HIL) Emulation', featured: true },
            { name: 'Pax (A920Pro) & Amp (8000) SDKs' },
            { name: 'ESC/POS Thermal Printers' },
            { name: 'RS232 / USB / Bluetooth SPP Serial' },
            { name: 'Hardware PIN-Pad & IC Readers' },
          ],
        },
        {
          id: 'network-data',
          category: 'network',
          title: 'Networking, Real-Time Messaging & Storage',
          icon: '🌐',
          colorBg: 'rgba(236, 72, 153, 0.15)',
          colorFg: '#ec4899',
          tags: [
            { name: 'Raw Async TCP Socket Pooling', featured: true },
            { name: 'Apache ActiveMQ (MQTT / STOMP)', featured: true },
            { name: 'Full-Duplex WebSockets', featured: true },
            { name: 'Room DB (SQLite WAL) & Offline-First', featured: true },
            { name: 'Ktor & Retrofit / OkHttp' },
            { name: 'Protocol Buffers (Protobuf)' },
            { name: 'Jetpack DataStore' },
          ],
        },
        {
          id: 'security-devops',
          category: 'security',
          title: 'Cybersecurity, Automated QA & DevOps',
          icon: '🛡️',
          colorBg: 'rgba(16, 185, 129, 0.15)',
          colorFg: '#10b981',
          tags: [
            { name: 'AFTA / PCI-PTS Security Hardening', featured: true },
            { name: 'JUnit 5, MockK, Robolectric & Turbine', featured: true },
            { name: 'Android Keystore (TEE) Encryption', featured: true },
            { name: 'Dockerized Mock Socket CI/CD', featured: true },
            { name: 'Anti-Tamper, Root & Frida Detection' },
            { name: 'ProGuard / R8 Bytecode Obfuscation' },
            { name: 'Linux Kernel Tuning (TCP BBR)' },
            { name: 'AI-Assisted Dev (Cursor, Copilot)' },
          ],
        },
      ],
    },
    experienceSection: {
      eyebrow: 'Career Track Record',
      title: 'Professional Experience & Architectural Impact',
      subtitle:
        'Delivering high-availability payment switches, national biometric identity SDKs, and nationwide POS terminal infrastructure.',
      timeline: [
        {
          id: 'avaparsi',
          role: 'Senior Android Engineer',
          company: 'AvaParsi · Tehran, Iran (Full-Time)',
          period: 'Mar 2023 – Present',
          bullets: [
            'Offline-First Retail POS Architecture: Architected an offline-first Android POS platform for enterprise supermarkets and restaurants using Kotlin, Jetpack Compose, and Room (SQLite WAL) with multi-tier in-memory caching and GC pause tuning, delivering sub-10ms catalog lookups across 50,000+ SKUs.',
            'Multi-Vendor DDD Modularization: Led the architectural migration from a monolithic codebase to Domain-Driven Design (DDD) across multi-module Gradle packages, sustaining a 99.8% crash-free rate across fragmented Android POS vendors (Pax, Amp, Newpos, Centerm).',
            'Hardware-in-the-Loop (HIL) CI Automation: Containerized mock TCP/APDU socket servers and simulated serial peripheral drivers in Docker, enabling automated end-to-end payment and hardware testing in CI/CD without physical POS devices and expanding test coverage by 40%.',
            'Peripheral Driver Orchestration: Engineered fault-tolerant AIDL, USB SPP, and RS232 serial communication bridges interfacing with digital weight scales, barcode scanners, and ESC/POS thermal receipt printers.',
            'Cryptographic Tax Compliance (AmnPardaz): Built a cross-platform e-invoicing client in Flutter/Android featuring client-side RSA/ECDSA cryptographic payload signing, processing 50,000+ corporate tax invoices with a 100% regulatory acceptance rate.',
            'Technical Mentorship & Velocity: Mentored engineers on reactive Kotlin Flow pipelines, strict code review standards, and AI-assisted test generation workflows, cutting boilerplate and unit test authoring time by 30%.',
          ],
          chips: [
            { name: 'Kotlin & Compose', featured: true },
            { name: 'Domain-Driven Design', featured: true },
            { name: 'Room WAL (Offline-First)' },
            { name: 'AIDL & RS232/USB' },
            { name: 'Docker HIL Testing', featured: true },
            { name: 'Flutter & RSA Crypto' },
          ],
        },
        {
          id: 'gss',
          role: 'Principal Android Systems Consultant',
          company: 'GSS International · Tehran, Iran (Part-Time Advisory)',
          period: 'Oct 2023 – Present',
          bullets: [
            'Sovereign GMS-Free Push & Telemetry Engine: Architected a Google-independent real-time command and supervision layer on Android POS terminals using a custom STOMP/MQTT client over Apache ActiveMQ, eliminating 100% of Google Play Services (FCM) dependencies across air-gapped banking networks.',
            'High-Uptime Background Service Engineering: Designed an always-on Android Foreground Service with adaptive Partial WakeLock scheduling, thread-pool isolation, and exponential-backoff socket recovery, sustaining 99.9% connection uptime over volatile cellular networks with minimal battery drain.',
            'Nationwide Fleet Telemetry & Silent OTA: Streamed real-time hardware health metrics (battery, thermal sensors, 4G/Wi-Fi RSSI, IC card reader diagnostics) and chunked binary file transfers (automated crash log harvesting and silent OTA APK rollouts) across 10,000+ deployed POS terminals with sub-second command dispatch.',
          ],
          chips: [
            { name: 'Apache ActiveMQ', featured: true },
            { name: 'MQTT / STOMP', featured: true },
            { name: 'GMS-Free Architecture', featured: true },
            { name: 'Foreground Service & WakeLocks' },
            { name: '10k+ Fleet Telemetry', featured: true },
            { name: 'Chunked OTA Streaming' },
          ],
        },
        {
          id: 'omidpay',
          role: 'Senior Android Engineer — Fintech & Payment Systems',
          company: 'Omidpay (Payment Service Provider) · Tehran, Iran',
          period: 'Sep 2022 – Mar 2023',
          bullets: [
            'Sub-200ms ISO 8583 Payment Switch Engine: Engineered custom binary ISO 8583 message encoders/decoders, JPOS financial workflows, and pooled asynchronous TCP socket channels, cutting interbank transaction clearance latency to <200ms.',
            'National Smart Bakery POS Infrastructure (Nanino): Delivered the mission-critical Android POS client powering nationwide subsidized retail transactions, reliably processing 100,000+ daily transactions with offline-first atomic journaling and zero data loss.',
            'Low-Level EMV & PIN-Pad SDKs: Built hardware abstraction SDKs for Pax A920Pro and Amp8000 terminals, interfacing directly with magnetic stripe readers, EMV smart IC chips (APDU), and hardware-encrypted PIN-pads.',
            'Automated Socket & APDU CI Testing: Created mock TCP socket test suites and APDU response emulators using JUnit 5 and Robolectric to validate financial switch messaging and network drop recovery in CI without physical POS terminals.',
            'Banking Cybersecurity Certification: Hardened payment binaries with native C/C++ (JNI) integrity checks, anti-Frida/anti-tamper guards, and Android Keystore hardware encryption, passing national banking security audits (AFTA / PCI-PTS equivalent).',
          ],
          chips: [
            { name: 'ISO 8583 Binary', featured: true },
            { name: 'EMV / Java Card APDU', featured: true },
            { name: 'Async TCP Socket Pool', featured: true },
            { name: 'Pax & Amp POS SDKs' },
            { name: 'JUnit 5 & Robolectric' },
            { name: 'AFTA / PCI Hardening' },
          ],
        },
        {
          id: 'uid',
          role: 'Android Engineer — Biometric Identity & eKYC Platform',
          company: 'UID · Tehran, Iran',
          period: 'Sep 2018 – Sep 2022',
          bullets: [
            'National Biometric eKYC SDK (2.5M+ Users): Architected and scaled Iran’s primary biometric onboarding SDK, powering AI liveness detection and real-time facial video verification for 2.5M+ active users across 30+ major banks and the National Capital Markets Registry (Sejam).',
            'Low-Bandwidth CameraX & WebSocket Streaming: Engineered an adaptive CameraX frame compression and full-duplex WebSocket streaming pipeline, reducing video frame drops by 42% on constrained 3G networks and maintaining a 99.9% crash-free rate across 1,000+ Android device models.',
            'Legacy-to-Kotlin Modernization: Led the architectural migration from Java/MVP to Kotlin/MVVM and Coroutines, shrinking the SDK binary footprint by 35% and eliminating third-party transitive dependency conflicts for host banking apps.',
            'SDK Security & Developer Experience (DX): Configured custom ProGuard/R8 consumer rules, TLS certificate pinning, and hardware-backed Android Keystore encryption, alongside sandbox sample apps and integration docs that cut enterprise client onboarding time by 50%.',
          ],
          chips: [
            { name: 'Biometric eKYC SDK', featured: true },
            { name: 'CameraX Frame Pipeline', featured: true },
            { name: 'Duplex WebSockets', featured: true },
            { name: 'Kotlin MVVM & Coroutines' },
            { name: 'Android Keystore & R8' },
          ],
        },
        {
          id: 'freelance',
          role: 'Android Developer',
          company: 'Softwaria & Varna Marlik · Iran',
          period: '2016 – 2018',
          bullets: [
            'In-Memory Bitmap Thermal Printing Engine: Built a municipal fleet dispatch and ticketing client featuring a custom 2D Canvas rasterizer that streamed dynamic Persian receipts over Bluetooth SPP to portable Bixolon thermal printers in <800ms (100% field inspector adoption).',
            'Custom 60 FPS Native 2D Game Engine (Dolme): Engineered a dependency-free 2D game loop and particle animation engine using native Android Canvas Views without external game engines, achieving 50,000+ downloads, a 4.7/5 rating, and a <10MB APK on CafeBazaar.',
          ],
          chips: [
            { name: '2D Canvas Rasterizer', featured: true },
            { name: 'Bluetooth SPP & ESC/POS', featured: true },
            { name: 'Bixolon Thermal SDK' },
            { name: '60 FPS Custom Views' },
          ],
        },
      ],
    },
    projectsSection: {
      eyebrow: 'Engineering Case Studies',
      title: 'Featured Systems & Production Architecture',
      subtitle:
        'Deep-dive case studies across national-scale biometric identity SDKs, binary payment switches, fleet telemetry engines, and high-speed web utilities.',
      tabs: [
        { id: 'all', label: 'All Projects' },
        { id: 'fintech', label: 'Fintech & POS' },
        { id: 'sdk', label: 'SDKs & Telemetry' },
        { id: 'web', label: 'Web & DevOps Tools' },
      ],
      projects: [
        {
          id: 'ekyc-sdk',
          title: 'UID National Biometric eKYC SDK',
          tagline: 'Low-latency facial video streaming & AI liveness verification SDK for banking onboarding',
          period: '2018 – 2022',
          badge: 'FLAGSHIP · BIOMETRIC IDENTITY SDK',
          badgeType: 'biometrics',
          isBentoLarge: true,
          impact: '👥 2.5M+ active users verified across 30+ banks & national capital markets (Sejam)',
          desc: 'Mission-critical Android onboarding SDK serving 2.5M+ users; delivers real-time facial frame streaming over WebSockets, a 42% reduction in frame drops on constrained 3G networks, and a 99.9% crash-free rate across 1,000+ device models.',
          problem:
            'Streaming high-resolution biometric video frames in real time over unstable 3G/4G cellular links while preventing presentation spoofing attacks and Out-Of-Memory (OOM) crashes on low-RAM Android devices.',
          architecture:
            'Engineered a zero-copy CameraX frame analysis pipeline with adaptive bitrate compression, full-duplex WebSocket streaming, dependency-free Kotlin MVVM layers, and hardware-backed Android Keystore payload encryption with strict R8 consumer rules.',
          tech: [
            { name: 'Kotlin & Coroutines', featured: true },
            { name: 'CameraX Pipeline', featured: true },
            { name: 'WebSockets Stream', featured: true },
            { name: 'Android Keystore (TEE)' },
            { name: 'ProGuard / R8 Rules' },
            { name: 'AI Liveness' },
          ],
          footerMeta: 'National Scale · 2.5M+ Verified Users · 30+ Banks',
          linkText: 'Production SDK Architecture',
          filter: ['sdk', 'fintech'],
        },
        {
          id: 'pos-banking',
          title: 'Android Smart POS Banking & EMV Contactless (Kehroba) Client',
          tagline: 'Standalone payment terminal application over raw ISO 8583 sockets & NFC HCE',
          period: '2024 – 2025',
          badge: 'FLAGSHIP · FINTECH & SMART POS',
          badgeType: 'fintech',
          isBentoLarge: true,
          impact: '⚡ <200ms interbank clearance latency & 100% central bank EMV/NFC compliance',
          desc: 'Full-featured banking transaction application for smart Android POS terminals (Pax A920Pro, Amp8000) supporting Purchase, Balance Inquiry, Top-Up, and national subsidy vouchers with EMV contactless NFC (Shaparak Kehroba HCE) and vendor AIDL drivers.',
          problem:
            'Packing and clearing binary ISO 8583 financial messages and smart-card APDU handshakes in under 200ms while isolating volatile vendor hardware drivers from the UI thread and passing strict AFTA (PCI-PTS equivalent) security audits.',
          architecture:
            'Built an asynchronous ISO 8583 bitmap encoder/decoder over persistent TCP socket pools, non-blocking Kotlin Coroutine transaction queues, AIDL hardware abstraction bridges, and Java Card APDU applet communication for ARQC cryptogram generation.',
          tech: [
            { name: 'Kotlin & Compose', featured: true },
            { name: 'ISO 8583 Binary', featured: true },
            { name: 'NFC HCE (EMV / Kehroba)', featured: true },
            { name: 'Java Card & APDU' },
            { name: 'AIDL Hardware Bridge' },
            { name: 'AFTA / PCI Security' },
          ],
          footerMeta: 'Pax & Amp Smart POS · <200ms Clearance',
          linkText: 'Banking Switch Client',
          filter: ['fintech', 'sdk'],
        },
        {
          id: 'pos-monitoring-activemq',
          title: 'GMS-Free Android POS Fleet Telemetry & ActiveMQ Engine',
          tagline: 'Sovereign real-time socket supervision, hardware telemetry & silent OTA engine without Google Play Services',
          period: '2023 – Present',
          badge: 'FLAGSHIP · FLEET TELEMETRY & INFRASTRUCTURE',
          badgeType: 'fintech',
          isBentoLarge: true,
          impact: '📡 10,000+ POS terminals monitored nationwide at 99.9% socket uptime with zero GMS/FCM dependency',
          desc: 'Google-independent fleet management and real-time supervision platform for 10,000+ smart Android POS terminals. Uses a custom STOMP/MQTT client over Apache ActiveMQ for sub-second remote commands, hardware diagnostics, and bidirectional binary streaming (crash logs & silent OTA APK updates).',
          problem:
            'Enterprise banking POS terminals run on isolated, air-gapped networks without Google Play Services (FCM). Maintaining a persistent background socket without Android OS battery-killer termination or cellular packet storms required a custom low-level transport engine.',
          architecture:
            'Engineered a lightweight STOMP/MQTT socket client connected to an Apache ActiveMQ broker cluster inside a hardened Android Foreground Service with adaptive Partial WakeLock scheduling, exponential backoff reconnection, and chunked binary file streaming.',
          tech: [
            { name: 'Kotlin & Coroutines', featured: true },
            { name: 'Apache ActiveMQ', featured: true },
            { name: 'MQTT / STOMP', featured: true },
            { name: 'Foreground Service & WakeLocks', featured: true },
            { name: 'Chunked Binary OTA' },
            { name: 'Hardware Telemetry' },
          ],
          footerMeta: '10,000+ Active POS Terminals · 99.9% Socket Uptime',
          linkText: 'Sovereign Telemetry Engine',
          filter: ['fintech', 'sdk'],
        },
        {
          id: 'nanino',
          title: 'Nanino Nationwide Smart Bakery POS Platform',
          tagline: 'High-throughput offline-first retail POS infrastructure for national subsidy distribution',
          period: '2022 – 2023',
          badge: 'GOV-TECH · HIGH-THROUGHPUT POS',
          badgeType: 'fintech',
          impact: '🍞 100,000+ daily transactions processed nationwide with zero data loss',
          desc: 'Mission-critical Android POS client deployed across thousands of retail bakeries nationwide, combining offline-first Room DB write-ahead logging, JPOS payment drivers, and high-reliability interbank switching.',
          problem:
            'Preventing transaction drop-offs and double-spending during peak morning rush hours across thousands of retail locations with intermittent cellular connectivity.',
          architecture:
            'Implemented atomic local transaction journaling with Room (SQLite WAL), deterministic background retry queues, and low-level JPOS/TCP socket integration for Pax and Amp terminals.',
          tech: [
            { name: 'Kotlin / Java', featured: true },
            { name: 'Room DB (WAL)', featured: true },
            { name: 'JPOS & TCP Sockets' },
            { name: 'Pax A920Pro SDK' },
            { name: 'Offline-First Sync' },
          ],
          footerMeta: 'Nationwide Deployment · Zero Data Loss',
          linkText: '100k+ Daily Transactions',
          filter: ['fintech', 'apps'],
        },
        {
          id: 'amnpardaz',
          title: 'AmnPardaz Cryptographic Tax e-Invoicing System',
          tagline: 'Cross-platform corporate tax compliance client with on-device asymmetric signing',
          period: '2023 – Present',
          badge: 'ENTERPRISE TAX & CRYPTOGRAPHY',
          badgeType: 'fintech',
          impact: '📑 50,000+ cryptographically signed tax invoices submitted with 100% regulatory acceptance',
          desc: 'Cross-platform Flutter and Android application running on smart POS terminals and smartphones, enabling merchants to sign and submit standardized electronic tax invoices directly to the national tax authority without third-party intermediaries.',
          problem:
            'Executing canonical JSON/XML invoice serialization and RSA/ECDSA cryptographic signing directly on resource-constrained POS terminals while supporting offline queuing.',
          architecture:
            'Architected a modular BLoC state layer, an on-device asymmetric cryptographic signing engine protecting merchant private keys, and an SQLite offline sync queue with thermal receipt printing.',
          tech: [
            { name: 'Flutter & Dart', featured: true },
            { name: 'RSA / ECDSA Crypto', featured: true },
            { name: 'BLoC Architecture' },
            { name: 'SQLite Offline Queue' },
            { name: 'Smart POS Printing' },
          ],
          footerMeta: 'Enterprise Tax Compliance · 100% Acceptance',
          linkText: '50,000+ Signed Invoices',
          filter: ['fintech', 'apps'],
        },
        {
          id: 'linuxnetwork',
          title: 'LinuxNetwork.ir — Linux Kernel & Network Tuning Toolbox',
          tagline: 'Bilingual web engineering suite for sysctl kernel optimization, TCP BBR & WireGuard',
          period: '2025',
          badge: 'DEVOPS & SYSTEMS TOOLBOX',
          badgeType: 'web',
          impact: '🚀 100/100 Google Lighthouse score & sub-100ms global edge delivery',
          desc: 'Interactive bilingual web toolbox for systems and DevOps engineers featuring automated Linux kernel tuning (sysctl & TCP BBR congestion control), WireGuard VPN mesh configuration, and CIDR subnet calculation.',
          problem:
            'Eliminating manual calculation errors when tuning high-throughput Linux network stacks, sysctl buffers, and WireGuard peer routing tables.',
          architecture:
            'Built a zero-backend static web application with React, TypeScript, and Tailwind CSS, client-side validation engines, and global edge caching via Cloudflare Pages.',
          tech: [
            { name: 'React & TypeScript', featured: true },
            { name: 'Linux sysctl & TCP BBR', featured: true },
            { name: 'Tailwind CSS' },
            { name: 'WireGuard & CIDR' },
            { name: 'Cloudflare Edge' },
          ],
          footerMeta: 'Live Production · 100/100 Lighthouse',
          linkText: 'linuxnetwork.ir',
          url: 'https://linuxnetwork.ir',
          filter: ['web', 'apps'],
        },
        {
          id: 'vira',
          title: 'Vira — Privacy-First Client-Side Document Image Processor',
          tagline: 'In-browser automated 3×4 biometric photo normalization and adaptive compression',
          period: '2025',
          badge: 'CLIENT-SIDE VISION & SAAS',
          badgeType: 'web',
          impact: '📸 20,000+ applicant photos processed, slashing portal rejection rates from 18% to <0.2%',
          desc: 'Browser-based document photo normalization platform using HTML5 Canvas and Web Workers (<50ms processing latency, zero server upload privacy guarantee), paired with an institutional batch REST API.',
          problem:
            'High rejection rates (18%) on university and institutional admission portals caused by non-compliant applicant photo dimensions/file sizes, alongside strict privacy requirements prohibiting raw photo uploads.',
          architecture:
            'Engineered an off-main-thread HTML5 Canvas and Web Worker image processing pipeline with iterative binary-search JPEG/WebP compression (<50ms latency) and a batch REST API.',
          tech: [
            { name: 'HTML5 Canvas & Web Workers', featured: true },
            { name: 'React & TypeScript', featured: true },
            { name: 'Adaptive Compression' },
            { name: 'Zero-Upload Privacy' },
            { name: 'Batch REST API' },
          ],
          footerMeta: 'Live Production · <50ms In-Browser Processing',
          linkText: 'vira.linuxnetwork.ir',
          url: 'https://vira.linuxnetwork.ir',
          filter: ['web', 'apps'],
        },
      ],
    },
    contactSection: {
      eyebrow: 'Initiate Collaboration',
      title: 'Ready to architect your next high-scale mobile or fintech system?',
      desc: 'Available for Senior/Staff Android Engineer, Mobile Systems Architect, and Fintech Infrastructure roles (International Remote, Hybrid, or Relocation).',
      directMsgBtn: 'Send Direct Email for Interviews & Opportunities',
      email: 'salar.taheri.mirani@gmail.com',
      linkedinUrl: 'https://linkedin.com/in/salar-taheri',
      linkedinDisplay: 'linkedin.com/in/salar-taheri',
      githubUrl: 'https://github.com/SalarTaheri',
      githubDisplay: 'github.com/SalarTaheri',
      websiteUrl: 'https://salar.miranmahaleh.ir',
      websiteDisplay: 'salar.miranmahaleh.ir',
    },
    footer: {
      name: 'Salar Taheri',
      copyright: 'Engineered with a focus on resilient fintech architectures & Android systems',
      location: 'Tehran, Iran',
      status: 'Open to Remote & Relocation',
    },
  },
};

// Backward-compatible exports used by layout.tsx and JSON-LD schema
export const profile = {
  name: 'Salar Taheri',
  title: 'Senior Android & Mobile Systems Engineer',
  email: 'salar.taheri.mirani@gmail.com',
  linkedin: 'https://linkedin.com/in/salar-taheri',
  github: 'https://github.com/SalarTaheri',
};

export const projects = content.en.projectsSection.projects;

export const seoMeta = {
  title: 'Salar Taheri · Senior Android & Mobile Systems Engineer | Portfolio',
  description:
    'Senior Android & Mobile Systems Engineer with 10+ years of production experience in Fintech architectures, Smart POS hardware integration, ISO 8583 banking protocols, and biometric eKYC pipelines (2.5M+ users).',
  url: 'https://salar.miranmahaleh.ir',
  ogImage: '/favicon.svg',
  keywords: [
    'Salar Taheri',
    'Senior Android Engineer',
    'Mobile Systems Architect',
    'Android POS Engineer',
    'Fintech Architecture',
    'Kotlin',
    'Jetpack Compose',
    'ISO 8583',
    'Biometric eKYC',
    'AIDL',
    'Java Card APDU',
    'Apache ActiveMQ',
    'Docker HIL',
  ],
};
