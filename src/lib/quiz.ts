import { questions, type LikertQuestion } from "../data/questions";
import { neighborIds } from "../data/map";
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
    if (raw !== cachedRaw) {
      let parsed: unknown = {};
      try { parsed = raw ? JSON.parse(raw) : {}; } catch { /* Ignore malformed local data. */ }
      cachedAnswers = {};
      if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
        for (const q of questions) {
          const value = (parsed as Record<string, unknown>)[q.id];
          if (typeof value === "number" && Number.isInteger(value) && value >= 1 && value <= 5) {
            cachedAnswers[q.id] = value;
          }
        }
      }
      cachedRaw = raw;
    }
    return cachedAnswers;
  } catch {
    return cachedAnswers;
  }
}

let cachedRaw: string | null | undefined;
let cachedAnswers: Answers = {};

export function subscribeAnswers(listener: () => void) {
  window.addEventListener("storage", listener);
  return () => window.removeEventListener("storage", listener);
}

export function serverAnswersSnapshot(): null {
  return null;
}

export function saveAnswers(answers: Answers) {
  const raw = JSON.stringify(answers);
  localStorage.setItem(STORAGE_KEY, raw);
  cachedRaw = raw;
  cachedAnswers = { ...answers };
}

export function clearAnswers() {
  localStorage.removeItem(STORAGE_KEY);
  cachedRaw = null;
  cachedAnswers = {};
}

export function answeredCount(answers: Answers) {
  return questions.filter((q) => Number.isInteger(answers[q.id]) && answers[q.id] >= 1 && answers[q.id] <= 5).length;
}

export function completeAnswers(value: unknown): Answers | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  const answers: Answers = {};
  for (const q of questions) {
    const v = (value as Record<string, unknown>)[q.id];
    if (typeof v !== "number" || !Number.isInteger(v) || v < 1 || v > 5) return null;
    answers[q.id] = v;
  }
  return answers;
}

// Older records may contain a partially answered questionnaire. They must not
// become a complete personality result in the account or mentor.
export function resultLeaders(scores: TypeScore[]): TypeScore[] {
  if (scores.length !== 9 || new Set(scores.map((s) => s.id)).size !== 9 ||
      scores.some((s) => !Number.isInteger(s.id) || s.id < 1 || s.id > 9 || s.max !== 75 ||
        !Number.isInteger(s.score) || s.score < 15 || s.score > 75)) return [];
  const highest = Math.max(...scores.map((s) => s.score));
  return scores.filter((s) => s.score === highest).sort((a, b) => a.id - b.id);
}

export function uniquePrimaryType(scores: TypeScore[]): TypeId | null {
  const leaders = resultLeaders(scores);
  return leaders.length === 1 ? leaders[0].id : null;
}

function isTypeId(value: number): value is TypeId {
  return Number.isInteger(value) && value >= 1 && value <= 9;
}

/** Existing items that most pushed a main-type tie, for live re-score on the result screen. */
export function tieReviewQuestions(answers: Answers, leaderIds: TypeId[]): LikertQuestion[] {
  const ids = [...new Set(leaderIds.filter(isTypeId))].sort((a, b) => a - b);
  if (ids.length < 2) return [];
  const perType = ids.length === 2 ? 4 : 3;
  const cap = ids.length === 2 ? 8 : 9;

  const rankedByType = ids.map((type) => ({
    type,
    items: questions
      .filter((question) => question.type === type)
      .sort((a, b) => (answers[b.id] ?? 0) - (answers[a.id] ?? 0) || a.id - b.id)
      .slice(0, perType),
  }));

  const picked = rankedByType.flatMap((group) => group.items);
  if (picked.length <= cap) return picked;

  const kept: LikertQuestion[] = [];
  const leftover: LikertQuestion[] = [];
  for (const group of rankedByType) {
    if (group.items[0]) kept.push(group.items[0]);
    leftover.push(...group.items.slice(1));
  }
  leftover.sort((a, b) => (answers[b.id] ?? 0) - (answers[a.id] ?? 0) || a.id - b.id);
  const extra = leftover.slice(0, Math.max(0, cap - kept.length));
  const extraIds = new Set(extra.map((question) => question.id));
  return rankedByType.flatMap((group) => group.items.filter((question) => question.id === group.items[0]?.id || extraIds.has(question.id)));
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
    if (Number.isInteger(v) && v >= 1 && v <= 5) {
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

export type WingResult = {
  id: TypeId | null;
  tied: boolean;
  left: TypeId;
  right: TypeId;
  leftScore: number;
  rightScore: number;
};

export function scoreById(scores: TypeScore[], id: TypeId) {
  return scores.find((s) => s.id === id)?.score ?? 0;
}

export function wingOf(primary: TypeId, scores: TypeScore[]): WingResult {
  const [left, right] = neighborIds(primary);
  const leftScore = scoreById(scores, left);
  const rightScore = scoreById(scores, right);
  if (leftScore === rightScore) {
    return { id: null, tied: true, left, right, leftScore, rightScore };
  }
  return {
    id: leftScore > rightScore ? left : right,
    tied: false,
    left,
    right,
    leftScore,
    rightScore,
  };
}
