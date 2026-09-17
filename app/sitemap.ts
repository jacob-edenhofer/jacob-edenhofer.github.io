import type { MetadataRoute } from "next";
import { basePath, siteOrigin } from "../site.config.mjs";

export const dynamic = "force-static";

// The old publications address redirects to the research page and is left out.
const routes = ["/", "/research/", "/writing/", "/teaching/", "/service/", "/file-drawer/"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteOrigin}${basePath}${route}`,
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
