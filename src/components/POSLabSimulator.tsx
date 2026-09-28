'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Zap, Printer, RotateCcw } from 'lucide-react';
import { content, LabAction } from '@/data/portfolio';
import { useLanguage } from '@/context/LanguageContext';

interface TerminalLog {
  id: string;
  time: string;
  text: string;
  color: string;
}

export default function POSLabSimulator() {
  const { locale, isRTL } = useLanguage();
  const lab = content[locale].labSection;

  const [currentTime, setCurrentTime] = useState('12:00:00');
  const [logs, setLogs] = useState<TerminalLog[]>([]);
  const [isExecuting, setIsExecuting] = useState(false);
  const terminalRef = useRef<HTMLDivElement | null>(null);

  // Live clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toTimeString().split(' ')[0]);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Initial welcome logs
  useEffect(() => {
    setLogs([
      {
        id: 'init-1',
        time: new Date().toTimeString().split(' ')[0],
        text: lab.initialStatus,
        color: '#10b981',
      },
      {
        id: 'init-2',
        time: new Date().toTimeString().split(' ')[0],
        text: lab.initialNfc,
        color: '#06b6d4',
      },
      {
        id: 'init-3',
        time: new Date().toTimeString().split(' ')[0],
        text: lab.initialPrompt,
        color: '#94a3b8',
      },
    ]);
  }, [lab]);

  // Auto-scroll terminal
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [logs]);

  const handleAction = (action: LabAction) => {
    if (action.id === 'reset') {
      setLogs([
        {
          id: `reset-${Date.now()}`,
          time: new Date().toTimeString().split(' ')[0],
          text: '[CLEARED] Terminal buffer reset. Listening for AIDL events...',
          color: '#64748b',
        },
      ]);
      return;
    }

    if (isExecuting) return;
    setIsExecuting(true);

    action.logs.forEach((logItem) => {
      setTimeout(() => {
        setLogs((prev) => [
          ...prev,
          {
            id: `log-${Date.now()}-${Math.random()}`,
            time: new Date().toTimeString().split(' ')[0],
            text: logItem.text,
            color: logItem.color,
          },
        ]);
      }, logItem.delay);
    });

    const maxDelay = Math.max(...action.logs.map((l) => l.delay));
    setTimeout(() => {
      setIsExecuting(false);
    }, maxDelay + 200);
  };

  return (
    <section id="simulator" className="py-16 md:py-24 relative">
      <div className="max-w-[var(--container)] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-[680px] mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-[12.5px] uppercase tracking-wider text-[var(--accent)] bg-[var(--accent-soft)] px-3.5 py-1.5 rounded-full border border-[rgba(var(--accent-rgb),0.25)] mb-3.5">
            {lab.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--fg)] tracking-tight mb-3.5">
            {lab.title}
          </h2>
          <p className="text-[15px] sm:text-[17px] text-[var(--muted)] leading-relaxed">
            {lab.subtitle}
          </p>
        </div>

        {/* Main Lab Box */}
        <div className="rounded-[var(--radius-lg)] bg-gradient-to-br from-[var(--surface)] to-[var(--bg-elevated)] border border-[var(--border-light)] p-6 sm:p-10 shadow-[var(--card-shadow)] relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            {/* Controls Side */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--fg)] mb-3">
                {lab.controlsTitle}
              </h3>
              <p className="text-[14px] sm:text-[14.5px] text-[var(--muted)] leading-relaxed mb-6">
                {lab.controlsDesc}
              </p>

              <div className="flex flex-col gap-3">
                {lab.actions
                  .filter((a) => a.id !== 'reset')
                  .map((action) => (
                    <button
                      key={action.id}
                      disabled={isExecuting}
                      onClick={() => handleAction(action)}
                      className="w-full flex items-center justify-between p-3.5 rounded-[var(--radius)] bg-[var(--surface)] hover:bg-[var(--surface-hover)] border border-[var(--border)] hover:border-[var(--accent)] text-start transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed group shadow-sm"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-lg">
                          {action.id === 'tap_card' ? (
                            <CreditCard className="w-5 h-5 text-[var(--accent)]" />
                          ) : action.id === 'balance' ? (
                            <Zap className="w-5 h-5 text-[var(--cyan)]" />
                          ) : (
                            <Printer className="w-5 h-5 text-[var(--amber)]" />
                          )}
                        </span>
                        <strong className="text-[13.5px] sm:text-[14px] font-semibold text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors">
                          {action.label}
                        </strong>
                      </div>
                      <span className="font-mono text-[11.5px] text-[var(--muted)] group-hover:text-[var(--fg)] transition-colors [direction:ltr]">
                        {action.subLabel}
                      </span>
                    </button>
                  ))}

                {/* Reset button */}
                {lab.actions
                  .filter((a) => a.id === 'reset')
                  .map((action) => (
                    <button
                      key={action.id}
                      onClick={() => handleAction(action)}
                      className="w-full flex items-center justify-center gap-2 p-2.5 rounded-[var(--radius)] bg-transparent border border-dashed border-[var(--border)] hover:border-[var(--border-light)] text-[var(--muted)] hover:text-[var(--fg)] text-[13px] font-medium transition-colors"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>{action.label}</span>
                    </button>
                  ))}
              </div>
            </div>

            {/* Terminal Screen Simulation Side */}
            <div>
              <div className="relative rounded-[20px] bg-[#050b14] border-[8px] border-[#1e293b] p-5 shadow-[inset_0_0_30px_rgba(0,0,0,0.8),0_10px_30px_rgba(0,0,0,0.5)] min-h-[320px] flex flex-col overflow-hidden">
                {/* Scanlines Effect */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.15),rgba(0,0,0,0.15)_1px,transparent_1px,transparent_2px)] pointer-events-none z-10"
                />

                {/* Terminal Header Bar */}
                <div className="pb-2 mb-3 border-b border-dashed border-[#1e293b] flex items-center justify-between text-[11.5px] font-mono text-[#64748b] [direction:ltr]">
                  <span>DEVICE: {lab.terminalDevice}</span>
                  <span className="text-[var(--accent)] font-semibold">{currentTime}</span>
                </div>

                {/* Terminal Log Stream */}
                <div
                  ref={terminalRef}
                  className="flex-grow font-mono text-[12.5px] [direction:ltr] text-left leading-relaxed space-y-1.5 overflow-y-auto max-h-[250px] pe-2"
                >
                  {logs.map((log) => (
                    <div key={log.id} style={{ color: log.color }} className="break-words">
                      <span className="text-[#475569] me-1.5">[{log.time}]</span>
                      {log.text}
                    </div>
                  ))}
                  {isExecuting && (
                    <div className="text-[var(--cyan)] animate-pulse flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[var(--cyan)]" />
                      <span>Streaming APDU / ISO socket payload...</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
