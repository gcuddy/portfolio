# Projects To Review

```dataviewjs
let pastReview = dv.pages('""')
    .where(p => p.review?.valueOf() <= luxon.DateTime.now().valueOf())
    .where(p => p.status != "closed" && p.status != "✓ completed" && p.status !== "⊗ canceled")
    .sort(p => p.review)
if (pastReview.length) {
dv.table(["project", "nextaction", "review"], pastReview.map(p => [p.file.link, p.nextaction || p.file.tasks.where(t => !t.completed).limit(1).text, p.review]));
} else {
dv.span("No projects to review!")
}
```
