import Link from "next/link";
import { getPack } from "../data/pack";
import { interpolate } from "../i18n/format";
import { href } from "../i18n/pathnames";
import type { Locale } from "../i18n/config";
import { getMessages } from "../messages";
import { TypeAvatar } from "./TypeAvatar";
import { PaperMotion } from "./PaperMotion";

export function TypeGallery({ locale, headingLevel = 3 }: { locale: Locale; headingLevel?: 2 | 3 }) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  const pack = getPack(locale);
  const m = getMessages(locale);
  return (
    <PaperMotion className="type-gallery">
      {pack.types.map((type) => (
        <Link key={type.id} href={href(locale, "type", { id: type.id })} className="type-card paper-interactive">
          <TypeAvatar id={type.id} size={160} />
          <div className="type-card-copy">
            <p className="type-number">{interpolate(m.home.galleryType, { id: type.id })}</p>
            <Heading className="font-display text-2xl">{type.name}</Heading>
            <p className="mt-3 text-sm leading-relaxed text-[color:var(--ink-soft)]">{pack.typeIntroductions[type.id]}</p>
            <span className="type-card-link">
              {m.home.galleryLink}
            </span>
          </div>
        </Link>
      ))}
    </PaperMotion>
  );
}
