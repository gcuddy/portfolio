import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getCollection } from "astro:content";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";
const parser = new MarkdownIt();

export async function GET(context: APIContext) {
  const notes = await getCollection("notes", ({ data }) => {
    return data.draft !== true;
  });
  const lab = await getCollection("lab");

  return rss({
    title: "Gus Cuddy - RSS Feed",
    description: "All content from guscuddy.com",
    site: context.site as URL,
    items: [...notes, ...lab]
      .sort((a, b) => {
        const aDate = a.data.pubDate;
        const bDate = b.data.pubDate;

        if (!aDate && !bDate) {
          return 0;
        }

        if (!aDate) {
          return 1;
        }

        if (!bDate) {
          return -1;
        }

        return new Date(bDate).getTime() - new Date(aDate).getTime();
      })
      .map((item) => ({
        title: item.data.title,
        pubDate: item.data.pubDate,
        description: item.data.description,
        customData: item.data.customData,
        link:
          item.collection === "lab"
            ? `/notes/${item.slug}`
            : `/writing/${item.slug}`,
        content: sanitizeHtml(parser.render(item.body)),
      })),
  });
}
