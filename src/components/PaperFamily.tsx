import Image from "next/image";
import Link from "next/link";
import { getPack } from "../data/pack";
import type { Locale } from "../i18n/config";
import { interpolate } from "../i18n/format";
import { href } from "../i18n/pathnames";
import { getMessages } from "../messages";
import { TypeAvatar } from "./TypeAvatar";
import { PaperMotion } from "./PaperMotion";

export function PaperFamily({ locale }: { locale: Locale }) {
  const pack = getPack(locale);
  const m = getMessages(locale).home;
  return (
    <PaperMotion className="paper-family">
      <Image src="/images/characters/stage.webp" alt="" width={1024} height={1024} sizes="(max-width: 767px) 92vw, 600px" loading="eager" className="paper-stage" />
      <nav className="paper-family-characters" aria-label={m.stageNav}>
        {pack.types.map((type) => (
          <Link
            key={type.id}
            href={href(locale, "type", { id: type.id })}
            aria-label={interpolate(m.stageType, { id: type.id, name: type.name })}
            className={`paper-family-member paper-interactive paper-family-member-${type.id}`}
          >
            <TypeAvatar id={type.id} size={180} eager />
            <span className="paper-family-label">{type.id} · {type.name}</span>
          </Link>
        ))}
      </nav>
      <p className="paper-family-caption">{m.stageCaption}</p>
    </PaperMotion>
  );
}
