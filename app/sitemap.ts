import { allPosts } from "@/.contentlayer/generated";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://blog.devcomfort.me/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: "https://blog.devcomfort.me/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...allPosts.map((post) => {
      return {
        url: `https://blog.devcomfort.me/posts/${post.slug}`,
        lastModified: post.date ? new Date(post.date) : new Date(),
        changeFrequency: "weekly" as "weekly",
        priority: 0.8,
      };
    }),
  ];
}
