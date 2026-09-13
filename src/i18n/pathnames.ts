import {
  defaultLocale,
  isLocale,
  localeFromUrlPrefix,
  localePrefix,
  locales,
  type Locale,
} from "./config";

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
  types: {
    "pt-BR": "tipos",
    en: "types",
    es: "tipos",
    fr: "types",
    "zh-Hans": "leixing",
    ko: "yuhyeong",
    ja: "taipu",
  },
  map: {
    "pt-BR": "mapa",
    en: "map",
    es: "mapa",
    fr: "carte",
    "zh-Hans": "tupu",
    ko: "jido",
    ja: "mappu",
  },
  synthesis: {
    "pt-BR": "sintese",
    en: "synthesis",
    es: "sintesis",
    fr: "synthese",
    "zh-Hans": "lingdaoli",
    ko: "lideosip",
    ja: "riidashippu",
  },
  library: {
    "pt-BR": "biblioteca",
    en: "library",
    es: "biblioteca",
    fr: "bibliotheque",
    "zh-Hans": "ziliao",
    ko: "jaryo",
    ja: "shiryo",
  },
  readings: {
    "pt-BR": "leituras",
    en: "readings",
    es: "lecturas",
    fr: "lectures",
    "zh-Hans": "yuedu",
    ko: "dokseo",
    ja: "sanko",
  },
  workbook: {
    "pt-BR": "workbook",
    en: "workbook",
    es: "workbook",
    fr: "cahier",
    "zh-Hans": "lianxi",
    ko: "yeonseup",
    ja: "waaku",
  },
  overview: {
    "pt-BR": "resumao",
    en: "overview",
    es: "resumen",
    fr: "resume",
    "zh-Hans": "gailan",
    ko: "yoyak",
    ja: "gaiyou",
  },
  about: {
    "pt-BR": "sobre-o-teste",
    en: "about-the-test",
    es: "sobre-el-test",
    fr: "a-propos-du-test",
    "zh-Hans": "guanyu-ceshi",
    ko: "teseuteu-sogae",
    ja: "tesuto-nitsuite",
  },
  signIn: {
    "pt-BR": "entrar",
    en: "sign-in",
    es: "entrar",
    fr: "connexion",
    "zh-Hans": "denglu",
    ko: "login",
    ja: "login",
  },
  account: {
    "pt-BR": "conta",
    en: "account",
    es: "cuenta",
    fr: "compte",
    "zh-Hans": "zhanghu",
    ko: "gyejeong",
    ja: "akaunto",
  },
  test: {
    "pt-BR": "teste",
    en: "test",
    es: "test",
    fr: "test",
    "zh-Hans": "ceshi",
    ko: "teseuteu",
    ja: "tesuto",
  },
  result: {
    "pt-BR": "resultado",
    en: "result",
    es: "resultado",
    fr: "resultat",
    "zh-Hans": "jieguo",
    ko: "gyeolgwa",
    ja: "kekka",
  },
  mentor: {
    "pt-BR": "mentor",
    en: "mentor",
    es: "mentor",
    fr: "mentor",
    "zh-Hans": "daoshi",
    ko: "mento",
    ja: "menta",
  },
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
  const languages: Record<string, string> = { "x-default": href(defaultLocale, route, params) };
  for (const locale of locales) {
    languages[locale] = href(locale, route, params);
  }
  return languages;
}

type PublicSegment = keyof typeof publicSlugs;

const publicToInternal = Object.fromEntries(
  locales.map((locale) => [
    locale,
    Object.fromEntries(
      (Object.keys(publicSlugs) as PublicSegment[]).map((key) => [publicSlugs[key][locale], internalSlugs[key]]),
    ),
  ]),
) as Record<Locale, Record<string, string>>;

export type ResolvedPath = {
  locale: Locale;
  publicPath: string;
  internalPath: string;
  prefixed: boolean;
};

function decodePathname(pathname: string) {
  try {
    return decodeURI(pathname);
  } catch {
    return pathname;
  }
}

export function resolvePublicPath(pathname: string): ResolvedPath {
  const clean = decodePathname(pathname).replace(/\/+$/, "") || "/";
  const segments = clean === "/" ? [] : clean.slice(1).split("/");
  const first = segments[0];
  const fromPrefix = localeFromUrlPrefix(first);
  const locale: Locale = fromPrefix ?? "pt-BR";
  const rest = fromPrefix ? segments.slice(1) : segments;
  const prefixed = Boolean(fromPrefix);
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

export function stripInternalLocale(internalPath: string) {
  const segments = internalPath.split("/").filter(Boolean);
  if (segments[0] && isLocale(segments[0])) {
    return `/${segments.slice(1).join("/")}` || "/";
  }
  return internalPath || "/";
}

export function isProtectedPublicPath(pathname: string) {
  const rest = stripInternalLocale(resolvePublicPath(pathname).internalPath);
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
  const rest = stripInternalLocale(internalPath);
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

/** Canonical public path when someone hits `/pt-BR/...` or `/zh-Hans/...`. */
export function canonicalPublicFromLocaleCode(pathname: string): string | null {
  const clean = decodePathname(pathname).replace(/\/+$/, "") || "/";
  const segments = clean === "/" ? [] : clean.slice(1).split("/");
  const code = segments[0];
  if (!isLocale(code)) return null;
  const expected = localePrefix[code] || "";
  if (`/${code}` === expected) return null;
  const rest = segments.slice(1).join("/");
  const next = expected ? `${expected}${rest ? `/${rest}` : ""}` : rest ? `/${rest}` : "/";
  return next;
}
