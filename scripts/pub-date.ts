import matter from "gray-matter";
import * as fs from "node:fs/promises";

const files = await fs.readdir("./src/content/notes");

console.log({ files });

const DATE_REGEX = /\d{4}-\d{2}-\d{2}/;
for (const file of files) {
  const content = await Bun.file(`./src/content/notes/${file}`).text();
  const { data } = matter(content);

  if (!data.pubDate) {
    const match = file.match(DATE_REGEX);
    if (match) {
      data.pubDate = match[0];
    }

    const newContent = matter.stringify(content, data);
    await Bun.write(`./src/content/notes/${file}`, newContent);
  }
}
