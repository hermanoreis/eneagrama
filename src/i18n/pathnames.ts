import { defaultLocale, isLocale, localePrefix, type Locale } from "./config";

export const routeNames = [
  "home",
  "types",
  "type",
  "map",
  "synthesis",
  "library",
  "readings",
  "workbook",
  "overview",
  "about",
  "signIn",
  "account",
  "test",
  "result",
  "mentor",
] as const;

export type RouteName = (typeof routeNames)[number];

export const publicSlugs = {
  types: { "pt-BR": "tipos", en: "types", es: "tipos", fr: "types" },
  map: { "pt-BR": "mapa", en: "map", es: "mapa", fr: "carte" },
  synthesis: { "pt-BR": "sintese", en: "synthesis", es: "sintesis", fr: "synthese" },
  library: { "pt-BR": "biblioteca", en: "library", es: "biblioteca", fr: "bibliotheque" },
  readings: { "pt-BR": "leituras", en: "readings", es: "lecturas", fr: "lectures" },
  workbook: { "pt-BR": "workbook", en: "workbook", es: "workbook", fr: "cahier" },
  overview: { "pt-BR": "resumao", en: "overview", es: "resumen", fr: "resume" },
  about: { "pt-BR": "sobre-o-teste", en: "about-the-test", es: "sobre-el-test", fr: "a-propos-du-test" },
  signIn: { "pt-BR": "entrar", en: "sign-in", es: "entrar", fr: "connexion" },
  account: { "pt-BR": "conta", en: "account", es: "cuenta", fr: "compte" },
  test: { "pt-BR": "teste", en: "test", es: "test", fr: "test" },
  result: { "pt-BR": "resultado", en: "result", es: "resultado", fr: "resultat" },
  mentor: { "pt-BR": "mentor", en: "mentor", es: "mentor", fr: "mentor" },
} as const;

export const internalSlugs = {
  types: "tipos",
  map: "mapa",
  synthesis: "sintese",
  library: "biblioteca",
  readings: "leituras",
  workbook: "workbook",
  overview: "resumao",
  about: "sobre-o-teste",
  signIn: "entrar",
  account: "conta",
  test: "teste",
  result: "resultado",
  mentor: "mentor",
} as const;

export type HrefParams = {
  id?: number | string;
  next?: string;
  hash?: string;
};

export function href(locale: Locale, route: RouteName, params: HrefParams = {}): string {
  const prefix = localePrefix[locale];
  const s = publicSlugs;
  let path: string;
  switch (route) {
    case "home":
      path = prefix || "/";
      break;
    case "types":
      path = `${prefix}/${s.types[locale]}`;
      break;
    case "type":
      path = `${prefix}/${s.types[locale]}/${params.id}`;
      break;
    case "map":
      path = `${prefix}/${s.map[locale]}`;
      break;
    case "synthesis":
      path = `${prefix}/${s.synthesis[locale]}`;
      break;
    case "library":
      path = `${prefix}/${s.library[locale]}`;
      break;
    case "readings":
      path = `${prefix}/${s.library[locale]}/${s.readings[locale]}`;
      break;
    case "workbook":
      path = `${prefix}/${s.library[locale]}/${s.workbook[locale]}`;
      break;
    case "overview":
      path = `${prefix}/${s.library[locale]}/${s.overview[locale]}`;
      break;
    case "about":
      path = `${prefix}/${s.about[locale]}`;
      break;
    case "signIn":
      path = `${prefix}/${s.signIn[locale]}`;
      break;
    case "account":
      path = `${prefix}/${s.account[locale]}`;
      break;
    case "test":
      path = `${prefix}/${s.test[locale]}`;
      break;
    case "result":
      path = `${prefix}/${s.test[locale]}/${s.result[locale]}`;
      break;
    case "mentor":
      path = `${prefix}/${s.mentor[locale]}`;
      break;
  }
  if (params.next) {
    const joiner = path.includes("?") ? "&" : "?";
    path = `${path}${joiner}next=${encodeURIComponent(params.next)}`;
  }
  if (params.hash) path = `${path}#${params.hash}`;
  return path;
}

export function languageAlternates(route: RouteName, params: HrefParams = {}) {
  const languages: Record<string, string> = {
    "pt-BR": href("pt-BR", route, params),
    en: href("en", route, params),
    es: href("es", route, params),
    fr: href("fr", route, params),
    "x-default": href(defaultLocale, route, params),
  };
  return languages;
}

