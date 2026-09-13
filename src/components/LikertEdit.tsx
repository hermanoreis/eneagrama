"use client";

import type { LikertQuestion } from "@/data/schema";
import { useI18n } from "@/i18n/provider";

export function LikertEdit({
  question,
  value,
  onChange,
}: {
  question: LikertQuestion;
  value: number;
  onChange: (value: number) => void;
}) {
  const { messages: m, pack, t } = useI18n();
  return (
    <li className="border-t border-[color:var(--line)] pt-5">
      <p className="font-display text-lg leading-snug text-[color:var(--ink)]">{question.text}</p>
      <div className="mt-4 grid grid-cols-5 gap-1.5" role="radiogroup" aria-label={t(m.test.itemAria, { id: question.id })}>
        {pack.SCALE.map((option) => {
          const on = value === option.value;
          return (
            <button
              key={option.value}
              type="button"
              role="radio"
              aria-checked={on}
              onClick={() => onChange(option.value)}
              className={`rounded-xl border px-1 py-2.5 text-center text-[11px] leading-tight sm:text-xs ${
                on
                  ? "border-[color:var(--ink)] bg-[color:var(--ink)] text-[color:var(--paper)]"
                  : "border-[color:var(--line)] bg-[color:var(--paper)] text-[color:var(--ink-soft)] hover:border-[color:var(--ink)]"
              }`}
            >
              <span className="block font-display text-base sm:text-lg">{option.value}</span>
              {option.label}
            </button>
          );
        })}
      </div>
    </li>
  );
}
