// ============================================================
// portfolio.ts — Single Source of Truth for all portfolio content
// Full bilingual (Persian & English) support matching design reference.
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

export interface LabAction {
  id: 'tap_card' | 'balance' | 'print' | 'reset';
  label: string;
  subLabel: string;
  icon: string;
  badgeColor: string;
  logs: { text: string; color: string; delay: number }[];
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
    simulator: string;
    contact: string;
    collaborate: string;
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
    projects: Project[];
  };
  labSection: {
    eyebrow: string;
    title: string;
    subtitle: string;
    controlsTitle: string;
    controlsDesc: string;
    terminalDevice: string;
    initialStatus: string;
    initialNfc: string;
    initialPrompt: string;
    actions: LabAction[];
    resetLabel: string;
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
    websiteUrl: string;
    websiteDisplay: string;
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
      title: 'سالار طاهری · مهندس ارشد سیستم‌های موبایل و اندروید | Salar Taheri Portfolio',
      description: 'بیش از ۱۰ سال سابقه مهندسی در توسعه سیستم‌های پوز اندروید، ادغام سخت‌افزار، پروتکل ISO 8583، کیت eKYC بیومتریک و اپلیکیشن‌های مقیاس بالا.',
    },
    nav: {
      about: 'درباره',
      skills: 'مهارت‌ها',
      experience: 'تجربه کاری',
      projects: 'پروژه‌های شاخص',
      simulator: 'آزمایشگاه سخت‌افزار',
      contact: 'تماس',
      collaborate: 'همکاری',
    },
    hero: {
      status: 'آماده همکاری و موقعیت‌های ارشد (Remote / Hybrid / Relocation)',
      greeting: 'سلام، من',
      name: 'سالار طاهری',
      titleSuffix: 'هستم.',
      role: 'مهندس ارشد اندروید و معمار سیستم‌های موبایل',
      bio: 'بیش از ۱۰ سال تجربه تخصصی در توسعه اپلیکیشن‌های مدرن اندروید با کاتلین و Jetpack Compose، طراحی و پیاده‌سازی معماری Clean و MVI، و رهبری پایپ‌لاین‌های بیومتریک (eKYC) برای بیش از ۲.۵ میلیون کاربر فعال، در کنار تخصص عمیق در لایه‌های سخت‌افزاری و ارتباطات امن.',
      btnProjects: 'مشاهده پروژه‌ها',
      btnEmail: 'ارسال ایمیل',
      badgeUsers: '۲.۵M+ کاربر فعال',
      badgeUsersSub: 'احراز هویت بیومتریک در مقیاس ملی',
      badgeStability: '۹۹.۸% پایداری بدون کرش',
      badgeStabilitySub: 'در بیش از ۱۰۰۰ مدل تلفن همراه و سخت‌افزار',
      studioTab: 'MobileArchitecture.kt',
      studioStatus: 'BUILD SUCCESSFUL',
    },
    stats: [
      {
        value: '۱۰+',
        numericValue: 10,
        suffix: '+',
        label: 'سال سابقه تخصصی در سیستم‌های اندروید و لایه‌های سخت‌افزاری',
      },
      {
        value: '۲.۵M+',
        numericValue: 2.5,
        suffix: 'M+',
        label: 'کاربر فعال احراز هویت eKYC در سیستم‌های بانکی و سجام',
      },
      {
        value: '۵+',
        numericValue: 5,
        suffix: '+',
        label: 'پلتفرم سخت‌افزاری POS (Pax, Amp, Bixolon, etc)',
      },
      {
        value: '۹۹.۸%',
        numericValue: 99.8,
        suffix: '%',
        label: 'پایداری بدون کرش در سخت‌افزارهای گوناگون',
      },
      {
        value: '<۲۰۰ms',
        numericValue: 200,
        prefix: '<',
        suffix: 'ms',
        label: 'تأخیر تسویه در سوکت‌های بانکی ISO 8583',
      },
      {
        value: '۵۰K+',
        numericValue: 50,
        suffix: 'K+',
        label: 'صورت‌حساب مالیاتی سامانه مؤدیان با امضای دیجیتال',
      },
    ],
    skillsSection: {
      eyebrow: 'تخصص‌های فنی و مهندسی',
      title: 'تسلط بر معماری‌های مدرن و لایه‌های سطح پایین',
      subtitle: 'از کامپوز و کاتلین تا درایورهای سریال، پروتکل‌های بانکی بین‌المللی و امنیت کریپتوگرافیک.',
      tabs: [
        { id: 'all', label: 'همه مهارت‌ها' },
        { id: 'android', label: 'اندروید و معماری' },
        { id: 'fintech', label: 'فین‌تک و پوز (POS)' },
        { id: 'hardware', label: 'سخت‌افزار و NFC' },
        { id: 'network', label: 'شبکه، وب و دیتابیس' },
        { id: 'security', label: 'امنیت و دواپس' },
      ],
      categories: [
        {
          id: 'android-core',
          category: 'android',
          title: 'هسته اندروید و UI مدرن',
          icon: '📱',
          colorBg: 'rgba(16, 185, 129, 0.15)',
          colorFg: '#10b981',
          tags: [
            { name: 'Jetpack Compose', featured: true },
            { name: 'Kotlin Coroutines & Flow', featured: true },
            { name: 'Material Design 3' },
            { name: 'CameraX Pipeline' },
            { name: 'Custom 2D Canvas' },
            { name: 'Navigation Component' },
          ],
        },
        {
          id: 'arch-patterns',
          category: 'android',
          title: 'معماری و الگوهای طراحی',
          icon: '🏛️',
          colorBg: 'rgba(6, 182, 212, 0.15)',
          colorFg: '#06b6d4',
          tags: [
            { name: 'Clean Architecture', featured: true },
            { name: 'Domain-Driven Design (DDD)', featured: true },
            { name: 'MVI & MVVM' },
            { name: 'Multi-Module Gradle' },
            { name: 'Hilt & Koin DI' },
            { name: 'Offline-First Caching' },
          ],
        },
        {
          id: 'fintech-pos',
          category: 'fintech',
          title: 'استانداردهای فین‌تک و سوئیچ',
          icon: '💳',
          colorBg: 'rgba(245, 158, 11, 0.15)',
          colorFg: '#f59e0b',
          tags: [
            { name: 'ISO 8583 Protocol', featured: true },
            { name: 'کهربا شاپرک (NFC Kehroba)', featured: true },
            { name: 'JPOS Standards' },
            { name: 'سامانه مالیاتی مؤدیان' },
            { name: 'EMV Smart Card Flow' },
            { name: 'HCE (Host Card Emulation)' },
          ],
        },
        {
          id: 'hardware-nfc',
          category: 'hardware',
          title: 'سخت‌افزار، کارت هوشمند و POS',
          icon: '🔌',
          colorBg: 'rgba(139, 92, 246, 0.15)',
          colorFg: '#8b5cf6',
          tags: [
            { name: 'AIDL Peripheral Driver', featured: true },
            { name: 'Java Card & APDU Commands', featured: true },
            { name: 'Pax A920Pro & Amp8000 SDK' },
            { name: 'ESC/POS Thermal Printing' },
            { name: 'Serial / Bluetooth SPP' },
            { name: 'PIN-pad & Magnetic Stripe' },
          ],
        },
        {
          id: 'network-data',
          category: 'network',
          title: 'شبکه، استریم و پایگاه‌داده',
          icon: '🌐',
          colorBg: 'rgba(236, 72, 153, 0.15)',
          colorFg: '#ec4899',
          tags: [
            { name: 'Low-Latency TCP Sockets', featured: true },
            { name: 'WebSockets Video Stream', featured: true },
            { name: 'Room DB & SQLite WAL' },
            { name: 'Ktor Client & Backend', featured: true },
            { name: 'Protocol Buffers' },
            { name: 'DataStore Persistence' },
          ],
        },
        {
          id: 'security-devops',
          category: 'security',
          title: 'امنیت، لینوکس و دواپس',
          icon: '🛡️',
          colorBg: 'rgba(16, 185, 129, 0.15)',
          colorFg: '#10b981',
          tags: [
            { name: 'گواهی افتا (AFTA Certified)', featured: true },
            { name: 'Android Keystore Encryption', featured: true },
            { name: 'Anti-Tamper & Root Detect' },
            { name: 'ProGuard / R8 Obfuscation' },
            { name: 'Linux Kernel Tuning (BBR)', featured: true },
            { name: 'Docker & CI/CD Pipelines', featured: true },
          ],
        },
      ],
    },
    experienceSection: {
      eyebrow: 'سوابق حرفه‌ای',
      title: 'مسیر شغلی و تجارب کلیدی',
      subtitle: 'هدایت پروژه‌های حساس مالیاتی، بانکی و سامانه‌های بیومتریک در شرکت‌های پیشرو ایران.',
      timeline: [
        {
          id: 'avaparsi',
          role: 'توسعه‌دهنده ارشد اندروید (Senior Android Developer)',
          company: 'آواپارسی (AvaParsi) · تهران',
          period: 'مارس ۲۰۲۳ – اکنون',
          bullets: [
            'اکوسیستم صندوق و فروشگاه اندرویدی: طراحی و مقیاس‌پذیری اپلیکیشن آفلاین-فرست پوز اندروید برای سوپرمارکت‌ها و رستوران‌ها با Room DB و کش چندلایه جهت جستجوی آنی بدون تاخیر میان ده‌ها هزار کالا.',
            'سامانه مودیان و صدور صورت‌حساب امن‌پرداز: طراحی سامانه مالیاتی با فلاتر و اتصال مستقیم به سرورهای سازمان امور مالیاتی کشور با امضای نامتقارن کریپتوگرافیک (ارسال موفق بیش از ۵۰,۰۰۰ صورت‌حساب با تاییدیه ۱۰۰٪).',
            'اتصال سخت‌افزارها و تجهیزات جانبی: پیاده‌سازی جریان‌های صف و چاپ بلیت با برقراری ارتباط پایدار با ترازوهای دیجیتال، بارکد اسکنرها و پرینترهای حرارتی از طریق درایورهای AIDL و پروتکل‌های سریال.',
            'معماری و پایداری محصول: بازطراحی ساختار کد بر پایه Domain-Driven Design (DDD) و ایجاد ماژول‌های مستقل که منجر به حفظ نرخ پایداری ۹۹.۸٪ بدون کرش در انواع مدل‌های پوز شد.',
          ],
          chips: [
            { name: 'Jetpack Compose', featured: true },
            { name: 'Flutter' },
            { name: 'Room DB' },
            { name: 'AIDL' },
            { name: 'DDD' },
            { name: 'Cryptographic Signing' },
          ],
        },
        {
          id: 'omidpay',
          role: 'توسعه‌دهنده اندروید و فین‌تک (Fintech & POS Developer)',
          company: 'امیدپی (Omidpay) · تهران',
          period: 'سپتامبر ۲۰۲۲ – مارس ۲۰۲۳',
          bullets: [
            'توسعه SDK هسته پرداخت پوز: برنامه‌نویسی SDK سطح پایین تراکنش‌های بانکی برای پایانه‌های هوشمند Pax A920Pro و Amp8000 با پشتیبانی از کارت‌های مغناطیسی، تراشه‌های هوشمند IC و صفحه کلید امن ورود رمز (PIN-pad).',
            'پروتکل APDU و اپلت‌های Java Card: توسعه اپلت‌های جاواکارت جهت عملیات EMV، اشتقاق کلیدهای امنیتی، تایید پین و تولید کریپتوگرام رمزنگاری‌شده درون چیپ کارت.',
            'پروتکل‌های سوئیچ بانکی: پیاده‌سازی اینکودر و دیکودر دقیق پروتکل ISO 8583، استانداردهای JPOS و استریم آسنکرون سوکت‌های TCP با تأخیر پاسخ زیر ۲۰۰ میلی‌ثانیه.',
            'طرح ملی نانینو (سامانه هوشمند یارانه نان): تحویل نرم‌افزار سمت پوز نانینو در هزاران نانوایی سراسر کشور و پردازش بیش از ۱۰۰,۰۰۰ تراکنش روزانه بدون کوچک‌ترین خطای داده‌ای.',
            'استانداردهای امنیت سایبری: مقاوم‌سازی اپلیکیشن‌های پرداخت در برابر مهندسی معکوس و گذر موفق از ممیزی‌های امنیتی ملی افتا (AFTA).',
          ],
          chips: [
            { name: 'ISO 8583', featured: true },
            { name: 'Java Card / APDU', featured: true },
            { name: 'Pax SDK' },
            { name: 'TCP Sockets' },
            { name: 'AFTA Security' },
          ],
        },
        {
          id: 'uid',
          role: 'توسعه‌دهنده اندروید (Android Developer - eKYC)',
          company: 'یوآیدی (UID) · تهران',
          period: 'سپتامبر ۲۰۱۸ – سپتامبر ۲۰۲۲',
          bullets: [
            'کیت احراز هویت دیجیتال بیومتریک (eKYC SDK): توسعه SDK اصلی احراز هویت تصویری و زنده بودن چهره (Liveness Detection) مبتنی بر هوش مصنوعی و وب‌سوکت برای بیش از ۲.۵ میلیون کاربر در کارگزاری‌های بورس (سجام) و بانک‌های مطرح کشور.',
            'مدرن‌سازی معماری: رهبری بازنویسی زیرساخت قدیمی از Java/MVP به کاتلین و MVVM که منجر به کاهش ۳۵ درصدی حجم فایل نصبی APK و به حداقل رساندن وابستگی‌های خارجی شد.',
            'پایپ‌لاین دوربین با CameraX: پیاده‌سازی پردازش بدون افت فریم ویدیو با CameraX و کاهش ۴۲ درصدی افت فریم روی شبکه‌های ضعیف اینترنت 3G همراه با ثبت نرخ پایداری ۹۹.۹٪ در بیش از ۱۰۰۰ مدل تلفن همراه.',
            'امن‌سازی پکیج کلاینت: اعمال قوانین پیشرفته مبهم‌سازی با ProGuard/R8، محافظت در برابر ابزارهای هوک مثل Frida و رمزنگاری داده‌های حساس با کلیدهای سخت‌افزاری Android Keystore.',
          ],
          chips: [
            { name: 'eKYC & Biometrics', featured: true },
            { name: 'CameraX' },
            { name: 'WebSockets' },
            { name: 'Kotlin MVVM' },
            { name: 'Android Keystore' },
          ],
        },
        {
          id: 'freelance',
          role: 'توسعه‌دهنده اندروید (پروژه‌های اولیه و فریلنس)',
          company: 'سافت‌واریا / وارنا مارلیک (Softwaria / Varna Marlik)',
          period: '۲۰۱۶ – ۲۰۱۸',
          bullets: [
            'سامانه بازرسی و چاپ قبض تاکسیرانی شهرداری تنکابن: طراحی موتور ترسیم قبض روی کانواس در حافظه و ارسال بیت‌مپ‌های باکیفیت از طریق بلوتوث سریال به پرینترهای پرتابل Bixolon با زمان پاسخ زیر ۸۰۰ میلی‌ثانیه.',
            'بازی کلمات دلمه (Dolme): پیاده‌سازی بومی حلقه بازی و انیمیشن‌های روان ۶۰ فریم با Canvas 2D بدون استفاده از موتورهای بازی حجیم (بیش از ۵۰,۰۰۰ دانلود در کافه‌بازار با امتیاز ۴.۷/۵ و حجم کمتر از ۱۰ مگابایت).',
          ],
          chips: [
            { name: '2D Canvas Engine' },
            { name: 'Bixolon ESC/POS' },
            { name: 'Bluetooth SPP' },
            { name: 'Game Performance' },
          ],
        },
      ],
    },
    projectsSection: {
      eyebrow: 'ویترین پروژه‌ها و دستاوردها',
      title: 'پروژه‌های شاخص مهندسی',
      subtitle: 'ترکیب دانش عمیق فین‌تک، پروتکل‌های سطح پایین و توسعه سرویس‌های پرسرعت تحت وب.',
      projects: [
        {
          id: 'pos-banking',
          title: 'سامانه جامع پذیرش بانکی و پرداخت بدون تماس کهربا',
          tagline: 'اپلیکیشن جامع تراکنش‌های بانکی روی پایانه‌های هوشمند پوز',
          period: '2024 – 2025',
          badge: 'FINTECH & HARDWARE',
          badgeType: 'fintech',
          impact: '⚡ پیاده‌سازی کامل استانداردهای شاپرک و بسته باینری ISO 8583',
          desc: 'اپلیکیشن جامع تراکنش‌های بانکی روی پایانه‌های هوشمند پوز شامل خرید، مانده‌گیری، شارژ سیم‌کارت و کالابرگ الکترونیک با پشتیبانی کامل از پرداخت بدون تماس کهربا (NFC HCE) و دستورات درایورهای سخت‌افزاری AIDL.',
          tech: [
            { name: 'Kotlin', featured: true },
            { name: 'ISO 8583' },
            { name: 'Shaparak Kehroba' },
            { name: 'NFC HCE' },
            { name: 'Java Card APDU' },
            { name: 'Compose' },
          ],
          footerMeta: 'Pax & Amp POS',
          linkText: 'Enterprise SDK',
          filter: ['fintech'],
        },
        {
          id: 'ekyc-sdk',
          title: 'کیت احراز هویت دیجیتال بیومتریک یوآیدی (UID eKYC)',
          tagline: 'اولین پایپ‌لاین تشخیص هویت بیومتریک دیجیتال در ایران',
          period: '2018 – 2022',
          badge: 'IDENTITY & EKYC',
          badgeType: 'biometrics',
          impact: '👥 احراز هویت بیش از ۲.۵ میلیون کاربر در سامانه سجام و بانک‌ها',
          desc: 'پایپ‌لاین بدون تاخیر استریم ویدیوی چهره با وب‌سوکت همراه با تشخیص زنده بودن تصویر (Liveness Detection)، پیاده‌سازی بهینه CameraX و فشرده‌سازی بسته‌ها با الگوریتم‌های رمزنگاری سخت‌افزاری.',
          tech: [
            { name: 'Kotlin', featured: true },
            { name: 'CameraX' },
            { name: 'WebSockets' },
            { name: 'ProGuard/R8' },
            { name: 'Android Keystore' },
          ],
          footerMeta: 'National Scale',
          linkText: '2.5M+ Active Users',
          filter: ['sdk'],
        },
        {
          id: 'nanino',
          title: 'پلتفرم کشوری کارتخوان هوشمند نانینو (Nanino)',
          tagline: 'زیرساخت پوز کشوری برای توزیع یارانه آرد و نان',
          period: '2022 – 2023',
          badge: 'GOV-TECH & POS',
          badgeType: 'fintech',
          impact: '🍞 بیش از ۱۰۰,۰۰۰ تراکنش روزانه بدون افت دیتا در کل کشور',
          desc: 'توسعه نرم‌افزار سمت پایانه فروش برای ساماندهی یارانه آرد و نان در سطح ملی با رویکرد Offline-First و صف‌بندی تراکنش‌های محلی بر بستر دیتابیس Room با ضریب پایداری حداکثری.',
          tech: [
            { name: 'Java/Kotlin', featured: true },
            { name: 'JPOS' },
            { name: 'Room DB' },
            { name: 'TCP Sockets' },
            { name: 'Pax SDK' },
          ],
          footerMeta: 'Nationwide POS',
          linkText: '100k+ Daily Tx',
          filter: ['fintech'],
        },
        {
          id: 'linuxnetwork',
          title: 'LinuxNetwork.ir — جعبه ابزار لینوکس و تیونینگ شبکه',
          tagline: 'جعبه ابزار تحت وب و دوزبانه برای تنظیمات پیشرفته هسته لینوکس و شبکه',
          period: '2025',
          badge: 'WEB TOOLBOX & DEVOPS',
          badgeType: 'web',
          impact: '🚀 نمره ۱۰۰/۱۰۰ در Lighthouse و تحویل داده زیر ۱۰۰ میلی‌ثانیه',
          desc: 'جعبه ابزار تحت وب و دوزبانه برای تنظیمات پیشرفته هسته لینوکس، الگوریتم کنترل ازدحام TCP BBR، پیکربندی WireGuard VPN و محاسبات ساب‌نت CIDR شبکه برای مهندسان سیستم و دواپس.',
          tech: [
            { name: 'React', featured: true },
            { name: 'TypeScript' },
            { name: 'Tailwind CSS' },
            { name: 'Framer Motion' },
            { name: 'Cloudflare Pages' },
          ],
          footerMeta: 'Live Production',
          linkText: 'linuxnetwork.ir',
          url: 'https://linuxnetwork.ir',
          filter: ['web', 'apps'],
        },
        {
          id: 'vira',
          title: 'سرویس هوشمند پردازش عکس ویرا (Vira)',
          tagline: 'سامانه پردازش و برش خودکار عکس پرسنلی در مرورگر',
          period: '2025',
          badge: 'IMAGE PROCESSING & SAAS',
          badgeType: 'web',
          impact: '📸 پردازش ۲۰,۰۰۰+ عکس پرسنلی کنکور و کاهش رد عکس به کمتر از ۰.۲٪',
          desc: 'سامانه پردازش و برش خودکار عکس ۳×۴ پرسنلی در مرورگر با حفظ حریم خصوصی کامل با HTML5 Canvas و الگوریتم فشرده‌سازی تطبیقی زیر ۵۰ میلی‌ثانیه به همراه API سازمانی برای ثبت‌نام‌های گروهی.',
          tech: [
            { name: 'HTML5 Canvas API', featured: true },
            { name: 'React' },
            { name: 'TypeScript' },
            { name: 'REST API' },
            { name: 'Tailwind CSS' },
          ],
          footerMeta: 'Live Production',
          linkText: 'vira.linuxnetwork.ir',
          url: 'https://vira.linuxnetwork.ir',
          filter: ['web', 'apps'],
        },
        {
          id: 'amnpardaz',
          title: 'سامانه صورت‌حساب مالیاتی مؤدیان (امن‌پرداز)',
          tagline: 'نرم‌افزار جامع مالیاتی با امضای نامتقارن کریپتوگرافیک',
          period: '2023 – Present',
          badge: 'TAX REPORTING & POS',
          badgeType: 'fintech',
          impact: '📑 ارسال بیش از ۵۰,۰۰۰ فاکتور مالیاتی با اعتبار حقوقی ۱۰۰٪',
          desc: 'اپلیکیشن جامع فلاتر روی پایانه‌های فروشگاهی و تلفن‌های هوشمند با پشتیبانی از رمزنگاری نامتقارن RSA/ECC سمت کلاینت برای اتصال مستقیم به سامانه مؤدیان بدون نیاز به واسطه‌های متفرقه.',
          tech: [
            { name: 'Flutter & Dart', featured: true },
            { name: 'BLoC Pattern' },
            { name: 'Asymmetric Crypto' },
            { name: 'SQLite' },
            { name: 'Smart POS' },
          ],
          footerMeta: 'Enterprise Tax',
          linkText: '50k+ Legal Invoices',
          filter: ['fintech', 'apps'],
        },
      ],
    },
    labSection: {
      eyebrow: 'آزمایشگاه سخت‌افزار و پروتکل‌های لایه‌پایین',
      title: 'شبیه‌ساز ارتباطات سخت‌افزاری و پروتکل‌های بانکی',
      subtitle: 'نمایش تسلط بر ارتباط با تجهیزات جانبی، درایورهای AIDL، پردازش بسته‌های باینری و سوکت‌های پرسرعت.',
      controlsTitle: 'ارسال فرمان به لایه سخت‌افزار',
      controlsDesc: 'دستور دلخواه را انتخاب کنید تا تبادل داده با درایور AIDL، فیلد مغناطیسی NFC یا جریان باینری ISO 8583 شبیه‌سازی شود:',
      terminalDevice: 'PAX A920PRO / AIDL DAEMON',
      initialStatus: '[STATUS] System Initialized. AIDL peripheral listener listening.',
      initialNfc: '[NFC] Contactless RF Field: READY',
      initialPrompt: 'یکی از گزینه‌های بالا را برای شبیه‌سازی پروتکل انتخاب کنید...',
      resetLabel: 'پاک‌سازی لاگ‌های ترمینال',
      actions: [
        {
          id: 'tap_card',
          label: 'ارتباط بدون تماس NFC و چیپ هوشمند',
          subLabel: 'APDU 00A40400',
          icon: '💳',
          badgeColor: 'var(--accent)',
          logs: [
            { text: '[RF FIELD] Contactless Card Detected (ISO/IEC 14443 Type A)', color: '#10b981', delay: 100 },
            { text: '[AIDL] Dispatching Kehroba APDU payload: 00A4040008A0000000031010', color: '#06b6d4', delay: 350 },
            { text: '[CRYPTO] Applet Response: 9000 (Success) | Cryptogram Generated', color: '#f59e0b', delay: 600 },
            { text: '[SUCCESS] NFC Kehroba Card Read completed in 142ms. Ready to send ISO packet.', color: '#10b981', delay: 850 },
          ],
        },
        {
          id: 'balance',
          label: 'سوییچ تبادل بانکی شتاب (ISO 8583 MTI 0100)',
          subLabel: '< 180ms Latency',
          icon: '⚡',
          badgeColor: 'var(--cyan)',
          logs: [
            { text: '[SWITCH] Packaging ISO 8583 MTI: 0100 (Balance Inquiry Request)', color: '#06b6d4', delay: 100 },
            { text: '[SOCKET] Streaming packet over persistent TCP keepalive socket pool...', color: '#94a3b8', delay: 250 },
            { text: '[SWITCH] Received ISO 8583 MTI: 0110 (Response Code: 00 Approved)', color: '#10b981', delay: 450 },
            { text: '[DATA] Ledger Balance Retrieved: ********* IRR | Latency: 168ms', color: '#f59e0b', delay: 650 },
          ],
        },
        {
          id: 'print',
          label: 'استریم چاپگر حرارتی و پردازش گرافیک کانواس (ESC/POS)',
          subLabel: 'Canvas Bitmap Stream',
          icon: '🧾',
          badgeColor: 'var(--amber)',
          logs: [
            { text: '[PRINTER] Rendering rasterized 1-bit monochrome bitmap on Canvas...', color: '#f59e0b', delay: 100 },
            { text: '[AIDL/SERIAL] Opening Bluetooth SPP /dev/rfcomm0 -> Bixolon ESC/POS', color: '#06b6d4', delay: 300 },
            { text: '[STREAM] Pushing 384-dot ESC/POS bitmap buffers (0x1B 0x2A)...', color: '#94a3b8', delay: 550 },
            { text: '[SUCCESS] Receipt cut command executed (0x1D 0x56). Print job finished.', color: '#10b981', delay: 800 },
          ],
        },
        {
          id: 'reset',
          label: 'پاک‌سازی لاگ‌های ترمینال',
          subLabel: '',
          icon: '🔄',
          badgeColor: 'var(--muted)',
          logs: [],
        },
      ],
    },
    contactSection: {
      eyebrow: 'آغاز ارتباط و همکاری',
      title: 'علاقه‌مند به خلق محصولات مقیاس‌پذیر هستید؟',
      desc: 'آماده همکاری به صورت دورکاری، پروژه‌ای یا جابجایی سازمانی (Relocation) در موقعیت‌های مهندسی نرم‌افزار، لایه‌های سطح پایین موبایل و زیرساخت‌های فین‌تک.',
      directMsgBtn: 'ارسال پیام مستقیم برای مصاحبه و همکاری',
      email: 'salar.taheri.mirani@gmail.com',
      linkedinUrl: 'https://linkedin.com/in/salar-taheri',
      linkedinDisplay: 'linkedin.com/in/salar-taheri',
      githubUrl: 'https://github.com/salartaheri',
      githubDisplay: 'github.com/salartaheri',
      websiteUrl: 'https://salartaheri.dev',
      websiteDisplay: 'salartaheri.dev',
    },
    footer: {
      name: 'Salar Taheri',
      copyright: 'طراحی شده با الهام از معماری‌های پیشرفته فین‌تک و سیستم‌های اندروید',
      location: 'Tehran, Iran',
      status: 'Open to Relocation',
    },
  },

  en: {
    meta: {
      title: 'Salar Taheri · Senior Android & Mobile Systems Engineer | Portfolio',
      description: '10+ years engineering Android POS systems, hardware integration, ISO 8583 protocols, biometric eKYC SDK (2.5M+ users), and high-scale architecture.',
    },
    nav: {
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      simulator: 'Hardware Lab',
      contact: 'Contact',
      collaborate: 'Collaborate',
    },
    hero: {
      status: 'Available for Senior & Lead Roles (Remote / Hybrid / Relocation)',
      greeting: "Hi, I'm",
      name: 'Salar Taheri',
      titleSuffix: '.',
      role: 'Senior Android & Mobile Systems Engineer',
      bio: 'Over 10 years of production engineering experience architecting modern Android applications with Kotlin & Jetpack Compose, implementing Clean Architecture & MVI, and engineering biometric eKYC pipelines serving 2.5M+ active users, alongside deep expertise in peripheral hardware orchestration and banking switches.',
      btnProjects: 'View Projects',
      btnEmail: 'Send Email',
      badgeUsers: '2.5M+ Active Users',
      badgeUsersSub: 'National-Scale Biometric eKYC',
      badgeStability: '99.8% Crash-Free',
      badgeStabilitySub: 'Across 1,000+ Device Models',
      studioTab: 'MobileArchitecture.kt',
      studioStatus: 'BUILD SUCCESSFUL',
    },
    stats: [
      {
        value: '10+',
        numericValue: 10,
        suffix: '+',
        label: 'Years of engineering experience in production mobile & embedded systems',
      },
      {
        value: '2.5M+',
        numericValue: 2.5,
        suffix: 'M+',
        label: 'Active eKYC users authenticated across national banks & brokerage firms',
      },
      {
        value: '5+',
        numericValue: 5,
        suffix: '+',
        label: 'Smart POS hardware platforms integrated (Pax, Amp, Bixolon, etc.)',
      },
      {
        value: '99.8%',
        numericValue: 99.8,
        suffix: '%',
        label: 'Crash-free stability rate sustained across fragmented POS device ecosystems',
      },
      {
        value: '<200ms',
        numericValue: 200,
        prefix: '<',
        suffix: 'ms',
        label: 'Interbank transaction response latency achieved via socket pooling',
      },
      {
        value: '50k+',
        numericValue: 50,
        suffix: 'k+',
        label: 'Digitally signed corporate tax invoices processed with 100% acceptance',
      },
    ],
    skillsSection: {
      eyebrow: 'Engineering Expertise',
      title: 'Mastery of Modern Architectures & Low-Level Layers',
      subtitle: 'From Jetpack Compose and Kotlin Coroutines to serial drivers, international banking switches, and cryptographic security.',
      tabs: [
        { id: 'all', label: 'All Skills' },
        { id: 'android', label: 'Android & Architecture' },
        { id: 'fintech', label: 'Fintech & POS' },
        { id: 'hardware', label: 'Hardware & NFC' },
        { id: 'network', label: 'Networking, Web & DB' },
        { id: 'security', label: 'Security & DevOps' },
      ],
      categories: [
        {
          id: 'android-core',
          category: 'android',
          title: 'Android Core & Modern UI',
          icon: '📱',
          colorBg: 'rgba(16, 185, 129, 0.15)',
          colorFg: '#10b981',
          tags: [
            { name: 'Jetpack Compose', featured: true },
            { name: 'Kotlin Coroutines & Flow', featured: true },
            { name: 'Material Design 3' },
            { name: 'CameraX Pipeline' },
            { name: 'Custom 2D Canvas' },
            { name: 'Navigation Component' },
          ],
        },
        {
          id: 'arch-patterns',
          category: 'android',
          title: 'Architecture & Design Patterns',
          icon: '🏛️',
          colorBg: 'rgba(6, 182, 212, 0.15)',
          colorFg: '#06b6d4',
          tags: [
            { name: 'Clean Architecture', featured: true },
            { name: 'Domain-Driven Design (DDD)', featured: true },
            { name: 'MVI & MVVM' },
            { name: 'Multi-Module Gradle' },
            { name: 'Hilt & Koin DI' },
            { name: 'Offline-First Caching' },
          ],
        },
        {
          id: 'fintech-pos',
          category: 'fintech',
          title: 'Fintech Standards & Banking Switch',
          icon: '💳',
          colorBg: 'rgba(245, 158, 11, 0.15)',
          colorFg: '#f59e0b',
          tags: [
            { name: 'ISO 8583 Protocol', featured: true },
            { name: 'Shaparak Kehroba (NFC)', featured: true },
            { name: 'JPOS Standards' },
            { name: 'National Tax Invoicing' },
            { name: 'EMV Smart Card Flow' },
            { name: 'HCE (Host Card Emulation)' },
          ],
        },
        {
          id: 'hardware-nfc',
          category: 'hardware',
          title: 'Hardware, Smart Cards & POS',
          icon: '🔌',
          colorBg: 'rgba(139, 92, 246, 0.15)',
          colorFg: '#8b5cf6',
          tags: [
            { name: 'AIDL Peripheral Driver', featured: true },
            { name: 'Java Card & APDU Commands', featured: true },
            { name: 'Pax A920Pro & Amp8000 SDK' },
            { name: 'ESC/POS Thermal Printing' },
            { name: 'Serial / Bluetooth SPP' },
            { name: 'PIN-pad & Magnetic Stripe' },
          ],
        },
        {
          id: 'network-data',
          category: 'network',
          title: 'Networking, Streaming & Databases',
          icon: '🌐',
          colorBg: 'rgba(236, 72, 153, 0.15)',
          colorFg: '#ec4899',
          tags: [
            { name: 'Low-Latency TCP Sockets', featured: true },
            { name: 'WebSockets Video Stream', featured: true },
            { name: 'Room DB & SQLite WAL' },
            { name: 'Ktor Client & Backend', featured: true },
            { name: 'Protocol Buffers' },
            { name: 'DataStore Persistence' },
          ],
        },
        {
          id: 'security-devops',
          category: 'security',
          title: 'Security, Linux & DevOps',
          icon: '🛡️',
          colorBg: 'rgba(16, 185, 129, 0.15)',
          colorFg: '#10b981',
          tags: [
            { name: 'AFTA Security Certified', featured: true },
            { name: 'Android Keystore Encryption', featured: true },
            { name: 'Anti-Tamper & Root Detect' },
            { name: 'ProGuard / R8 Obfuscation' },
            { name: 'Linux Kernel Tuning (BBR)', featured: true },
            { name: 'Docker & CI/CD Pipelines', featured: true },
          ],
        },
      ],
    },
    experienceSection: {
      eyebrow: 'Career History',
      title: 'Professional Journey & Key Roles',
      subtitle: 'Spearheading mission-critical taxation, banking switches, and biometric identity systems.',
      timeline: [
        {
          id: 'avaparsi',
          role: 'Senior Android Developer',
          company: 'AvaParsi · Tehran, Iran',
          period: 'Mar 2023 – Present',
          bullets: [
            'Retail & POS Cashier Ecosystem: Architected and scaled an offline-first Android POS application for supermarkets and restaurants, utilizing Room Persistence and multi-tier local caching to manage large product catalogs with zero-latency lookups.',
            'AmnPardaz Electronic Invoicing System: Engineered a comprehensive tax reporting application in Flutter, enabling corporate merchants to submit cryptographically signed tax invoices directly to the national tax authority via smart POS terminals (50,000+ invoices with 100% acceptance).',
            'Hardware & Peripherals Orchestration: Designed queue management and ticketing workflows by interfacing with weight scales, barcode scanners, and thermal receipt printers via AIDL and serial communication protocols.',
            'Stability & Architecture: Led the architectural refactoring toward Domain-Driven Design (DDD) and modular packaging, sustaining a 99.8% crash-free rate across fragmented Android POS device vendors.',
          ],
          chips: [
            { name: 'Jetpack Compose', featured: true },
            { name: 'Flutter' },
            { name: 'Room DB' },
            { name: 'AIDL' },
            { name: 'DDD' },
            { name: 'Cryptographic Signing' },
          ],
        },
        {
          id: 'omidpay',
          role: 'Android Developer — Fintech & POS',
          company: 'Omidpay · Tehran, Iran',
          period: 'Sep 2022 – Mar 2023',
          bullets: [
            'Core Payment SDK: Developed low-level banking transaction SDKs for Android smart POS terminals (Pax A920Pro, Amp8000), supporting magnetic stripe cards, smart IC cards, and secure PIN-pad interaction.',
            'Java Card & APDU Protocol: Authored Java Card applets for EMV smart card operations — implementing APDU command handlers for secure key derivation, PIN verification, and cryptogram generation on-card.',
            'Banking Switch Protocols: Implemented strict ISO 8583 protocol decoders/encoders, JPOS standards, and asynchronous TCP Socket streaming, achieving sub-200ms latency for high-reliability interbank transaction clearance.',
            'Nationwide Subsidies (Nanino Platform): Delivered the Android POS client for the Nanino Smart Bakery Platform, empowering thousands of bakeries across the country to execute government-subsidized transactions at massive scale (100k+ daily transactions, zero data loss).',
            'Cybersecurity Compliance: Hardened payment applications against tampering, reverse-engineering, and cryptographic injection, successfully passing national cybersecurity audits (AFTA).',
          ],
          chips: [
            { name: 'ISO 8583', featured: true },
            { name: 'Java Card / APDU', featured: true },
            { name: 'Pax SDK' },
            { name: 'TCP Sockets' },
            { name: 'AFTA Security' },
          ],
        },
        {
          id: 'uid',
          role: 'Android Developer (eKYC Platform)',
          company: 'UID · Tehran, Iran',
          period: 'Sep 2018 – Sep 2022',
          bullets: [
            'eKYC Biometric SDK: Engineered the core client SDK for Iran’s premier digital identity verification platform, enabling automated liveness detection, AI-driven facial verification, and real-time video streaming over WebSockets for 2.5M+ active users across major banks and brokerage firms (Sejam).',
            'System Modernization: Spearheaded legacy refactoring from Java/MVP to Kotlin/MVVM, reducing APK footprint by 35% and drastically reducing external runtime dependencies.',
            'Camera & Streaming Optimization: Built a zero-overhead camera pipeline with CameraX, cutting frame drop rates by 42% on low-bandwidth 3G connections and sustaining a 99.9% crash-free rate across 1,000+ Android device models.',
            'Security Hardening: Configured custom ProGuard/R8 obfuscation rules, anti-hooking detection, and Android Keystore payload encryption to protect biometric payloads in transit and at rest.',
          ],
          chips: [
            { name: 'eKYC & Biometrics', featured: true },
            { name: 'CameraX' },
            { name: 'WebSockets' },
            { name: 'Kotlin MVVM' },
            { name: 'Android Keystore' },
          ],
        },
        {
          id: 'freelance',
          role: 'Android Developer (Freelance & Early Projects)',
          company: 'Softwaria / Varna Marlik · Iran',
          period: '2016 – 2018',
          bullets: [
            'Tonekabon Municipal Taxi Receipt System: Developed a violation management mobile client; built an in-memory Canvas rendering engine to draw dynamic receipts and stream them as high-speed bitmaps over Bluetooth/Serial to Bixolon thermal printers (<800ms print latency, 100% field adoption).',
            'Dolme Native Word Puzzle Game: Designed and shipped a native Persian puzzle game on CafeBazaar; achieved smooth 60 FPS gameplay by engineering custom Canvas Views and animation loops completely natively without external game engines (50k+ downloads, 4.7/5 rating, <10MB APK).',
          ],
          chips: [
            { name: '2D Canvas Engine' },
            { name: 'Bixolon ESC/POS' },
            { name: 'Bluetooth SPP' },
            { name: 'Game Performance' },
          ],
        },
      ],
    },
    projectsSection: {
      eyebrow: 'Portfolio & Case Studies',
      title: 'Featured Engineering Projects',
      subtitle: 'Combining deep fintech domain expertise, low-level protocols, and high-performance web systems.',
      projects: [
        {
          id: 'pos-banking',
          title: 'Android POS Banking & Kehroba Contactless System',
          tagline: 'Independent full-featured banking transaction client for smart POS terminals',
          period: '2024 – 2025',
          badge: 'FINTECH & HARDWARE',
          badgeType: 'fintech',
          impact: '⚡ Full implementation of Shaparak Kehroba NFC and raw ISO 8583 binary packets',
          desc: 'Comprehensive banking transaction app for smart POS terminals (Purchase, Balance Inquiry, Mobile Top-Up, Kala Barg vouchers) with Shaparak Kehroba NFC HCE and vendor AIDL hardware drivers.',
          tech: [
            { name: 'Kotlin', featured: true },
            { name: 'ISO 8583' },
            { name: 'Shaparak Kehroba' },
            { name: 'NFC HCE' },
            { name: 'Java Card APDU' },
            { name: 'Compose' },
          ],
          footerMeta: 'Pax & Amp POS',
          linkText: 'Enterprise SDK',
          filter: ['fintech'],
        },
        {
          id: 'ekyc-sdk',
          title: 'UID Biometric eKYC SDK',
          tagline: 'National-scale digital identity and biometric verification SDK',
          period: '2018 – 2022',
          badge: 'IDENTITY & EKYC',
          badgeType: 'biometrics',
          impact: '👥 2.5M+ active users authenticated across banking & stock exchange (Sejam)',
          desc: 'Zero-latency video frame streaming via persistent WebSockets, automated facial liveness detection, optimized CameraX pipeline, and client security hardening with ProGuard/R8.',
          tech: [
            { name: 'Kotlin', featured: true },
            { name: 'CameraX' },
            { name: 'WebSockets' },
            { name: 'ProGuard/R8' },
            { name: 'Android Keystore' },
          ],
          footerMeta: 'National Scale',
          linkText: '2.5M+ Active Users',
          filter: ['sdk'],
        },
        {
          id: 'nanino',
          title: 'Nanino Nationwide Smart Bakery POS Platform',
          tagline: 'High-throughput bread subsidy POS infrastructure',
          period: '2022 – 2023',
          badge: 'GOV-TECH & POS',
          badgeType: 'fintech',
          impact: '🍞 100k+ daily transactions nationwide with zero data loss',
          desc: 'POS client for the nationwide smart bakery flour subsidy program with offline-first Room DB write-ahead logging, JPOS drivers, and high-reliability interbank switching.',
          tech: [
            { name: 'Java/Kotlin', featured: true },
            { name: 'JPOS' },
            { name: 'Room DB' },
            { name: 'TCP Sockets' },
            { name: 'Pax SDK' },
          ],
          footerMeta: 'Nationwide POS',
          linkText: '100k+ Daily Tx',
          filter: ['fintech'],
        },
        {
          id: 'linuxnetwork',
          title: 'LinuxNetwork.ir — Linux Network & Kernel Tuning Toolbox',
          tagline: 'Bilingual web toolbox for Linux kernel optimization and DevOps automation',
          period: '2025',
          badge: 'WEB TOOLBOX & DEVOPS',
          badgeType: 'web',
          impact: '🚀 100/100 Lighthouse score & sub-100ms global edge delivery',
          desc: 'Bilingual web toolbox for sysctl kernel tuning (TCP BBR congestion control), WireGuard VPN configuration, and CIDR subnet calculation for system engineers and DevOps.',
          tech: [
            { name: 'React', featured: true },
            { name: 'TypeScript' },
            { name: 'Tailwind CSS' },
            { name: 'Framer Motion' },
            { name: 'Cloudflare Pages' },
          ],
          footerMeta: 'Live Production',
          linkText: 'linuxnetwork.ir',
          url: 'https://linuxnetwork.ir',
          filter: ['web', 'apps'],
        },
        {
          id: 'vira',
          title: 'Vira — Smart Document Image Processing Service',
          tagline: 'In-browser automated 3×4 document photo cropping and compression',
          period: '2025',
          badge: 'IMAGE PROCESSING & SAAS',
          badgeType: 'web',
          impact: '📸 20,000+ photos processed, reducing rejection rate from 18% to <0.2%',
          desc: 'Browser-side automated 3×4 document photo cropping and adaptive compression via HTML5 Canvas (<50ms processing, zero server upload privacy mode), with an organizational batch REST API.',
          tech: [
            { name: 'HTML5 Canvas API', featured: true },
            { name: 'React' },
            { name: 'TypeScript' },
            { name: 'REST API' },
            { name: 'Tailwind CSS' },
          ],
          footerMeta: 'Live Production',
          linkText: 'vira.linuxnetwork.ir',
          url: 'https://vira.linuxnetwork.ir',
          filter: ['web', 'apps'],
        },
        {
          id: 'amnpardaz',
          title: 'AmnPardaz Electronic Invoicing System',
          tagline: 'Cryptographic tax compliance application for retail & corporate merchants',
          period: '2023 – Present',
          badge: 'TAX REPORTING & POS',
          badgeType: 'fintech',
          impact: '📑 50,000+ legal invoices submitted with 100% digital signature compliance',
          desc: 'Cross-platform Flutter application for smart POS and mobile devices; client-side asymmetric cryptography (RSA/ECC) for tax compliance; offline caching with SQLite and BLoC state management.',
          tech: [
            { name: 'Flutter & Dart', featured: true },
            { name: 'BLoC Pattern' },
            { name: 'Asymmetric Crypto' },
            { name: 'SQLite' },
            { name: 'Smart POS' },
          ],
          footerMeta: 'Enterprise Tax',
          linkText: '50k+ Legal Invoices',
          filter: ['fintech', 'apps'],
        },
      ],
    },
    labSection: {
      eyebrow: 'Hardware & Embedded Protocols Lab',
      title: 'Low-Level Hardware & Payment Protocols Simulator',
      subtitle: 'Demonstrating low-level capabilities across TCP sockets, AIDL peripheral drivers, and binary protocol frames.',
      controlsTitle: 'Send Commands to Hardware Layer Daemon',
      controlsDesc: 'Select an operation to transmit low-level commands and simulate AIDL drivers, contactless RF fields, or ISO 8583 streams:',
      terminalDevice: 'PAX A920PRO / AIDL DAEMON',
      initialStatus: '[STATUS] System Initialized. AIDL peripheral listener listening.',
      initialNfc: '[NFC] Contactless RF Field: READY',
      initialPrompt: 'Select an action above to simulate low-level event stream...',
      resetLabel: 'Clear Terminal Logs',
      actions: [
        {
          id: 'tap_card',
          label: 'NFC Contactless & Smart Card APDU Handshake',
          subLabel: 'APDU 00A40400',
          icon: '💳',
          badgeColor: 'var(--accent)',
          logs: [
            { text: '[RF FIELD] Contactless Card Detected (ISO/IEC 14443 Type A)', color: '#10b981', delay: 100 },
            { text: '[AIDL] Dispatching Kehroba APDU payload: 00A4040008A0000000031010', color: '#06b6d4', delay: 350 },
            { text: '[CRYPTO] Applet Response: 9000 (Success) | Cryptogram Generated', color: '#f59e0b', delay: 600 },
            { text: '[SUCCESS] NFC Card Read completed in 142ms. Ready to send ISO packet.', color: '#10b981', delay: 850 },
          ],
        },
        {
          id: 'balance',
          label: 'Interbank Switch Socket Stream (ISO 8583 MTI 0100)',
          subLabel: '< 180ms Latency',
          icon: '⚡',
          badgeColor: 'var(--cyan)',
          logs: [
            { text: '[SWITCH] Packaging ISO 8583 MTI: 0100 (Balance Inquiry Request)', color: '#06b6d4', delay: 100 },
            { text: '[SOCKET] Streaming packet over persistent TCP keepalive socket pool...', color: '#94a3b8', delay: 250 },
            { text: '[SWITCH] Received ISO 8583 MTI: 0110 (Response Code: 00 Approved)', color: '#10b981', delay: 450 },
            { text: '[DATA] Ledger Balance Retrieved: ********* IRR | Latency: 168ms', color: '#f59e0b', delay: 650 },
          ],
        },
        {
          id: 'print',
          label: 'Print Thermal Receipt via Bixolon (ESC/POS)',
          subLabel: 'Canvas Bitmap Stream',
          icon: '🧾',
          badgeColor: 'var(--amber)',
          logs: [
            { text: '[PRINTER] Rendering rasterized 1-bit monochrome bitmap on Canvas...', color: '#f59e0b', delay: 100 },
            { text: '[AIDL/SERIAL] Opening Bluetooth SPP /dev/rfcomm0 -> Bixolon ESC/POS', color: '#06b6d4', delay: 300 },
            { text: '[STREAM] Pushing 384-dot ESC/POS bitmap buffers (0x1B 0x2A)...', color: '#94a3b8', delay: 550 },
            { text: '[SUCCESS] Receipt cut command executed (0x1D 0x56). Print job finished.', color: '#10b981', delay: 800 },
          ],
        },
        {
          id: 'reset',
          label: 'Clear Terminal Logs',
          subLabel: '',
          icon: '🔄',
          badgeColor: 'var(--muted)',
          logs: [],
        },
      ],
    },
    contactSection: {
      eyebrow: 'Initiate Collaboration',
      title: 'Interested in building scalable products together?',
      desc: 'Available for remote, project-based, or relocation opportunities in software engineering, mobile systems, embedded layers, and fintech infrastructure.',
      directMsgBtn: 'Send Direct Message for Interviews & Opportunities',
      email: 'salar.taheri.mirani@gmail.com',
      linkedinUrl: 'https://linkedin.com/in/salar-taheri',
      linkedinDisplay: 'linkedin.com/in/salar-taheri',
      githubUrl: 'https://github.com/salartaheri',
      githubDisplay: 'github.com/salartaheri',
      websiteUrl: 'https://salartaheri.dev',
      websiteDisplay: 'salartaheri.dev',
    },
    footer: {
      name: 'Salar Taheri',
      copyright: 'Designed with inspiration from advanced fintech architectures & Android systems',
      location: 'Tehran, Iran',
      status: 'Open to Relocation',
    },
  },
};

// Backward-compatible exports
export const profile = {
  name: 'Salar Taheri',
  title: 'Senior Android & Mobile Systems Engineer',
  email: 'salar.taheri.mirani@gmail.com',
  linkedin: 'https://linkedin.com/in/salar-taheri',
  github: 'https://github.com/salartaheri',
  website: 'https://salartaheri.dev',
};

export const projects = content.en.projectsSection.projects;

export const seoMeta = {
  title: 'Salar Taheri · Senior Android & Mobile Systems Engineer | Salar Taheri Portfolio',
  description:
    'Senior Android & Mobile Systems Engineer with over 10 years of experience in Fintech, POS hardware integration, ISO 8583 banking protocols, and biometric eKYC pipelines.',
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
    'AIDL',
    'Java Card',
    'Docker',
    'Linux',
    'Ktor',
    'Tehran',
    'Iran',
  ],
};
