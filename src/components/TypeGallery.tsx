import Link from "next/link";
import { types } from "../data/types";
import { typeIntroductions } from "../data/copy";
import { TypeAvatar } from "./TypeAvatar";
import { PaperMotion } from "./PaperMotion";

export function TypeGallery({ headingLevel = 3 }: { headingLevel?: 2 | 3 }) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  return (
    <PaperMotion className="type-gallery">
      {types.map((type) => (
        <Link key={type.id} href={`/tipos/${type.id}`} className="type-card paper-interactive">
          <TypeAvatar id={type.id} size={160} />
          <div className="type-card-copy">
            <p className="type-number">Tipo {type.id}</p>
            <Heading className="font-display text-2xl">{type.name}</Heading>
            <p className="mt-3 text-sm leading-relaxed text-[color:var(--ink-soft)]">{typeIntroductions[type.id]}</p>
            <span className="type-card-link">Conhecer o tipo <span aria-hidden="true">↗</span></span>
          </div>
        </Link>
      ))}
    </PaperMotion>
  );
}
