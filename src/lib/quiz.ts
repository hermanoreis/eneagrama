import { questions } from "../data/questions";
import { typeById, type TypeId } from "../data/types";

export const STORAGE_KEY = "eneagrama-respostas-v1";
export const PAGE_SIZE = 15;

export type Answers = Record<number, number>;

export type TypeScore = {
  id: TypeId;
  name: string;
  score: number;
  max: number;
  percent: number;
};

export function emptyAnswers(): Answers {
  return {};
}

export function loadAnswers(): Answers {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as Answers;
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

export function saveAnswers(answers: Answers) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
}

export function clearAnswers() {
  localStorage.removeItem(STORAGE_KEY);
}

export function answeredCount(answers: Answers) {
  return questions.filter((q) => answers[q.id] >= 1 && answers[q.id] <= 5).length;
}

export function scoreTypes(answers: Answers): TypeScore[] {
  const sums: Record<TypeId, number> = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
  };
  const counts: Record<TypeId, number> = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
  };

  for (const q of questions) {
    const v = answers[q.id];
    if (v >= 1 && v <= 5) {
      sums[q.type] += v;
      counts[q.type] += 1;
    }
  }

  return ([1, 2, 3, 4, 5, 6, 7, 8, 9] as TypeId[])
    .map((id) => {
      const max = counts[id] * 5 || 75;
      const score = sums[id];
      return {
        id,
        name: typeById[id].name,
        score,
        max,
        percent: max ? Math.round((score / max) * 100) : 0,
      };
    })
    .sort((a, b) => b.score - a.score || a.id - b.id);
}

export function pageCount() {
  return Math.ceil(questions.length / PAGE_SIZE);
}

export function questionsForPage(page: number) {
  const start = page * PAGE_SIZE;
  return questions.slice(start, start + PAGE_SIZE);
}
