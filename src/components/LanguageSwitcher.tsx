"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { locales, type Locale } from "../i18n/config";
import { switchLocalePath } from "../i18n/pathnames";
import { useI18n } from "../i18n/provider";

const FINE_HOVER = "(hover: hover) and (pointer: fine)";

function prefersHovercard() {
  if (window.matchMedia(FINE_HOVER).matches) return true;
  const knowsPointer =
    window.matchMedia("(pointer: fine)").matches || window.matchMedia("(pointer: coarse)").matches;
  if (knowsPointer) return false;
  return window.innerWidth >= 700 && navigator.maxTouchPoints === 0;
}

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

function closeMenu(setOpen: (value: boolean) => void, openedByPointer: { current: boolean }) {
  openedByPointer.current = false;
  setOpen(false);
}

export function LanguageSwitcher() {
  const { locale, messages } = useI18n();
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const [fineHover, setFineHover] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const openedByPointer = useRef(false);
  const menuId = useId();

  useEffect(() => {
    const media = window.matchMedia(FINE_HOVER);
    const sync = () => setFineHover(prefersHovercard());
    sync();
    media.addEventListener("change", sync);
    window.addEventListener("resize", sync);
    return () => {
      media.removeEventListener("change", sync);
      window.removeEventListener("resize", sync);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      closeMenu(setOpen, openedByPointer);
      button.current?.focus();
    }
    function onPointer(event: PointerEvent) {
      if (!root.current?.contains(event.target as Node)) {
        closeMenu(setOpen, openedByPointer);
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
      className={`language-switcher${fineHover ? " is-hovercard" : " is-dialog"}`}
      onMouseEnter={() => {
        if (fineHover) setOpen(true);
      }}
      onMouseLeave={() => {
        if (fineHover && !openedByPointer.current) setOpen(false);
      }}
    >
      <button
        ref={button}
        type="button"
        className="language-switcher-button"
        aria-expanded={open}
        aria-haspopup={fineHover ? "true" : "dialog"}
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
      {open && !fineHover ? (
        <button
          type="button"
          className="language-switcher-backdrop"
          aria-label={messages.language}
          tabIndex={-1}
          onClick={() => closeMenu(setOpen, openedByPointer)}
        />
      ) : null}
      {open ? (
        <div
          id={menuId}
          role={fineHover ? "group" : "dialog"}
          aria-modal={fineHover ? undefined : true}
          aria-label={messages.language}
          className="language-switcher-panel"
        >
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
                    onClick={() => closeMenu(setOpen, openedByPointer)}
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