type PublicSegment = keyof typeof publicSlugs;

const publicToInternal: Record<Locale, Record<string, string>> = {
  "pt-BR": Object.fromEntries(
    (Object.keys(publicSlugs) as PublicSegment[]).map((key) => [publicSlugs[key]["pt-BR"], internalSlugs[key]]),
  ),
  en: Object.fromEntries(
    (Object.keys(publicSlugs) as PublicSegment[]).map((key) => [publicSlugs[key].en, internalSlugs[key]]),
  ),
  es: Object.fromEntries(
    (Object.keys(publicSlugs) as PublicSegment[]).map((key) => [publicSlugs[key].es, internalSlugs[key]]),
  ),
  fr: Object.fromEntries(
    (Object.keys(publicSlugs) as PublicSegment[]).map((key) => [publicSlugs[key].fr, internalSlugs[key]]),
  ),
};

export type ResolvedPath = {
  locale: Locale;
  publicPath: string;
  internalPath: string;
  prefixed: boolean;
};

export function resolvePublicPath(pathname: string): ResolvedPath {
  const clean = pathname.replace(/\/+$/, "") || "/";
  const segments = clean === "/" ? [] : clean.slice(1).split("/");
  const first = segments[0];
  const firstIsLocale = isLocale(first);
  const locale: Locale = firstIsLocale ? first : "pt-BR";
  const rest = firstIsLocale ? segments.slice(1) : segments;
  const prefixed = locale !== "pt-BR";
  const mapped = rest.map((segment, index) => {
    if (index <= 1 && publicToInternal[locale][segment]) return publicToInternal[locale][segment];
    return segment;
  });
  const internalRest = mapped.length ? `/${mapped.join("/")}` : "/";
  return {
    locale,
    publicPath: clean,
    internalPath: `/${locale}${internalRest === "/" ? "" : internalRest}`,
    prefixed,
  };
}

const protectedInternal = ["/conta", "/teste", "/mentor"];

export function isProtectedPublicPath(pathname: string) {
  const { internalPath } = resolvePublicPath(pathname);
  const rest = internalPath.replace(/^\/(pt-BR|en|es|fr)/, "") || "/";
  return protectedInternal.some((prefix) => rest === prefix || rest.startsWith(`${prefix}/`));
}

export function signInPath(locale: Locale, nextPath: string) {
  return href(locale, "signIn", { next: nextPath });
}

const internalToRoute: { prefix: string; route: RouteName; hasId?: boolean }[] = [
  { prefix: "/tipos/", route: "type", hasId: true },
  { prefix: "/tipos", route: "types" },
  { prefix: "/mapa", route: "map" },
  { prefix: "/sintese", route: "synthesis" },
  { prefix: "/biblioteca/leituras", route: "readings" },
  { prefix: "/biblioteca/workbook", route: "workbook" },
  { prefix: "/biblioteca/resumao", route: "overview" },
  { prefix: "/biblioteca", route: "library" },
  { prefix: "/sobre-o-teste", route: "about" },
  { prefix: "/entrar", route: "signIn" },
  { prefix: "/conta", route: "account" },
  { prefix: "/teste/resultado", route: "result" },
  { prefix: "/teste", route: "test" },
  { prefix: "/mentor", route: "mentor" },
];

export function routeFromPublicPath(pathname: string): { locale: Locale; route: RouteName; params: HrefParams } {
  const { locale, internalPath } = resolvePublicPath(pathname);
  const rest = internalPath.replace(/^\/(pt-BR|en|es|fr)/, "") || "/";
  const [path, hash] = rest.split("#");
  if (!path || path === "/") return { locale, route: "home", params: hash ? { hash } : {} };
  for (const item of internalToRoute) {
    if (item.hasId && path.startsWith(item.prefix)) {
      const id = path.slice(item.prefix.length).split("/")[0];
      return { locale, route: item.route, params: { id, hash } };
    }
    if (path === item.prefix || path.startsWith(`${item.prefix}/`)) {
      return { locale, route: item.route, params: hash ? { hash } : {} };
    }
  }
  return { locale, route: "home", params: {} };
}

export function switchLocalePath(pathname: string, nextLocale: Locale) {
  const { route, params } = routeFromPublicPath(pathname);
  const hash = pathname.includes("#") ? pathname.split("#")[1] : params.hash;
  return href(nextLocale, route, { ...params, hash });
}
