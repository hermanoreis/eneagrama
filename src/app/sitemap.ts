import type { MetadataRoute } from "next";
import { types } from "../data/types";
import { SITE_URL } from "../lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "", "/tipos", "/mapa", "/sintese", "/biblioteca",
    "/biblioteca/leituras", "/biblioteca/workbook", "/biblioteca/resumao", "/sobre-o-teste",
    ...types.map((type) => `/tipos/${type.id}`),
  ];
  return paths.map((path) => ({ url: `${SITE_URL}${path}` }));
}
