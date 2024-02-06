---
author: "Andy Matuschak"
handle: "@andy_matuschak"
source: "https://twitter.com/andy_matuschak/status/1452438176996347907"
date: "October 24, 2021 8:53 PM"
likes: 267
retweets: 28
replies: 10
tags: ["source/tweet"]
---
Andy Matuschak ([@andy_matuschak](https://twitter.com/andy_matuschak)) - October 24, 2021 8:53 PM

"Export considered harmful"

Because software rarely operate on "files in folders" anymore, "export" is increasingly the way software exposes data. But usually you don't want a dead snapshot; you want to "use this data elsewhere"—which requires repeatedly exporting & reconciling.

Say I make an app for annotating papers. An old-fashioned way to do this would be to make a desktop app which views PDF files and writes annotations into the file. Now Spotlight can see them; Zotero can display them; etc. But SaaS must "import" the PDF and "export" annotations.

But "export annotations" is not the same as "save annotations" because now if I add more annotations to the PDF, I must export them again, and then reconcile that new export with whatever downstream tools used the old data. This gets much worse in the bi-directional case!

Consider also Zotero: it's native software, but it's designed to manage your papers' files internally. You can export individual PDFs elsewhere, but changes made to that PDF won't be reflected within the app. Contrast this with "Zotero is a viewer for a (nested) folder of PDFs".

The "old-school" way to do this is to design well-structured file formats which multiple pieces of software can operate on. TimBL proposes bringing this to the SaaS world via SOLID and modern flexible schema formats. Web3 folks have related proposals.

Another angle: I'm intrigued by the possibility of a "lens file": what if my PDF annotator can "save a Markdown lens" which contains my annotations. The difference from an export, though, is that the lens would be "live", with a bidi scheme for handling changes.

That is, if I add new annotations in my PDF annotator, they're added to the .md (without disturbing other content in the file); if an annotation is altered in the .md, that's reflected in the viewer app.

(Doing this well requires careful format design! Maybe Cambria could help?)

Now, there are lots of problems with the "files and folders" paradigm. Lots of people have trouble understanding it, even decades after its introduction! But they do seem to understand app silos. There's probably a good abstraction to be discovered here which mixes the worlds.

The typical web answer here is APIs, but APIs are much worse than standardized file formats: each pairwise edge needs its own impl. N^2 vs N. Pity poor Readwise's engineers; worse, if you have a different idea for a Readwise-alike, you must build all this to achieve parity. [pic.twitter.com/Bnj0pnXeey](https://twitter.com/andy_matuschak/status/1452438198668328960/photo/1)

ins/Attachments/3_1452437025064292355.jpg)

Anyway: I get annoyed every time I see "export" offered as a workflow solution, particularly for "critical path" knowledge work stuff, because I know that I'll have to do lots of manual schlepping of data, and inevitably, I'll end up with different versions in different places.

(Thanks to [@kirkbyo_](https://twitter.com/kirkbyo_) for conversation on export which inspired this rant!)

[Thread link](https://twitter.com/andy_matuschak/status/1452438176996347907)
