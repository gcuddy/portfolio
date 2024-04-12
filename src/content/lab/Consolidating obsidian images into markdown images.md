---
title: Consolidating obsidian images as markdown images
pubDate: 2024-04-11
---
I'm adding a simple workflow for myself to publish micro-logs more regularly to my blog. I write these in Obsidian and copy them over to my Astro site, similar to the workflow that [Tom Macwright uses](https://macwright.com/2023/12/14/blog-about-blog). One frustration I have with Obsidian is its handling of images. When you drag in an image, it does it in the proprietary embed syntax that Obsidian uses, which is not standard markdown. Then when you copy over the markdown, images will fail to get copied over as well.

I searched for an Obsidian plugin to help solve this, but none seemed to fit the bill. I toyed with writing my own, before realizing it would just be easiest to write a simple script to fix this. My favorite way to write scripts like these these days is with Bun, which has an ingenious new "Shell" API that makes writing shell scripts a breeze, with the convenience of Typescript. With a quick and dirty regex, we can cover almost all my use cases. I also used the beloved magic-string library, which is great for modifying string indices and not really thinking about it too much.

Image files get copied over to an assets folder inside my blog folder, and then the markdown is modified to use markdown image links that point to the new files. Then we can cp this whole directory into our Astro content directory, and take advantage of Astro image processing. Works beautifully! Here's the gist:

```typescript
import { $ } from "bun";
import path from "node:path";
import MagicString from "magic-string";
import slugify from "slugify";

const VAULT = "/Users/guscuddy/Mainframe";

const file = Bun.argv.slice(2)[0];

const text = await Bun.file(file).text();

const r = /!\[\[(.*?)\]\]/g;

const IMAGE_EXTS = [".jpg", ".png", ".gif", ".svg"];

function escapeParentheses(str: string) {
  return str.replace(/([()])/g, "\\$1");
}
const matches = Array.from(text.matchAll(r));

const folder = path.dirname(file);

const s = new MagicString(text);

for (const match of matches) {
  if (IMAGE_EXTS.some((i) => match[1].endsWith(i))) {
    const escaped = escapeParentheses(match[1]);
    const slug = slugify(match[1], { lower: true });

    try {
      const file = (await $`fd ${escaped} ${VAULT}`.text()).trim();

      await $`mkdir -p ${folder}/assets && cp ${file} ${folder}/assets/${slug}`;

      const startingIndex = match.index;
      const endingIndex = match.index + match[0].length;
      s.update(startingIndex, endingIndex, `![](./assets/${slug})`);
    } catch (e) {
      console.error(e);
    }
  }
}

const finalText = s.toString();

await Bun.write(file, finalText);
```

[And here it is as a gist.](https://gist.github.com/gcuddy/2a897188c5e125ce2d34e64e98587613)