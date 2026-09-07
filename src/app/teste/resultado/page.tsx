import { privateMetadata } from "../../../lib/seo";
import { ResultClient } from "../../../components/ResultClient";

export const metadata = privateMetadata("Seu resultado");

export default function ResultadoPage() {
  return (
    <div className="space-y-6">
      <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--mute)]">
        Resultado
      </p>
      <ResultClient />
    </div>
  );
}
