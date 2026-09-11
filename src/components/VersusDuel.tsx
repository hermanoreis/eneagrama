import Image from "next/image";
import { typeById, type TypeId } from "../data/types";

function VersusFighter({ id, flipped }: { id: TypeId; flipped: boolean }) {
  const type = typeById[id];
  return (
    <figure className="versus-fighter">
      <Image
        src={`/images/characters/type-${id}-versus.webp`}
        alt=""
        width={1024}
        height={1024}
        sizes="(max-width: 640px) 42vw, 220px"
        className={`versus-fighter-image${flipped ? " versus-fighter-image-flip" : ""}`}
        draggable={false}
      />
      <figcaption className="versus-fighter-name">
        {id} · {type.name}
      </figcaption>
    </figure>
  );
}

export function VersusDuel({ ids }: { ids: TypeId[] }) {
  if (ids.length < 2) return null;
  const split = Math.ceil(ids.length / 2);
  const left = ids.slice(0, split);
  const right = ids.slice(split);
  const names = ids.map((id) => `${id} · ${typeById[id].name}`).join(", ");
  return (
    <div
      className="versus-duel"
      data-count={ids.length}
      role="group"
      aria-label={`Duelo de papel entre ${names}`}
    >
      <div className="versus-side">
        {left.map((id) => (
          <VersusFighter key={id} id={id} flipped={false} />
        ))}
      </div>
      <span className="versus-mark" aria-hidden="true">
        vs
      </span>
      <div className="versus-side versus-side-right">
        {right.map((id) => (
          <VersusFighter key={id} id={id} flipped />
        ))}
      </div>
    </div>
  );
}
