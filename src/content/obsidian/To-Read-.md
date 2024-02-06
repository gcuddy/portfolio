---
id: mhtbtubbjg
title: "To Read 📚"
originalFileName: "To Read 📚.md"

---

up:: [[Home]]
tags:: #atlas/scope

# To Read 📚

add if no comment, look for text of first task

```dataviewjs

const limit = 5;

const pages = dv.pages("#toread OR #to/read and -#source/book")
    .sort(() => 0.5 - Math.random())
    .filter (t => !t.completed)
    .slice (0, limit);

dv.table(["File", "Motivation"], pages.map(page => {

	return [page.file.link, page.motivation || page.comment || page.reason,]
}));

```

```dataview
TABLE comment as Motivation from #to/read OR #toread LIMIT 10
```

To Watch and to listen

```dataviewjs

const tags = []

const tasks = dv.pages("#towatch OR #to/watch OR #tolisten OR #to/listen").file.tasks.where(p => p.text.includes("to/listen") || p.text.includes("to/watch") || p.text.includes("towatch") || p.text.includes("tolisten"))
dv.taskList(tasks)
```
