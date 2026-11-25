import React, { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

// Each step is a typed command followed by its printed output lines.
const SCRIPT = [
  {
    cmd: "whoami",
    out: [{ text: "Hasnain Iqbal · Full Stack Developer", tone: "strong" }],
  },
  {
    cmd: "cat stack.txt",
    out: [
      { text: "frontend  React · Next.js · React Native" },
      { text: "backend   Node.js · Express · Prisma" },
      { text: "data      PostgreSQL · MongoDB" },
    ],
  },
  {
    cmd: "git log --oneline --author=hasnain",
    out: [
      { text: "a1f3c2e", tone: "hash", rest: " Full Stack Developer @ Metaviz (HEAD)" },
      { text: "7be91d0", tone: "hash", rest: " Front End & Mobile Dev @ mCode Technology" },
      { text: "3c0d4a9", tone: "hash", rest: " Front End Developer @ Senew Tech" },
    ],
  },
  {
    cmd: "status --availability",
    out: [{ text: "● open to new opportunities · remote & on-site", tone: "ok" }],
  },
];

const TYPE_MS = 38; // per character
const OUTPUT_DELAY_MS = 260; // pause before output prints
const NEXT_CMD_DELAY_MS = 650; // pause before next command starts

const toneClass = {
  strong: "text-white",
  ok: "text-emerald-400",
  hash: "text-amber-300",
};

function OutputLine({ line }) {
  return (
    <div className={toneClass[line.tone] || "text-neutral-400"}>
      {line.text}
      {line.rest && <span className="text-neutral-300">{line.rest}</span>}
    </div>
  );
}

export default function Terminal() {
  const reduceMotion = useReducedMotion();
  // step = index of the command being typed; chars = characters typed so far;
  // printed = whether that step's output is visible.
  const [state, setState] = useState({ step: 0, chars: 0, printed: false });

  useEffect(() => {
    if (reduceMotion) return;
    const { step, chars, printed } = state;
    if (step >= SCRIPT.length) return;
    const cmd = SCRIPT[step].cmd;

    let delay;
    let next;
    if (chars < cmd.length) {
      delay = chars === 0 ? 500 : TYPE_MS;
      next = { step, chars: chars + 1, printed: false };
    } else if (!printed) {
      delay = OUTPUT_DELAY_MS;
      next = { step, chars, printed: true };
    } else {
      delay = NEXT_CMD_DELAY_MS;
      next = { step: step + 1, chars: 0, printed: false };
    }
    const t = setTimeout(() => setState(next), delay);
    return () => clearTimeout(t);
  }, [state, reduceMotion]);

  const view = reduceMotion ? { step: SCRIPT.length, chars: 0, printed: false } : state;
  const done = view.step >= SCRIPT.length;

  return (
    <div
      className="w-full rounded-xl border border-neutral-800 bg-[#0A0A0A] font-mono text-[12.5px] sm:text-[13px] leading-6 overflow-hidden"
      role="img"
      aria-label="Terminal showing Hasnain Iqbal's role, tech stack, work history and availability"
    >
      {/* Window bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-neutral-800 bg-neutral-900/60">
        <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
        <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
        <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
        <span className="ml-3 text-xs text-neutral-500">hasnain@portfolio: ~</span>
      </div>

      {/* Body: fixed min-height so the hero doesn't jump while typing */}
      <div className="p-4 sm:p-5 min-h-[330px]" aria-hidden="true">
        {SCRIPT.map((s, i) => {
          if (i > view.step) return null;
          const isCurrent = i === view.step && !done;
          const typed = isCurrent ? s.cmd.slice(0, view.chars) : s.cmd;
          const showOutput = !isCurrent || view.printed;
          return (
            <div key={s.cmd} className={i > 0 ? "mt-3" : ""}>
              <div className="text-neutral-200">
                <span className="text-neutral-500">~</span>
                <span className="text-neutral-500"> $ </span>
                {typed}
                {isCurrent && !view.printed && <span className="terminal-cursor" />}
              </div>
              {showOutput && s.out.map((line) => <OutputLine key={line.text} line={line} />)}
            </div>
          );
        })}
        {done && (
          <div className="mt-3 text-neutral-200">
            <span className="text-neutral-500">~</span>
            <span className="text-neutral-500"> $ </span>
            <span className="terminal-cursor" />
          </div>
        )}
      </div>
    </div>
  );
}
