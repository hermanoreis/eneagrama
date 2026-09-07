import Image from "next/image";
import Link from "next/link";
import { types } from "../data/types";
import { TypeAvatar } from "./TypeAvatar";
import { PaperMotion } from "./PaperMotion";

export function PaperFamily() {
  return (
    <PaperMotion className="paper-family">
      <Image src="/images/characters/stage.webp" alt="" width={1024} height={1024} sizes="(max-width: 767px) 92vw, 600px" loading="eager" className="paper-stage" />
      <nav className="paper-family-characters" aria-label="Explore os nove tipos">
        {types.map((type) => (
          <Link key={type.id} href={`/tipos/${type.id}`} aria-label={`Conhecer o tipo ${type.id}: ${type.name}`} className={`paper-family-member paper-interactive paper-family-member-${type.id}`}>
            <TypeAvatar id={type.id} size={180} eager />
            <span className="paper-family-label">{type.id} · {type.name}</span>
          </Link>
        ))}
      </nav>
      <p className="paper-family-caption">Nove formas de olhar para si.</p>
    </PaperMotion>
  );
}
