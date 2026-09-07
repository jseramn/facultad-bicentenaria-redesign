import type { MetadataRoute } from "next";
import { newsPosts } from "@/content/news";
import { sitemapRoutes } from "@/content/navigation";
import { forumThreads } from "@/content/forum";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-09-07");

  const staticRoutes = sitemapRoutes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified,
    changeFrequency: path === "/" ? ("weekly" as const) : ("monthly" as const),
    priority: path === "/" ? 1 : 0.7,
  }));

  const news = newsPosts.map((post) => ({
    url: `${site.url}/noticias/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const forum = forumThreads.map((thread) => ({
    url: `${site.url}/foro/${thread.id}`,
    lastModified: new Date(thread.date),
    changeFrequency: "weekly" as const,
    priority: 0.4,
  }));

  return [...staticRoutes, ...news, ...forum];
}
