'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Cpu, CheckCircle2, Zap, Layers, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import SpotlightCard from '@/components/SpotlightCard';

export default function AndroidFrameBudget() {
  const { locale, isRTL } = useLanguage();
  const [hzMode, setHzMode] = useState<'120' | '60'>('120');

  const deadline = hzMode === '120' ? 8.3 : 16.6;
  const execution = 7.6;
  const headroom = (deadline - execution).toFixed(1);
  const percentage = Math.round((execution / deadline) * 100);

  const stages = [
    { name: 'Input', duration: 0.8, color: '#10b981', desc: 'Touch dispatch & Choreographer' },
    { name: 'Animation', duration: 1.2, color: '#06b6d4', desc: 'Compose animations & transitions' },
    { name: 'Measure & Layout', duration: 1.9, color: '#6366f1', desc: 'Single-pass Compose layout' },
    { name: 'Draw', duration: 1.6, color: '#f59e0b', desc: 'DisplayList recording' },
    { name: 'RenderThread / GPU', duration: 2.1, color: '#ec4899', desc: 'Vulkan/GL command flush' },
  ];

  return (
    <div className="mt-8">
      <SpotlightCard className="p-6 sm:p-8 rounded-[var(--radius-lg)] border border-[var(--border-light)] shadow-[var(--card-shadow)] bg-gradient-to-br from-[var(--surface)] to-[var(--bg-elevated)] overflow-hidden">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[var(--border)]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-[10px] bg-[var(--accent-soft)] text-[var(--accent)] flex items-center justify-center flex-shrink-0 shadow-sm">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-[17px] sm:text-[19px] text-[var(--fg)] tracking-tight">
                  {locale === 'fa'
                    ? 'بودجه زمانی فریم و Choreographer در اندروید'
                    : 'Android Choreographer & Frame Budget Architecture'}
                </h3>
                <span className="font-mono text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[var(--accent-soft)] text-[var(--accent)] border border-[rgba(var(--accent-rgb),0.3)] [direction:ltr]">
                  Jank &lt; 0.1%
                </span>
              </div>
              <p className="text-[13px] text-[var(--muted)] mt-1">
                {locale === 'fa'
                  ? 'مهندسی عملکرد و رندرینگ بلادرنگ VSYNC در مقیاس ۲.۵ میلیون کاربر فعال'
                  : 'Real-time VSYNC pipeline optimization & frame telemetry across 2.5M+ active users'}
              </p>
            </div>
          </div>

          {/* Refresh Rate Mode Switcher */}
          <div className="flex items-center gap-1.5 p-1 rounded-lg bg-[var(--bg)] border border-[var(--border)] self-start sm:self-auto [direction:ltr]">
            <button
              type="button"
              onClick={() => setHzMode('120')}
              className={`px-3 py-1.5 rounded-md font-mono text-[12px] font-bold transition-all duration-200 ${
                hzMode === '120'
                  ? 'bg-[var(--accent)] text-white shadow-sm'
                  : 'text-[var(--muted)] hover:text-[var(--fg)]'
              }`}
            >
              120 Hz (8.3ms)
            </button>
            <button
              type="button"
              onClick={() => setHzMode('60')}
              className={`px-3 py-1.5 rounded-md font-mono text-[12px] font-bold transition-all duration-200 ${
                hzMode === '60'
                  ? 'bg-[var(--accent)] text-white shadow-sm'
                  : 'text-[var(--muted)] hover:text-[var(--fg)]'
              }`}
            >
              60 Hz (16.6ms)
            </button>
          </div>
        </div>

        {/* Telemetry Visualizer Bar */}
        <div className="py-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 [direction:ltr]">
            <div className="flex items-center gap-2">
              <span className="text-[13.5px] font-mono font-bold text-[var(--fg)]">
                Frame Execution Time:
              </span>
              <span className="text-[14px] font-mono font-bold text-[var(--accent)]">
                {execution}ms
              </span>
              <span className="text-[12px] text-[var(--muted)]">
                / {deadline}ms budget ({percentage}%)
              </span>
            </div>

            <div className="inline-flex items-center gap-1.5 font-mono text-[12px] text-[var(--accent)] font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>+{headroom}ms Safety Headroom (Zero Jank)</span>
            </div>
          </div>

          {/* Multi-Segment Stacked Progress Bar */}
          <div className="w-full h-4 sm:h-5 rounded-full bg-[var(--bg)] border border-[var(--border)] p-0.5 flex overflow-hidden shadow-inner [direction:ltr]">
            {stages.map((stage, idx) => {
              const widthPct = (stage.duration / deadline) * 100;
              return (
                <div
                  key={idx}
                  style={{ width: `${widthPct}%`, backgroundColor: stage.color }}
                  className="h-full first:rounded-s-full transition-all duration-500 hover:opacity-90 relative group"
                  title={`${stage.name}: ${stage.duration}ms`}
                />
              );
            })}
            {/* Free Headroom Remaining Space */}
            <div
              style={{ width: `${100 - percentage}%` }}
              className="h-full bg-transparent flex items-center justify-center"
            />
          </div>

          {/* Stage Legend */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mt-4 pt-2">
            {stages.map((stage, idx) => (
              <div key={idx} className="flex items-start gap-2 text-[12px] [direction:ltr]">
                <span
                  className="w-2.5 h-2.5 rounded-full mt-1 flex-shrink-0"
                  style={{ backgroundColor: stage.color }}
                />
                <div className="leading-tight">
                  <div className="font-mono font-semibold text-[var(--fg)]">
                    {stage.name} ({stage.duration}ms)
                  </div>
                  <div className="text-[11px] text-[var(--muted)] mt-0.5">{stage.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3 Core Architecture Safeguards */}
        <div className="pt-5 border-t border-[var(--border)] grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-3.5 rounded-[var(--radius)] bg-[var(--bg)] border border-[var(--border)]">
            <div className="flex items-center gap-2 mb-1.5 text-[var(--accent)] font-semibold text-[13px]">
              <Zap className="w-4 h-4" />
              <span>Baseline Profiles & PGO</span>
            </div>
            <p className="text-[12px] text-[var(--muted)] leading-relaxed">
              {locale === 'fa'
                ? 'کامپایل پیش‌دستانه AOT بخش‌های بحرانی برای حذف کامل لکنت‌های ناشی از کامپایل درجا (JIT).'
                : 'Pre-compiled Ahead-Of-Time (AOT) critical code paths eliminating JIT stutters on cold frames.'}
            </p>
          </div>

          <div className="p-3.5 rounded-[var(--radius)] bg-[var(--bg)] border border-[var(--border)]">
            <div className="flex items-center gap-2 mb-1.5 text-[var(--cyan)] font-semibold text-[13px]">
              <Layers className="w-4 h-4" />
              <span>Smart Recomposition</span>
            </div>
            <p className="text-[12px] text-[var(--muted)] leading-relaxed">
              {locale === 'fa'
                ? 'استفاده از derivedStateOf و کلیدهای پایدار جهت ایزوله‌سازی رندر و جلوگیری از Recompose غیرضروری.'
                : 'Strict @Stable models and derivedStateOf reducing redundant compose passes to near zero.'}
            </p>
          </div>

          <div className="p-3.5 rounded-[var(--radius)] bg-[var(--bg)] border border-[var(--border)]">
            <div className="flex items-center gap-2 mb-1.5 text-[var(--amber)] font-semibold text-[13px]">
              <ShieldCheck className="w-4 h-4" />
              <span>Zero Main-Thread IO</span>
            </div>
            <p className="text-[12px] text-[var(--muted)] leading-relaxed">
              {locale === 'fa'
                ? 'تضمین ایزولاسیون کامل دیسک و شبکه با کورتین‌های IO و نظارت دائم با StrictMode.'
                : 'Zero disk/network access on the Main Thread guaranteed by StrictMode and Coroutine IO Dispatchers.'}
            </p>
          </div>
        </div>
      </SpotlightCard>
    </div>
  );
}
