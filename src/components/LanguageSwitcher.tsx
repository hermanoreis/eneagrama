"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { locales, type Locale } from "../i18n/config";
import { switchLocalePath } from "../i18n/pathnames";
import { useI18n } from "../i18n/provider";

function TranslateIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
      <path
        d="M4 5h9M8.5 5v2.2c0 3.3-2.2 5.8-5.5 7.2M12 9.2H4.4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 19 17 11l3.5 8M14.8 16.2h5.4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function canHoverOpen() {
  return typeof window !== "undefined" && window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

export function LanguageSwitcher() {
  const { locale, messages } = useI18n();
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const openedByPointer = useRef(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      openedByPointer.current = false;
      setOpen(false);
      button.current?.focus();
    }
    function onPointer(event: PointerEvent) {
      if (!root.current?.contains(event.target as Node)) {
        openedByPointer.current = false;
        setOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  return (
    <div
      ref={root}
      className="language-switcher"
      onMouseEnter={() => {
        if (canHoverOpen()) setOpen(true);
      }}
      onMouseLeave={() => {
        if (canHoverOpen() && !openedByPointer.current) setOpen(false);
      }}
    >
      <button
        ref={button}
        type="button"
        className="language-switcher-button"
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-controls={menuId}
        aria-label={messages.language}
        title={messages.language}
        onClick={() => {
          setOpen((value) => {
            const next = !value;
            openedByPointer.current = next;
            return next;
          });
        }}
      >
        <TranslateIcon />
      </button>
      {open ? (
        <div id={menuId} role="dialog" aria-label={messages.language} className="language-switcher-panel">
          <ul className="language-switcher-list">
            {locales.map((item: Locale) => {
              const href = switchLocalePath(pathname, item);
              const current = item === locale;
              return (
                <li key={item}>
                  <Link
                    href={href}
                    hrefLang={item}
                    aria-current={current ? "page" : undefined}
                    className={current ? "language-switcher-option is-current" : "language-switcher-option"}
                    onClick={() => {
                      openedByPointer.current = false;
                      setOpen(false);
                    }}
                  >
                    {messages.languages[item]}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
