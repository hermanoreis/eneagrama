import { ResultClient } from "../../../components/ResultClient";

export const metadata = {
  title: "Resultado — Eneagrama",
};

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
