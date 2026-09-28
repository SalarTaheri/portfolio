'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  Shield,
  Smartphone,
  Layers,
  CheckCircle2,
  Code2,
  Download,
  Copy,
  Check,
  Cpu,
} from 'lucide-react';
import { content } from '@/data/portfolio';
import { useLanguage } from '@/context/LanguageContext';

type TabType = 'profile' | 'domain' | 'scale';

export default function Hero() {
  const { locale, isRTL } = useLanguage();
  const hero = content[locale].hero;
  const contact = content[locale].contactSection;

  const [activeTab, setActiveTab] = useState<TabType>('profile');
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      // Fallback if clipboard API is unavailable
    }
  };

  return (
    <section id="about" className="relative pt-10 sm:pt-14 md:pt-20 pb-16 md:pb-24 overflow-hidden">
      {/* Background radial glow */}
      <div
        aria-hidden="true"
        className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[radial-gradient(circle_at_50%_20%,rgba(16,185,129,0.15),rgba(6,182,212,0.08)_35%,transparent_70%)] blur-[80px] pointer-events-none z-0"
      />

      <div className="max-w-[var(--container)] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center">
          {/* Left Column: Text & Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[var(--surface-glass)] border border-[var(--border)] backdrop-blur-md mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] shadow-[0_0_10px_var(--accent)] animate-pulse-glow" />
              <span className="text-[13px] font-medium text-[var(--fg-soft)]">
                {hero.status}
              </span>
            </div>

            {/* Title with Gradient Name */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold leading-[1.18] tracking-tight mb-4 text-[var(--fg)]">
              <span>{hero.greeting} </span>
              <span className="text-gradient">{hero.name}</span>
              <span> {hero.titleSuffix}</span>
            </h1>

            {/* Subtitle */}
            <h2 className="text-lg sm:text-2xl font-semibold text-[var(--fg-soft)] mb-5">
              {hero.role}
            </h2>

            {/* Bio Paragraph */}
            <p className="text-[15px] sm:text-[16.5px] text-[var(--muted)] leading-[1.8] max-w-[580px] mb-8">
              {hero.bio}
            </p>

            {/* Action Buttons & Social Icons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8 w-full sm:w-auto">
              {/* Primary: View Projects */}
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-[var(--radius)] bg-[var(--accent)] text-white text-[14.5px] font-semibold shadow-[0_4px_16px_var(--accent-glow)] hover:shadow-[0_6px_22px_var(--accent-glow)] hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>{hero.btnProjects}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              {/* Direct CV Download */}
              <a
                href="/resume.pdf"
                download="Salar_Taheri_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 h-11 px-4.5 rounded-[var(--radius)] bg-[var(--surface)] border border-[var(--border)] text-[var(--fg)] hover:bg-[var(--surface-hover)] hover:border-[var(--border-light)] text-[14px] font-semibold transition-all duration-200 hover:-translate-y-0.5"
                title={hero.downloadCv}
              >
                <Download className="w-4 h-4 text-[var(--accent)]" />
                <span>{hero.downloadCv}</span>
              </a>

              {/* 1-Click Copy Email Button */}
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-2 h-11 px-4 rounded-[var(--radius)] bg-[var(--surface)] border border-[var(--border)] text-[var(--fg-soft)] hover:text-[var(--fg)] hover:bg-[var(--surface-hover)] hover:border-[var(--border-light)] text-[13.5px] font-medium transition-all duration-200 hover:-translate-y-0.5"
                title={hero.copyEmail}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[var(--accent)]" />
                    <span className="text-[var(--accent)] font-semibold">{hero.emailCopied}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[var(--muted)]" />
                    <span>{hero.copyEmail}</span>
                  </>
                )}
              </button>

              {/* Social Icons */}
              <div className="flex items-center gap-2.5">
                <a
                  href={contact.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="inline-flex items-center justify-center w-11 h-11 rounded-[var(--radius)] bg-[var(--surface)] border border-[var(--border)] text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] hover:shadow-[0_4px_12px_var(--accent-glow)] hover:-translate-y-0.5 transition-all duration-200"
                  title="GitHub"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>

                <a
                  href={contact.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="inline-flex items-center justify-center w-11 h-11 rounded-[var(--radius)] bg-[var(--surface)] border border-[var(--border)] text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] hover:shadow-[0_4px_12px_var(--accent-glow)] hover:-translate-y-0.5 transition-all duration-200"
                  title="LinkedIn"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Android Architecture & Kotlin Studio Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Floating Metric Badge 1 */}
            <div className="hidden sm:flex absolute -top-5 -end-4 items-center gap-3 px-4 py-2.5 rounded-[var(--radius)] bg-[var(--surface-glass)] backdrop-blur-md border border-[var(--border-light)] shadow-[var(--card-shadow)] z-20 animate-float-slow">
              <div className="w-9 h-9 rounded-lg bg-[var(--accent-soft)] text-[var(--accent)] flex items-center justify-center">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <div className="font-mono font-bold text-lg text-[var(--fg)] leading-none dir-ltr">
                  {hero.badgeUsers}
                </div>
                <div className="text-[11px] text-[var(--muted)] mt-1 font-medium">
                  {hero.badgeUsersSub}
                </div>
              </div>
            </div>

            {/* Floating Metric Badge 2 */}
            <div className="hidden sm:flex absolute -bottom-5 -start-4 items-center gap-3 px-4 py-2.5 rounded-[var(--radius)] bg-[var(--surface-glass)] backdrop-blur-md border border-[var(--border-light)] shadow-[var(--card-shadow)] z-20 animate-float-slow [animation-delay:2s]">
              <div className="w-9 h-9 rounded-lg bg-[var(--cyan-soft)] text-[var(--cyan)] flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <div className="font-mono font-bold text-lg text-[var(--fg)] leading-none dir-ltr">
                  {hero.badgeStability}
                </div>
                <div className="text-[11px] text-[var(--muted)] mt-1 font-medium">
                  {hero.badgeStabilitySub}
                </div>
              </div>
            </div>

            {/* Android Studio / Kotlin Architecture Window */}
            <div className="rounded-[var(--radius-lg)] bg-[var(--surface)] border border-[var(--border-light)] hover:border-[rgba(var(--accent-rgb),0.4)] shadow-[var(--card-shadow)] hover:shadow-[0_20px_40px_-15px_var(--accent-glow)] overflow-hidden transition-all duration-300">
              {/* Window Header */}
              <div className="px-4 py-3 bg-[var(--bg-elevated)] border-b border-[var(--border)] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]" />
                </div>

                {/* Editor File Tabs */}
                <div className="flex items-center gap-1.5 [direction:ltr]">
                  <button
                    type="button"
                    onClick={() => setActiveTab('profile')}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11.5px] font-mono transition-all duration-200 ${
                      activeTab === 'profile'
                        ? 'bg-[var(--surface)] border border-[var(--border)] text-[var(--fg)] shadow-sm'
                        : 'text-[var(--muted)] hover:text-[var(--fg-soft)]'
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-[#a855f7]" />
                    <span>ProfileScreen.kt</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab('domain')}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11.5px] font-mono transition-all duration-200 ${
                      activeTab === 'domain'
                        ? 'bg-[var(--surface)] border border-[var(--border)] text-[var(--fg)] shadow-sm'
                        : 'text-[var(--muted)] hover:text-[var(--fg-soft)]'
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-[var(--cyan)]" />
                    <span>DomainFlow.kt</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab('scale')}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11.5px] font-mono transition-all duration-200 ${
                      activeTab === 'scale'
                        ? 'bg-[var(--surface)] border border-[var(--border)] text-[var(--fg)] shadow-sm'
                        : 'text-[var(--muted)] hover:text-[var(--fg-soft)]'
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
                    <span>SystemScale.kt</span>
                  </button>
                </div>

                {/* Build Status Indicator */}
                <div className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-mono text-[var(--accent)] font-semibold [direction:ltr]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>BUILD SUCCESSFUL</span>
                </div>
              </div>

              {/* Window Body: Clean Kotlin Architecture Snippet */}
              <div className="p-5 font-mono text-[12.5px] sm:text-[13px] [direction:ltr] text-left leading-relaxed overflow-x-auto min-h-[265px]">
                <AnimatePresence mode="wait">
                  {activeTab === 'profile' && (
                    <motion.div
                      key="profile"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="text-[#64748b]">{'// Android Clean Architecture & Compose Stack'}</div>
                      <div className="mt-1">
                        <span className="text-[#f59e0b]">@Composable</span>
                      </div>
                      <div>
                        <span className="text-[#06b6d4]">fun</span>{' '}
                        <span className="text-[var(--fg)] font-semibold">MobileArchitectProfile</span>() {'{'}
                      </div>

                      <div className="ps-4 space-y-0.5 my-1 text-[var(--fg-soft)]">
                        <div>
                          <span className="text-[#64748b]">val</span> uiState <span className="text-[#06b6d4]">by</span> viewModel.state.<span className="text-[#10b981]">collectAsStateWithLifecycle</span>()
                        </div>

                        <div className="pt-1">
                          <span className="text-[var(--accent)] font-semibold">CleanArchitectureStack</span>(
                        </div>
                        <div className="ps-4 space-y-0.5 text-[12px]">
                          <div>
                            <span className="text-[#06b6d4]">ui</span> = JetpackCompose + Material3,
                          </div>
                          <div>
                            <span className="text-[#06b6d4]">core</span> = Coroutines + StateFlow + MVI,
                          </div>
                          <div>
                            <span className="text-[#06b6d4]">domain</span> = UseCases + DomainDrivenDesign,
                          </div>
                          <div>
                            <span className="text-[#06b6d4]">data</span> = RoomDB + KtorClient + OfflineFirst,
                          </div>
                          <div>
                            <span className="text-[#06b6d4]">scale</span> = ProductionScale(
                          </div>
                          <div className="ps-4 text-[11.5px] text-[var(--muted)]">
                            <div>verifiedUsers = <span className="text-[#10b981]">&quot;2.5M+ Active&quot;</span>,</div>
                            <div>stabilityRate = <span className="text-[#10b981]">&quot;99.8% Crash-Free&quot;</span>,</div>
                            <div>security = AndroidKeystore + R8</div>
                          </div>
                          <div>)</div>
                        </div>
                        <div>)</div>
                      </div>

                      <div>{'}'}</div>
                    </motion.div>
                  )}

                  {activeTab === 'domain' && (
                    <motion.div
                      key="domain"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="text-[#64748b]">{'// Domain-Driven Design & High-Throughput Flows'}</div>
                      <div className="mt-1">
                        <span className="text-[#06b6d4]">class</span>{' '}
                        <span className="text-[var(--fg)] font-semibold">VerifyBiometricUseCase</span>{' '}
                        <span className="text-[#f59e0b]">@Inject</span> constructor(
                      </div>
                      <div className="ps-4 text-[12px] text-[var(--fg-soft)]">
                        <div><span className="text-[#64748b]">private val</span> cryptoRepo: CryptoRepository,</div>
                        <div><span className="text-[#64748b]">private val</span> dispatcher: CoroutineDispatcher = Dispatchers.IO</div>
                      </div>
                      <div>) {'{'}</div>
                      <div className="ps-4 space-y-0.5 my-1 text-[var(--fg-soft)]">
                        <div>
                          <span className="text-[#06b6d4]">operator fun</span> <span className="text-[var(--accent)] font-semibold">invoke</span>(payload: BiometricPacket): Flow&lt;AuthResult&gt; =
                        </div>
                        <div className="ps-4 space-y-0.5 text-[12px]">
                          <div><span className="text-[#06b6d4]">flow</span> {'{'}</div>
                          <div className="ps-4">
                            <div><span className="text-[#10b981]">emit</span>(AuthResult.ValidatingHardware)</div>
                            <div><span className="text-[#64748b]">val</span> envelope = cryptoRepo.<span className="text-[#10b981]">signWithKeystore</span>(payload)</div>
                            <div><span className="text-[#64748b]">val</span> result = cryptoRepo.<span className="text-[#10b981]">verifyNationalSwitch</span>(envelope)</div>
                            <div><span className="text-[#10b981]">emit</span>(AuthResult.Success(result.sessionToken))</div>
                          </div>
                          <div>{'}'}.<span className="text-[#06b6d4]">flowOn</span>(dispatcher)</div>
                        </div>
                      </div>
                      <div>{'}'}</div>
                    </motion.div>
                  )}

                  {activeTab === 'scale' && (
                    <motion.div
                      key="scale"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="text-[#64748b]">{'// Production Scale & Security Hardening Telemetry'}</div>
                      <div className="mt-1">
                        <span className="text-[#06b6d4]">object</span>{' '}
                        <span className="text-[var(--fg)] font-semibold">ProductionSystemMetrics</span> {'{'}
                      </div>
                      <div className="ps-4 space-y-1 my-1 text-[12px] text-[var(--fg-soft)]">
                        <div>
                          <span className="text-[#64748b]">const val</span> EKYC_ACTIVE_USERS = <span className="text-[#10b981]">&quot;2,500,000+&quot;</span>
                        </div>
                        <div>
                          <span className="text-[#64748b]">const val</span> CRASH_FREE_RATE = <span className="text-[#10b981]">&quot;99.8% over 1,000+ models&quot;</span>
                        </div>
                        <div>
                          <span className="text-[#64748b]">const val</span> INTERBANK_LATENCY = <span className="text-[#10b981]">&quot;&lt;200ms ISO 8583&quot;</span>
                        </div>
                        <div className="pt-1.5">
                          <span className="text-[#64748b]">val</span> SecurityGuards = <span className="text-[#06b6d4]">listOf</span>(
                        </div>
                        <div className="ps-4 text-[11.5px] text-[var(--muted)]">
                          <div>HardwareSecurity.ANDROID_KEYSTORE_TEE,</div>
                          <div>CodeIntegrity.PROGUARD_R8_OBFUSCATION,</div>
                          <div>NetworkSecurity.CERTIFICATE_PINNING_TLS</div>
                        </div>
                        <div>)</div>
                      </div>
                      <div>{'}'}</div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Telemetry Architecture Badges */}
                <div className="mt-5 pt-3.5 border-t border-[var(--border)] flex flex-wrap gap-2 text-[11px] font-sans">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[var(--accent-soft)] text-[var(--accent)] border border-[rgba(var(--accent-rgb),0.2)] font-medium">
                    <Code2 className="w-3.5 h-3.5" />
                    <span>Jetpack Compose</span>
                  </span>

                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[var(--cyan-soft)] text-[var(--cyan)] border border-[rgba(6,182,212,0.2)] font-medium">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Clean Architecture & MVI</span>
                  </span>

                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[var(--bg)] text-[var(--fg-soft)] border border-[var(--border)] font-medium">
                    <Shield className="w-3.5 h-3.5" />
                    <span>Keystore & R8 Hardened</span>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
